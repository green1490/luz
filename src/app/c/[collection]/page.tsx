'use client';

import { Collection } from '@/model/collection'
import { useEffect, useState } from 'react'

export default function Collection({params} : {params: {collection:string}}) {
    const [collections,setCollections] = useState<Collection[]>()
    
    useEffect(() => {
        const getCollection = async () => {
            const result = await fetch(`http://localhost:5246/collection/${params.collection}`,{
            mode:'cors',
            credentials:'include',
            method:'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        const collections:Collection[] = await result.json()
        setCollections(collections)
    }
        getCollection()

    },[params.collection])
    const listCollections = collections?.map(item => 
        <li key={item.id}>
            {item.title}
        </li>
    )
    return (
        <>
            <ul>
                {listCollections}
            </ul>
        </>
    )
}