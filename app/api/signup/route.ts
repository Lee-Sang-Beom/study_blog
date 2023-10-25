import * as crypto from "crypto";
import db from "@/lib/db";
import { resolve } from "path";
import { rejects } from "assert";

export async function POST(request: Request) {
    const body = await request.json();
    const header = request.headers;
    if (header.get("Authorization") !== "dfwoidkfjlkjdms")
    return Response.json({status: 401});
//@ts-ignore
const {password, salt} = await createHashedPassword(body.pw);

const user = {
    user_id: body.id,
    user_pw: password,
    user_name: body.name,
    salt: salt,
};
// @ts-ignore
const res = await db.promise().query("INSERT INTO users SET ?", user);
console.log(res);
return Response.json({ status: 200 });

}
const createSalt = () =>
    new Promise((resolve, reject) => {
        crypto.randomBytes(64, (err, buf) => {
            if (err) rejects(err);
            
            resolve(buf.toString("base64"));
        });
    });
const createHashedPassword = (plainPassword: string) =>
    new Promise(async (resolve, reject) => {
        const salt = await createSalt();
        crypto.pbkdf2(
            plainPassword,
            salt as string,
            9999,
            64,
            "sha512",
            (err, key) => {
                if (err) reject(err);
                resolve({ password: key.toString("base64"), salt });
            }
        );
    });