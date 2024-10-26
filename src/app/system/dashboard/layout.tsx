import DashboardTemplate from '@/components/templates/dashboard/dashboard';
import { getUser } from '@/services/actions/user.actions';
import { auth } from '@/services/auth';
import { PropsWithChildren } from 'react';

export default async function Layout ({ children }: PropsWithChildren) {
  const session = await auth();
  const user = await getUser();

  return (
    <DashboardTemplate
      image={session?.user.image || ''}
      persona={user?.typePersona || ''}
    >
      {children}
    </DashboardTemplate>
  );
}
