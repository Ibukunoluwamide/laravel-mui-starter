// Components
import TextLink from '@/components/text-link';
import AuthLayout from '@/layouts/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/email/verification-notification');
    };

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

            <form onSubmit={submit} className="space-y-6 text-center">
                <Stack spacing={2} alignItems="center">
                    <Button
                        disabled={processing}
                        variant="contained"
                        type="submit"
                        startIcon={
                            processing ? (
                                <CircularProgress size={16} />
                            ) : undefined
                        }
                    >
                        Resend verification email
                    </Button>

                    <Typography variant="body2" color="text.secondary">
                        <TextLink href="/logout" className="mx-auto">
                            Log out
                        </TextLink>
                    </Typography>
                </Stack>
            </form>
        </AuthLayout>
    );
}
