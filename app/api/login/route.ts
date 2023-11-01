import db from "@/lib/db";
import * as crypto from "crypto";

export async function POST(request:Request){
    const body= await request.json();
    const query = 'select user_id, user_pw, salt, user_name from users where user_id = ?';

    const [rows, fields] = await db.promise().query(query, [body.userId]);
    if(Array.isArray(rows) && rows.length ===0 ){
        return Response.json({
            status:401,
            msg: "아이디와 비밀번호를 확인해주세요."
        });
    }

    //@ts-ignore
    const {user_id, user_pw, salt, user_name} = rows[0];
    const hashedPw = await createHashedPassword(body.userPw, salt);
    if(user_pw !== hashedPw){
        return Response.json({
            status : 401,
            msg:"아이디와 비밀번호를 확인해주세요."
        })
    }

    return Response.json({status:200, data: {user_id: user_id, user_name: user_name}})
}

const createHashedPassword = (plainPw :string, salt: string) => {
    return new Promise(async(resolve, reject) => {
        crypto.pbkdf2(
            plainPw,
            salt as string,
            9999,
            64,
            'sha512',
            (err, key) => {
                if (err) reject(err)
                resolve(key.toString('base64'))
            }
        )
    })
}