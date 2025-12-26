import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardContent,
    Chip,
    Grid,
    Stack,
    Typography,
    Button,
    Box,
} from '@mui/material';
import {
    NotificationsNone,
    Person,
    ReceiptLong,
    ArrowForward,
} from '@mui/icons-material';
import { UserShell } from '@/components/layout/user-shell';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User', href: '/user' },
    { title: 'Overview', href: '/user' },
];

const stats = [
    {
        label: 'Profile completion',
        value: '92%',
        chip: 'Almost there',
        icon: <Person />,
        color: 'primary.main',
    },
    {
        label: 'Billing status',
        value: 'Active',
        chip: 'Paid',
        icon: <ReceiptLong />,
        color: 'success.main',
    },
    {
        label: 'Notifications',
        value: '4 unread',
        chip: 'Action required',
        icon: <NotificationsNone />,
        color: 'warning.main',
    },
];

export default function UserDashboard() {
    return (
        <UserShell breadcrumbs={breadcrumbs}>
            <Head title="User | Dashboard" />

            <Stack>
                {/* Stats */}
                <Grid container spacing={2}>
                    {stats.map((item) => (
                        <Grid item xs={12} md={4} key={item.label}>
                            <Card
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    transition: '0.2s',
                                    '&:hover': {
                                        boxShadow: 3,
                                        borderColor: 'primary.light',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Stack spacing={2}>
                                        {/* Icon + label */}
                                        <Stack direction="row" spacing={1.5} alignItems="center">
                                            <Box
                                                sx={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    bgcolor: 'action.hover',
                                                    color: item.color,
                                                }}
                                            >
                                                {item.icon}
                                            </Box>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {item.label}
                                            </Typography>
                                        </Stack>

                                        {/* Value */}
                                        <Typography variant="h4" fontWeight={700}>
                                            {item.value}
                                        </Typography>

                                        {/* Status */}
                                        <Chip
                                            label={item.chip}
                                            size="small"
                                            color="primary"
                                            sx={{ width: 'fit-content' }}
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Next Steps */}
                <Card
                    variant="outlined"
                    sx={{
                        marginTop: 4,
                        bgcolor: 'background.default',
                    }}
                >
                    <CardContent>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            spacing={3}
                        >
                            <Stack spacing={0.5}>
                                <Typography variant="h6" fontWeight={600}>
                                    Next steps
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Complete onboarding to unlock all workspace features
                                </Typography>
                            </Stack>

                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    href="/settings/profile"
                                >
                                    Update profile
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    endIcon={<ArrowForward />}
                                    href="/settings/two-factor"
                                >
                                    Enable 2FA
                                </Button>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </UserShell>
    );
}
