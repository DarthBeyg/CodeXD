lec 2 Q2 step 3 4 5
=> this is nextJs app initiated by pnpm
npm i -g pnpm 
pnpm create  create-next-app@latest (nextjs.org command)
pnpm run dev in my-app directory (terminal becomes live server for webapp. don't close the terminal or server crashes)
page.tsx's main tag contains all the current content of app. remove to add your own
layout manipulation to tweak design 
creating different pages from app routing (page routing is old and obsolete)
routes and nested routes
layouts and nested layouts (different layouts for different routes)
group route can have a shared layout 
group route parent folder cant have page.tsx file rather have layout.tsx because it is not a page itself rather
it allows different pages to be in a group so they can have shared layout
