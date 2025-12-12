import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, Typography } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'Activity logs', href: '/admin/activity' },
];

const columns: GridColDef[] = [
    { field: 'event', headerName: 'Event', flex: 1.2 },
    { field: 'actor', headerName: 'Actor', flex: 0.8 },
    { field: 'context', headerName: 'Context', flex: 1 },
    { field: 'time', headerName: 'Time', flex: 0.6 },
];

const rows = [
    { id: 1, event: 'API token rotated', actor: 'Jane Doe', context: 'Admin / Security', time: '3m ago' },
    { id: 2, event: 'Role changed to Manager', actor: 'Ola Bello', context: 'User permissions', time: '15m ago' },
    { id: 3, event: 'Billing plan upgraded', actor: 'Chris Paul', context: 'Team / Billing', time: '1h ago' },
    { id: 4, event: 'Two-factor enforced', actor: 'System', context: 'Security policy', time: '1h ago' },
];

export default function ActivityLogs() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Activity logs" />
            <Card variant="outlined" sx={{ borderRadius: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Activity logs
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Export-ready audit events for compliance.
                    </Typography>
                    <div style={{ height: 360, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            hideFooter
                            disableRowSelectionOnClick
                            sx={{ border: 0 }}
                        />
                    </div>
                </CardContent>
            </Card>
        </AppLayout>
    );
}


