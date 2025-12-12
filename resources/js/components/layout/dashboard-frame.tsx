
import { Box } from '@mui/material';
import { usePage } from '@inertiajs/react';
import { LayoutNav } from './LayoutNav';
import { BreadcrumbItem, SharedData } from '@/types';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import { adminNav, publicNav, userNav } from '../constants/navigation';


type NavFilter = 'all' | 'admin' | 'user' | 'public';

export function DashboardFrame({
    children,
    breadcrumbs = [],
    navFilter = 'all',
}: {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    navFilter?: NavFilter;
}) {
    const { props, url } = usePage<SharedData>();
    const auth = props.auth ?? { guard: 'guest', user: null, admin: null };
    const [mobileOpen, setMobileOpen] = useState(false);

    const guardFromProps =
        auth?.guard === 'admin' ? 'admin' :
        auth?.guard === 'web' ? 'user' :
        'public';

    const resolvedFilter = navFilter !== 'all' ? navFilter : guardFromProps;

    const navItems = useMemo(() => {
        if (resolvedFilter === 'admin') return [{ title: 'Admin', items: adminNav }];
        if (resolvedFilter === 'user') return [{ title: 'User', items: userNav }];
        return [{ title: 'Public', items: publicNav }];
    }, [resolvedFilter]);

    const account =
        (resolvedFilter === 'admin' ? auth?.admin : auth?.user) ??
        auth?.user ??
        auth?.admin ??
        null;

    const apiTokensUrl =
        resolvedFilter === 'admin' ? '/admin/api-tokens' : '/user/api-tokens';

    const logoutUrl =
        resolvedFilter === 'admin' ? '/admin/logout' : '/logout';

    const profileUrl =
        resolvedFilter === 'admin' ? '/admin/settings' : '/settings/profile';

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>

            <LayoutNav
                breadcrumbs={breadcrumbs}
                resolvedFilter={resolvedFilter}
                navItems={navItems}
                account={account}
                url={url}
                apiTokensUrl={apiTokensUrl}
                logoutUrl={logoutUrl}
                profileUrl={profileUrl}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            {/* --------------- MAIN CONTENT AREA --------------- */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: { xs: 2, md: 2 },
                    mt: 14,
                    width: { xl: `calc(100% - 240px)` },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        maxWidth: 1440,
                        mx: 'auto',
                        width: '100%',
                    }}
                    className={cn('app-shell')}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
