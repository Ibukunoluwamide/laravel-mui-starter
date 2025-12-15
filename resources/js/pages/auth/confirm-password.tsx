import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button, CircularProgress, Stack, TextField } from '@mui/material';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/confirm-password', {
            onSuccess: () => {
                reset('password');
            },
        });
    };

    return (
        <AuthLayout
            title="Confirm your password"
            description="This is a secure area of the application. Please confirm your password before continuing."
        >
            <Head title="Confirm password" />

            <form onSubmit={submit}>
                <Stack spacing={3}>
                    <TextField
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        placeholder="Password"
                        autoComplete="current-password"
                        autoFocus
                        label="Password"
                        error={Boolean(errors.password)}
                        helperText={<InputError message={errors.password} />}
                    />

                    <Button
                        fullWidth
                        disabled={processing}
                        data-test="confirm-password-button"
                        variant="contained"
                        startIcon={
                            processing ? (
                                <CircularProgress size={16} />
                            ) : undefined
                        }
                    >
                        Confirm password
                    </Button>
                </Stack>
            </form>
        </AuthLayout>
    );
}
