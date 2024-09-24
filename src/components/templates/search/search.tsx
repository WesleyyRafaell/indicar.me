import { Input } from '@/components/ui/input';

const SearchTemplate = () => {
  return (
    <div>
      <div className='mb-6 flex flex-col gap-2'>
        <h1 className='text-2xl font-semibold text-primary'>De qual profissional você precisa hoje?</h1>
        <p className='max-w-[500px] font-normal text-slate-600'>Diversos tipos de profissionais
          e serviços para você, busque agora e encontre o que procura.
        </p>
      </div>
      <Input
        className='h-14 rounded-full'
        placeholder='O que você está buscando?'
      />
    </div>
  );
};

export default SearchTemplate;
