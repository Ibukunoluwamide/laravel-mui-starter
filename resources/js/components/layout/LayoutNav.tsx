import { isSameUrl, resolveUrl } from '@/lib/utils';
import ColorModeToggle from '@/theme/ColorModeToggle';
import { BreadcrumbItem, NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    Api,
    Menu as MenuIcon,
    NotificationsNone,
    SupportAgent,
    ViewSidebar,
} from '@mui/icons-material';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Chip,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Breadcrumbs as MUIBreadcrumbs,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { drawerClasses } from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import CustomDatePicker from '../date-picker';
import OptionsMenu from './OptionsMenu';

const drawerWidth = 240;
const InertiaLink = Link as unknown as React.ElementType;

interface LayoutNavProps {
    breadcrumbs: BreadcrumbItem[];
    resolvedFilter: string;
    navItems: { title: string; items: NavItem[] }[];
    account;
    url: string;
    apiTokensUrl: string;
    logoutUrl: string;
    profileUrl: string;
    mobileOpen: boolean;
    setMobileOpen: (v: boolean) => void;
}

export function LayoutNav({
    breadcrumbs,
    resolvedFilter,
    navItems,
    account,
    url,
    apiTokensUrl,
    logoutUrl,
    mobileOpen,
    setMobileOpen,
}: LayoutNavProps) {
    const prefersDesktop = useMediaQuery('(min-width:1200px)');

    const SidebarDrawer = styled(Drawer)(({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        boxSizing: 'border-box',
        [`& .${drawerClasses.paper}`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const drawer = (
        <Box
            role="presentation"
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                pb: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 2,
                    mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                }}
            >
                <ViewSidebar fontSize="small" />
                <Stack spacing={0.25} sx={{ mr: 'auto' }}>
                    <Typography
                        variant="subtitle1"
                        fontWeight={700}
                        lineHeight={1.2}
                    >
                        Laravel MUI
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {resolvedFilter === 'admin'
                            ? 'Admin'
                            : resolvedFilter === 'user'
                              ? 'User'
                              : 'Public'}
                    </Typography>
                </Stack>
                <Chip
                    size="small"
                    label="Pro"
                    color="secondary"
                    variant="outlined"
                />
            </Box>

            <Divider />

            <Stack spacing={3} sx={{ flex: 1, overflow: 'auto', p: 1 }}>
                {navItems.map((group) => (
                    <Box key={group.title}>
                        <Typography
                            variant="overline"
                            color="text.secondary"
                            sx={{ px: 1.5, letterSpacing: 0.6 }}
                        >
                            {group.title}
                        </Typography>
                        <List dense>
                            {group.items.map((item) => (
                                <ListItemButton
                                    key={resolveUrl(item.href)}
                                    component={InertiaLink}
                                    href={item.href}
                                    selected={isSameUrl(url, item.href)}
                                    sx={{
                                        borderRadius: 2,
                                        mb: 0.5,
                                    }}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.icon && (
                                        <ListItemIcon sx={{ minWidth: 34 }}>
                                            <item.icon
                                                fontSize="small"
                                                color={
                                                    isSameUrl(url, item.href)
                                                        ? 'primary'
                                                        : 'inherit'
                                                }
                                            />
                                        </ListItemIcon>
                                    )}
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                ))}
            </Stack>

            <Divider />

            <Stack spacing={1} px={2} pt={1}>
                <Button
                    startIcon={<Api />}
                    variant="outlined"
                    component={InertiaLink}
                    href={apiTokensUrl}
                    size="small"
                    fullWidth
                >
                    API tokens
                </Button>
                <Button
                    startIcon={<SupportAgent />}
                    variant="text"
                    href="mailto:support@example.com"
                    size="small"
                >
                    Contact support
                </Button>
            </Stack>

            {account && (
                <>
                    <Divider sx={{ mt: 1 }} />
                    <Stack
                        direction="row"
                        sx={{
                            p: 2,
                            gap: 1,
                            alignItems: 'center',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <Avatar
                            alt={account.name}
                            sx={{ width: 36, height: 36 }}
                        >
                            {account.name
                                ?.split(' ')
                                .map((n: string) => n[0])
                                .join('')}
                        </Avatar>
                        <Box sx={{ mr: 'auto' }}>
                            <Typography
                                variant="body2"
                                sx={{ fontWeight: 500, lineHeight: '16px' }}
                            >
                                {account.name}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{ color: 'text.secondary' }}
                            >
                                {account.email}
                            </Typography>
                        </Box>
                        <OptionsMenu logoutUrl={logoutUrl} />
                    </Stack>
                </>
            )}
        </Box>
    );

    // --------------------------------------------
    // RETURN NAVBAR + SIDEBAR
    // --------------------------------------------
    return (
        <>
            {/* NAVBAR */}
            <AppBar
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    backgroundImage: 'none',
                }}
            >
                <Toolbar sx={{ gap: 1 }}>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{ display: { xl: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Stack direction="row" spacing={4} alignItems="center">
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                display: { xs: 'none', md: 'block' },
                            }}
                        >
                            Laravel MUI Starter
                        </Typography>
                        <Chip
                            size="small"
                            label="SaaS"
                            color="primary"
                            variant="outlined"
                            sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
                        />
                    </Stack>

                    {/* Right section */}
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{ ml: 'auto' }}
                    >
                        <CustomDatePicker />
                        <ColorModeToggle />
                        <Tooltip title="Notifications">
                            <IconButton>
                                <NotificationsNone />
                            </IconButton>
                        </Tooltip>

                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                            component={InertiaLink}
                            href="/pricing"
                        >
                            Upgrade
                        </Button>
                    </Stack>
                </Toolbar>

                {breadcrumbs.length > 0 && (
                    <Toolbar
                        variant="dense"
                        sx={{
                            borderTop: 1,
                            borderColor: 'divider',
                            bgcolor: 'background.paper',
                            py: 1,
                        }}
                    >
                        <MUIBreadcrumbs aria-label="breadcrumb">
                            {breadcrumbs.map((crumb) => (
                                <Link
                                    key={crumb.href}
                                    href={crumb.href}
                                    className="text-sm font-medium text-neutral-600 hover:underline dark:text-neutral-300"
                                >
                                    {crumb.title}
                                </Link>
                            ))}
                        </MUIBreadcrumbs>
                    </Toolbar>
                )}
            </AppBar>

            {/* SIDEBAR */}
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="sidebar navigation"
            >
                {prefersDesktop ? (
                    <SidebarDrawer
                        variant="permanent"
                        open
                        sx={{ display: { xs: 'none', md: 'block' } }}
                    >
                        {drawer}
                    </SidebarDrawer>
                ) : (
                    <SidebarDrawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={() => setMobileOpen(false)}
                        ModalProps={{ keepMounted: true }}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        {drawer}
                    </SidebarDrawer>
                )}
            </Box>
        </>
    );
}
