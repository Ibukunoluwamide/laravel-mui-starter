import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {
    Avatar,
    AvatarGroup,
    Button,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
} from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { Add, GroupAdd } from '@mui/icons-material';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'Team', href: '/admin/team' },
];

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Member', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 0.7 },
    { field: 'status', headerName: 'Status', flex: 0.6 },
    { field: 'joined', headerName: 'Joined', flex: 0.6 },
];

const rows = [
    { id: 1, name: 'Jane Doe', role: 'Owner', status: 'Active', joined: '2024-01-10' },
    { id: 2, name: 'Ola Bello', role: 'Admin', status: 'Active', joined: '2024-02-12' },
    { id: 3, name: 'Kayla Holt', role: 'Finance', status: 'Pending', joined: 'Pending' },
];

export default function TeamManagement() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin | Team" />
            <Stack spacing={3}>
                <Card variant="outlined" sx={{ borderRadius: 3 }}>
                    <CardContent>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems={{ xs: 'flex-start', sm: 'center' }}
                            spacing={2}
                        >
                            <Stack spacing={0.5}>
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <GroupAdd color="primary" />
                                    <Typography variant="h6">Invite teammates</Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secondary">
                                    Grant granular permissions by role.
                                </Typography>
                            </Stack>
                            <Button variant="contained" startIcon={<Add />}>
                                Send invite
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Card variant="outlined" sx={{ borderRadius: 3 }}>
                    <CardContent>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                        >
                            <Stack spacing={0.5}>
                                <Typography variant="h6">Members</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Roles, status, and onboarding progress
                                </Typography>
                            </Stack>
                            <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                <Avatar>J</Avatar>
                                <Avatar>O</Avatar>
                                <Avatar>K</Avatar>
                                <Avatar>S</Avatar>
                            </AvatarGroup>
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
                        <Stack direction="row" spacing={1} mt={2}>
                            <Chip label="RBAC" size="small" />
                            <Chip label="Provisioning" size="small" />
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </AppLayout>
    );
}


