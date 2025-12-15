import { Head, useForm } from '@inertiajs/react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField,
} from '@mui/material';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';


import CustomAuthLayout from '@/layouts/custom-auth-layout';

// -------------------------
// Main Component
// -------------------------
export default function Login({
    canResetPassword,
}: {
    status?: string;
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
        post('/admin/login');
    };
    return (
        <>
            <Head title="Log in" />
            <CustomAuthLayout title="Login" description="Administrator access">
                {/* Inertia Form */}
                <form onSubmit={submit} className="w-full">
                    <Stack spacing={1}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                id="email"
                                type="email"
                                name="email"
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
                                name="password"
                                placeholder="••••••"
                                autoComplete="current-password"
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                required
                                error={Boolean(errors.password)}
                                helperText={
                                    <InputError message={errors.password} />
                                }
                            />
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox name="remember" />}
                            label="Remember me"
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            disabled={processing}
                        >
                            {processing ? 'Logging in...' : 'Log in'}
                        </Button>

                    
                    </Stack>
                </form>
            </CustomAuthLayout>
        </>
    );
}
