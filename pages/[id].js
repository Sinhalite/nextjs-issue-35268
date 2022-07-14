export default function TestPage({ currentTime }) {
  return <div>{currentTime}</div>;
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "test",
        },
      },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  const currentTime = Date.now();

  return {
    props: {
      currentTime,
    },
  };
}
