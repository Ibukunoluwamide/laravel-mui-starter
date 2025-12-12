import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import { CreditCard, ReceiptLong } from '@mui/icons-material';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User', href: '/user' },
    { title: 'Billing', href: '/user/billing' },
];

export default function UserBilling() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User | Billing" />
            <Stack spacing={3}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ borderRadius: 3 }}>
                            <CardContent>
                                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                    <CreditCard color="primary" />
                                    <Typography variant="h6">Payment method</Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Visa ending in 4242 · Expires 08/27
                                </Typography>
                                <Button variant="contained" sx={{ mt: 2 }}>
                                    Update card
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" sx={{ borderRadius: 3 }}>
                            <CardContent>
                                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                                    <ReceiptLong color="primary" />
                                    <Typography variant="h6">Invoices</Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Last invoice: $79 on Nov 01, 2025
                                </Typography>
                                <Button variant="outlined" sx={{ mt: 2 }}>
                                    View invoices
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Stack>
        </AppLayout>
    );
}


