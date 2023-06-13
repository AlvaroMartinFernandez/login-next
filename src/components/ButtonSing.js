'use client'

import { signIn } from "next-auth/react";

export default  function ButtonSing(){
    return (
    <>
    <button onClick={() => signIn('google')}>Longin google</button>
    <button onClick={() => signIn('github')}>Login github</button>
    </>)
}