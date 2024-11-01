import "@/styles/globals.css";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body className="dark antialiased">
        <>{modal}</>
        {children}
      </body>
    </html>
  );
}
