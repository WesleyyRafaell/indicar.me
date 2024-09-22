import { checkIfPersonaHasType } from '@/services/actions/persona-register-actions';
import { redirect } from 'next/navigation';

export default async function Dashboard () {

  const hasTypePersona = await checkIfPersonaHasType();

  if (!hasTypePersona) {
    redirect('/system/persona-register');
  }

  redirect('/system/dashboard/perfil');
}
