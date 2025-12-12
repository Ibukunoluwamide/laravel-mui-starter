// Components
import { login } from '@/routes';
import { email } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import {
    Button,
    CircularProgress,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Stack spacing={4}>
                <Form {...email.form()}>
                    {({ processing, errors }) => (
                        <Stack spacing={3}>
                            <TextField
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="off"
                                autoFocus
                                placeholder="email@example.com"
                                label="Email address"
                                error={Boolean(errors.email)}
                                helperText={<InputError message={errors.email} />}
                            />

                            <Button
                                fullWidth
                                disabled={processing}
                                data-test="email-password-reset-link-button"
                                variant="contained"
                                startIcon={
                                    processing ? (
                                        <CircularProgress size={16} />
                                    ) : undefined
                                }
                            >
                                Email password reset link
                            </Button>
                        </Stack>
                    )}
                </Form>

                <Typography
                    textAlign="center"
                    variant="body2"
                    color="text.secondary"
                >
                    Or, return to <TextLink href={login()}>log in</TextLink>
                </Typography>
            </Stack>
        </AuthLayout>
    );
}
