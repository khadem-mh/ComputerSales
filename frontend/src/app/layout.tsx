import "@styles/globals.css"

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body cz-shortcut-listen="false">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
