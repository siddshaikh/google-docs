import Link from "next/link"


const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Link href={'documents/123'}>
        click here to go document page</Link>
    </div>
  )
}

export default Home