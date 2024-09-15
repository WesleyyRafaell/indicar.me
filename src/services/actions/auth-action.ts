'use server';
import { signIn } from '@/services/auth';

export async function SignIn () {
  return signIn('google', { redirectTo: '/system' });
}
