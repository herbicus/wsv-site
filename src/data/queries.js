export const imageMeta = (imageName) => `
${imageName} {
  asset->{
    ...,
    metadata
  },
  'lqip': asset->metadata.lqip,
},
`;
