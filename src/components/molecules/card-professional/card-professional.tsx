'use client';

import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { getExperience } from '@/enum/professional';
import { getReviews } from '@/services/actions/reviews.action';
import { IReviewProps } from '@/types/actions/review';
import { IProfessional } from '@/types/page/professional';
import getMedia from '@/utils/number';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactStars from 'react-rating-star-with-type';

const CardProfessional = (props: IProfessional) => {
  const [ reviews, setReviews ] = useState<IReviewProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getProfessionalReview = async () => {
      const reviews = await getReviews(props.id);

      setReviews(reviews);
    };

    getProfessionalReview();
  }, [ props.id ]);

  return (
    <Card key={props.id} className='w-[500px] p-4'>
      <Flex className='gap-2'>
        <Avatar>
          <AvatarImage src={props?.image || ''} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Flex className='w-full flex-row justify-between'>
          <Flex className='max-w-[240px] flex-col'>
            <p className='font-semibold text-primary'>{props?.name}</p>
            <p className='text-sm text-slate-600'>{props?.city} / {props.state}</p>
          </Flex>
          <p className='max-w-[240px] font-semibold text-slate-600'>{props.typeProfessional} / {getExperience(props.experience || '0')}</p>
        </Flex>
      </Flex>
      <Flex className='justify-center py-4'>
        <Flex className='flex-col gap-2'>
          {reviews.length > 0 && (
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
          )}
        </Flex>
      </Flex>
      <Card className='mt-3 px-3 py-2'>
        <CardTitle className='text-base font-bold text-primary'>Um pouco sobre mim</CardTitle>
        <CardDescription className='max-h-[100px] overflow-scroll overflow-x-hidden'>
          {props?.aboutme}
        </CardDescription>
      </Card>
      <Flex className='justify-center py-4'>
        <Flex className='flex-col gap-2'>
          <Button onClick={() => {
            router.push(`/system/dashboard/professional-details?id=${props.id}`);
          }}>Ver mais informações</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardProfessional;
