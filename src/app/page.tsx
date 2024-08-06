import Head from 'next/head';
import VideoDubberPage from './VideoDubberPage';

const Home = () => {
  return (
    <div>
      <Head>
        <title>VideoDubber</title>
        <meta name="description" content="Translate videos in your own voice, globalize in a click!" />
      </Head>
      <main>
        <VideoDubberPage />
      </main>
    </div>
  );
}

export default Home;
