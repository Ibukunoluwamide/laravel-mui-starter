import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/password/confirm';
import { Form, Head } from '@inertiajs/react';
import { Button, CircularProgress, Stack, TextField } from '@mui/material';

export default function ConfirmPassword() {
    return (
        <AuthLayout
            title="Confirm your password"
            description="This is a secure area of the application. Please confirm your password before continuing."
        >
            <Head title="Confirm password" />

            <Form {...store.form()} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <Stack spacing={3}>
                        <TextField
                            id="password"
                            type="password"
                            name="password"
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
                )}
            </Form>
        </AuthLayout>
    );
}
