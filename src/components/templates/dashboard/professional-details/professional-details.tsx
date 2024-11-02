'use client';

import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { getExperience } from '@/enum/professional';
import { toast } from '@/hooks/use-toast';
import { newReviewSchema } from '@/schemas/review';
import { createNewReview } from '@/services/actions/reviews.action';
import { INewReviewProps, IProfessionalDetailsProps } from '@/types/page/review';
import { formatDate } from '@/utils/date';
import getMedia from '@/utils/number';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-star-with-type';

export default function ProfessionalDetailsPage ({
  reviews,
  professionalDetails,
  accountId,
  isPro,
}: IProfessionalDetailsProps
) {
  const router = useRouter();
  const form = useForm<INewReviewProps>({
    resolver: zodResolver(newReviewSchema),
  });

  const { register, formState: { errors }, handleSubmit, reset } = form;

  const [ star, setStar ] = useState(5);

  const onChange = (nextValue: number) => {
    setStar(nextValue);
  };

  const onSubmit = (values: INewReviewProps) => {
    const { description } = values;

    if (!professionalDetails?.id) return;

    createNewReview({ rating: star, description, id: professionalDetails?.id });
    toast({
      title: 'Sucesso',
      description: 'A sua avaliação foi salva com sucesso',
    });
    handleCleanForm();
    router.refresh();
  };

  const handleCleanForm = () => {
    setStar(5);
    reset();
  };

  return (
    <Card className='p-4'>
      <Flex className='flex-col items-center gap-2 sm:flex-row'>
        <Avatar>
          <AvatarImage src={professionalDetails?.image || ''} />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
        <Flex className='w-full flex-col items-center justify-between gap-2 sm:flex-row'>
          <Flex className='flex-col'>
            <p className='font-semibold text-primary'>{professionalDetails?.name}</p>
            <p className='text-sm text-slate-600'>{professionalDetails?.city} / {professionalDetails?.state}</p>
            <p className='text-sm text-slate-600'>{professionalDetails?.email}</p>
          </Flex>
          <p className='max-w-[240px] font-semibold text-slate-600'>
            {professionalDetails?.typeProfessional} / {getExperience(professionalDetails?.experience || '0')}
          </p>
        </Flex>
      </Flex>
      <Card className='mt-3 px-3 py-2'>
        <CardTitle className='text-base font-bold text-primary'>Um pouco sobre mim</CardTitle>
        <CardDescription className='max-h-[500px]'>
          {professionalDetails?.aboutme}
        </CardDescription>
      </Card>
      <Flex className='my-6 w-full justify-center'>
        <Link
          href={`
          https://api.whatsapp.com/send?phone=55${professionalDetails?.whatsapp}&text=Vim%20do%20indicar.me,%20estou%20em%20busca%20de%20um%20servi%C3%A7o,%20pode%20me%20ajudar?
        `}
          target='_blank'
        >
          <Button>Enviar mensagem</Button>
        </Link>
      </Flex>
      {!isPro && (
        <Flex className='mt-10 w-full justify-center'>
          <p className='text-primary'>Este profissional ainda não liberou as avaliações em seu perfil.</p>
        </Flex>
      )}
      {isPro && (
        <Flex className='mb-4 mt-10 w-full items-start justify-center'>
          <Flex className='w-full flex-col items-center gap-4 md:w-[450px]'>
            <Flex className='gap-3'>
              <p className='text-4xl font-bold text-primary'>{getMedia(reviews.map(item => item.rating))}</p>
              <Flex className='flex-col'>
                <p className='text-slate-600'>{reviews.length} avaliações</p>
                <ReactStars
                  value={parseFloat(getMedia(reviews.map(item => item.rating)))}
                  isEdit={false}
                  activeColors={[ '#FFCE00' ]}
                  size={20}
                />
              </Flex>
            </Flex>
            {professionalDetails?.id !== accountId && (
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
            )}
            <Flex className='w-full flex-col items-center gap-5'>
              {reviews.map(review => (
                <Flex key={review.id} className='w-full flex-col rounded-sm border border-slate-300 p-2 md:w-[450px]'>
                  <p className='text-lg'>{review.name}</p>
                  <Flex className='w-full justify-between'>
                    <ReactStars
                      value={review.rating}
                      isEdit={false}
                      activeColors={[ '#FFCE00' ]}
                      size={20}
                    />
                    <p className='text-slate-600'>{formatDate(review.date, 'dd/MM/yyyy')}</p>
                  </Flex>
                  <p className='mt-2 text-sm text-slate-600'>
                    {review.description}
                  </p>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      )}
    </Card>
  );
}
