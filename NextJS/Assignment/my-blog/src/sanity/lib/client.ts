import { createClient } from 'next-sanity'

const client = createClient({
  projectId:'nj8tbh7j',
  dataset: 'production',
  apiVersion: '2024-11-10',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
export default client;
