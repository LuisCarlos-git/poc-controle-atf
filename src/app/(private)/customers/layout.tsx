export default function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container max-w-[1280px] mx-auto mt-8">{children}</main>
  );
}
