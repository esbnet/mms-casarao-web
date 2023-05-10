export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='PT-BR'>
      <body className='-mt-24 bg-gray-900 text-stone-50 bg-hendrix bg-no-repeat bg-center bg-contain '>
        <div className='flex justify-center items-center h-screen'>
          {children}
        </div>
      </body>
    </html>
  )
}
