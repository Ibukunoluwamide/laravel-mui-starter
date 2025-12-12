import { DashboardFrame } from '@/components/layout/dashboard-frame';
import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';

type AdminShellProps = {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
};

export function AdminShell({ children, breadcrumbs = [] }: AdminShellProps) {
       const { props } = usePage<SharedData>();
        const auth = props.auth ?? { guard: 'guest', user: null, admin: null };
         console.log(props);
        const navFilter = auth?.admin ? 'admin' : 'all'
            
    return (
        <DashboardFrame breadcrumbs={breadcrumbs} navFilter={navFilter}>
            {children}
        </DashboardFrame>
    );
}