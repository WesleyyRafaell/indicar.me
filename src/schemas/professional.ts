import { z } from 'zod';

export const professionalSchema = z.object({
  typeProfessional: z.string().min(1, { message: 'Campo obrigatório' }),
  experience: z.enum([ '0', '1', '2', '3' ], { message: 'Campo obrigatório' }),
  city: z.string().min(1, { message: 'Campo obrigatório' }),
  state: z.string().min(1, { message: 'Campo obrigatório' }),
  email: z.string().email('Formato de e-mail inválido'),
  name: z.string(),
  tell: z.string(),
  cell: z.string(),
  aboutme: z.string(),
  facebook: z.string(),
  instagram: z.string(),
  whatsapp: z.string(),
  linkedin: z.string(),
});
