export default function TestPage({ currentTime }) {
  return (
    <div>
      { currentTime }
    </div>
  )
}

export function getStaticPaths() {
  return {
    paths: ['/test'],
    fallback: 'blocking'
  }
}

export async function getStaticProps() {

  function sleep(waitMsec) {
    const startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
  }

  sleep(10000)

  const currentTime = Date.now()

  return {
    props: {
      currentTime
    },
  }
}
