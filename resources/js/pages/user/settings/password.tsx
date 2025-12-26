import InputError from '@/components/input-error';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Button, Fade, Stack, TextField, Typography } from '@mui/material';
import { useRef } from 'react';

import HeadingSmall from '@/components/heading-small';
import { UserShell } from '@/components/layout/user-shell';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Password settings',
        href: '/settings/password',
    },
];

export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, put, processing, recentlySuccessful, errors, reset } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put('/settings/password', {
            preserveScroll: true,
            onSuccess: () => {
                reset('password', 'password_confirmation', 'current_password');
            },
            onError: (errors) => {
                if (errors.password) {
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <UserShell breadcrumbs={breadcrumbs}>
            <Head title="Password settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Update password"
                        description="Ensure your account is using a long, random password to stay secure"
                    />

                    <form onSubmit={submit} className="space-y-6">
                        <Stack spacing={3}>
                            <TextField
                                id="current_password"
                                inputRef={currentPasswordInput}
                                type="password"
                                label="Current password"
                                value={data.current_password}
                                onChange={(e) =>
                                    setData('current_password', e.target.value)
                                }
                                autoComplete="current-password"
                                placeholder="Current password"
                                error={Boolean(errors.current_password)}
                                helperText={
                                    <InputError
                                        message={errors.current_password}
                                    />
                                }
                            />

                            <TextField
                                id="password"
                                inputRef={passwordInput}
                                type="password"
                                label="New password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                autoComplete="new-password"
                                placeholder="New password"
                                error={Boolean(errors.password)}
                                helperText={
                                    <InputError message={errors.password} />
                                }
                            />

                            <TextField
                                id="password_confirmation"
                                type="password"
                                label="Confirm password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData('password_confirmation', e.target.value)
                                }
                                autoComplete="new-password"
                                placeholder="Confirm password"
                                error={Boolean(errors.password_confirmation)}
                                helperText={
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                }
                            />

                            <Stack direction="row" spacing={2} alignItems="center">
                                <Button
                                    disabled={processing}
                                    data-test="update-password-button"
                                    variant="contained"
                                    type="submit"
                                >
                                    Save password
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
                </div>
            </SettingsLayout>
        </UserShell>
    );
}
