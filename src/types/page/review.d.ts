import { IProfessional } from '@/types/page/review';

export interface INewReviewProps {
  description: string;
}

export interface IReviewProps {
  id: string;
  userId: string;
  rating: number,
  date: Date;
  description: string | null;
  name: string;
}

export interface IProfessionalDetailsProps {
  reviews: IReviewProps[]
  professionalDetaisl: IProfessional
}
