import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add Ads page',
  description: "Displays Add Ads page",
}

export default function SalesLayout({
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
