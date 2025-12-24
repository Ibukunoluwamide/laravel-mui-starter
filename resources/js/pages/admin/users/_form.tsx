import * as React from 'react';
import {
    Avatar,
    Box,
    Button,
    Grid,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useForm } from '@inertiajs/react';

export type UserFormData = {
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
    bio?: string;
    password?: string;
    role: string;
    status: string;
};

type Props = {
    user?: Partial<UserFormData>;
    submitUrl: string;
    method?: 'post' | 'put';
};

export default function UserForm({
    user = {},
    submitUrl,
    method = 'post',
}: Props) {
    

     const { data, setData, post, put, patch } = useForm<UserFormData>({
        name: user.name ?? '',
        email: user.email ?? '',
        phone: user.phone ?? '',
        avatar: user.avatar ?? '',
        bio: user.bio ?? '',
        password: '',
        role: user.role ?? 'user',
        status: user.status ?? 'active',
    });

    const handleChange = (field: keyof UserFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setData(field, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (method === 'post') post(submitUrl, { preserveScroll: true });
        else if (method === 'put') put(submitUrl, { preserveScroll: true });
        else patch(submitUrl, { preserveScroll: true });
    }


    return (
      <form
    onSubmit={handleSubmit}
    className="mx-auto max-w-[900px]"
>
    {/* Header */}
    <Stack spacing={0.5} mb={4}>
        <Typography variant="h5" fontWeight={700}>
            User details
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Manage account information and preferences
        </Typography>
    </Stack>

    {/* Content */}
    <Box
        sx={{
            p: 3,
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'background.paper',
        }}
    >
        <Grid container spacing={3}>
            {/* Avatar */}
            <Grid item xs={12}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                        src={data.avatar}
                        sx={{ width: 64, height: 64 }}
                    />
                    <TextField
                        label="Avatar URL"
                        fullWidth
                        value={data.avatar}
                        onChange={handleChange('avatar')}
                        helperText="Paste an image URL for the profile picture"
                    />
                </Stack>
            </Grid>

            {/* Name */}
            <Grid item xs={12} md={6}>
                <TextField
                    label="Full name"
                    fullWidth
                    required
                    value={data.name}
                    onChange={handleChange('name')}
                />
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={6}>
                <TextField
                    label="Email address"
                    type="email"
                    fullWidth
                    required
                    value={data.email}
                    onChange={handleChange('email')}
                />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} md={6}>
                <TextField
                    label="Phone number"
                    fullWidth
                    value={data.phone}
                    onChange={handleChange('phone')}
                />
            </Grid>

            {/* Password */}
            <Grid item xs={12} md={6}>
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    value={data.password}
                    onChange={handleChange('password')}
                    helperText="Leave empty to keep the current password"
                />
            </Grid>

            {/* Bio */}
            <Grid item xs={12}>
                <TextField
                    label="Bio"
                    fullWidth
                    multiline
                    rows={3}
                    value={data.bio}
                    onChange={handleChange('bio')}
                />
            </Grid>

            {/* Status */}
            <Grid item xs={12} md={4}>
                <TextField
                    select
                    label="Account status"
                    fullWidth
                    value={data.status}
                    onChange={handleChange('status')}
                >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inactive</MenuItem>
                </TextField>
            </Grid>
        </Grid>
    </Box>

    {/* Actions */}
    <Stack
        direction="row"
        justifyContent="flex-end"
        spacing={2}
        mt={4}
    >
        <Button type="submit" variant="contained" size="large">
            Save user
        </Button>
    </Stack>
</form>

    );
}
