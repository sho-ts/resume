import { ResumeRepository } from '~/server/repository/ResumeRepository';

const repository = new ResumeRepository();

export default defineEventHandler(async (event) => {
  const token = event.headers.get('Authorization');
  if (token !== process.env.NUXT_LIMITED_ACCESS_KEY) {
    throw new Response('Unauthorized', { status: 401 });
  }

  const resume = repository.search(process.env.NUXT_AWS_S3_RESUME_OBJECT_KEY as string);
  if (!resume) {
    throw new Response('Internal Server Error', { status: 500 })
  };

  return resume;
});
