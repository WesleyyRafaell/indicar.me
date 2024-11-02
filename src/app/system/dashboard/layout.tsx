import DashboardTemplate from '@/components/templates/dashboard/dashboard';
import { getPlanUser } from '@/enum/plan';
import { getUser } from '@/services/actions/user.actions';
import { auth } from '@/services/auth';
import { getUserCurrentPlan } from '@/services/stripe/stripe';
import { PropsWithChildren } from 'react';

export default async function Layout ({ children }: PropsWithChildren) {
  const session = await auth();
  const user = await getUser();

  const plan = await getUserCurrentPlan(session?.user.id as string);

  return (
    <DashboardTemplate
      image={session?.user.image || ''}
      persona={user?.typePersona || ''}
      isPro={plan.name === getPlanUser.pro}
    >
      {children}
    </DashboardTemplate>
  );
}
