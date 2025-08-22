// app/routes/api.upload-logo.tsx
import type { ActionFunctionArgs } from "@remix-run/node";
import shopify from "../shopify.server";
import {
  unstable_parseMultipartFormData,
  writeAsyncIterableToWritable,
} from "@remix-run/node";
import mime from "mime-types"; // npm i mime-types

export async function action({ request }: ActionFunctionArgs) {
  const { session } = await shopify.authenticate.admin(request);

  const formData = await unstable_parseMultipartFormData(
    request,
    async ({ stream, filename }) => {
      const chunks: Uint8Array[] = [];
      await writeAsyncIterableToWritable(stream, {
        write: (chunk) => chunks.push(chunk),
      });
      const mimeType = mime.lookup(filename || "") || "application/octet-stream";
      return new File([Buffer.concat(chunks)], filename || "upload", {
        type: mimeType,
      });
    }
  );

  const file = formData.get("file") as File | null;
  if (!file) return Response.json({ error: "No file" }, { status: 400 });

  // buffer化
  const buffer = Buffer.from(await file.arrayBuffer());

  // GraphQL Files API
  const client = new shopify.api.clients.Graphql({ session });
  const mutation = `
    mutation fileCreate($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files {
          ... on GenericFile { url }
          ... on MediaImage { image { url } }
        }
        userErrors { field message }
      }
    }
  `;

  const res = await client.query({
    data: {
      query: mutation,
      variables: {
        files: [
          {
            originalSource: `data:${file.type};base64,${buffer.toString("base64")}`,
            contentType: file.type.startsWith("image/")
              ? "IMAGE"
              : "FILE", // SVG, PDF などは FILE として保存
          },
        ],
      },
    },
  });

  const uploaded =
    res.body.data.fileCreate.files[0]?.url ||
    res.body.data.fileCreate.files[0]?.image?.url;

  return Response.json({ url: uploaded });
}

