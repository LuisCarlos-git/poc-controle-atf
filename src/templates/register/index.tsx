import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export function RegisterTemplate() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Gerenciador ATF</CardTitle>
          <CardDescription>Digite seus dados para cadastro!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <div>
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
          <Link
            href="/"
            className="ml-auto inline-block text-sm underline mt-4"
          >
            já tenho uma conta
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
