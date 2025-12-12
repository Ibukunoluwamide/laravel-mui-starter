import { UserShell } from '@/components/user-shell';
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
} from '@mui/material';
import { NotificationsNone, Person, ReceiptLong } from '@mui/icons-material';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User', href: '/user' },
    { title: 'Overview', href: '/user' },
];

export default function UserDashboard() {
    return (
        <UserShell breadcrumbs={breadcrumbs}>
            <Head title="User | Dashboard" />
            <Stack spacing={3}>
                <Grid container spacing={2}>
                    {[
                        {
                            label: 'Profile completion',
                            value: '92%',
                            chip: 'Almost there',
                            icon: <Person color="primary" />,
                        },
                        {
                            label: 'Billing status',
                            value: 'Active',
                            chip: 'Paid',
                            icon: <ReceiptLong color="primary" />,
                        },
                        {
                            label: 'Notifications',
                            value: '4 unread',
                            chip: 'Action required',
                            icon: <NotificationsNone color="primary" />,
                        },
                    ].map((item) => (
                        <Grid item xs={12} md={4} key={item.label}>
                            <Card variant="outlined" sx={{ borderRadius: 3 }}>
                                <CardContent>
                                    <Stack spacing={1}>
                                        <Stack direction="row" spacing={1} alignItems="center">
                                            {item.icon}
                                            <Typography variant="body2" color="text.secondary">
                                                {item.label}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="h5" fontWeight={700}>
                                            {item.value}
                                        </Typography>
                                        <Chip label={item.chip} size="small" color="primary" />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Card variant="outlined" sx={{ borderRadius: 3 }}>
                    <CardContent>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            spacing={2}
                        >
                            <Stack spacing={0.5}>
                                <Typography variant="h6">Next steps</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Finish onboarding to unlock workspace features
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Button variant="outlined" size="small" href="/settings/profile">
                                    Update profile
                                </Button>
                                <Button variant="contained" size="small" href="/settings/two-factor">
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

