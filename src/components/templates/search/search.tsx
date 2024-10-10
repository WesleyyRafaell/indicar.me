'use client';

import Flex from '@/components/atoms/flex/flex';
import CardProfessional from '@/components/molecules/card-professional/card-professional';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { searchProfessionalSchema } from '@/schemas/professional';
import { listProfessionalsBySearch } from '@/services/actions/professional-actions';
import { IProfessional, ISearchProfessionalProps } from '@/types/page/professional';
import { zodResolver } from '@hookform/resolvers/zod';
import { Frown, SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SearchTemplate = () => {
  const [ professionalList, setProfessionalList ] = useState<IProfessional[] | null>(null);

  const form = useForm<ISearchProfessionalProps>({
    resolver: zodResolver(searchProfessionalSchema),
  });

  const { register, handleSubmit, formState: { errors } } = form;

  const onSubmit = async (values: ISearchProfessionalProps) => {
    const { search } = values;

    const result = await listProfessionalsBySearch(search);

    setProfessionalList(result);
  };

  return (
    <div>
      <div className='mb-6 flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold text-primary'>De qual profissional você precisa hoje?</h1>
        <p className='max-w-[500px] font-normal text-slate-600'>Diversos tipos de profissionais
          e serviços para você, busque agora e encontre o que procura.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <Flex className='flex-col gap-1'>
          <Flex className='w-full items-center gap-4'>
            <Input
              className='h-14 rounded-full'
              placeholder='O que você está buscando?'
              {...register('search')}
            />
            <Button type='submit' className='h-14 rounded-full'>
              <SearchIcon />
            </Button>
          </Flex>
          <p className='pl-2 text-sm font-normal text-red-800'>{errors.search?.message}</p>
        </Flex>
      </form>
      <Flex className='flex-wrap justify-between gap-5 pt-7'>
        {professionalList?.map(professional => (
          <CardProfessional key={professional.id} {...professional} />
        ))}
        {professionalList && professionalList.length === 0 && (
          <Flex className='w-full items-center justify-center gap-3'>
            <p className='text-2xl text-primary'>sem resultados</p>
            <Frown color='#16A34A'/>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default SearchTemplate;
