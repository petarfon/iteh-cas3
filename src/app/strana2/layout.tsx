export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h2>Ovo je layout a strani2</h2>
        {children}
        <h2>Kraj layout-a na strani 2</h2>
    </div>  
  );
}