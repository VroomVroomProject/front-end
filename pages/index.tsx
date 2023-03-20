import Head from 'next/head';
import Init from '@/components/Init';
import Calendar from '@/components/common/Calendar';

export default function Home() {
  return (
    <>
      <Head>
        <title>VroomVroom</title>
        <meta name="description" content="차량 렌터를 위하는 사람들 모여라" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Init />
      <Calendar />
    </>
  );
}
