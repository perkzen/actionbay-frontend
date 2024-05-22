'use client';
import { z } from 'zod';
import { numberString } from '@/libs/validators/common';
import { MAX_FILE_SIZE_BYTES, MAX_FILE_SIZE_MB } from '@/libs/constants';

export const CreateAuctionValidator = z.object({
  title: z.string().min(2),
  description: z.string().min(2),
  startingPrice: numberString(),
  endDate: z.date(),
  fileList: z
    .custom<FileList>()
    .refine((data) => data.length > 0, {
      message: 'Image is required',
    })
    .refine((data) => data[0].size <= MAX_FILE_SIZE_BYTES, {
      message: `Image size must be less than ${MAX_FILE_SIZE_MB}MB`,
    }),
});

export type CreateAuctionData = z.infer<typeof CreateAuctionValidator>;
