import db from "@/lib/db";
import { BlogForm } from "@/types/BlogForm";

export async function GET(request: Request){
    const query = "select id, title, content, author_id as authorId, crt_date as crtDate, udt_date as udtDate, count from blogs";
    const [rows, fields] = await db.promise().query(query);
    return Response.json({status:200, data:rows})
}

export async function POST(request: Request){
    const body:BlogForm = await request.json();
    const queryData = {
        title: body.title,
        author_id: body.authorId,
        content: body.content
    };


    /**
     * @TODO : 블로그 테이블 만들고 넣어줘야 함 (blogs name) 
     */
    // @ts-ignore 
    const res= await db.promise().query("INSERT INTO blogs SET ? ", queryData);
    return Response.json({status: 200, data:res[0]})
}

export async function PUT(request: Request){
}

export async function DELETE(request: Request){
}