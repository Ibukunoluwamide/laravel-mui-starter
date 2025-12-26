import { AdminShell } from '@/components/layout/admin-shell';
import { Head, useForm } from '@inertiajs/react';
import {
    Box,
    Card,
    CardContent,
    Grid,
    Stack,
    TextField,
    Button,
    Typography,
    Divider,
    Avatar,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type Admin = { id: number; name: string; email: string };

type PageProps = {
    admin: Admin;
};

export default function AdminSettingsIndex({ admin }: PageProps) {
    const { data, setData, put, processing, errors } = useForm({
        name: admin.name,
        email: admin.email,
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submitProfile = (e: React.FormEvent) => {
        e.preventDefault();
        put('/admin/settings/profile', { preserveScroll: true });
    };

    const submitPassword = (e: React.FormEvent) => {
        e.preventDefault();
        put('/admin/settings/password', { preserveScroll: true });
    };

    return (
        <AdminShell breadcrumbs={[{ title: 'Settings', href: '/admin/settings' }]}>
            <Head title="Admin | Settings" />

            <Box
                sx={{
                    backgroundColor: 'background.default',
                    borderRadius: 3,
                    p: { xs: 0, md: 2 },
                }}
            >
                <Grid container spacing={3}>
                    {/* Profile Card */}
                    <Grid item xs={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                        <PersonOutlineIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography fontWeight={700}>Profile</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Update your account information
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Divider sx={{ mb: 3 }} />

                                <Box component="form" onSubmit={submitProfile}>
                                    <Stack spacing={2.5}>
                                        <TextField
                                            label="Full name"
                                            fullWidth
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            error={Boolean(errors.name)}
                                            helperText={errors.name}
                                        />

                                        <TextField
                                            label="Email address"
                                            fullWidth
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            error={Boolean(errors.email)}
                                            helperText={errors.email}
                                        />

                                        <Stack direction="row" justifyContent="flex-end">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                disabled={processing}
                                            >
                                                Save changes
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Password Card */}
                    <Grid item xs={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                border: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <CardContent>
                                <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                                        <LockOutlinedIcon />
                                    </Avatar>
                                    <Box>
                                        <Typography fontWeight={700}>Security</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Change your password
                                        </Typography>
                                    </Box>
                                </Stack>

                                <Divider sx={{ mb: 3 }} />

                                <Box component="form" onSubmit={submitPassword}>
                                    <Stack spacing={2.5}>
                                        <TextField
                                            label="Current password"
                                            type="password"
                                            fullWidth
                                            value={data.current_password}
                                            onChange={(e) =>
                                                setData('current_password', e.target.value)
                                            }
                                            error={Boolean(errors.current_password)}
                                            helperText={errors.current_password}
                                        />

                                        <TextField
                                            label="New password"
                                            type="password"
                                            fullWidth
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            error={Boolean(errors.password)}
                                            helperText={errors.password}
                                        />

                                        <TextField
                                            label="Confirm new password"
                                            type="password"
                                            fullWidth
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData('password_confirmation', e.target.value)
                                            }
                                        />

                                        <Stack direction="row" justifyContent="flex-end">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="secondary"
                                                disabled={processing}
                                            >
                                                Update password
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </AdminShell>
    );
}
