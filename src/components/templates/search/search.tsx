'use client';

import Flex from '@/components/atoms/flex/flex';
import Modal from '@/components/atoms/modal/modal';
import ContactCard from '@/components/molecules/contact-card/contact-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';
import { useState } from 'react';

const SearchTemplate = () => {
  const [ openContactModal, setOpenContactModal ] = useState(false);

  return (
    <div>
      <div className='mb-6 flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold text-primary'>De qual profissional você precisa hoje?</h1>
        <p className='max-w-[500px] font-normal text-slate-600'>Diversos tipos de profissionais
          e serviços para você, busque agora e encontre o que procura.
        </p>
      </div>
      <Input
        className='h-14 rounded-full'
        placeholder='O que você está buscando?'
      />
      <Flex className='flex-wrap justify-between gap-5 pt-7'>
        <Card className='w-[500px] p-4'>
          <Flex className='gap-2'>
            <Avatar>
              <AvatarImage src={''} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Flex className='w-full flex-row justify-between'>
              <Flex className='max-w-[240px] flex-col'>
                <p className='font-semibold text-primary'>Wesley Rafael</p>
                <p className='text-sm text-slate-600'>São Luís / MA</p>
              </Flex>
              <p className='max-w-[240px] font-semibold text-slate-600'>Pintor / Meses de experiencia</p>
            </Flex>
          </Flex>
          <Card className='mt-3 px-3 py-2'>
            <CardTitle className='text-base font-bold text-primary'>Um pouco sobre mim</CardTitle>
            <CardDescription className='max-h-[100px] overflow-scroll overflow-x-hidden'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed maximus metus ac diam suscipit, et vehicula metus posuere.
              Morbi malesuada enim tellus, tincidunt aliquam quam consectetur
              imperdiet. Curabitur eu hendrerit odio. Aenean vel massa ac metus
              lobortis faucibus sit amet eu eros. Aenean volutpat consectetur sapien sit amet
              venenatis. In ut libero posuere, bibendum diam ut, venenatis diam. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec lobortis augue.
              Pellentesque ac vehicula nunc. Fusce eget rhoncus velit, in sodales mi. Integer at tempor nisl.
              Etiam in dictum purus. Vivamus tellus sem, hendrerit vel sollicitudin et, ullamcorper eget neque.
              Curabitur euismod sodales bibendum.
              Suspendisse vitae nulla mattis, finibus nulla vel, pharetra metus.
            </CardDescription>
          </Card>
          <Flex className='justify-between py-4'>
            <Flex className='flex-col'>
              <h3 className='text-base font-bold text-primary'>Hora de contratar?</h3>
              <p className='text-sm text-slate-600'>Veja informações sobre contato</p>
              <Button
                variant='outline'
                className='mt-[9px] text-slate-600'
                onClick={() => setOpenContactModal(true)}
              >
                  Ver contato
              </Button>
            </Flex>
            <Flex className='flex-col gap-2'>
              <Flex className='gap-3'>
                <p className='text-4xl font-bold text-primary'>4,8</p>
                <Flex className='flex-col'>
                  <p className='text-slate-600'>1333 avaliações</p>
                  <Flex className='gap-2'>
                    <Star fill='yellow' size={20} />
                    <Star fill='yellow' size={20} />
                    <Star fill='yellow' size={20} />
                    <Star fill='yellow' size={20} />
                    <Star fill='yellow' size={20} />
                  </Flex>
                </Flex>
              </Flex>
              <Button>Ver todas as avaliações</Button>
            </Flex>

          </Flex>
        </Card>
      </Flex>
      <Modal open={openContactModal} setOpen={setOpenContactModal} title='Contato'>
        <ContactCard />
      </Modal>
    </div>
  );
};

export default SearchTemplate;
