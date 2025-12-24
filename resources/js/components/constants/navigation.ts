import {
  DashboardOutlined,
  PeopleAltOutlined,
  Settings,
  NotificationsNone,
  PersonOutline,
  CreditCard,
  ReceiptLong,
  SupportAgent,
  ViewSidebar,
} from "@mui/icons-material";

export const adminNav = [
  { title: "Dashboard", href: "/admin/dashboard", icon: DashboardOutlined },
  { title: "Users", href: "/admin/users", icon: PeopleAltOutlined },
  { title: "Billing", href: "/admin/billing", icon: CreditCard },
  { title: "Settings", href: "/admin/settings", icon: Settings },
];

export const userNav = [
  { title: "Dashboard", href: "/dashboard", icon: DashboardOutlined },
  { title: "Profile", href: "/settings/profile", icon: PersonOutline },
  { title: "Billing", href: "/user/billing", icon: CreditCard },
  { title: "Notifications", href: "/user/notifications", icon: NotificationsNone },
  { title: "Support", href: "/user/support", icon: SupportAgent },
];

export const publicNav = [
  { title: "Pricing", href: "/pricing", icon: ReceiptLong },
  { title: "Support", href: "/support", icon: SupportAgent },
  { title: "Docs", href: "https://mui.com/", icon: ViewSidebar },
];
