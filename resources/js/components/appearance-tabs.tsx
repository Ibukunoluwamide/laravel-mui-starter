import { ToggleButton, ToggleButtonGroup, Tooltip, useColorScheme } from '@mui/material';
import { DarkMode, LightMode, Monitor } from '@mui/icons-material';
import { HTMLAttributes } from 'react';

export default function AppearanceToggleTab({
    className = '',
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { mode, setMode } = useColorScheme();

    const tabs: { value: 'light' | 'dark' | 'system'; icon: JSX.Element; label: string }[] = [
        { value: 'light', icon: <LightMode fontSize="small" />, label: 'Light' },
        { value: 'dark', icon: <DarkMode fontSize="small" />, label: 'Dark' },
        { value: 'system', icon: <Monitor fontSize="small" />, label: 'System' },
    ];

    return (
        <ToggleButtonGroup
            exclusive
            value={mode}
            size="small"
            onChange={(_, value) => value && setMode(value)}
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
