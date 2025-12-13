import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Stack } from '@mui/material';
import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { AdminShell } from '@/components/admin-shell';
import Table from '@/components/table';
import { Users, generateUsers } from './internals/data/users';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Admin', href: '/admin' },
    { title: 'User', href: '/admin/users' },
];

export default function EmployeesPage() {
    const [rows] = React.useState<Users[]>(() => generateUsers(40));

    const columns = React.useMemo<GridColDef[]>(
        () => [
            { field: 'id', headerName: 'ID', minWidth: 80 },
            { field: 'name', headerName: 'Name', flex: 1, minWidth: 160 },
            { field: 'age', headerName: 'Age', type: 'number', minWidth: 100 },
            { field: 'role', headerName: 'Department', minWidth: 160 },
            { field: 'joinDate', headerName: 'Join Date', minWidth: 140 },
            {
                field: 'isFullTime',
                headerName: 'Full-time',
                type: 'boolean',
                minWidth: 120,
            },
            {
                field: 'actions',
                type: 'actions',
                width: 120,
                getActions: ({ row }) => [
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        onClick={() => alert(`Edit ${row.name}`)}
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={() => alert(`Delete ${row.name}`)}
                    />,
                ],
            },
        ],
        [],
    );

    return (
        <AdminShell breadcrumbs={breadcrumbs}>
            <Box>
                <Stack
                    direction="row"
                    justifyContent="end"
                    alignItems="center"
                    mb={2}
                >
                    <Button variant="contained">Create</Button>
                </Stack>

                <Table
                    title="Users"
                    rows={rows}
                    columns={columns}
                    onRowClick={(row) => console.log('Row clicked:', row)}
                />
            </Box>
        </AdminShell>
    );
}
