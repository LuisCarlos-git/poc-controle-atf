'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Form, Input } from '@/components/form';

import { useLoginPage } from './hook';

export function LoginTemplate() {
  const { form } = useLoginPage();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Gerenciador ATF</CardTitle>
          <CardDescription>
            Digite seu email e senha para fazer login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form
            methods={form.methods}
            onSubmit={form.handleSignIn}
            className="grid gap-4"
          >
            <div className="grid gap-2">
              <Input name="email" label="Email*" type="email" />
              <Input name="password" label="Senha*" type="password" />
            </div>
            <Button
              isLoading={form.isSubmitting}
              type="submit"
              className="w-full mt-4"
            >
              Entrar
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
