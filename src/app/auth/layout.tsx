import { PropsWithChildren } from 'react';

export default async function Layout ({ children }: PropsWithChildren) {

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      {children}
    </div>
  );
}
