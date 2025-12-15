
import { Box } from '@mui/material';
import { usePage } from '@inertiajs/react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import { BreadcrumbItem, SharedData } from '@/types';
import { useMemo, useState } from 'react';
import { adminNav, publicNav, userNav } from '../constants/navigation';


type NavFilter = 'all' | 'admin' | 'user' | 'public';

export function LayoutNav({
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
        auth?.admin ? 'admin' :
            auth?.user ? 'user' :
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
    const drawerWidth = 240;

    return (
        <>

            <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
                {/* ---------------- SIDEBAR ---------------- */}
                <Box
                    component="nav"
                    sx={{
                        width: { md: drawerWidth },
                        flexShrink: 0,
                        display: { xs: 'none', md: 'block' },
                        zIndex: (theme) => theme.zIndex.drawer,
                    }}
                >
                    <Sidebar
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
                </Box>

                {/* ---------------- MAIN COLUMN (Navbar + Content) ---------------- */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        minWidth: 0, // 🚨 VERY IMPORTANT FOR DATAGRID
                    }}
                >
                    {/* -------------- NAVBAR ALWAYS VISIBLE -------------- */}
                    <Navbar
                        breadcrumbs={breadcrumbs}
                        mobileOpen={mobileOpen}
                        setMobileOpen={setMobileOpen}
                        account={account}
                        accountType={resolvedFilter}
                        logoutUrl={logoutUrl}
                    />

                    {/* -------------- MAIN CONTENT -------------- */}
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            p: { xs: 2, md: 3 },
                            mt: 14,
                            width: '100%',
                            minWidth: 0, // 🚨 REQUIRED
                            overflowX: 'auto',
                        }}
                    >
                        {children}
                    </Box>

                </Box>
            </Box>
        </>
    );
}
