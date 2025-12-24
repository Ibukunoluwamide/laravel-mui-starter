import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';
import {
    DataGrid,
    GridActionsCellItem,
    GridColDef,
    GridPaginationModel,
    GridSortModel,
} from '@mui/x-data-grid';
import * as React from 'react';
import DataTableToolbar from './DataTableToolbar';

interface DataTableProps<T> {
    title?: string;
    rows: T[];
    columns: GridColDef[];
    loading?: boolean;
    pageSizeOptions?: number[];
    defaultPageSize?: number;
    onRowClick?: (row: T) => void;
    actionButton?: boolean;
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
}

const buildActionsColumn = <T extends { id: number | string }>({
    onEdit,
    onDelete,
}: {
    onEdit?: (row: T) => void;
    onDelete?: (row: T) => void;
}): GridColDef => ({
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    width: 120,
    getActions: (params) => {
        const row = params.row as T;

        const actions: React.JSX.Element[] = [];

        if (onEdit) {
            actions.push(
                <GridActionsCellItem
                    key="edit"
                    icon={<EditIcon />}
                    label="Edit"
                    onClick={() => onEdit(row)}
                />
            );
        }

        if (onDelete) {
            actions.push(
                <GridActionsCellItem
                    key="delete"
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() => onDelete(row)}
                />
            );
        }

        return actions;
    },
});



export default function Table<T extends { id: number | string }>({
    title = 'Table',
    rows,
    columns,
    loading = false,
    pageSizeOptions = [5, 10, 25],
    defaultPageSize = 10,
    onRowClick,
    actionButton = true,
    onEdit,
    onDelete,
}: DataTableProps<T>) {
    const [paginationModel, setPaginationModel] =
        React.useState<GridPaginationModel>({
            page: 0,
            pageSize: defaultPageSize,
        });

    const [sortModel, setSortModel] = React.useState<GridSortModel>([]);
    const [search, setSearch] = React.useState('');

    const finalColumns = React.useMemo(() => {
        if (!actionButton) return columns;

        return [
            ...columns,
            buildActionsColumn<T>({ onEdit, onDelete }),
        ];
    }, [columns, actionButton, onEdit, onDelete]);

    return (
        <Paper
        sx={{
            width: '100%',
            overflowX: 'auto',
            borderRadius: 2,
            border: '1px solid',
            borderColor: 'divider',
        }}
    >
        <DataGrid
            rows={rows}
            columns={finalColumns}
            loading={loading}
            pagination
            disableRowSelectionOnClick
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            sortModel={sortModel}
            onSortModelChange={setSortModel}
            pageSizeOptions={pageSizeOptions}          
            filterModel={{
                items: [],
                quickFilterValues: search ? [search] : [],
            }}
            onRowClick={(params) => onRowClick?.(params.row)}
            slots={{
                toolbar: DataTableToolbar,
            }}
            slotProps={{
                toolbar: {
                    title,
                    search,
                    onSearchChange: setSearch,
                },
                baseIconButton: { size: 'small' },
            }}
            sx={{
                border: 0,
    
                /* Header */
                '& .MuiDataGrid-columnHeaders': {
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.paper',
                    fontWeight: 600,
                },
    
                /* Vertical column lines */
                '& .MuiDataGrid-cell': {
                    borderRight: '1px solid',
                    borderColor: 'divider',
                },
                '& .MuiDataGrid-columnHeader': {
                    borderRight: '1px solid',
                    borderColor: 'divider',
                },
    
                /* Remove last column right border */
                '& .MuiDataGrid-cell:last-of-type, & .MuiDataGrid-columnHeader:last-of-type': {
                    borderRight: 'none',
                },
    
                /* Row lines */
                '& .MuiDataGrid-row': {
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                },
    
                /* Hover */
                '& .MuiDataGrid-row:hover': {
                    backgroundColor: 'action.hover',
                },
            }}
        />
    </Paper>
    
    );
}
