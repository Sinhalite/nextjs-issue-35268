import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href={'/test'} >Test Page</Link>
      <Link href={'/333'} >Test Page(no paths)</Link>
      <br />
      <a href='/api/revalidate' target='_blank' rel="noopener noreferrer">
        Revalidate
      </a>
    </div>
  )
}
