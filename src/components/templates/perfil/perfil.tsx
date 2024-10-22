'use client';

import Flex from '@/components/atoms/flex/flex';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { typePersona } from '@/enum/persona';
import { useToast } from '@/hooks/use-toast';
import { professionalSchema } from '@/schemas/professional';
import { updateUser } from '@/services/actions/user.actions';
import { IProfessionalSelectPros } from '@/types/page/professional';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

const PerfilTemplate = (props: IProfessionalSelectPros) => {
  const { toast } = useToast();

  const form = useForm<IProfessionalSelectPros>({
    resolver: zodResolver(professionalSchema),
    defaultValues: {
      name: props.name || '',
      typeProfessional: props.typeProfessional || '',
      email: props.email || '',
      experience: props.experience || '',
      city: props.city || '',
      state: props.state || '',
      tell: props?.tell || '',
      cell: props?.cell || '',
      aboutme: props?.aboutme || '',
      facebook: props?.facebook || '',
      whatsapp: props?.whatsapp || '',
      instagram: props?.instagram || '',
      linkedin: props?.linkedin || '',
    },
  });

  const { register, control, handleSubmit, formState: { errors } } = form;

  const onSubmit = async (values: IProfessionalSelectPros) => {

    await updateUser(values);

    toast({
      className: 'bg-primary  text-white',
      title: 'Sucesso',
      description: 'Suas informações foram salvas.',
    });

  };

  const getHeaderByPersona = () => {
    if (props.typePersona === typePersona.professional) {
      return (
        <Flex className='mb-8 flex-col gap-2'>
          <h1 className='text-2xl font-bold text-primary'>Mantenha seu perfil atualizado</h1>
          <p>Quanto mais informações você oferecer, maior são as chances do seu serviço ser contratado.</p>
        </Flex>
      );
    }

    if (props.typePersona === typePersona.user) {
      return (
        <Flex className='mb-8 flex-col gap-2'>
          <h1 className='text-2xl font-bold text-primary'>Suas informações</h1>
          <p>Estas são suas informações que ficarão visíveis para todos.</p>
        </Flex>
      );
    }

    return <></>;
  };

  const getFormFieldsByPersona = () => {
    if (props.typePersona === typePersona.professional) {
      return (
        <Flex className='flex-col gap-6'>
          <Flex className='w-full gap-5'>
            <Avatar>
              <AvatarImage src={props.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Flex>
          <Flex className='w-full gap-5'>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='name'>Nome</Label>
              <Input
                id='name'
                type='text'
                {...register('name')}
              />
            </div>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='typeProfessional'>Qual a sua profissão?*</Label>
              <Input
                id='typeProfessional'
                type='text'
                placeholder='Ex: Encanador'
                {...register('typeProfessional')}
              />
              <p className='text-xs text-red-600'>{errors.typeProfessional?.message || ''}</p>
            </div>
          </Flex>
          <Flex className='w-full gap-5'>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                {...register('email')}
                disabled
              />
            </div>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='experience'>Experiência*</Label>
              <Controller
                control={control}
                name='experience'
                render={({ field }) => (
                  <Select onValueChange={field.onChange} {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder='Seu tempo de Experiência ' />
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                      <SelectItem value='0'>Meses de experiencia</SelectItem>
                      <SelectItem value='1'>Entre 1 a 5 anos</SelectItem>
                      <SelectItem value='2'>Entre 5 a 10 anos</SelectItem>
                      <SelectItem value='3'>Mais de 10 anos</SelectItem>
                    </SelectContent>
                  </Select>
                )}>
              </Controller>
              <p className='text-xs text-red-600'>{errors.experience?.message || ''}</p>
            </div>
          </Flex>
          <Flex className='w-full gap-5'>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='city'>Cidade*</Label>
              <Input
                id='city'
                type='text'
                placeholder='Ex: São Luís'
                {...register('city')}
              />
              <p className='text-xs text-red-600'>{errors.city?.message || ''}</p>
            </div>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='state'>Estado*</Label>
              <Input
                id='state'
                type='text'
                placeholder='Ex: Maranhão'
                {...register('state')}
              />
              <p className='text-xs text-red-600'>{errors.state?.message || ''}</p>
            </div>
          </Flex>
          <Flex className='w-full gap-5'>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='whatsapp'>Whatsapp</Label>
              <Input
                id='whatsapp'
                type='text'
                {...register('whatsapp')}
                placeholder='ex: 98981151382'
              />
            </div>
          </Flex>
          <Flex className='w-full gap-5'>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='aboutme'>Espaço aberto para falar um pouco mais sobre você e sua profissão</Label>
              <Textarea
                className='h-[100px]'
                id='aboutme'
                {...register('aboutme')}
              />
            </div>
          </Flex>
        </Flex>
      );
    }

    if (props.typePersona === typePersona.user) {
      return (
        <Flex className='flex-col gap-6'>
          <Flex className='w-full gap-5'>
            <Avatar>
              <AvatarImage src={props.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Flex>
          <Flex className='w-full gap-5'>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='name'>Nome</Label>
              <Input
                id='name'
                type='text'
                {...register('name')}
              />
            </div>
            <div className='flex w-full flex-col space-y-1.5'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                {...register('email')}
                disabled
              />
            </div>
          </Flex>
        </Flex>
      );
    }

    return <></>;
  };

  return (
    <div>
      {getHeaderByPersona()}
      <form onSubmit={handleSubmit(onSubmit)}>
        {getFormFieldsByPersona()}
        <Flex className='mt-6 w-full justify-center'>
          <Button className='w-[350px]' type='submit'>Salvar</Button>
        </Flex>
      </form>
    </div>
  );
};

export default PerfilTemplate;
