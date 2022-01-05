import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "r24f0lis",
  dataset: "production",
  apiVersion: "2021-08-31",
  ignoreBrowserTokenWarning: true,
  useCdn: true,
});

export default client;
