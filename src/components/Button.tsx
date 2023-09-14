export default function Button({children, className, handleClick} : 
    {   children: React.ReactNode, 
        className?: string,
        handleClick?: () => void
    }){
    return(
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    )
}