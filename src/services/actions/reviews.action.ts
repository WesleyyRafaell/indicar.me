'use server';

import { auth } from '@/services/auth';
import { prisma } from '@/services/database';
import { ICreateReviewProps } from '@/types/actions/review';

export async function createNewReview ({ rating, description, id }: ICreateReviewProps) {
  const session = await auth();

  if (!session?.user) return;

  const date = new Date();

  const review = await prisma.reviews.create({
    data: {
      name: session?.user?.name || '',
      rating,
      description,
      date,
      professional: {
        create: {
          id,
        },
      },
    },
  });

  return review;
}

// export async function getReviews (id: string) {

//   const user = await prisma.user.findUnique({
//     where: {
//       id,
//     },
//   });

//   return user;
// }
