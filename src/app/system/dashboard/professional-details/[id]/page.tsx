import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function ProfessionalDetailsPage () {
  return (
    <Card className='p-4'>
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
      <Flex className='mb-6 mt-3 w-full max-w-[300px] flex-col justify-center'>
        <Flex className='flex-col pt-2'>
          <p className='text-sm font-bold text-primary'>Email</p>
          <p className='text-sm font-bold text-slate-600'>rafaelsanto10s@gmail.com</p>
        </Flex>
        <Flex className='justify-between'>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Telefone</p>
            <p className='text-sm font-bold text-slate-600'>98989101285</p>
          </Flex>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Celular</p>
            <p className='text-sm font-bold text-slate-600'>98989101285</p>
          </Flex>
        </Flex>
        <Flex className='justify-between'>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Instagram</p>
            <p className='text-sm font-bold text-slate-600'>weslieysanto</p>
          </Flex>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Facebook</p>
            <p className='text-sm font-bold text-slate-600'>weslieysanto</p>
          </Flex>
        </Flex>
        <Flex className='justify-between'>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>Linkedin</p>
            <p className='text-sm font-bold text-slate-600'>weslieysanto</p>
          </Flex>
          <Flex className='flex-col pt-2'>
            <p className='text-sm font-bold text-primary'>WhatsApp</p>
            <p className='text-sm font-bold text-slate-600'>98989101285</p>
          </Flex>
        </Flex>
      </Flex>
      <Card className='mt-3 px-3 py-2'>
        <CardTitle className='text-base font-bold text-primary'>Um pouco sobre mim</CardTitle>
        <CardDescription className='max-h-[500px]'>
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
      <Flex className='mb-4 mt-10 w-full items-start justify-center'>
        <Flex className='flex-col items-center gap-2'>
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
          <Flex className='flex-col gap-5'>
            <Flex className='w-[450px] flex-col rounded-sm border border-slate-300 p-2'>
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
            <Flex className='w-[450px] flex-col rounded-sm border border-slate-300 p-2'>
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
            <Flex className='w-[450px] flex-col rounded-sm border border-slate-300 p-2'>
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
