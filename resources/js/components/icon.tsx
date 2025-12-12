import { SvgIconProps } from '@mui/material';
import { type ElementType } from 'react';

interface IconProps extends Omit<SvgIconProps, 'ref'> {
    iconNode: ElementType<SvgIconProps>;
}

export function Icon({ iconNode: IconComponent, ...props }: IconProps) {
    return <IconComponent fontSize="small" {...props} />;
}
