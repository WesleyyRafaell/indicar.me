'use client';

import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { getExperience } from '@/enum/professional';
import { useProfessionalDetailsStore } from '@/store/professional-details';
import { Star } from 'lucide-react';

export default function ProfessionalDetailsPage () {
  const { professional } = useProfessionalDetailsStore();

  return (
    <Card className='p-4'>
      <Flex className='flex-col items-center gap-2 sm:flex-row'>
        <Avatar>
          <AvatarImage src={professional?.image || ''} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Flex className='w-full flex-col items-center justify-between gap-2 sm:flex-row'>
          <Flex className='max-w-[240px] flex-col'>
            <p className='font-semibold text-primary'>{professional?.name}</p>
            <p className='text-sm text-slate-600'>{professional?.city} / {professional?.state}</p>
          </Flex>
          <p className='max-w-[240px] font-semibold text-slate-600'>
            {professional?.typeProfessional} / {getExperience(professional?.experience || '0')}
          </p>
        </Flex>
      </Flex>
      <Flex className='mb-6 mt-3 w-full max-w-[300px] flex-col justify-center'>
        <Flex className='flex-col pt-2'>
          <p className='text-sm font-bold text-primary'>Email</p>
          <p className='text-sm font-bold text-slate-600'>{professional?.email}</p>
        </Flex>
        <Flex className='justify-between'>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Telefone</p>
            <p className='text-sm font-bold text-slate-600'>{professional?.tell}</p>
          </Flex>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Celular</p>
            <p className='text-sm font-bold text-slate-600'>{professional?.cell}</p>
          </Flex>
        </Flex>
        <Flex className='justify-between'>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Instagram</p>
            <p className='text-sm font-bold text-slate-600'>{professional?.instagram}</p>
          </Flex>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Facebook</p>
            <p className='text-sm font-bold text-slate-600'>{professional?.facebook}</p>
          </Flex>
        </Flex>
        <Flex className='justify-between'>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Linkedin</p>
            <p className='text-sm font-bold text-slate-600'>{professional?.linkedin}</p>
          </Flex>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>WhatsApp</p>
            <p className='text-sm font-bold text-slate-600'>{professional?.whatsapp}</p>
          </Flex>
        </Flex>
      </Flex>
      <Card className='mt-3 px-3 py-2'>
        <CardTitle className='text-base font-bold text-primary'>Um pouco sobre mim</CardTitle>
        <CardDescription className='max-h-[500px]'>
          {professional?.aboutme}
        </CardDescription>
      </Card>
      <Flex className='mb-4 mt-10 w-full items-start justify-center'>
        <Flex className='w-full flex-col items-center gap-4'>
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
          <Flex className='w-full flex-col items-center gap-5'>
            <Flex className='w-full flex-col rounded-sm border border-slate-300 p-2 md:w-[450px]'>
              <p className='text-lg'>Lucas</p>
              <Flex className='w-full justify-between'>
                <Flex className=''>
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                </Flex>
                <p className='text-slate-600'>29/09/2024</p>
              </Flex>
              <p className='mt-2 text-sm text-slate-600'></p>
            </Flex>
            <Flex className='w-full flex-col rounded-sm border border-slate-300 p-2 md:w-[450px]'>
              <p className='text-lg'>Lucas</p>
              <Flex className='w-full justify-between'>
                <Flex className=''>
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                </Flex>
                <p className='text-slate-600'>29/09/2024</p>
              </Flex>
              <p className='mt-2 text-sm text-slate-600'>Não veio os todos os itens que pedi</p>
            </Flex>
            <Flex className='w-full flex-col rounded-sm border border-slate-300 p-2 md:w-[450px]'>
              <p className='text-lg'>Lucas</p>
              <Flex className='w-full justify-between'>
                <Flex className=''>
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                  <Star fill='yellow' size={20} />
                </Flex>
                <p className='text-slate-600'>29/09/2024</p>
              </Flex>
              <p className='mt-2 text-sm text-slate-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus metus ac diam suscipit, et vehicula metus posuere. Morbi malesuada enim tellus, tincidunt aliquam quam consectetur imperdiet. Curabitur eu hendrerit odio. Aenean vel massa ac metus lobortis faucibus sit amet eu eros. Aenean volutpat consectetur sapien sit amet venenatis. In ut libero posuere, bibendum diam ut, venenatis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut nec lobortis augue. Pellentesque ac vehicula nunc. Fusce eget rhoncus velit, in sodales mi. Integer at tempor nisl. Etiam in dictum purus. Vivamus tellus sem, hendrerit vel sollicitudin et, ullamcorper eget neque. Curabitur euismod sodales bibendum. Suspendisse vitae nulla mattis, finibus nulla vel, pharetra metus.</p>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
