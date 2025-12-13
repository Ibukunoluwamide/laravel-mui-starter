import { DashboardFrame } from '@/components/layout/dashboard-frame';
import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import LoaderOverlay from './loader-overlay';

type UserShellProps = {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

export function UserShell({ children, breadcrumbs = [] }: UserShellProps) {
     const { props } = usePage<SharedData>();
            const auth = props.auth ?? { guard: 'guest', user: null, admin: null };
            const navFilter = auth?.user ? 'user' : 'all'
    return (
        <DashboardFrame breadcrumbs={breadcrumbs} navFilter={navFilter}>
                        <LoaderOverlay />
            
            {children}
        </DashboardFrame>
    );
}