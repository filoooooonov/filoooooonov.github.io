export default function FormLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen px-6 bg-background font-sans antialiased max-w-3xl mx-auto border-x border-stone-200 ![&_header]:hidden">
      {children}
    </section>
  );
}
