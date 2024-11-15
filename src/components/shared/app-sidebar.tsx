import { User } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { getSession } from '@/utils/auth/session';
import { Collapsible, CollapsibleTrigger } from '../ui/collapsible';
import { CollapsibleContent } from '@radix-ui/react-collapsible';

const items = [
  {
    title: 'Clientes',
    icon: User,
    submenus: [
      { title: 'Todos os clientes', href: '/customers' },
      { title: 'Cadastrar clientes', href: '/customers/register' },
    ],
  },
];

export async function AppSidebar() {
  const user = await getSession();
  return (
    <Sidebar>
      <SidebarContent className="px-2">
        <SidebarHeader className="py-5">
          <SidebarGroupLabel className="text-md flex flex-col items-start">
            {user?.name ? `Olá, ${user.name}` : 'Olá, usuário'}
            <span className="text-sm">{user?.email}</span>
          </SidebarGroupLabel>
        </SidebarHeader>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.icon && <item.icon className="mr-2" />}
                      {item.title}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.submenus.map((submenu) => (
                      <SidebarMenuItem key={submenu.title}>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton asChild>
                              <Link href={submenu.href}>{submenu.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </SidebarMenuItem>
                    ))}
                  </CollapsibleContent>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  );
}
