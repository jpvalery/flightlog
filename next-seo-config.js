const title = "👨🏻‍✈️ Jp's Flight Log";
const description =
  "A collection of screenshots of flights I've taken over the years on Microsoft Flight Simulator.";
const siteUrl = "https://log.simflight.club";

const SEO = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description: description,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    title: title,
    description: description,
    images: [
      {
        url:
          "https://og.jpvalery.me/FlightLog.png?theme=flightlog&md=1&fontSize=200px&heights=300",
        width: 1531,
        height: 875,
        alt: "Open Graph Image",
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: siteUrl,
    cardType: "summary_large_image",
  },
};

export default SEO;
