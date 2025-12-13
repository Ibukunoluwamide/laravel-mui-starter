import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, Stack, Switch, Typography, FormControlLabel } from '@mui/material';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'User', href: '/user' },
    { title: 'Notifications', href: '/user/notifications' },
];

export default function UserNotifications() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="User | Notifications" />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Notification preferences
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Control email and in-app alerts for your account.
                    </Typography>
                    <Stack spacing={1.5} mt={2}>
                        {[
                            { label: 'Product updates', defaultChecked: true },
                            { label: 'Billing receipts', defaultChecked: true },
                            { label: 'Weekly reports', defaultChecked: false },
                            { label: 'Security alerts', defaultChecked: true },
                        ].map((item) => (
                            <FormControlLabel
                                key={item.label}
                                control={<Switch defaultChecked={item.defaultChecked} />}
                                label={item.label}
                            />
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </AppLayout>
    );
}



