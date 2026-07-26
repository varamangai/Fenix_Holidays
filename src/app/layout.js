import "./globals.css";

export const metadata = {
  title: "Fenix Holidays",
  description: "Travel experiences with Fenix Holidays",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
