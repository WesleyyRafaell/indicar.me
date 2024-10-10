'use server';
import { auth } from '@/services/auth';
import { prisma } from '@/services/database';

export async function listProfessionalsBySearch (value: string) {
  const session = await auth();

  if (!session?.user?.id) {
    return [];
  }

  const professionals = await prisma.user.findMany({
    where: {
      typePersona: '2',
      OR: [
        {
          typeProfessional: { contains: value },
        },
        {
          aboutme: { contains: value },
        },
      ],
    },
  });

  return professionals;
}
