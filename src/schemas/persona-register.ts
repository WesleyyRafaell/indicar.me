import { z } from 'zod';

export const personaRegisterSchema = z.object({
  typePersona: z.string().optional(),
  typeProfessional: z.string().optional(),
  experience: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
});
