'use server';
import { auth } from '@/services/auth';
import { prisma } from '@/services/database';

export async function getUser () {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  if (!user) {
    return false;
  }

  return user;
}
