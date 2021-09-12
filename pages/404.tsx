import { useEffect } from "react"
import { useRouter } from "next/dist/client/router";

export default function Custom404(){
    const router = useRouter();
    useEffect(()=>{
        setTimeout(() => {
            router.push("/")
        }, 5000);
    }, [])
    return(
        <div>
            <h1 className="title-not-found">Ooopss...</h1>
            <p className="title-not-found">We can't find the page!</p>
        </div>
    )
}