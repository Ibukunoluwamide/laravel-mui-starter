// Components
import { login } from '@/routes';
import { Head, useForm } from '@inertiajs/react';
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
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/forgot-password');
    };

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

            <Stack>
                <form onSubmit={submit}>
                    <Stack>
                        <TextField
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            autoComplete="off"
                            autoFocus
                            placeholder="email@example.com"
                            label="Email address"
                            sx={{
                                margin: '4px 2px',
                            }}
                            error={Boolean(errors.email)}
                            helperText={<InputError message={errors.email} />}
                        />

                        <Button
                            fullWidth
                            disabled={processing}
                            data-test="email-password-reset-link-button"
                            variant="contained"
                            type="submit"
                            startIcon={
                                processing ? (
                                    <CircularProgress size={16} />
                                ) : undefined
                            }
                        >
                            Email password reset link
                        </Button>
                    </Stack>
                </form>

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
