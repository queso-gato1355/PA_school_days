// app/artinfo/[artistName]/page.js
// artist 이름이 있는 경우 page.js에서 띄워야 하는 페이지.

export default function ArtistPage({ params }) {
    const { artistName } = params;
    return (
        <div>
            <h1>Artist Page</h1>
            <p>
                {artistName}
            </p>
        </div>
    );
}