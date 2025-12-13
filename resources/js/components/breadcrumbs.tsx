import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';
import { Breadcrumbs as MUIBreadcrumbs, Toolbar } from '@mui/material';

export function Breadcrumbs({
    breadcrumbs,
}: {
    breadcrumbs: BreadcrumbItemType[];
}) {
    return (
        <>
            {breadcrumbs.length > 0 && (
                <Toolbar
                    variant="dense"
                    sx={{
                        borderTop: 1,
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        py: 1,
                    }}
                >
                    <MUIBreadcrumbs aria-label="breadcrumb">
                        {breadcrumbs.map((crumb) => (
                            <Link
                                key={crumb.href}
                                href={crumb.href}
                                className="text-sm font-medium text-neutral-600 hover:underline dark:text-neutral-300"
                            >
                                {crumb.title}
                            </Link>
                        ))}
                    </MUIBreadcrumbs>
                </Toolbar>
            )}
        </>
    );
}
