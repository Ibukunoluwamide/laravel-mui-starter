import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import InputError from '@/components/input-error';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Form, Head } from '@inertiajs/react';
import { Button, Fade, Stack, TextField, Typography } from '@mui/material';
import { useRef } from 'react';

import HeadingSmall from '@/components/heading-small';
import { edit } from '@/routes/user-password';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Password settings',
        href: edit().url,
    },
];

export default function Password() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Password settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Update password"
                        description="Ensure your account is using a long, random password to stay secure"
                    />

                    <Form
                        {...PasswordController.update.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        resetOnError={[
                            'password',
                            'password_confirmation',
                            'current_password',
                        ]}
                        resetOnSuccess
                        onError={(errors) => {
                            if (errors.password) {
                                passwordInput.current?.focus();
                            }

                            if (errors.current_password) {
                                currentPasswordInput.current?.focus();
                            }
                        }}
                        className="space-y-6"
                    >
                        {({ errors, processing, recentlySuccessful }) => (
                            <Stack spacing={3}>
                                <TextField
                                    id="current_password"
                                    inputRef={currentPasswordInput}
                                    name="current_password"
                                    type="password"
                                    label="Current password"
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
                                    name="password"
                                    type="password"
                                    label="New password"
                                    autoComplete="new-password"
                                    placeholder="New password"
                                    error={Boolean(errors.password)}
                                    helperText={
                                        <InputError message={errors.password} />
                                    }
                                />

                                <TextField
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    label="Confirm password"
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
                        )}
                    </Form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
