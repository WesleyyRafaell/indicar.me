export interface IProfessional {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null,
  image: string | null;
  typePersona: string | null;
  city: string | null;
  experience: string | null;
  state: string | null;
  typeProfessional: string | null;
  tell: string | null;
  cell: string | null;
  aboutme: string | null;
  facebook: string | null;
  instagram: string | null;
  whatsapp: string | null;
  linkedin: string | null;
}

export interface IProfessionalSelectPros{
  typeProfessional: string;
  experience: string;
  city: string;
  state: string;
  image?: string;
  email?: string;
  name?: string;
  tell?: string;
  cell?: string;
  aboutme?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
  linkedin?: string;
}

export interface ISearchProfessionalProps {
  search: string;
}
