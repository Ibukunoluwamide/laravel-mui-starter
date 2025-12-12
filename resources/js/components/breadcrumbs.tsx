import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';
import {
    Breadcrumbs as MUIBreadcrumbs,
    Link as MUILink,
    Typography,
} from '@mui/material';

export function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: BreadcrumbItemType[];
}) {
    return (
        <MUIBreadcrumbs aria-label="breadcrumb" separator="›">
            {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return isLast ? (
                    <Typography
                        key={index}
                        variant="body2"
                        color="text.primary"
                        fontWeight={600}
                    >
                        {item.title}
                    </Typography>
                ) : (
                    <MUILink
                        key={index}
                        component={Link as never}
                        href={item.href}
                        underline="hover"
                        color="inherit"
                        sx={{ fontWeight: 500 }}
                    >
                        {item.title}
                    </MUILink>
                );
            })}
        </MUIBreadcrumbs>
    );
}
