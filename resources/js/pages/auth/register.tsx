import React from 'react';
import { Head, Form } from '@inertiajs/react';
import {
    Button,
    Checkbox,
    CssBaseline,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Stack,
    TextField,
    Typography,
    Card as MuiCard,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

import { store } from '@/routes/register';
import { login } from '@/routes';

import { GoogleIcon, FacebookIcon } from './components/custom-icons';
import AppLogoIcon from '@/components/app-logo-icon';

// -------------------------
// Styled Components
// -------------------------
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
}));

const RegisterContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

// -------------------------
// Main Component
// -------------------------
export default function Register() {
    return (
        <>
            <Head title="Register" />
            <CssBaseline />

            <RegisterContainer direction="column" justifyContent="center">
                <Card variant="outlined">
                    <AppLogoIcon className='w-8' />

                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Create an account
                    </Typography>

                    {/* Inertia Form */}
                    <Form {...store.form()} className="w-full">
                        {({  processing, errors }) => (
                            <Stack spacing={2}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="name">Name</FormLabel>
                                    <TextField
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        error={Boolean(errors.name)}
                                        helperText={<InputError message={errors.name} />}
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <TextField
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="you@email.com"
                                        autoComplete="email"
                                        required
                                        error={Boolean(errors.email)}
                                        helperText={<InputError message={errors.email} />}
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
                                        required
                                        error={Boolean(errors.password)}
                                        helperText={<InputError message={errors.password} />}
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
                                    control={
                                        <Checkbox
                                           
                                            name="terms"
                                        />
                                    }
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
                        )}
                    </Form>

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
                </Card>
            </RegisterContainer>
        </>
    );
}
