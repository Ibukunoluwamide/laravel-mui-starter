import { UserShell } from '@/components/user-shell';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { CheckCircle } from '@mui/icons-material';
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from '@mui/material';

const plans = [
    {
        name: 'Starter',
        price: '$29',
        description: 'For small teams getting started',
        features: ['Up to 3 team members', 'Email support', '1 API token'],
        cta: 'Start trial',
    },
    {
        name: 'Growth',
        price: '$79',
        description: 'For growing teams and products',
        features: [
            'Up to 15 team members',
            'Priority email & chat support',
            'Role-based permissions',
            '5 API tokens',
        ],
        highlight: true,
        cta: 'Upgrade to Growth',
    },
    {
        name: 'Enterprise',
        price: 'Let’s talk',
        description: 'Security, compliance, and scale',
        features: [
            'Unlimited team members',
            'SSO & SCIM provisioning',
            'Dedicated CSM',
            'Audit-ready activity logs',
        ],
        cta: 'Talk to sales',
    },
];

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Pricing', href: '/pricing' }];

export default function PricingPage() {
    return (
        <UserShell breadcrumbs={breadcrumbs}>
            <Head title="Pricing" />
            <Stack spacing={4}>
                <Stack spacing={1} textAlign="center">
                    <Typography variant="h4" fontWeight={700}>
                        Pricing that scales with you
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Choose the right plan for your team. Switch or cancel
                        anytime.
                    </Typography>
                </Stack>

                <Grid container spacing={3}>
                    {plans.map((plan) => (
                        <Grid item xs={12} md={4} key={plan.name}>
                            <Card
                                variant="outlined"
                                sx={{
                                    
                                    height: '100%',
                                    borderColor: plan.highlight
                                        ? 'primary.main'
                                        : 'divider',
                                }}
                            >
                                <CardContent>
                                    <Stack spacing={2}>
                                        <Typography
                                            variant="overline"
                                            color={
                                                plan.highlight
                                                    ? 'primary'
                                                    : 'text.secondary'
                                            }
                                        >
                                            {plan.name}
                                        </Typography>
                                        <Typography variant="h4">
                                            {plan.price}
                                        </Typography>
                                        <Typography color="text.secondary">
                                            {plan.description}
                                        </Typography>
                                        <Stack spacing={1.5}>
                                            {plan.features.map((feature) => (
                                                <Stack
                                                    key={feature}
                                                    direction="row"
                                                    spacing={1}
                                                    alignItems="center"
                                                >
                                                    <CheckCircle
                                                        color="primary"
                                                        fontSize="small"
                                                    />
                                                    <Typography variant="body2">
                                                        {feature}
                                                    </Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                        <Button
                                            variant={
                                                plan.highlight
                                                    ? 'contained'
                                                    : 'outlined'
                                            }
                                            fullWidth
                                            component={Link as never}
                                            href="/register"
                                        >
                                            {plan.cta}
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box
                    sx={{
                        p: 3,
                        
                        border: '1px solid',
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems={{ xs: 'flex-start', md: 'center' }}
                        justifyContent="space-between"
                        spacing={2}
                    >
                        <Stack spacing={0.5}>
                            <Typography variant="h6">
                                Need a custom SLA or procurement docs?
                            </Typography>
                            <Typography color="text.secondary">
                                We’re happy to prepare security packets and
                                align with your procurement process.
                            </Typography>
                        </Stack>
                        <Button
                            variant="contained"
                            component={Link as never}
                            href="/contact"
                        >
                            Talk to sales
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </UserShell>
    );
}
