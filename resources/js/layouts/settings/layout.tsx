import Heading from '@/components/heading';
import {  isSameUrl, resolveUrl } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { type PropsWithChildren } from 'react';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: '/settings/profile',
        icon: null,
    },
    {
        title: 'Password',
        href: '/settings/password',
        icon: null,
    },
   
    {
        title: 'Appearance',
        href: '/settings/appearance',
        icon: null,
    },
];

export default function SettingsLayout({ children }: PropsWithChildren) {
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <Box px={2} py={4}>
            <Heading
                title="Settings"
                description="Manage your profile and account settings"
            />

            <Stack
                direction={{ xs: 'column', lg: 'row' }}
                spacing={4}
                mt={3}
                alignItems="flex-start"
            >
                <Paper variant="outlined" sx={{ minWidth: 220, p: 1 }}>
                    <List dense sx={{ width: '100%' }}>
                        {sidebarNavItems.map((item, index) => (
                            <ListItemButton
                                key={`${resolveUrl(item.href)}-${index}`}
                                component={Link as never}
                                href={item.href}
                                selected={isSameUrl(currentPath, item.href)}
                                sx={{ borderRadius: 1.5, mb: 0.5 }}
                            >
                                <ListItemText
                                    primary={
                                        <Typography fontWeight={600} variant="body2">
                                            {item.title}
                                        </Typography>
                                    }
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Paper>

                <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', lg: 'block' } }} />

                <Box flex={1} maxWidth={720}>
                    <section className="max-w-xl space-y-12">
                        {children}
                    </section>
                </Box>
            </Stack>
        </Box>
    );
}
