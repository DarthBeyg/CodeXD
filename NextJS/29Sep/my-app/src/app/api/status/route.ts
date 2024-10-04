//HTTP
//GET
//POST
//PUT
//PATCH
//DELETE

//Async
//export async GET, POST, PUT, PATCH, DELETE

//https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from "next/server";
export async function GET() {
   // return new Response("Hello, Next.js!");
   return NextResponse.json({ status: "OK", message: "Hello, Next.js!" });
}