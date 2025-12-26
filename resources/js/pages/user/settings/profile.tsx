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
    Avatar,
    Box,
} from '@mui/material';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import SettingsLayout from '@/layouts/settings/layout';
import { UserShell } from '@/components/layout/user-shell';

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

    const { data, setData, patch, processing, recentlySuccessful, errors } =
        useForm({
            name: auth.user.name,
            email: auth.user.email,
            phone: auth.user.phone ?? '',
            avatar: auth.user.avatar ?? '',
        });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        patch('/settings/profile', {
            preserveScroll: true,
        });
    };

    return (
        <UserShell breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <Stack spacing={4}>
                    <HeadingSmall
                        title="Profile information"
                        description="Update your personal details and preferences"
                    />

                    <form onSubmit={submit}>
                        <Stack spacing={3}>
                            {/* Avatar */}
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Avatar
                                    src={data.avatar}
                                    sx={{ width: 64, height: 64 }}
                                />
                                <TextField
                                    label="Avatar URL"
                                    fullWidth
                                    value={data.avatar}
                                    onChange={(e) =>
                                        setData('avatar', e.target.value)
                                    }
                                    error={Boolean(errors.avatar)}
                                    helperText={<InputError message={errors.avatar} />}
                                />
                            </Stack>

                            <TextField
                                label="Name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                                error={Boolean(errors.name)}
                                helperText={<InputError message={errors.name} />}
                            />

                            <TextField
                                label="Email address"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                autoComplete="username"
                                error={Boolean(errors.email)}
                                helperText={<InputError message={errors.email} />}
                            />

                            <TextField
                                label="Phone"
                                value={data.phone}
                                onChange={(e) => setData('phone', e.target.value)}
                                autoComplete="tel"
                                error={Boolean(errors.phone)}
                                helperText={<InputError message={errors.phone} />}
                            />


                            {/* Email verification */}
                            {mustVerifyEmail &&
                                auth.user.email_verified_at === null && (
                                    <Alert severity="warning" variant="outlined">
                                        <AlertTitle>Email verification</AlertTitle>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            Your email address is unverified.
                                        </Typography>
                                        <Button
                                            size="small"
                                            component={Link}
                                            href="/email/verification-notification"
                                            variant="contained"
                                        >
                                            Resend verification email
                                        </Button>
                                        {status ===
                                            'verification-link-sent' && (
                                            <Typography
                                                variant="body2"
                                                color="success.main"
                                                sx={{ mt: 1 }}
                                            >
                                                A new verification link has been
                                                sent to your email address.
                                            </Typography>
                                        )}
                                    </Alert>
                                )}

                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button
                                    disabled={processing}
                                    variant="contained"
                                    type="submit"
                                >
                                    Save changes
                                </Button>

                                <Fade in={recentlySuccessful}>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Saved
                                    </Typography>
                                </Fade>
                            </Stack>
                        </Stack>
                    </form>
                </Stack>

                <Box mt={6}>
                    <DeleteUser />
                </Box>
            </SettingsLayout>
        </UserShell>
    );
}
