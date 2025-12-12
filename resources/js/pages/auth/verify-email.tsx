// Components
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { logout } from '@/routes';
import { send } from '@/routes/verification';
import { Form, Head } from '@inertiajs/react';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Verify email"
            description="Please verify your email address by clicking on the link we just emailed to you."
        >
            <Head title="Email verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <Form {...send.form()} className="space-y-6 text-center">
                {({ processing }) => (
                    <Stack spacing={2} alignItems="center">
                        <Button
                            disabled={processing}
                            variant="contained"
                            startIcon={
                                processing ? (
                                    <CircularProgress size={16} />
                                ) : undefined
                            }
                        >
                            Resend verification email
                        </Button>

                        <Typography variant="body2" color="text.secondary">
                            <TextLink href={logout()} className="mx-auto">
                                Log out
                            </TextLink>
                        </Typography>
                    </Stack>
                )}
            </Form>
        </AuthLayout>
    );
}
