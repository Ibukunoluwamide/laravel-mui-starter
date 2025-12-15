import { Typography, Box } from '@mui/material';

interface HeadingSmallProps {
  title: string;
  description?: string;
}

export default function HeadingSmall({ title, description }: HeadingSmallProps) {
  return (
    <Box component="header" mb={2}>
      <Typography variant="h6" color="text.black" fontWeight={500}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
    </Box>
  );
}
