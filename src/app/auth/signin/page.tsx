'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignIn } from '@/services/actions/auth-action';
import Image from 'next/image';

export default function SigninPage () {
  const handleClick = () => {
    SignIn();
  };

  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <Card className='w-full max-w-md'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-2xl font-bold'>Login</CardTitle>
          <CardDescription>Digite seu e-mail e senha para entrar em sua conta</CardDescription>
        </CardHeader>
        <CardContent>
          <button
            onClick={handleClick}
            className='mt-4 flex h-14 w-full items-center justify-center rounded-lg border-2  border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200'
          >
            <Image src='/google.png' alt='Google Logo' width={20} height={20} />
            <span className='ml-4'>Continue with Google</span>
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
