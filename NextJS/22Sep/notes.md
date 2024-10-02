two type of data fetching: serverside fetching & client-side fetching
schema folder made in schemaTypes folder
custom schema's made in schema folder are then imported in index.ts of schemaTypes
how to write schemas? check sanity documentation
groq querry language for sanity to develop web hooks

to show the blogs on nextjs page go to page.tsx and import client form lib
fetch blogs through groq querry
for images import urlForImage
=> import Image

in nextconfig.mjs add =>  images: {
    remotePatterns: [
      {
       
        hostname: 'cdn.sanity.io',
       
      },
    ],
  },
