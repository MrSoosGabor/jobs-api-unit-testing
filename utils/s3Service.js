import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

export class S3Service {
  constructor() {
    this.S3Client = new S3Client({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
  }

  async upload(file) {
    const params = {
      Bucket: `${process.env.AWS_S3_BUCKET_NAME}/restaurants`,
      Key: file.name,
      Body: file.data,
    };
    const upload = await this.s3.upload(params)

    return upload;
  }
}
