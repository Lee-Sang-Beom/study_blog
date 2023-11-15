import path from 'path'
import fs from 'fs'
import {NextRequest} from 'next/server'
import {writeFile} from 'fs/promises'
import mime from 'mime'

export async function POST(request: NextRequest) {
    const projectRoot = process.cwd()
    const uploadDir = path.join(projectRoot, 'public', 'upload')
    console.log('uploadDiruploadDiruploadDiruploadDir')
    console.log(uploadDir)
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
    }

    const formData = await request.formData()
    const file = formData.get('image') as Blob | null

    if (!file) {
        return Response.json({status: 400, error: 'File Not'})
    }
    console.log(2)
    const buffer = Buffer.from(await file.arrayBuffer())

    try {
        const uniqueSuffix = Date.now();
        const filename = `${file.name.replace(
            /\.[^/.]+$/,
            ''
        )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;

        await writeFile(`${uploadDir}/${filename}`, buffer)
        return Response.json({ status: 200, fileUrl: `/upload/${filename}` })
    } catch (e) {
        console.log(e)
    }
}