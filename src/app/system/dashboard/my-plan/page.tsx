'use client';

import Flex from '@/components/atoms/flex/flex';
import { Button } from '@/components/ui/button';
import { createCheckoutSessionAction } from '@/services/actions/billing';
import ReactStars from 'react-rating-star-with-type';

const MyPlanPage = () => {
  return (
    <Flex className='flex-wrap items-start gap-4 lg:gap-0'>
      <Flex className='max-w-[550px] flex-col gap-3 pr-5'>
        <p className='text-lg text-primary'>Atualmente você está no plano Free.</p>
        <h3 className='text-xl font-semibold text-slate-700'>Quer desbloquer avaliações no seu perfil?</h3>
        <ReactStars
          value={5}
          isEdit={false}
          activeColors={[ '#FFCE00' ]}
          size={20}
        />
        <p>
        Profissionais com avaliações transmitem confiança,
        credibilidade e resultados comprovados. Feedbacks positivos funcionam como um portfólio
        social, destacando o profissional e facilitando a decisão do cliente. Quer aumentar suas
        chances de sucesso? <br/> Por somente <span className='font-semibold text-primary'>R$ 10,00</span> por mês,
          desbloqueie a opção de avaliação no seu perfil e receba avaliações ilimitadas de todos os seus clientes.
        </p>
      </Flex>
      <Flex className='flex-1 rounded-md border border-primary p-3'>
        <form action={createCheckoutSessionAction} className='flex flex-col gap-2'>
          <Flex className='w-full items-center justify-between gap-3'>
            <p className='font-semibold text-slate-700'>Desbloqueie avaliações</p>
            <p className='text-xl font-semibold text-primary'>R$ 10,00</p>
          </Flex>
          <p className='text-sm'>Aumente sua chance de sucesso e tenha avaliações ilimitadas em seu perfil!</p>
          <Button type='submit'>Adquirir PRO</Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default MyPlanPage;
