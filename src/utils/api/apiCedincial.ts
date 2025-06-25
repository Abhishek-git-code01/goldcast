import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'Contentful environment variables are missing. Please ensure .env.local is set up with CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN.'
  );
}

export const contentfulClient = createClient({
  space,
  accessToken,
});
