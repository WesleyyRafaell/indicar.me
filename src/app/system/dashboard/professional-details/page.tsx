import ProfessionalDetailsPage from '@/components/templates/dashboard/professional-details/professional-details';
import { getPlanUser } from '@/enum/plan';
import { getProfessionalDetails } from '@/services/actions/professional-actions';
import { getReviews } from '@/services/actions/reviews.action';
import { auth } from '@/services/auth';
import { getUserCurrentPlan } from '@/services/stripe/stripe';

export default async function ProfessionalDetails ({ searchParams }: {searchParams: {id: string}}) {
  const session = await auth();
  const reviews = await getReviews(searchParams.id);
  const professional = await getProfessionalDetails(searchParams.id);

  const plan = await getUserCurrentPlan(searchParams.id as string);

  return (
    <ProfessionalDetailsPage
      reviews={reviews}
      professionalDetails={professional}
      accountId={session?.user.id || ''}
      isPro={plan.name === getPlanUser.pro}
    />
  );
}
