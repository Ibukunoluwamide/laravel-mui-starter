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
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', sm: 'center' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap">
          <TextField
            size="small"
            placeholder="Search…"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon fontSize="small" sx={{ mr: 1 }} />,
            }}
          />

          {/* MUST be inside DataGrid */}
          <GridToolbarFilterButton />
          <GridToolbarExport />
        </Stack>
      </Stack>
    </Box>
  );
}
