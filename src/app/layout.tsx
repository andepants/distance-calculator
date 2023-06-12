import './globals.css'

export const metadata = {
  title: 'Distance Calculator',
  description:
    'Calculates distance between two points using longitude and latitude coordinates',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        {children}
      </body>
    </html>
  )
}
