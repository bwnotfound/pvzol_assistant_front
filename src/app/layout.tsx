import "./globals.css";

export const metadata = {
  title: '蓝白bw的小工具分享',
  description: '蓝白bw的小工具分享',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
