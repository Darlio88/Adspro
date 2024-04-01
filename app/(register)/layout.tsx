import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
  description: "Displays Register Page",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
