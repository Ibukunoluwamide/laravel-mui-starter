import { update } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth-layout';
import {
    Button,
    CircularProgress,
    Stack,
    TextField,
} from '@mui/material';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <AuthLayout
            title="Reset password"
            description="Please enter your new password below"
        >
            <Head title="Reset password" />

            <Form
                {...update.form()}
                transform={(data) => ({ ...data, token, email })}
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <Stack spacing={3}>
                        <TextField
                            id="email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            label="Email"
                            readOnly
                            error={Boolean(errors.email)}
                            helperText={<InputError message={errors.email} />}
                        />

                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            autoFocus
                            placeholder="Password"
                            label="Password"
                            error={Boolean(errors.password)}
                            helperText={<InputError message={errors.password} />}
                        />

                        <TextField
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            autoComplete="new-password"
                            placeholder="Confirm password"
                            label="Confirm password"
                            error={Boolean(errors.password_confirmation)}
                            helperText={
                                <InputError
                                    message={errors.password_confirmation}
                                />
                            }
                        />

                        <Button
                            type="submit"
                            fullWidth
                            disabled={processing}
                            data-test="reset-password-button"
                            variant="contained"
                            startIcon={
                                processing ? (
                                    <CircularProgress size={16} />
                                ) : undefined
                            }
                        >
                            Reset password
                        </Button>
                    </Stack>
                )}
            </Form>
        </AuthLayout>
    );
}
