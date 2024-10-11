'use server';

import { prisma } from '@/services/database';

export async function listProfessionalsBySearch (value: string) {
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

export async function getProfessionalDetails (id: string) {
  const professional = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return professional;
}
