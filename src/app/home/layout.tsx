export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen min-w-full">{children}</body>
    </html>
  );
}
