import { Head, useForm } from '@inertiajs/react';

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
    const { data, setData, post, processing, errors, reset } = useForm({
        email,
        token,
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/reset-password', {
            onSuccess: () => {
                reset('password', 'password_confirmation');
            },
        });
    };

    return (
        <AuthLayout
            title="Reset password"
            description="Please enter your new password below"
        >
            <Head title="Reset password" />

            <form onSubmit={submit}>
                <Stack spacing={3}>
                    <TextField
                        id="email"
                        type="email"
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
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
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
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
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
            </form>
        </AuthLayout>
    );
}
