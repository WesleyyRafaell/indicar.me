import Flex from '@/components/atoms/flex/flex';

const ContactCard = () => {
  return (
    <Flex className='mt-3 max-w-[300px] flex-col'>
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
  );
};

export default ContactCard;
