import PersonaRegisterTemplate from '@/components/templates/persona-register/persona-register';
import { checkIfPersonaHasType } from '@/services/actions/persona-register-actions';
import { redirect } from 'next/navigation';

export default async function PersonaRegisterPage () {
  const hasTypePersona = await checkIfPersonaHasType();

  if (hasTypePersona) {
    redirect('/system/dashboard');
  }

  return <PersonaRegisterTemplate />;
}
