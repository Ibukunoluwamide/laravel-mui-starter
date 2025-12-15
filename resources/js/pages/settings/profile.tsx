import React from 'react';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import {
    Alert,
    AlertTitle,
    Button,
    Fade,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

export default function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, processing, recentlySuccessful, errors } = useForm({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch('/settings/profile', {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <Stack spacing={4}>
                    <HeadingSmall
                        title="Profile information"
                        description="Update your name and email address"
                    />

                    <form onSubmit={submit} className="space-y-6">
                        <Stack spacing={3}>
                            <TextField
                                id="name"
                                label="Name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                                placeholder="Full name"
                                error={Boolean(errors.name)}
                                helperText={<InputError message={errors.name} />}
                            />

                            <TextField
                                id="email"
                                type="email"
                                label="Email address"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                                placeholder="Email address"
                                error={Boolean(errors.email)}
                                helperText={<InputError message={errors.email} />}
                            />

                            {mustVerifyEmail &&
                                auth.user.email_verified_at === null && (
                                    <Alert severity="warning" variant="outlined">
                                        <AlertTitle>Email verification</AlertTitle>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            Your email address is unverified.
                                        </Typography>
                                        <Button
                                            size="small"
                                            component={Link as never}
                                            href='/email/verification-notification'
                                            variant="contained"
                                        >
                                            Resend verification email
                                        </Button>
                                        {status === 'verification-link-sent' && (
                                            <Typography
                                                variant="body2"
                                                color="success.main"
                                                sx={{ mt: 1 }}
                                            >
                                                A new verification link has been sent
                                                to your email address.
                                            </Typography>
                                        )}
                                    </Alert>
                                )}

                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button
                                    disabled={processing}
                                    variant="contained"
                                    data-test="update-profile-button"
                                    type="submit"
                                >
                                    Save
                                </Button>

                                <Fade in={recentlySuccessful}>
                                    <Typography variant="body2" color="text.secondary">
                                        Saved
                                    </Typography>
                                </Fade>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
