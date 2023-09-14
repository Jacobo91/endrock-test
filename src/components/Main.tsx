export default function Main({ children } : {children: React.ReactNode}){
    return(
        <main className="mx-5 sm:mx-10 mt-10">
            {children}
        </main>
    )
}