import DashboardTemplate from '@/components/templates/dashboard/dashboard';
import { PropsWithChildren } from 'react';

export default async function Layout ({ children }: PropsWithChildren) {

  return (
    <DashboardTemplate>
      {children}
    </DashboardTemplate>
  );
}
