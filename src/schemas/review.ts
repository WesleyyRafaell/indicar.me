import { z } from 'zod';

export const newReviewSchema = z.object({
  description: z.string().optional(),
});
