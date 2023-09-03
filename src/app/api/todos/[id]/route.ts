import { NextRequest, NextResponse } from "next/server";
import { Todos } from "@/app/data";

type Dynamic=
    {
        params:
        {
            id:string
        }
    }
export async function GET(request: NextRequest, { params }: Dynamic)
{
    console.log(params.id);
    const todosId= parseInt(params.id)
    const uniqueData = Todos.find((temp: any) => { return temp.id === todosId });
    console.log(uniqueData)
    return NextResponse.json (
        {
           uniqueData,
        }
    )
}

export async function PUT(request: NextRequest, { params }: Dynamic)
{
    console.log(params.id);
    const todosId= parseInt(params.id)
    const uniqueData = Todos.find((temp: any) => { return temp.id === todosId });
    console.log(uniqueData)
    if (todosId) {
        
    }   
        return NextResponse.json (
            {
               message:`Not Found Todo against this ID ${todosId}`
            }
        )
    
}
