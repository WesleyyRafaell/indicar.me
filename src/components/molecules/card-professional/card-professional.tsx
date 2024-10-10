import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { getExperience } from '@/enum/professional';
import { IProfessional } from '@/types/page/professional';
import { Star } from 'lucide-react';
import Link from 'next/link';

const CardProfessional = (props: IProfessional) => {
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
          <Link href={`/system/dashboard/professional-details/${props.id}`}>
            <Button>Ver mais informações</Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardProfessional;
