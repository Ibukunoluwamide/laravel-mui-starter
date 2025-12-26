
import { LayoutNav } from '@/components/layout/layout-nav';
import { BreadcrumbItem } from '@/types';

type NavFilter = 'all' | 'admin' | 'user' | 'public';

export default function AppLayout({
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
