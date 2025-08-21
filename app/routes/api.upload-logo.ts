// app/routes/api.upload-logo.ts
import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "~/shopify.server";

export async function action({ request }: ActionFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  const formData = await request.formData();
  const file = formData.get("file") as File;

  const uploaded = await admin.rest.File.create({
    file: {
      attachment: Buffer.from(await file.arrayBuffer()).toString("base64"),
      filename: file.name,
      mime_type: file.type,
    },
  });

  // Files APIのpublic URLを返す
  return new Response(JSON.stringify({ url: uploaded.file.public_url }), { status: 200 });
}
