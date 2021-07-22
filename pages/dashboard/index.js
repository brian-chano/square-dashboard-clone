import Head from 'next/head';

export default function Dashboard() {
  return (
    <div>
      <Head>
        <title>Square Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <h1 className='text-6xl font-bold'>
          Welcome to{' '}
          <a className='text-blue-600' href='https://squareup.com/dashboard/'>
            Square Dashboard
          </a>
        </h1>
      </main>
    </div>
  );
}
