// api/artists/route.js
// public/artist_info.json의 정보를 반환하는 api

import fs from 'fs';
import path from 'path';

// GET /api/artists
// 만약 /api/artists/?name=아티스트명 으로 요청이 들어오면, 해당 아티스트의 정보를 반환
export async function GET(request) {

    const filePath = path.join(process.cwd(), 'public', 'artist_info.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    
    // /api/artists/?name=아티스트명 으로 요청이 들어오면, 해당 아티스트의 정보를 반환
    if (searchParams.has('artist')) {
        const name = searchParams.get('artist');
        const artist = data.artistList.find((artist) => artist.name === name);

        if (artist) {
            return new Response(JSON.stringify(artist), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } else {
            return new Response('Not Found', {
                status: 404,
                headers: {
                    'Content-Type': 'text/plain',
                },
            });
        }
    }
    return new Response(JSON.stringify(data.artistList ? data.artistList : data), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}