import * as React from 'react';
import {
  GridToolbarFilterButton,
  GridToolbarExport,
} from '@mui/x-data-grid';
import {
  Stack,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface ToolbarProps {
  title: string;
  search: string;
  onSearchChange: (value: string) => void;
}

export default function DataTableToolbar({
  title,
  search,
  onSearchChange,
}: ToolbarProps) {
  return (
    <Box sx={{ p: 2 }}>
    <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        alignItems={{ xs: 'stretch', sm: 'center' }}
        justifyContent="space-between"
    >
        {/* Title */}
        <Typography
            variant="h6"
            sx={{
                whiteSpace: 'nowrap',
                textAlign: { xs: 'center', sm: 'left' },
            }}
        >
            {title}
        </Typography>

        {/* Actions */}
        <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            justifyContent={{ xs: 'center', sm: 'flex-end' }}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
            {/* Search */}
            <TextField
                size="small"
                placeholder="Search…"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                fullWidth
                sx={{
                    maxWidth: { sm: 220 },
                    minWidth: { xs: '100%', sm: 200 },
                }}
                InputProps={{
                    startAdornment: (
                        <SearchIcon fontSize="small" sx={{ mr: 1 }} />
                    ),
                }}
            />

            {/* Grid buttons */}
            <GridToolbarFilterButton />
            <GridToolbarExport />
        </Stack>
    </Stack>
</Box>

  );
}
