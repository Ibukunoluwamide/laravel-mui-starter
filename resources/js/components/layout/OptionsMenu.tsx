import { Link } from '@inertiajs/react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Divider, { dividerClasses } from '@mui/material/Divider';
import { listClasses } from '@mui/material/List';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import MenuButton from './MenuButton';

const MenuItem = styled(MuiMenuItem)({
  margin: '2px 0',
});

interface OptionsMenuProps {
  account: {
    name: string;
  };
  logoutUrl: string;
}

export default function OptionsMenu({ account, logoutUrl }: OptionsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const firstLetter = account?.name?.charAt(0).toUpperCase() ?? '?';

  return (
    <>
      {/* Avatar Button */}
      <MenuButton
        aria-label="Open account menu"
        onClick={handleClick}
        sx={{ borderColor: 'transparent', p: 0 }}
      >
        <Avatar
          sx={{
            width: 32,
            height: 32,
            bgcolor: 'primary.main',
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {firstLetter}
        </Avatar>
      </MenuButton>

      {/* Dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        sx={{
          [`& .${listClasses.root}`]: { p: '4px' },
          [`& .${paperClasses.root}`]: { p: 0 },
          [`& .${dividerClasses.root}`]: { m: '4px -4px' },
        }}
      >
        {/* Account info */}
        <MenuItem disabled>
          <Typography variant="body2" fontWeight={600}>
            {account.name}
          </Typography>
        </MenuItem>

        <Divider />

      

        {/* Logout */}
        <MenuItem
          onClick={handleClose}
          sx={{
            [`& .${listItemIconClasses.root}`]: {
              minWidth: 32,
            },
          }}
        >
          <Link href={logoutUrl} method="post" className="flex w-full">
            <ListItemIcon>
              <LogoutRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
