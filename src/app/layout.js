import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.fenixholidays.com"),
  title: "Fenix Holidays | India Travel & Holiday Tours",
  description:
    "Plan memorable group and family holidays across Tamil Nadu, Kerala and Karnataka with Fenix Holidays, including transport, stays, food and trip guidance.",
  alternates: {
    canonical: "https://www.fenixholidays.com/",
  },
  openGraph: {
    title: "Fenix Holidays | India Travel & Holiday Tours",
    description:
      "Plan memorable group and family holidays across Tamil Nadu, Kerala and Karnataka with Fenix Holidays, including transport, stays, food and trip guidance.",
    url: "https://www.fenixholidays.com/",
    siteName: "Fenix Holidays",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fenix Holidays | India Travel & Holiday Tours",
    description:
      "Plan memorable group and family holidays across Tamil Nadu, Kerala and Karnataka with Fenix Holidays, including transport, stays, food and trip guidance.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
