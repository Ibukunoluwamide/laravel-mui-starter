import { regenerateRecoveryCodes } from '@/routes/two-factor';
import { Form } from '@inertiajs/react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Collapse,
    Divider,
    Stack,
    Typography,
} from '@mui/material';
import {
    Key,
    Lock,
    Refresh,
    Visibility,
    VisibilityOff,
} from '@mui/icons-material';
import { useCallback, useEffect, useRef, useState } from 'react';
import AlertError from './alert-error';

interface TwoFactorRecoveryCodesProps {
    recoveryCodesList: string[];
    fetchRecoveryCodes: () => Promise<void>;
    errors: string[];
}

export default function TwoFactorRecoveryCodes({
    recoveryCodesList,
    fetchRecoveryCodes,
    errors,
}: TwoFactorRecoveryCodesProps) {
    const [codesAreVisible, setCodesAreVisible] = useState<boolean>(false);
    const codesSectionRef = useRef<HTMLDivElement | null>(null);
    const canRegenerateCodes = recoveryCodesList.length > 0 && codesAreVisible;

    const toggleCodesVisibility = useCallback(async () => {
        if (!codesAreVisible && !recoveryCodesList.length) {
            await fetchRecoveryCodes();
        }

        setCodesAreVisible(!codesAreVisible);

        if (!codesAreVisible) {
            setTimeout(() => {
                codesSectionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                });
            });
        }
    }, [codesAreVisible, recoveryCodesList.length, fetchRecoveryCodes]);

    useEffect(() => {
        if (!recoveryCodesList.length) {
            fetchRecoveryCodes();
        }
    }, [recoveryCodesList.length, fetchRecoveryCodes]);

    const RecoveryCodeIconComponent = codesAreVisible
        ? VisibilityOff
        : Visibility;

    return (
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
            <CardHeader
                title={
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Lock fontSize="small" />
                        <Typography variant="h6">
                            2FA Recovery Codes
                        </Typography>
                    </Stack>
                }
                subheader="Recovery codes let you regain access if you lose your 2FA device. Store them in a secure password manager."
            />
            <CardContent>
                <Stack
                    spacing={2}
                    direction={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    justifyContent="space-between"
                >
                    <Button
                        onClick={toggleCodesVisibility}
                        aria-expanded={codesAreVisible}
                        aria-controls="recovery-codes-section"
                        startIcon={<RecoveryCodeIconComponent fontSize="small" />}
                        variant="contained"
                    >
                        {codesAreVisible ? 'Hide' : 'View'} recovery codes
                    </Button>

                    {canRegenerateCodes && (
                        <Form
                            {...regenerateRecoveryCodes.form()}
                            options={{ preserveScroll: true }}
                            onSuccess={fetchRecoveryCodes}
                        >
                            {({ processing }) => (
                                <Button
                                    variant="outlined"
                                    type="submit"
                                    disabled={processing}
                                    aria-describedby="regenerate-warning"
                                    startIcon={<Refresh fontSize="small" />}
                                >
                                    Regenerate codes
                                </Button>
                            )}
                        </Form>
                    )}
                </Stack>

                <Collapse in={codesAreVisible}>
                    <Stack spacing={2} mt={2}>
                        {errors?.length ? (
                            <AlertError errors={errors} />
                        ) : (
                            <>
                                <Box
                                    ref={codesSectionRef}
                                    role="list"
                                    aria-label="Recovery codes"
                                    sx={{
                                        bgcolor: 'background.paper',
                                        borderRadius: 2,
                                        p: 2,
                                        fontFamily: 'Roboto Mono, monospace',
                                        border: '1px dashed',
                                        borderColor: 'divider',
                                    }}
                                >
                                    {recoveryCodesList.length ? (
                                        recoveryCodesList.map((code, index) => (
                                            <Typography
                                                key={index}
                                                role="listitem"
                                                variant="body2"
                                            >
                                                {code}
                                            </Typography>
                                        ))
                                    ) : (
                                        <Stack spacing={1}>
                                            {Array.from(
                                                { length: 8 },
                                                (_, index) => (
                                                    <Box
                                                        key={index}
                                                        height={16}
                                                        sx={{
                                                            bgcolor:
                                                                'action.hover',
                                                            borderRadius: 1,
                                                        }}
                                                    />
                                                ),
                                            )}
                                        </Stack>
                                    )}
                                </Box>
                                <Divider />
                                <CardActions sx={{ px: 0 }}>
                                    <Key fontSize="small" color="disabled" />
                                    <Typography
                                        id="regenerate-warning"
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        Each recovery code can be used once to
                                        access your account and will be removed
                                        after use. If you need more, click
                                        <strong> Regenerate Codes</strong>{' '}
                                        above.
                                    </Typography>
                                </CardActions>
                            </>
                        )}
                    </Stack>
                </Collapse>
            </CardContent>
        </Card>
    );
}
