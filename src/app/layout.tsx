import "./globals.css";
import Navbar from './navbar'; 
import Footer from './footer'; 
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
      <body>
        <div>
          {/* 顶部导航栏 */}
          <Navbar></Navbar>

          {children}
          
          {/* 底部备案 */}
          <Footer></Footer>
        </div>
      </body>
    </html>
  )
}
