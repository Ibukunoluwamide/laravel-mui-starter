import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Form } from '@inertiajs/react';
import {
    Alert,
    AlertTitle,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material';
import { useRef, useState } from 'react';

export default function DeleteUser() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);

    return (
        <div className="space-y-6">
            <HeadingSmall
                title="Delete account"
                description="Delete your account and all of its resources"
            />
            <div className="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
                <div className="relative space-y-0.5 text-red-600 dark:text-red-100">
                    <p className="font-medium">Warning</p>
                    <p className="text-sm">
                        Please proceed with caution, this cannot be undone.
                    </p>
                </div>

                <Button
                    color="error"
                    variant="outlined"
                    data-test="delete-user-button"
                    onClick={() => setOpen(true)}
                >
                    Delete account
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
                    <DialogTitle>
                        Are you sure you want to delete your account?
                    </DialogTitle>
                    <DialogContent dividers>
                        <Stack spacing={3}>
                            <DialogContentText>
                                Once your account is deleted, all of its
                                resources and data will also be permanently
                                deleted. Please enter your password to confirm
                                you would like to proceed.
                            </DialogContentText>

                            <Alert severity="warning" variant="outlined">
                                <AlertTitle>Irreversible action</AlertTitle>
                                This action will remove all personal data,
                                billing details, and API tokens.
                            </Alert>

                            <Form
                                method="delete"
                                action="/settings/profile"
                                options={{ preserveScroll: true }}
                                onError={() => passwordInput.current?.focus()}
                                resetOnSuccess
                                className="space-y-4"
                            >
                                {({
                                    resetAndClearErrors,
                                    processing,
                                    errors,
                                }) => (
                                    <>
                                        <TextField
                                            id="password"
                                            type="password"
                                            name="password"
                                            label="Confirm password"
                                            fullWidth
                                            inputRef={passwordInput}
                                            autoComplete="current-password"
                                            placeholder="••••••••"
                                            error={Boolean(errors.password)}
                                            helperText={
                                                <InputError
                                                    message={errors.password}
                                                />
                                            }
                                        />

                                        <DialogActions sx={{ px: 0 }}>
                                            <Button
                                                variant="outlined"
                                                onClick={() => {
                                                    resetAndClearErrors();
                                                    setOpen(false);
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type="submit"
                                                color="error"
                                                variant="contained"
                                                data-test="confirm-delete-user-button"
                                                disabled={processing}
                                            >
                                                Delete account
                                            </Button>
                                        </DialogActions>
                                    </>
                                )}
                            </Form>
                        </Stack>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
