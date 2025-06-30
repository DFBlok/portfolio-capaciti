import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Duwayne Blok | Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm Duwayne 👋
        </h1>
        <p className="text-lg md:text-xl text-light max-w-xl">
          I build AI-powered web applications and solve real-world problems through modern software engineering.
        </p>
      </main>
    </>
  )
}
