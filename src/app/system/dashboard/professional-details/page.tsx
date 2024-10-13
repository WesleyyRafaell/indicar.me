import ProfessionalDetailsPage from '@/components/templates/dashboard/professional-details/professional-details';
import { getProfessionalDetails } from '@/services/actions/professional-actions';
import { getReviews } from '@/services/actions/reviews.action';

export default async function ProfessionalDetails ({ searchParams }: {searchParams: {id: string}}) {
  const reviews = await getReviews(searchParams.id);
  const professional = await getProfessionalDetails(searchParams.id);

  return (
    <ProfessionalDetailsPage reviews={reviews} professionalDetaisl={professional} />
  );
}
