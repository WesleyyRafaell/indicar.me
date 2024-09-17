'use server';
import { auth } from '@/services/auth';
import { prisma } from '@/services/database';
import { IPersonaRegisterPageSelectPros } from '@/types/page/persona-register-page';
import { redirect } from 'next/navigation';

export async function checkIfPersonaHasType () {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: 'Not authorized',
      data: null,
    };
  }

  const persona = await prisma.user.findUnique({
    where: {
      id: session?.user?.id,
    },
    select: {
      typePersona: true,
    },
  });

  if (!persona?.typePersona) {
    return false;
  }

  return true;
}

export async function updatePersona (values: IPersonaRegisterPageSelectPros) {
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
      typePersona: values?.typePersona,
      city: values?.city,
      experience: values?.experience,
      state: values?.state,
      typeProfessional: values?.typeProfessional,
    },
  });

  redirect('/system/dashboard');
}
