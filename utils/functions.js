'use server';

import sharp from "sharp";

export async function getImageDimensions(imageUrl) {
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const metadata = await sharp(buffer).metadata();
    return { width: metadata.width, height: metadata.height };
}