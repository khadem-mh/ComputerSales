import "./globals.css";

type RootLayoutProps = {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa">
      <body>
        {children}
      </body>
    </html>
  );
}
