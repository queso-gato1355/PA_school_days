import ArtBean from './artBean';

// 화면 크기에 맞춰 격자로 artBean을 보여주는 컴포넌트
// 화면 크기에 능동적으로 바뀌어야 한다.
export default function ArtBeanList() {
    return (
        <div className='w-full flex items-center justify-center p-4'>
            <div className='w-full flex flex-wrap p-4'>
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
                <ArtBean />
            </div>
        </div>
    );
}
