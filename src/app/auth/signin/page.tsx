import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SigninPage () {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-bold'>Login</CardTitle>
        <CardDescription>Digite seu e-mail e senha para entrar em sua conta</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@exemplo.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='password'>Senha</Label>
              <Input
                id='password'
                type='password'
                required
              />
            </div>
            <Button>
                Entrar
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <p className='w-full text-center text-sm text-gray-600'>
          Não tem uma conta?{' '}
          <Link href='/auth/signup' className='text-blue-600 hover:underline'>
              Cadastrar
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
