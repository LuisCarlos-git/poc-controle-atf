import Link from 'next/link';

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

export function LoginTemplate() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Gerenciador ATF</CardTitle>
          <CardDescription>
            Digite seu email e senha para fazer login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
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
            href="/register"
            className="ml-auto inline-block text-sm underline mt-4"
          >
            Não tenho conta ainda
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
