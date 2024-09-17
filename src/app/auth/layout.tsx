import { PropsWithChildren } from 'react';

export default async function Layout ({ children }: PropsWithChildren) {
  return (
    <div className='flex min-h-screen w-full items-center justify-center bg-slate-600'>
      {children}
    </div>
  );
}
