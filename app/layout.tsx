import './globals.css'
import type { Metadata } from 'next'
import { Navbar ,Footer }from '@/components';
 

export const metadata: Metadata = {
  title: 'Vishnu Shares !',
  description: ' Learn Share Grow ! ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        {/* <Footer/> */}
        </body>
    </html>
  )
}
