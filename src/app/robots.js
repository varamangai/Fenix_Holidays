const productionUrl = "https://www.fenixholidays.com";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${productionUrl}/sitemap.xml`,
  };
}
