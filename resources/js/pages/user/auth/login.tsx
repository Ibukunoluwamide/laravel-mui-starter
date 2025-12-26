import { Head, useForm } from '@inertiajs/react';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import React from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import CustomAuthLayout from '@/layouts/custom-auth-layout';

export default function Login({
    canResetPassword,
}: {
    canResetPassword: boolean;
    canRegister: boolean;
}) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <>
            <Head title="Log in" />

            <CustomAuthLayout title="Login" googleAuth>
                <form onSubmit={submit} className="w-full">
                    <Stack spacing={1}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                placeholder="your@email.com"
                                autoComplete="email"
                                autoFocus
                                required
                                error={Boolean(errors.email)}
                                helperText={
                                    <InputError message={errors.email} />
                                }
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                placeholder="••••••"
                                autoComplete="current-password"
                                required
                                error={Boolean(errors.password)}
                                helperText={
                                    <InputError message={errors.password} />
                                }
                            />
                        </FormControl>
                       <Box sx={{display: 'flex', alignItems: "center", justifyContent: 'space-between'}}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                />
                            }
                            label="Remember me"
                        />


                        {canResetPassword && (
                            <TextLink
                                className="text-center"
                                href="/forgot-password"
                            >
                                Forgot your password?
                            </TextLink>
                        )}
                        </Box>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            disabled={processing}
                        >
                            {processing ? 'Logging in...' : 'Log in'}
                        </Button>

                        <Typography textAlign="center">
                            Don&apos;t have an account?{' '}
                            <TextLink href="/register">Sign up</TextLink>
                        </Typography>
                    </Stack>
                </form>
            </CustomAuthLayout>
        </>
    );
}
