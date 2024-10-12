'use client';

import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getExperience } from '@/enum/professional';
import { newReviewSchema } from '@/schemas/review';
import { createNewReview } from '@/services/actions/reviews.action';
import { useProfessionalDetailsStore } from '@/store/professional-details';
import { INewReviewProps } from '@/types/page/review';
import { zodResolver } from '@hookform/resolvers/zod';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-star-with-type';

export default function ProfessionalDetailsPage () {
  const form = useForm<INewReviewProps>({
    resolver: zodResolver(newReviewSchema),
  });

  const { register, formState: { errors }, handleSubmit } = form;

  const [ star, setStar ] = useState(5);

  const { professional } = useProfessionalDetailsStore();

  const onChange = (nextValue: number) => {
    setStar(nextValue);
  };

  const onSubmit = (values: INewReviewProps) => {
    const { description } = values;

    if (!professional?.id) return;

    createNewReview({ rating: star, description, id: professional?.id });
  };

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
        <Flex className='w-full flex-col items-center gap-4 md:w-[450px]'>
          <Flex className='gap-3'>
            <p className='text-4xl font-bold text-primary'>4,8</p>
            <Flex className='flex-col'>
              <p className='text-slate-600'>1333 avaliações</p>
              <ReactStars
                value={4.5}
                isEdit={false}
                activeColors={[ '#FFCE00' ]}
                size={20}
              />
            </Flex>
          </Flex>
          <form className='my-5 w-full' onSubmit={handleSubmit(onSubmit)}>
            <Flex className='w-full flex-col gap-5'>
              <p className='font-semibold text-slate-600'>Nova avaliação</p>
              <div className='flex w-full flex-col space-y-1.5'>
                <Label htmlFor='description'>Seu nível de satisfação:</Label>
                <ReactStars
                  onChange={onChange}
                  value={star}
                  isEdit={true}
                  activeColors={[ '#FFCE00' ]}
                  size={20}
                />
              </div>
              <div className='flex w-full flex-col space-y-1.5'>
                <Label htmlFor='description'>Descrição</Label>
                <Textarea
                  id='description'
                  placeholder='Sua avaliação aqui'
                  {...register('description')}
                />
                <p className='text-xs text-red-600'>{errors?.description?.message || ''}</p>
              </div>
              <Flex className='w-full justify-center'>
                <Button className='px-16'>Avaliar</Button>
              </Flex>
            </Flex>
          </form>
          <Flex className='w-full flex-col items-center gap-5'>
            <Flex className='w-full flex-col rounded-sm border border-slate-300 p-2 md:w-[450px]'>
              <p className='text-lg'>Lucass</p>
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
