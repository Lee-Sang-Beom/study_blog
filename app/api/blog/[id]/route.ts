import db from "@/lib/db";
import { BlogForm } from "@/types/BlogForm";

export async function GET(request: Request, {params}:{params:{id:any}}){
    const query = "select id, title, content, author_id as authorId, crt_date as crtDate, udt_date as udtDate, count from blogs where id = ? ";
    const [rows, fields] = await db.promise().query(query, Number(params.id));
    //@ts-ignore
    return Response.json({status:200, data:rows[0]})
}

export async function POST(request: Request){
   
}

export async function PUT(request: Request){
}

export async function DELETE(request: Request){
}