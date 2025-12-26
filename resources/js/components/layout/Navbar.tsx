import CustomDatePicker from '@/components/date-picker';
import ColorModeToggle from '@/theme/ColorModeToggle';
import { Link as InertiaLink } from '@inertiajs/react';
import { Menu as MenuIcon, NotificationsNone } from '@mui/icons-material';
import {
    AppBar,
    Button,
    Chip,
    IconButton,
    Stack,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import { Breadcrumbs } from '../breadcrumbs';

export function Navbar({ breadcrumbs, mobileOpen, setMobileOpen, accountType}) {
    return (
        <AppBar
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
                borderBottom: 1,
                borderColor: 'divider',
                backgroundImage: 'none',
                width: { md: `calc(100% - 240px)` },
                ml: { md: `240px` },
                zIndex: (theme) => theme.zIndex.appBar + 1,
            }}
        >
            {/* ------- TOP TOOLBAR ------- */}
            <Toolbar sx={{ gap: 1 }}>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>

                <Stack direction="row" spacing={2} alignItems="center">
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
                        sx={{
                            display: accountType == 'admin' ? 'none' : '',
                        }}
                    >
                        Upgrade
                    </Button>
                       
                </Stack>
            </Toolbar>

            {/* ------- BREADCRUMBS ------- */}
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </AppBar>
    );
}
