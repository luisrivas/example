import { headers } from 'next/headers';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Testing x-client-country-code:{' '}
        {JSON.stringify(headers().get('x-client-country-code'))}
      </h1>
    </main>
  );
}
