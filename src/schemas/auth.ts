import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('E-mail inválido'),
  password: z.string({
    required_error: 'Senha obrigatória',
  }),
  persona: z.number(),
});
