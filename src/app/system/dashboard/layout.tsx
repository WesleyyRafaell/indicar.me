import DashboardTemplate from '@/components/templates/dashboard/dashboard';
import { auth } from '@/services/auth';
import { PropsWithChildren } from 'react';

export default async function Layout ({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <DashboardTemplate image={session?.user.image || ''}>
      {children}
    </DashboardTemplate>
  );
}
