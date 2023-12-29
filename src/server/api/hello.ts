export default defineEventHandler((event) => {
  const token = event.headers.get('authorization');

  return {
    hello: 'world',
    hoge: 'fuga',
  };
});
