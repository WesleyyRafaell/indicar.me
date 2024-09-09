import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function SigupPage () {
  return (
    <Card className='w-full max-w-md'>
      <CardHeader>
        <CardTitle>Cadastrar</CardTitle>
        <CardDescription>Crie sua conta hoje.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Nome</Label>
              <Input
                id='name'
                placeholder='John Doe'
                required
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='john@exemplo.com'
                required
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Senha</Label>
              <Input
                id='password'
                type='password'
                required
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>O que você está buscando?</CardTitle>
                <CardDescription>
                  Você pode entrar na plataforma para buscar
                  algum profissional ou oferecer seus serviços
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select required>
                  <SelectTrigger id='userType'>
                    <SelectValue placeholder='Selecione' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    <SelectItem value='searching'>Estou buscando</SelectItem>
                    <SelectItem value='professional'>Quero oferecer meus serviços</SelectItem>
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Link href='/auth/signin'>
          <Button variant='outline'>Cancelar</Button>
        </Link>
        <Button type='submit'>Cadastrar</Button>
      </CardFooter>
    </Card>
  );
}
