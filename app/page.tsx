
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "古今中外童玩 - 戰鬥陀螺爭霸賽",
  description: "戰鬥陀螺 X 交流爭霸賽",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
