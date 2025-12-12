import InputError from '@/components/input-error';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import AuthLayout from '@/layouts/auth-layout';
import { store } from '@/routes/two-factor/login';
import { Form, Head } from '@inertiajs/react';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

export default function TwoFactorChallenge() {
    const [showRecoveryInput, setShowRecoveryInput] = useState<boolean>(false);
    const [code, setCode] = useState<string>('');

    const authConfigContent = useMemo<{
        title: string;
        description: string;
        toggleText: string;
    }>(() => {
        if (showRecoveryInput) {
            return {
                title: 'Recovery Code',
                description:
                    'Please confirm access to your account by entering one of your emergency recovery codes.',
                toggleText: 'login using an authentication code',
            };
        }

        return {
            title: 'Authentication Code',
            description:
                'Enter the authentication code provided by your authenticator application.',
            toggleText: 'login using a recovery code',
        };
    }, [showRecoveryInput]);

    const toggleRecoveryMode = (clearErrors: () => void): void => {
        setShowRecoveryInput(!showRecoveryInput);
        clearErrors();
        setCode('');
    };

    return (
        <AuthLayout
            title={authConfigContent.title}
            description={authConfigContent.description}
        >
            <Head title="Two-Factor Authentication" />

            <div className="space-y-6">
                <Form
                    {...store.form()}
                    className="space-y-4"
                    resetOnError
                    resetOnSuccess={!showRecoveryInput}
                >
                    {({ errors, processing, clearErrors }) => (
                        <Stack spacing={3}>
                            {showRecoveryInput ? (
                                <>
                                    <TextField
                                        name="recovery_code"
                                        type="text"
                                        placeholder="Enter recovery code"
                                        autoFocus={showRecoveryInput}
                                        required
                                        label="Recovery code"
                                        error={Boolean(errors.recovery_code)}
                                        helperText={
                                            <InputError
                                                message={errors.recovery_code}
                                            />
                                        }
                                    />
                                </>
                            ) : (
                                <Stack spacing={2} alignItems="center">
                                    <TextField
                                        name="code"
                                        label="Authentication code"
                                        value={code}
                                        onChange={(event) =>
                                            setCode(
                                                event.target.value
                                                    .replace(/\D/g, '')
                                                    .slice(0, OTP_MAX_LENGTH),
                                            )
                                        }
                                        inputProps={{
                                            maxLength: OTP_MAX_LENGTH,
                                            inputMode: 'numeric',
                                            pattern: '[0-9]*',
                                        }}
                                        fullWidth
                                        error={Boolean(errors.code)}
                                        helperText={
                                            <InputError message={errors.code} />
                                        }
                                    />
                                </Stack>
                            )}

                            <Button
                                type="submit"
                                fullWidth
                                disabled={processing}
                                variant="contained"
                            >
                                Continue
                            </Button>

                            <Typography
                                textAlign="center"
                                variant="body2"
                                color="text.secondary"
                            >
                                <span>or you can </span>
                                <button
                                    type="button"
                                    className="cursor-pointer text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                    onClick={() =>
                                        toggleRecoveryMode(clearErrors)
                                    }
                                >
                                    {authConfigContent.toggleText}
                                </button>
                            </Typography>
                        </Stack>
                    )}
                </Form>
            </div>
        </AuthLayout>
    );
}
