import { InertiaLinkProps } from '@inertiajs/react';
import { ElementType } from 'react';

export type AuthGuard = 'admin' | 'web' | 'guest';

export interface Admin {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    created_at?: string;
    updated_at?: string;
    [key: string]: unknown;
}

export interface Auth {
    user: User | null;
    admin?: Admin | null;
    guard: AuthGuard;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: ElementType | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
