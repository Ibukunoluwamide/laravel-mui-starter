import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import FlashHandler from '../flash-handler';
import LoaderOverlay from '../loader-overlay';
import AppLayout from '@/layouts/app-layout';

type AdminShellProps = {
    breadcrumbs?: BreadcrumbItem[];
    children: React.ReactNode;
};

export function AdminShell({ children, breadcrumbs = [] }: AdminShellProps) {
    const { props } = usePage<SharedData>();
    const auth = props.auth ?? { guard: 'guest', user: null, admin: null };
    const navFilter = auth?.admin ? 'admin' : 'all';

    return (
        <AppLayout breadcrumbs={breadcrumbs} navFilter={navFilter}>
            <LoaderOverlay />
            <FlashHandler />
            {children}
        </AppLayout>
    );
}
