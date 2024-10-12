'use server';
import { signIn, signOut } from '@/services/auth';

export async function SignIn () {
  return signIn('google', { redirectTo: '/system' });
}

export async function SignOut () {
  return signOut({ redirectTo: '/auth/signin' });
}
