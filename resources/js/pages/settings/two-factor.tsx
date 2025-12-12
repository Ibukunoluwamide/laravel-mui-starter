import HeadingSmall from '@/components/heading-small';
import TwoFactorRecoveryCodes from '@/components/two-factor-recovery-codes';
import TwoFactorSetupModal from '@/components/two-factor-setup-modal';
import { useTwoFactorAuth } from '@/hooks/use-two-factor-auth';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { disable, enable, show } from '@/routes/two-factor';
import { type BreadcrumbItem } from '@/types';
import { Form, Head } from '@inertiajs/react';
import {
    Button,
    Chip,
    Stack,
    Typography,
    Alert,
    AlertTitle,
} from '@mui/material';
import { GppMaybe, Shield, ShieldMoon } from '@mui/icons-material';
import { useState } from 'react';

interface TwoFactorProps {
    requiresConfirmation?: boolean;
    twoFactorEnabled?: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Two-Factor Authentication',
        href: show.url(),
    },
];

export default function TwoFactor({
    requiresConfirmation = false,
    twoFactorEnabled = false,
}: TwoFactorProps) {
    const {
        qrCodeSvg,
        hasSetupData,
        manualSetupKey,
        clearSetupData,
        fetchSetupData,
        recoveryCodesList,
        fetchRecoveryCodes,
        errors,
    } = useTwoFactorAuth();
    const [showSetupModal, setShowSetupModal] = useState<boolean>(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Two-Factor Authentication" />
            <SettingsLayout>
                <Stack spacing={4}>
                    <HeadingSmall
                        title="Two-Factor Authentication"
                        description="Manage your two-factor authentication settings"
                    />
                    {twoFactorEnabled ? (
                        <Stack spacing={3}>
                            <Chip
                                color="success"
                                label="Enabled"
                                icon={<Shield fontSize="small" />}
                                sx={{ width: 'fit-content' }}
                            />
                            <Typography color="text.secondary">
                                With two-factor authentication enabled, you will
                                be prompted for a secure, random pin during
                                login, which you can retrieve from the
                                TOTP-supported application on your phone.
                            </Typography>

                            <TwoFactorRecoveryCodes
                                recoveryCodesList={recoveryCodesList}
                                fetchRecoveryCodes={fetchRecoveryCodes}
                                errors={errors}
                            />

                            <Form {...disable.form()}>
                                {({ processing }) => (
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        type="submit"
                                        disabled={processing}
                                        startIcon={<ShieldMoon />}
                                    >
                                        Disable 2FA
                                    </Button>
                                )}
                            </Form>
                        </Stack>
                    ) : (
                        <Stack spacing={3}>
                            <Chip
                                color="default"
                                label="Disabled"
                                icon={<GppMaybe fontSize="small" />}
                                sx={{ width: 'fit-content' }}
                            />
                            <Typography color="text.secondary">
                                When you enable two-factor authentication, you
                                will be prompted for a secure pin during login.
                                This pin can be retrieved from a TOTP-supported
                                application on your phone.
                            </Typography>

                            <Alert severity="info" variant="outlined">
                                <AlertTitle>Recommended</AlertTitle>
                                Enable 2FA to protect billing, team access, and
                                API tokens for your account.
                            </Alert>

                            {hasSetupData ? (
                                <Button
                                    onClick={() => setShowSetupModal(true)}
                                    variant="contained"
                                    startIcon={<Shield />}
                                >
                                    Continue setup
                                </Button>
                            ) : (
                                <Form
                                    {...enable.form()}
                                    onSuccess={() => setShowSetupModal(true)}
                                >
                                    {({ processing }) => (
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            variant="contained"
                                            startIcon={<Shield />}
                                        >
                                            Enable 2FA
                                        </Button>
                                    )}
                                </Form>
                            )}
                        </Stack>
                    )}

                    <TwoFactorSetupModal
                        isOpen={showSetupModal}
                        onClose={() => setShowSetupModal(false)}
                        requiresConfirmation={requiresConfirmation}
                        twoFactorEnabled={twoFactorEnabled}
                        qrCodeSvg={qrCodeSvg}
                        manualSetupKey={manualSetupKey}
                        clearSetupData={clearSetupData}
                        fetchSetupData={fetchSetupData}
                        errors={errors}
                    />
                </Stack>
            </SettingsLayout>
        </AppLayout>
    );
}
