import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Button,
    Card,
    CardContent,
    Chip,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Add, VpnKey } from '@mui/icons-material';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'API tokens', href: '/admin/api-tokens' },
];

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Token name', flex: 1 },
    { field: 'lastUsed', headerName: 'Last used', flex: 0.8 },
    { field: 'scope', headerName: 'Scopes', flex: 1 },
    { field: 'created', headerName: 'Created', flex: 0.7 },
];

const rows = [
    { id: 1, name: 'Admin dashboard', lastUsed: 'Today', scope: 'admin:read, admin:write', created: '2d ago' },
    { id: 2, name: 'Billing sync', lastUsed: '6h ago', scope: 'billing:read', created: '6d ago' },
    { id: 3, name: 'Analytics ETL', lastUsed: '12h ago', scope: 'analytics:read', created: '12d ago' },
];

export default function ApiTokensPage() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | API tokens" />
            <Stack spacing={3}>
                <Card variant="outlined" sx={{ borderRadius: 3 }}>
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
                            <TextField fullWidth label="Token name" placeholder="Service or integration name" />
                            <TextField fullWidth label="Scopes" placeholder="admin:read, billing:write" />
                        </Stack>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 3 }}>
                    <CardContent>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={2}
                        >
                            <Stack spacing={0.5}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <VpnKey color="primary" />
                                    <Typography variant="h6">Existing tokens</Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Tokens issued via Laravel Sanctum
                                </Typography>
                            </Stack>
                            <Chip label="Sanctum-ready" color="success" variant="outlined" />
                        </Stack>
                        <div style={{ height: 320, width: '100%' }}>
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
            </Stack>
        </AppLayout>
    );
}


