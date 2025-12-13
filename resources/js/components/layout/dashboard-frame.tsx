
import { LayoutNav } from './LayoutNav';
import { BreadcrumbItem } from '@/types';

type NavFilter = 'all' | 'admin' | 'user' | 'public';

export function DashboardFrame({
    children,
    breadcrumbs = [],
    navFilter = 'all',
}: {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    navFilter?: NavFilter;
}) {
  

    return (
     <>
     <LayoutNav
        breadcrumbs={breadcrumbs}
        navFilter={navFilter}
      >
        {children}
      </LayoutNav>
     </>
    );
}
