import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
} from '@mui/material';
import { type PropsWithChildren } from 'react';

export default function AuthCardLayout({
    children,
    title,
    description,
}: PropsWithChildren<{
    name?: string;
    title?: string;
    description?: string;
}>) {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                p: { xs: 3, md: 6 },
            }}
        >
            <Box sx={{ width: '100%', maxWidth: 520 }}>
                <Link
                    href={home()}
                    className="flex items-center gap-2 self-center font-medium justify-center mb-4"
                >
                    <AppLogoIcon className="size-10 fill-current text-black dark:text-white" />
                </Link>

                <Card elevation={3} sx={{ borderRadius: 3 }}>
                    <CardHeader
                        title={
                            <Typography variant="h6" textAlign="center">
                                {title}
                            </Typography>
                        }
                        subheader={
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                textAlign="center"
                            >
                                {description}
                            </Typography>
                        }
                    />
                    <CardContent sx={{ px: { xs: 3, md: 6 }, pb: 6 }}>
                        {children}
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}
