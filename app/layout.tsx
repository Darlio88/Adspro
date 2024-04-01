import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adspro',
  description: "Welcome to our classified ads platform built with Next.js! Our platform provides a seamless user experience with fast loading times and dynamic content rendering. Browse through a wide range of listings and find what you're looking for with ease. Our intuitive search and filter system ensures that you can quickly find the listings that match your needs. Whether you're looking to buy or sell, our platform offers a secure and reliable way to connect with potential buyers and sellers. Join our community today and start exploring the possibilities!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
