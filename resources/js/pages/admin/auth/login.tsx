import { Form, Head } from '@inertiajs/react';
import {
    Button,
    Checkbox,
    CssBaseline,
    FormControl,
    FormControlLabel,
    FormLabel,
    Card as MuiCard,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';

import { request } from '@/routes/password';

import AppLogoIcon from '@/components/app-logo-icon';
import { attempt } from '@/routes/admin/login';

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

const SignInContainer = styled(Stack)(({ theme }) => ({
    minHeight: '100vh',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
}));

// -------------------------
// Main Component
// -------------------------
export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}) {
    return (
        <>
            <Head title="Log in" />
            <CssBaseline />

            <SignInContainer direction="column" justifyContent="center">
                <Card variant="outlined">
                    <AppLogoIcon className="w-8" />

                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{
                            width: '100%',
                            fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                        }}
                    >
                        Log in
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        Administrator access
                    </Typography>

                    {/* Inertia Form */}
                    <Form {...attempt.form()} className="w-full">
                        {({ processing, errors }) => (
                            <Stack spacing={1}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <TextField
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        autoComplete="email"
                                        autoFocus
                                        required
                                        error={Boolean(errors.email)}
                                        helperText={
                                            <InputError
                                                message={errors.email}
                                            />
                                        }
                                    />
                                </FormControl>

                                <FormControl fullWidth>
                                    <FormLabel htmlFor="password">
                                        Password
                                    </FormLabel>
                                    <TextField
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="••••••"
                                        autoComplete="current-password"
                                        required
                                        error={Boolean(errors.password)}
                                        helperText={
                                            <InputError
                                                message={errors.password}
                                            />
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

                                {canResetPassword && (
                                    <TextLink
                                        className="text-center"
                                        href={request()}
                                    >
                                        Forgot your password?
                                    </TextLink>
                                )}
                            </Stack>
                        )}
                    </Form>

                    {status && (
                        <div className="mt-2 text-center text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}
                </Card>
            </SignInContainer>
        </>
    );
}
