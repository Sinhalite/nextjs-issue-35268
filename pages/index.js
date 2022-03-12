import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/test'} >Test Page</Link>
      <br />
      <a href='/api/revalidate' target='_blank' rel="noopener noreferrer">
        Revalidate
      </a>
    </div>
  )
}
