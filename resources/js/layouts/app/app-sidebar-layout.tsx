import { DashboardFrame } from '@/components/layout/dashboard-frame';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function AppSidebarLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <DashboardFrame breadcrumbs={breadcrumbs}>{children}</DashboardFrame>
    );
}
