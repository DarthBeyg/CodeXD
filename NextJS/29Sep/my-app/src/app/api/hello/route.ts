import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    if(searchParams.has('name')){
        const name = searchParams.get('name');
        return NextResponse.json({message: `Hello, ${name}`});
    }
    else{
        return  NextResponse.json({message: 'Hello, Name is missing'}, {status: 400});


    }
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    return NextResponse.json({message: `Hello, ${body.name}`});
} 