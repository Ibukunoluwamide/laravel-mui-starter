import AppLogoIcon from '@/components/app-logo-icon';
import FlashHandler from '@/components/flash-handler';
import {
    Button,
    CssBaseline,
    Divider,
    Card as MuiCard,
    Stack,
    styled,
    Typography,
} from '@mui/material';

import { FacebookIcon, GoogleIcon } from './components/custom-icons';

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
export default function CustomAuthLayout({
    children,
    title,
    description,
    googleAuth,
}: {
    children: React.ReactNode;
    title: string;
    description?: string;
    googleAuth?: boolean;
}) {
    return (
        <>
            <FlashHandler />

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
                        {title}
                    </Typography>
                    {description && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.5 }}
                        >
                            {description}
                        </Typography>
                    )}

                    {children}
                    {googleAuth && (
                        <>
                            <Divider>or</Divider>

                            <Stack spacing={2}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<GoogleIcon />}
                                >
                                    Sign in with Google
                                </Button>

                                <Button
                                    fullWidth
                                    variant="outlined"
                                    startIcon={<FacebookIcon />}
                                >
                                    Sign in with Facebook
                                </Button>
                             
                            </Stack>
                        </>
                    )}
                </Card>
            </SignInContainer>
        </>
    );
}
