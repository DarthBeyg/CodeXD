non relational dbs store data in an object
relational dbs relations between records/data : 1 to 1, 1 to many, many to many (they are in tables)
study left join, right join, inner , outer and full join.

*sql is taught in w3schools
Major sql querrys: SELECT UPDATE DELETE INSERT 9syntax o w3schools
SELECT querry: sir ran it in vercel on dbs deployed in last lec

orm: object relational mapping (way to align programming code with database structures) *prisma, typeorm, drizzle
create an account on supabase
goto drizzle website and start project by pnpm in "api-routing" project
goto supabase settings => database copy db link to .env file
step 4 from drizzle copy and goto schema in src/db
step6 will give error about url not found in .env so in drizzle.config you can tell it that your env is now .env.local

after that link register page of api-routing with all this

     7/12/24                                make the project connect with supabase
                                            make the project connect with drizzle 

1. "pnpm add react-hook-form zod @hookform/resolvers" for react hook form and zod OR "pnpm dlx shadcn@latest add form" to handle with shadcn 
    as later we will use shadcn for form and other components
2. "pnpm dlx shadcn@latest add select" for select
3. "pnpm dlx shadcn@latest add input" for input                    (Both of these are for form related components) 
4. Create F.E in main page.tsx file and add the form to it
5. Define the form validation schema using Zod
6. Initialize form with React Hook Form and Zod validation in Home Function
7. Create a submit handler for the form before return.
9. This will await the data from the form and send it to the server
10. For that create a route handler in api folder. i.e Api routes
11. Create a login route handler in api folder
12. Create a register route handler in api folder
13. Create a status route handler in api folder
14. Create a hello route handler in api folder
 
 

