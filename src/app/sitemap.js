const productionUrl = "https://www.fenixholidays.com";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: `${productionUrl}/`,
    },
  ];
}
