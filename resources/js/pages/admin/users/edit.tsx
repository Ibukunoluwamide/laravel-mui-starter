import * as React from 'react';
import { AdminShell } from '@/components/admin-shell';
import UserForm from './_form';
import { BreadcrumbItem } from '@/types';


export default function EditUser({ user }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Admin', href: '/admin' },
        { title: 'Users', href: '/admin/users' },
        { title: 'Edit', href: `/admin/users/${user.id}/edit` },
    ];

    return (
        <AdminShell breadcrumbs={breadcrumbs}>
            <UserForm
                user={user}
                submitUrl={`/admin/users/${user.id}`}
                method="put"
            />
        </AdminShell>
    );
}
