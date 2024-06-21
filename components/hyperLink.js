
// the href is not inside, it's for outside.
// if this link is pressed, the new tab will be opened.
export default function HyperLink({ href, text, className='text-[#b93172]' }) {
    return (
        <a
            className={className}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <span className="pl-1 pr-1 font-bold">{text}</span>
        </a>
    );
}