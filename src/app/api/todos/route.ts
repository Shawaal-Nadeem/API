import { NextRequest, NextResponse } from "next/server";
import { Todos } from "@/app/data";
export async function GET(request: NextRequest) {
    return NextResponse.json (
        {
            Todos,   
        }
    )
}
export async function POST(request: NextRequest)
{
    const body = await request.json();
    console.log(body);
    const addTodo=Todos.push(body);
    return NextResponse.json (
        {
          addTodo,
          message:'added' 
        }
    )
}
