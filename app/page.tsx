import Head from 'next/head';
import Membership from './components/Membership';

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitness Trainer</title>
        <meta name="description" content="Achieve your fitness goals with personalized training" />
      </Head>
      <main className="bg-white text-gray-900">
        <Membership/>
      </main>
    </>
  );
}

