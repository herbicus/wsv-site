/* eslint-disable import/no-extraneous-dependencies */
import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "d2kyxr4x",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

export default sanityClient;
