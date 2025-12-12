import InputError from '@/components/input-error';
import { useClipboard } from '@/hooks/use-clipboard';
import { OTP_MAX_LENGTH } from '@/hooks/use-two-factor-auth';
import { confirm } from '@/routes/two-factor';
import { Form } from '@inertiajs/react';
import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { ArrowBack, Check, ContentCopy, QrCode2 } from '@mui/icons-material';
import { useCallback, useEffect, useMemo, useState } from 'react';
import AlertError from './alert-error';

function TwoFactorSetupStep({
    qrCodeSvg,
    manualSetupKey,
    buttonText,
    onNextStep,
    errors,
}: {
    qrCodeSvg: string | null;
    manualSetupKey: string | null;
    buttonText: string;
    onNextStep: () => void;
    errors: string[];
}) {
    const [copiedText, copy] = useClipboard();
    const hasCopied = copiedText === manualSetupKey;

    return errors?.length ? (
        <AlertError errors={errors} />
    ) : (
        <Stack spacing={3}>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 2 }}
            >
                {qrCodeSvg ? (
                    <Box
                        sx={{
                            width: 224,
                            height: 224,
                            borderRadius: 2,
                            bgcolor: 'white',
                            p: 1.5,
                        }}
                        dangerouslySetInnerHTML={{ __html: qrCodeSvg }}
                    />
                ) : (
                    <CircularProgress size={32} />
                )}
            </Box>

            <Button variant="contained" onClick={onNextStep}>
                {buttonText}
            </Button>

            <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
            >
                or enter the code manually
            </Typography>

            <TextField
                fullWidth
                label="Setup key"
                value={manualSetupKey || ''}
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <IconButton
                            onClick={() => manualSetupKey && copy(manualSetupKey)}
                            edge="end"
                        >
                            {hasCopied ? (
                                <Check fontSize="small" />
                            ) : (
                                <ContentCopy fontSize="small" />
                            )}
                        </IconButton>
                    ),
                }}
            />
        </Stack>
    );
}

function TwoFactorVerificationStep({
    onClose,
    onBack,
}: {
    onClose: () => void;
    onBack: () => void;
}) {
    const [code, setCode] = useState<string>('');

    return (
        <Form
            {...confirm.form()}
            onSuccess={() => onClose()}
            resetOnError
            resetOnSuccess
        >
            {({
                processing,
                errors,
            }: {
                processing: boolean;
                errors?: { confirmTwoFactorAuthentication?: { code?: string } };
            }) => (
                <Stack spacing={3}>
                    <TextField
                        label="Verification code"
                        name="code"
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
                        autoFocus
                    />
                    <InputError
                        message={errors?.confirmTwoFactorAuthentication?.code}
                    />

                    <Stack direction="row" spacing={2}>
                        <Button
                            type="button"
                            variant="outlined"
                            onClick={onBack}
                            startIcon={<ArrowBack />}
                            disabled={processing}
                            fullWidth
                        >
                            Back
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={processing || code.length < OTP_MAX_LENGTH}
                            fullWidth
                        >
                            Confirm
                        </Button>
                    </Stack>
                </Stack>
            )}
        </Form>
    );
}

interface TwoFactorSetupModalProps {
    isOpen: boolean;
    onClose: () => void;
    requiresConfirmation: boolean;
    twoFactorEnabled: boolean;
    qrCodeSvg: string | null;
    manualSetupKey: string | null;
    clearSetupData: () => void;
    fetchSetupData: () => Promise<void>;
    errors: string[];
}

export default function TwoFactorSetupModal({
    isOpen,
    onClose,
    requiresConfirmation,
    twoFactorEnabled,
    qrCodeSvg,
    manualSetupKey,
    clearSetupData,
    fetchSetupData,
    errors,
}: TwoFactorSetupModalProps) {
    const [showVerificationStep, setShowVerificationStep] =
        useState<boolean>(false);

    const modalConfig = useMemo<{
        title: string;
        description: string;
        buttonText: string;
    }>(() => {
        if (twoFactorEnabled) {
            return {
                title: 'Two-Factor Authentication Enabled',
                description:
                    'Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.',
                buttonText: 'Close',
            };
        }

        if (showVerificationStep) {
            return {
                title: 'Verify Authentication Code',
                description:
                    'Enter the 6-digit code from your authenticator app',
                buttonText: 'Continue',
            };
        }

        return {
            title: 'Enable Two-Factor Authentication',
            description:
                'To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app',
            buttonText: 'Continue',
        };
    }, [twoFactorEnabled, showVerificationStep]);

    const handleModalNextStep = useCallback(() => {
        if (requiresConfirmation) {
            setShowVerificationStep(true);
            return;
        }

        clearSetupData();
        onClose();
    }, [requiresConfirmation, clearSetupData, onClose]);

    const resetModalState = useCallback(() => {
        setShowVerificationStep(false);

        if (twoFactorEnabled) {
            clearSetupData();
        }
    }, [twoFactorEnabled, clearSetupData]);

    useEffect(() => {
        if (isOpen && !qrCodeSvg) {
            fetchSetupData();
        }
    }, [isOpen, qrCodeSvg, fetchSetupData]);

    const handleClose = useCallback(() => {
        resetModalState();
        onClose();
    }, [onClose, resetModalState]);

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            maxWidth="sm"
            fullWidth
            keepMounted
        >
            <DialogTitle>
                <Stack direction="row" spacing={1} alignItems="center">
                    <QrCode2 fontSize="small" />
                    <Typography variant="h6">{modalConfig.title}</Typography>
                </Stack>
            </DialogTitle>
            <DialogContent>
                <Typography variant="body2" color="text.secondary" mb={3}>
                    {modalConfig.description}
                </Typography>

                <Stack spacing={3}>
                    {showVerificationStep ? (
                        <TwoFactorVerificationStep
                            onClose={onClose}
                            onBack={() => setShowVerificationStep(false)}
                        />
                    ) : (
                        <TwoFactorSetupStep
                            qrCodeSvg={qrCodeSvg}
                            manualSetupKey={manualSetupKey}
                            buttonText={modalConfig.buttonText}
                            onNextStep={handleModalNextStep}
                            errors={errors}
                        />
                    )}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
