import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Displays Login Page",
};

export default function LoginLayout({
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
