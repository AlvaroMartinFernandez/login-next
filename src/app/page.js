'use client'
import Image from 'next/image'
import ButtonSing from '@/components/ButtonSing'
import { useSession } from 'next-auth/react'

export default function Home() {

    // const { session } = useSession()
    // if(session) {
    //   return <>
    //     Signed in as {session.user.email} <br/>
    //     <button onClick={() => signOut()}>Sign out</button>
    //   </>
    // }
    return (<>
<h1>Hols mundo</h1>
    </>)
}