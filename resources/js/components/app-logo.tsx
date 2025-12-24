import { Box, Typography } from '@mui/material';
import { Link } from '@inertiajs/react';
import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          <AppLogoIcon style={{ width: 24, height: 24, fill: 'currentColor' }} />
        </Box>

        <Typography
          variant="subtitle1"
          fontWeight={700}
          color="text.primary"
          noWrap
        >
          Laravel MUI Starter
        </Typography>
      </Box>
    </Link>
  );
}
