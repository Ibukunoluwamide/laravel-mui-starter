import { AdminShell } from '@/components/admin-shell';
import { Head } from '@inertiajs/react';

import MainGrid from './components/MainGrid';

export default function AdminDashboard() {
    return (
        <AdminShell
            breadcrumbs={[{ title: 'Admin', href: '/admin/dashboard' }]}
        >
            <Head title="Admin | Overview" />

                <MainGrid />
           
        </AdminShell>
    );
}
