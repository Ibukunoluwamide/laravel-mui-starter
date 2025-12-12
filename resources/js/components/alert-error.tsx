import {
    Alert,
    AlertTitle,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import { ReportProblemOutlined } from '@mui/icons-material';

export default function AlertError({
    errors,
    title,
}: {
    errors: string[];
    title?: string;
}) {
    return (
        <Alert
            severity="error"
            icon={<ReportProblemOutlined fontSize="small" />}
            variant="outlined"
            sx={{ borderRadius: 2 }}
        >
            <AlertTitle>{title || 'Something went wrong.'}</AlertTitle>
            <List dense disablePadding sx={{ pl: 1 }}>
                {Array.from(new Set(errors)).map((error, index) => (
                    <ListItem key={index} disableGutters>
                        <ListItemText primary={error} />
                    </ListItem>
                ))}
            </List>
        </Alert>
    );
}
