import { Head, useForm } from '@inertiajs/react';
import {
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

// import { store } from '@/routes/register';
import { login } from '@/routes';

import CustomAuthLayout from '@/layouts/custom-auth-layout';
import { FacebookIcon, GoogleIcon } from './components/custom-icons';

// -------------------------
// Main Component
// -------------------------
export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/register');
    };
    return (
        <>
            <Head title="Register" />
            <CustomAuthLayout title="Create an account">
                {/* Inertia Form */}
                <form onSubmit={submit} className="w-full">
                    <Stack spacing={2}>
                        <FormControl fullWidth>
                            <FormLabel htmlFor="name">Name</FormLabel>
                            <TextField
                                id="name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                required
                                error={Boolean(errors.name)}
                                helperText={
                                    <InputError message={errors.name} />
                                }
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <TextField
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@email.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                autoComplete="email"
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
                                autoComplete="new-password"
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

                        <FormControl fullWidth>
                            <FormLabel htmlFor="password_confirmation">
                                Confirm Password
                            </FormLabel>
                            <TextField
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                placeholder="••••••"
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        'password_confirmation',
                                        e.target.value,
                                    )
                                }
                                required
                                error={Boolean(errors.password_confirmation)}
                                helperText={
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                }
                            />
                        </FormControl>

                        <FormControlLabel
                            control={<Checkbox name="terms" />}
                            label="I agree to the Terms and Conditions"
                        />

                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            disabled={processing}
                        >
                            {processing ? 'Creating account...' : 'Sign up'}
                        </Button>

                        <Typography sx={{ textAlign: 'center' }}>
                            Already have an account?{' '}
                            <TextLink href={login()}>Sign in</TextLink>
                        </Typography>
                    </Stack>
                </form>

                <Divider>or</Divider>

                {/* Optional Social Signup */}
                <Stack spacing={2}>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<GoogleIcon />}
                        onClick={() => alert('Google auth not implemented')}
                    >
                        Sign up with Google
                    </Button>

                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<FacebookIcon />}
                        onClick={() => alert('Facebook auth not implemented')}
                    >
                        Sign up with Facebook
                    </Button>
                </Stack>
            </CustomAuthLayout>
        </>
    );
}
