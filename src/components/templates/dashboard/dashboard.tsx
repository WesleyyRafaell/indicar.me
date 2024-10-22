'use client';

import NavLink from '@/components/atoms/nav-link/nav-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SignOut } from '@/services/actions/auth-action';
import { IDashboardTemplateProps } from '@/types/page/dashboard-template';
import {
  CircleUser,
  Crown,
  DollarSign,
  Home,
  Menu,
  Search,
} from 'lucide-react';
import Link from 'next/link';

export const description =
  'A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.';

export default function DashboardTemplate ({ children, image }: IDashboardTemplateProps) {

  const handlerLogout = () => {
    SignOut();
  };

  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      <div className='hidden border-r bg-muted/40 md:block'>
        <div className='flex h-full max-h-screen flex-col gap-2'>
          <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
            <Link href='/system/dashboard/' className='flex items-center gap-2 font-semibold'>
              <Crown className='size-6 text-primary' />
              <span className='text-primary'>Indicar.me</span>
            </Link>
          </div>
          <div className='flex-1'>
            <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
              <NavLink href='/system/dashboard/search'>
                <Search className='size-4' />
                Buscar profissional
              </NavLink>
              <NavLink href='/system/dashboard/perfil'>
                <Home className='size-4' />
                Meu Perfil
              </NavLink>
              {/* <NavLink href='/system/dashboard/my-reviews'>
                <Handshake className='size-4' />
                Minhas avaliações
              </NavLink> */}
              <NavLink href='/system/dashboard/my-plan'>
                <DollarSign className='size-4' />
                Meu plano
              </NavLink>
            </nav>
          </div>
          <div className='mt-auto p-4'>
            <Card x-chunk='dashboard-02-chunk-0'>
              <CardHeader className='p-2 pt-0 md:p-4'>
                <CardTitle>Atualize para Pro</CardTitle>
                <CardDescription>
                  Desbloqueie as avaliações no seu perfil e aumente as chances de ter
                  seu serviço contratado.
                </CardDescription>
              </CardHeader>
              <CardContent className='p-2 pt-0 md:p-4 md:pt-0'>
                <Button size='sm' className='w-full'>
                  Conheça o pro
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <header className='flex h-14 items-center  gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='shrink-0 md:hidden'
              >
                <Menu className='size-5' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='flex flex-col'>
              <nav className='grid gap-2 text-lg font-medium'>
                <Link
                  href='/system/dashboard/'
                  className='flex items-center gap-2 text-lg font-semibold'
                >
                  <Crown className='size-6 text-primary' />
                  <span className='sr-only text-primary'>Indicar.me</span>
                </Link>
                <NavLink href='/system/dashboard/search'>
                  <Search className='size-4' />
                    Buscar profissional
                </NavLink>
                <NavLink href='/system/dashboard/perfil'>
                  <Home className='size-4' />
                    Meu Perfil
                </NavLink>
                {/* <NavLink href='/system/dashboard/my-reviews'>
                  <Handshake className='size-4' />
                    Minhas avaliações
                </NavLink> */}
                <NavLink href='/system/dashboard/my-plan'>
                  <DollarSign className='size-4' />
                    Meu plano
                </NavLink>
              </nav>
              <div className='mt-auto'>
                <Card>
                  <CardHeader>
                    <CardTitle>Atualize para Pro</CardTitle>
                    <CardDescription>
                      Desbloqueie as avaliações no seu perfil e deaumente as chances de ter
                      seu serviço contratado.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size='sm' className='w-full'>
                      Conheça o pro
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className='flex w-full justify-end'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='secondary' size='icon' className='rounded-full'>
                  {image && (
                    <Avatar>
                      <AvatarImage src={image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  )}
                  {!image && (
                    <CircleUser className='size-5' />
                  )}
                  <span className='sr-only'>Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer'>Meu plano</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='cursor-pointer' onClick={handlerLogout}>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
          {children}
        </main>
      </div>
    </div>
  );
}
