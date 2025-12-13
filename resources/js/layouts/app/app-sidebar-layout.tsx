import { UserShell } from '@/components/user-shell';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <UserShell breadcrumbs={breadcrumbs}>{children}</UserShell>
    );
}
