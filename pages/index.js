// import codeImage from "../public/codeImage.jpeg"
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, useSession, signOut } from 'next-auth/react'

export default function Home() {

  const session = useSession();
  // console.log(session);

  if (session.data === null) {
    return <button onClick={signIn}>Login</button>
  }

  return (
    <div className={styles.container}>
      <h1>Authentication</h1>
      <div>
        <h2>Hello, {session?.data?.user?.name}</h2>
        <button onClick={signOut}>LogOut</button>
      </div>
    </div>
  )
}
