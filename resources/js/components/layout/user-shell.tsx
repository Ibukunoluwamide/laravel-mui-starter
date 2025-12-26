import { SharedData, type BreadcrumbItem } from '@/types';
import { usePage } from '@inertiajs/react';
import FlashHandler from '../flash-handler';
import LoaderOverlay from '../loader-overlay';
import AppLayout from '@/layouts/app-layout';

type UserShellProps = {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
};

export function UserShell({ children, breadcrumbs = [] }: UserShellProps) {
    const { props } = usePage<SharedData>();
    const auth = props.auth ?? { guard: 'guest', user: null, admin: null };
    const navFilter = auth?.user ? 'user' : 'all';
    return (
        <AppLayout breadcrumbs={breadcrumbs} navFilter={navFilter}>
            <LoaderOverlay />
            <FlashHandler />

            {children}
        </AppLayout>
    );
}
