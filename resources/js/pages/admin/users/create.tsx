import * as React from 'react';
import { AdminShell } from '@/components/admin-shell';
import UserForm from './_form';
import { BreadcrumbItem } from '@/types';



export default function CreateUser() {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Admin', href: '/admin' },
        { title: 'Users', href: '/admin/users' },
    ];

    return (
        <AdminShell breadcrumbs={breadcrumbs}>
            <UserForm
                submitUrl={`/admin/users`}
                method="post"
            />
        </AdminShell>
    );
}
