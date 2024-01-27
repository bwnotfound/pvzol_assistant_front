import "./globals.css";

export const metadata = {
  title: '蓝白bw的服务器',
  description: '蓝白bw的服务器',
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
