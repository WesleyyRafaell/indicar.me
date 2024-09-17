'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { personaRegisterSchema } from '@/schemas/persona-register';
import { updatePersona } from '@/services/actions/persona-register-actions';
import { IPersonaRegisterPageSelectPros } from '@/types/page/persona-register-page';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

export default function PersonaRegisterTemplate () {

  const form = useForm<IPersonaRegisterPageSelectPros>({
    resolver: zodResolver(personaRegisterSchema),
  });

  const { register, watch, control, handleSubmit } = form;

  const typePersonaField = watch('typePersona');

  const onSubmit = async (values: IPersonaRegisterPageSelectPros) => {

    if (!values.typePersona) return;

    await updatePersona(values);

  };

  return (
    <Card className='w-full max-w-md'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Olá 😊</CardTitle>
          <CardDescription>O que você está buscando no nosso sistema?</CardDescription>
        </CardHeader>
        <CardContent className='w-full'>
          <Controller
            control={control}
            name='typePersona'
            render={({ field }) => (
              <Select onValueChange={field.onChange} {...field}>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione' />
                </SelectTrigger>
                <SelectContent className='w-full'>
                  <SelectItem value='1'>Estou buscando profissional</SelectItem>
                  <SelectItem value='2'>Sou profissional</SelectItem>
                </SelectContent>
              </Select>
            )}>
          </Controller>
          {typePersonaField === '1' && (
            <div className='pl-2 pt-5'>
              <p className='text-sm'>Ótimo! Vamos achar o melhor profissional para você ❤️</p>
            </div>
          )}
          {typePersonaField === '2' && (
            <Card className='mt-5'>
              <CardHeader>
                <CardTitle>Queremos lhe conhecer melhor ❤️</CardTitle>
                <CardDescription>
                Por favor nos conte mais sobre sua profissão nos campos abaixo. Podem ser editados posteriormente.
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col gap-5'>

                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='typeProfessional'>Qual a sua profissão?*</Label>
                  <Input
                    id='typeProfessional'
                    type='text'
                    placeholder='Ex: Encanador'
                    required
                    {...register('typeProfessional')}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='experience'>Experiência*</Label>
                  <Controller
                    control={control}
                    name='experience'

                    render={({ field }) => (
                      <Select required onValueChange={field.onChange} {...field}>
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
                </div>
                <div className='flex gap-3'>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='city'>Cidade*</Label>
                    <Input
                      id='city'
                      type='text'
                      placeholder='Ex: São Luís'
                      required
                      {...register('city')}
                    />
                  </div>
                  <div className='flex flex-col space-y-1.5'>
                    <Label htmlFor='state'>Estado*</Label>
                    <Input
                      id='state'
                      type='text'
                      placeholder='Ex: Maranhão'
                      required
                      {...register('state')}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button className='w-full' type='submit'>Continuar</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
