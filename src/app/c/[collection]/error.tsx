'use client';
 
import {useRouter} from 'next/router'

export default function Error() {
  const router = useRouter()
  setTimeout(() => {
    router.back()
  },5000)
  return (
    <>
        <h1>
            Tried to access a non-existent collection
        </h1>
    </>
  )
}