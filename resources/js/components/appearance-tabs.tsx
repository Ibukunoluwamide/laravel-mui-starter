import { Appearance, useAppearance } from '@/hooks/use-appearance';
import { ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { DarkMode, LightMode, Monitor } from '@mui/icons-material';
import { HTMLAttributes } from 'react';

export default function AppearanceToggleTab({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { appearance, updateAppearance } = useAppearance();

    const tabs: { value: Appearance; icon: JSX.Element; label: string }[] = [
        { value: 'light', icon: <LightMode fontSize="small" />, label: 'Light' },
        { value: 'dark', icon: <DarkMode fontSize="small" />, label: 'Dark' },
        { value: 'system', icon: <Monitor fontSize="small" />, label: 'System' },
    ];

    return (
        <ToggleButtonGroup
            exclusive
            value={appearance}
            size="small"
            onChange={(_, value) => value && updateAppearance(value)}
            {...props}
        >
            {tabs.map(({ value, icon, label }) => (
                <ToggleButton key={value} value={value} aria-label={label}>
                    <Tooltip title={label}>{icon}</Tooltip>
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}
