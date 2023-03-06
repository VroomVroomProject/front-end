import Layout from '@/components/common/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
      </Layout>
    </QueryClientProvider>
  );
}
