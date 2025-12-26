import { AdminShell } from '@/components/layout/admin-shell';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';
import { Add } from '@mui/icons-material';
import Table from '@/components/table';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'API tokens', href: '/admin/api-tokens' },
];

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Token name', flex: 1 },
    { field: 'lastUsed', headerName: 'Last used', flex: 1 },
    { field: 'scope', headerName: 'Scopes', flex: 1 },
    { field: 'created', headerName: 'Created', flex: 1 },
];

const rows = [
    { id: 1, name: 'Admin dashboard', lastUsed: 'Today', scope: 'admin:read, admin:write', created: '2d ago' },
    { id: 2, name: 'Billing sync', lastUsed: '6h ago', scope: 'billing:read', created: '6d ago' },
    { id: 3, name: 'Analytics ETL', lastUsed: '12h ago', scope: 'analytics:read', created: '12d ago' },
];

export default function ApiTokensPage() {
    return (
        <AdminShell breadcrumbs={breadcrumbs}>
            <Head title="Admin | API tokens" />
            <Stack spacing={3}>
                <Card variant="outlined">
                    <CardContent>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="space-between"
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                        >
                            <Stack spacing={0.5}>
                                <Typography variant="h6">Create new token</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rotate tokens regularly and scope minimally.
                                </Typography>
                            </Stack>
                            <Button
                                variant="contained"
                                startIcon={<Add />}
                                size="small"
                            >
                                Generate token
                            </Button>
                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
                            <TextField fullWidth placeholder="Token name" />
                            <TextField fullWidth placeholder="Scopes"  />
                        </Stack>
                    </CardContent>
                </Card>

               <Table
                rows={rows}
                columns={columns}
                title="Token"
                defaultPageSize={10}
                actionButton

            />
            </Stack>
        </AdminShell>
    );
}





