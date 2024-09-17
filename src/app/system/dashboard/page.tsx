import DashboardTemplate from '@/components/templates/dashboard/dashboard';
import { checkIfPersonaHasType } from '@/services/actions/persona-register-actions';
import { redirect } from 'next/navigation';

export default async function Dashboard () {

  const hasTypePersona = await checkIfPersonaHasType();

  if (!hasTypePersona) {
    redirect('/system/persona-register');
  }

  return <DashboardTemplate />;
}
