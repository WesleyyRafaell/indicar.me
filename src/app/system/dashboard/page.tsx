import PerfilPage from '@/app/system/dashboard/perfil/page';
import { checkIfPersonaHasType } from '@/services/actions/persona-register-actions';
import { redirect } from 'next/navigation';

export default async function Dashboard () {

  const hasTypePersona = await checkIfPersonaHasType();

  if (!hasTypePersona) {
    redirect('/system/persona-register');
  }

  return <PerfilPage />;
}
