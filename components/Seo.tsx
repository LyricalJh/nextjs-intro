import Head from "next/head"

type ITitle = {
    title:string;
}
export default function Seo({title}:ITitle){
    return (
        <>
        <Head>
        <title>{title} | Next Movies</title>    
        </Head> 

        </>
       
    )
}