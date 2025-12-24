import { GridColDef } from '@mui/x-data-grid';
import { Box, Button, Stack, Chip, Avatar } from '@mui/material';
import * as React from 'react';
import { AdminShell } from '@/components/admin-shell';
import Table from '@/components/table';
import { BreadcrumbItem } from '@/types';
import { router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin/dashboard' },
    { title: 'Users', href: '/admin/users' },
];

export default function UsersPage({ users }) {

    const columns = React.useMemo<GridColDef[]>(
        () => [
            { field: 'avatar', headerName: 'Avatar', width: 80,

                  renderCell: ({ row }) => (
                    <Stack>
                    <Avatar
                        src={row.avatar}
                        alt={row.name}
                    >
                    </Avatar>
                    </Stack>
                  )
             },

            { field: 'name', headerName: 'Name', flex: 1, minWidth: 160 },

            { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },

            {
                field: 'status',
                headerName: 'Status',
                minWidth: 120,
                renderCell: ({ value }) => (
                    <Chip
                        label={value}
                        size="small"
                        color={value === 'active' ? 'success' : 'warning'}
                        sx={{ 
                            color: '#f2f2f2',
                            textTransform: "capitalize"
                         }}
                    />
                ),
            },

            {
                field: 'last_login_at',
                headerName: 'Last Login',
                minWidth: 180,
            },

        ],
        [],
    );

    const handleDelete = (row) => {
        if (!confirm(`Delete "${row.name}"?`)) return;

        router.delete(`/admin/users/${row.id}`, {
            preserveScroll: true,
        });
    };

    return (
        <AdminShell breadcrumbs={breadcrumbs}>
            <Box>
                <Stack direction="row" justifyContent="end" mb={2}>
                    <Button
                        variant="contained"
                        onClick={() => router.visit('/admin/users/create')}
                    >
                        Create User
                    </Button>
                </Stack>

                <Table
                    title="Users"
                    rows={users.data}
                    columns={columns}
                    onDelete={handleDelete}
                    onEdit={(row) =>
                        router.visit(`/admin/users/${row.id}/edit`)
                    }
                    onRowClick={(row) =>
                        router.visit(`/admin/users/${row.id}/edit`)
                    }
                />
            </Box>
        </AdminShell>
    );
}
