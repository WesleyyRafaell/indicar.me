import { z } from 'zod';

export const professionalSchema = z.object({
  typeProfessional: z.string().optional(),
  experience: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  email: z.string().optional(),
  name: z.string().optional(),
  tell: z.string().optional(),
  cell: z.string().optional(),
  aboutme: z.string().optional(),
  facebook: z.string().optional(),
  instagram: z.string().optional(),
  whatsapp: z.string().optional(),
  linkedin: z.string().optional(),
});

export const searchProfessionalSchema = z.object({
  search: z.string().min(3, { message: 'Busca precisa de pelo menos 3 letras' }),
});
