'use server';
import { auth } from '@/services/auth';
import { prisma } from '@/services/database';
import { IProfessionalSelectPros } from '@/types/page/professional';

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

export async function updateUser (values: IProfessionalSelectPros) {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    };
  }

  await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      name: values.name,
      typeProfessional: values?.typeProfessional,
      experience: values?.experience,
      city: values?.city,
      state: values?.state,
      tell: values?.tell,
      cell: values?.cell,
      aboutme: values?.aboutme,
      facebook: values?.facebook,
      whatsapp: values?.whatsapp,
      instagram: values?.instagram,
      linkedin: values?.linkedin,
    },
  });
}

