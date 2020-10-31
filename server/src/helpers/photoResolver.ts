import { v4 as uuidv4 } from 'uuid';
import { S3 } from 'aws-sdk';

import s3 from '../integrations/s3';

export const multiplePhotoResolver = (resolvers: Record<any, any>) => {
  Object.keys(resolvers).forEach((key) => {
    resolvers[key] = resolvers[key].wrapResolve((next: any) => async (rp: any) => {
      rp.beforeRecordMutate = async (doc: any, rp: any) => {
        const newDoc = doc;

        return Promise.all(newDoc.photos.map((buffer: string) => {
          const buffered = Buffer.from(buffer,'base64')

          const data = {
            Bucket: 'grech-store',
            Key: uuidv4(),
            Body: buffered,
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'
          };

          return new Promise(resolve => {
            s3.upload(data as S3.PutObjectRequest, (err, data) => {
              if (err) {
                throw err;
              }

              resolve(data.Location);
            });
          });
        })).then((photos) => {
          newDoc.photos = photos;

          return newDoc;
        });
      }

      return next(rp);
    });
  });

  return resolvers;
};

export const singlePhotoResolver = (resolvers: Record<any, any>) => {
  Object.keys(resolvers).forEach(key => {
    resolvers[key] = resolvers[key].wrapResolve((next: any) => (rp: any) => {
      rp.beforeRecordMutate = async (doc: any, rp: any) => {
        const newDoc = doc;

        const buffered = Buffer.from(newDoc.photo,'base64')

        const data = {
          Bucket: 'grech-store',
          Key: uuidv4(),
          Body: buffered,
          ContentEncoding: 'base64',
          ContentType: 'image/jpeg'
        };

        return new Promise(resolve => {
          s3.upload(data as S3.PutObjectRequest, (err, data) => {
            if (err) {
              throw err;
            }

            resolve(data.Location);
          });
        }).then((photo) => {
          newDoc.photo = photo;

          return newDoc;
        });
      };

      return next(rp);
    });
  });

  return resolvers;
};