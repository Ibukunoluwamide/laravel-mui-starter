import { Typography, Box } from '@mui/material';

interface HeadingProps {
  title: string;
  description?: string;
}

export default function Heading({ title, description }: HeadingProps) {
  return (
    <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
      <Typography 
        variant="h6" 
        fontWeight={600} 
        sx={{ letterSpacing: 0.5 }}
        color="text.black"
      >
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
