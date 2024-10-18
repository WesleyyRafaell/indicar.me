export interface ICreateReviewProps {
  id: string;
  rating: number;
  description: string;
}

export interface IReviewProps {
  id: string;
  userId: string;
  rating: number;
  date: Date;
  description: string | null;
  name: string;
}
