import * as React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useColorScheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
export default function ColorModeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  return (
    <Tooltip title="Toggle light/dark">
      <IconButton
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        size="small"
        data-screenshot="toggle-mode"
      >
        {mode === 'light' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
