import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Stack,
    Typography,
    Button,
} from '@mui/material';
import { CreditScore, ReceiptLong } from '@mui/icons-material';
import { AdminShell } from '@/components/admin-shell';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'Billing', href: '/admin/billing' },
];

export default function AdminBilling() {
    return (
        <AdminShell breadcrumbs={breadcrumbs}>
            <Head title="Admin | Billing" />
            <Stack spacing={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" >
                            <CardContent>
                                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                    <ReceiptLong color="primary" />
                                    <Typography variant="h6">Subscription</Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Current plan: Growth (annual)
                                </Typography>
                                <Typography variant="h4" mt={2}>
                                    $948 / year
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Renewing on Jan 1, 2026
                                </Typography>
                                <Button variant="contained" sx={{ mt: 2 }}>
                                    Update payment method
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" >
                            <CardContent>
                                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                    <CreditScore color="primary" />
                                    <Typography variant="h6">Usage</Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Seats, API calls, and storage
                                </Typography>
                                <Stack spacing={1.5} mt={2}>
                                    {[
                                        { label: 'Seats used', value: 14, total: 20 },
                                        { label: 'API calls (monthly)', value: 62_000, total: 100_000 },
                                        { label: 'Storage', value: 120, total: 200, unit: 'GB' },
                                    ].map((item) => {
                                        const percent = Math.min(
                                            100,
                                            Math.round((item.value / item.total) * 100),
                                        );
                                        return (
                                            <Stack key={item.label} spacing={0.5}>
                                                <Stack
                                                    direction="row"
                                                    justifyContent="space-between"
                                                >
                                                    <Typography variant="body2">
                                                        {item.label}
                                                    </Typography>
                                                    <Typography variant="body2" fontWeight={600}>
                                                        {item.value.toLocaleString()} /{' '}
                                                        {item.total.toLocaleString()}
                                                        {item.unit ? ` ${item.unit}` : ''}
                                                    </Typography>
                                                </Stack>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={percent}
                                                    sx={{ borderRadius: 2, height: 8 }}
                                                />
                                            </Stack>
                                        );
                                    })}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Stack>
        </AdminShell>
    );
}



