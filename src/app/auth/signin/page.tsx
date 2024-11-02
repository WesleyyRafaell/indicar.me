'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SignIn } from '@/services/actions/auth-action';
import Image from 'next/image';
import Link from 'next/link';

export default function SigninPage () {
  const handleClick = () => {
    SignIn();
  };

  return (
    <div className='flex min-h-screen w-full items-center justify-center'>
      <Card className='w-full max-w-md pb-4'>
        <CardHeader className=''>
          <CardTitle className='text-2xl font-bold'>Login</CardTitle>
          <CardDescription>Entre no sistema com sua conta Google!</CardDescription>
        </CardHeader>
        <CardContent className='flex w-full flex-col items-center justify-start gap-11'>
          <button
            onClick={handleClick}
            className='flex h-14 w-full items-center justify-center rounded-lg border-2  border-black bg-white px-6 text-xl font-semibold text-black transition-colors duration-300 hover:bg-slate-200'
          >
            <Image src='/google.png' alt='Google Logo' width={20} height={20} />
            <span className='ml-4'>Continue com o Google</span>
          </button>
          <Link href={'/'}>
            <p className='font-semibold text-primary'>Voltar</p>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
