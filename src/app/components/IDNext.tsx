'use client'

import { useSearchParams } from "next/navigation"

export default function IDNext() {

    const searchParams = useSearchParams()!;
    const id = searchParams.get('id');
    const search = searchParams.get("search");

    const data = {id: id || "", search: search || ""} 

    return(
        <>
            {JSON.stringify(data, undefined, 2)}
        </>
    )
}