'use server';

import sharp from "sharp";
import fs from 'fs';
import path from 'path';

export async function getImageDimensions(imagePath) {
    const filePath = path.join(process.cwd(), 'public', imagePath);

    let buffer;
    try {
        buffer = fs.readFileSync(filePath);
    } catch (error) {
        console.error(error);
        return { width: 0, height: 0 };
    }

    const metadata = await sharp(buffer).metadata();
    return { width: metadata.width, height: metadata.height };
}