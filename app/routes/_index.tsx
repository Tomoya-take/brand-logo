// app/routes/_index.tsx
import React, { useEffect, useState } from "react";
import { useAppBridge } from "@shopify/app-bridge-react";
import { TitleBar } from "@shopify/app-bridge-react";
import { Page, Layout, Card, Button, Thumbnail } from "@shopify/polaris";

export default function Index() {
  const [logos, setLogos] = useState<string[]>([]);
  const app = typeof window !== "undefined" ? useAppBridge() : null;

  useEffect(() => {
    fetch("/api/load-logos")
      .then((res) => res.json())
      .then((data) => setLogos(data || []))
      .catch((err) => console.error("Load logos error:", err));
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload-logo", { method: "POST", body: formData });
      const data = await res.json();
      const updated = [...logos, data.url];
      setLogos(updated);

      await fetch("/api/save-logos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const handleDelete = async (url: string) => {
    const updated = logos.filter((l) => l !== url);
    setLogos(updated);
    try {
      await fetch("/api/save-logos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <Page title="Brand Logo List 管理">
      {app && <TitleBar title="Brand Logo List App" />}
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <input type="file" onChange={handleUpload} />
          </Card>

          <Card title="登録済みロゴ">
            {logos.length === 0 && <p>まだロゴがありません</p>}
            {logos.map((url, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <Thumbnail source={url} alt={`Logo ${idx + 1}`} size="small" />
                <Button destructive onClick={() => handleDelete(url)} style={{ marginLeft: "10px" }}>
                  削除
                </Button>
              </div>
            ))}
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}





