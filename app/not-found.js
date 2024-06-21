// app/artinfo/[artistName]/not-found.js
// artist 이름이 없는 경우 page.js에서 띄워야 하는 페이지.

export default function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>
            <p>
                Sorry. This page is not found.
            </p>
        </div>
    );
}