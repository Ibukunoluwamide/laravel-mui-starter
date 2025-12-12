import { AdminShell } from '@/components/admin-shell';
import { Head } from '@inertiajs/react';
import { Box, Stack } from '@mui/material';

import MainGrid from './components/MainGrid';


export default function AdminDashboard() {
 
  return (
    <AdminShell breadcrumbs={[{ title: 'Admin', href: '/admin/dashboard' }]}>
      <Head title="Admin | Overview" />
    

     <Box
               component="main"
               sx={(theme) => ({
                 flexGrow: 1,
                 backgroundColor: theme.vars
                   ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                   : alpha(theme.palette.background.default, 1),
                 overflow: 'auto',
               })}
             >
               <Stack
                 spacing={2}
                 sx={{
                   alignItems: 'center',
                   mx: 3,
                   pb: 5,
                   mt: { xs: 8, md: 0 },
                 }}
               >
                 <MainGrid />
               </Stack>
             </Box>
    </AdminShell>
  );
}