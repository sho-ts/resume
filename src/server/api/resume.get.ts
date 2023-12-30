export default defineEventHandler((event) => {
  const token = event.headers.get('Authorization');

  if (token !== process.env.NEXT_LIMITED_ACCESS_KEY) {
    throw new Response('Unauthorized', { status: 401 });
  }

  const response: {
    items: {
      name: string;
      start: string;
      end: string;
      description: string;
    }[];
  } = {
    items: [
      {
        name: 'XX株式会社',
        start: '20XX-04',
        end: '20XX-03',
        description: 'Webアプリケーションの開発を行っていました。',
      },
    ],
  };

  return response;
});
