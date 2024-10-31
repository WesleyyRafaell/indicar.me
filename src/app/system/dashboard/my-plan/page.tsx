import Flex from '@/components/atoms/flex/flex';
import { Button } from '@/components/ui/button';
import { getPlanUser } from '@/enum/plan';
import { createCheckoutSessionAction } from '@/services/actions/billing';
import { auth } from '@/services/auth';
import { getUserCurrentPlan } from '@/services/stripe/stripe';
import { getUpperCaseString } from '@/utils/string';
import { StarFilledIcon } from '@radix-ui/react-icons';

const MyPlanPage = async () => {
  const session = await auth();

  const plan = await getUserCurrentPlan(session?.user.id as string);

  if (plan.name === getPlanUser.pro) {
    return (
      <Flex className='flex-wrap items-start gap-4 lg:gap-0'>
        <Flex className='max-w-[550px] flex-col gap-3 pr-5'>
          <p className='text-lg text-primary'>Atualmente você está no plano {getUpperCaseString(plan.name)}.</p>
          <h3 className='text-xl font-semibold text-slate-700'>Parabéns você desbloqueou avaliações no seu perfil!</h3>
          <Flex className='gap-2'>
            <StarFilledIcon width={30} height={30} color='#FFCE00' />
            <StarFilledIcon width={30} height={30} color='#FFCE00' />
            <StarFilledIcon width={30} height={30} color='#FFCE00' />
            <StarFilledIcon width={30} height={30} color='#FFCE00' />
            <StarFilledIcon width={30} height={30} color='#FFCE00' />
          </Flex>
          <p>
            Agora os usuários já podem deixar avaliações, notas e feedbacks ilimitados no seu perfil.
          </p>
        </Flex>
        <Flex className='flex-1 rounded-md border border-primary p-3'>
          <div className='flex w-full flex-col gap-2'>
            <Flex className='w-full items-center justify-between gap-3'>
              <p className='font-semibold text-slate-700'>Valor do seu PRO:</p>
              <p className='text-xl font-semibold text-primary'>R$ 10,00</p>
            </Flex>
            <Flex className='flex-col'>
              <p className='text-sm'>
                Para cancelar o seu pro entre em contato com o número:
              </p>
              <span className='text-xl text-primary'> (98) 989101285</span>
            </Flex>
          </div>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex className='flex-wrap items-start gap-4 lg:gap-0'>
      <Flex className='max-w-[550px] flex-col gap-3 pr-5'>
        <p className='text-lg text-primary'>Atualmente você está no plano {getUpperCaseString(plan.name)}.</p>
        <h3 className='text-xl font-semibold text-slate-700'>Quer desbloquer avaliações no seu perfil?</h3>
        <Flex className='gap-2'>
          <StarFilledIcon width={30} height={30} color='#FFCE00' />
          <StarFilledIcon width={30} height={30} color='#FFCE00' />
          <StarFilledIcon width={30} height={30} color='#FFCE00' />
          <StarFilledIcon width={30} height={30} color='#FFCE00' />
          <StarFilledIcon width={30} height={30} color='#FFCE00' />
        </Flex>
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
