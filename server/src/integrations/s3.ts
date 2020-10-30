import AWS from 'aws-sdk';

import chalk from 'chalk';

import 'dotenv';

AWS.config.update({ region: 'eu-central-1' });

const s3 = new AWS.S3({
  accessKeyId: 'AKIAIFHIQGIB5F5WNB3Q',
  secretAccessKey: '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',
});

s3.listBuckets((err: AWS.AWSError, data: AWS.S3.ListBucketsOutput) => {
  if (err) {
    console.log(chalk.red("AWS Error", err));
  } else {
    console.log(chalk.green("AWS Success", data.Buckets));
  }
});

export default s3;