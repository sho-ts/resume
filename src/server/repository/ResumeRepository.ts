import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Resumes } from '~/server/domain/Resume';

export class ResumeRepository {
  private readonly client = new S3Client({
    region: process.env.NUXT_AWS_S3_REGION as string,
    credentials: {
      accessKeyId: process.env.NUXT_AWS_S3_READONLY_ACCESS_KEY as string,
      secretAccessKey: process.env.NUXT_AWS_S3_READONLY_PRIVATE_KEY as string,
    },
  });

  private readonly bucket = process.env.NUXT_AWS_S3_BUCKET as string;

  async search(key: string): Promise<Resumes | null> {
    const { Body } = await this.client.send(
      new GetObjectCommand({
        Bucket: this.bucket,
        Key: key,
      })
    );

    const json = await Body?.transformToString();
    if (!json) return null;

    return JSON.parse(json);
  }
}
