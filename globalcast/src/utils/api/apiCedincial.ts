import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '3ceh5pdhv0rg',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '9hm6s9HXL0XwYymju6HkTboeneW78efsQCgDeJykgQ8',
});
