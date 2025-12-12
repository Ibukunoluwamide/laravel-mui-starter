import { useAppearance, type Appearance } from '@/hooks/use-appearance';
import type { PaletteMode } from '@mui/material';
import {
    CssBaseline,
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from '@mui/material';
import { createContext, useContext, useMemo } from 'react';

type ColorModeContextValue = {
    mode: PaletteMode;
    setMode: (appearance: Appearance) => void;
};

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

const buildTheme = (mode: PaletteMode) =>
    responsiveFontSizes(
        createTheme({
            palette: {
                mode,
                primary: {
                    main: '#1565c0',
                },
                secondary: {
                    main: '#7c3aed',
                },
                background: {
                    default: mode === 'light' ? '#f6f7fb' : '#0b1220',
                    paper: mode === 'light' ? '#ffffff' : '#111827',
                },
            },
            shape: {
                borderRadius: 8,
            },
            typography: {
                fontFamily:
                    'Roboto, "Inter", system-ui, -apple-system, sans-serif',
                h1: { fontWeight: 700 },
                h2: { fontWeight: 700 },
                h3: { fontWeight: 600 },
                h4: { fontWeight: 600 },
                h5: { fontWeight: 600 },
                h6: { fontWeight: 600 },
                button: { textTransform: 'none', fontWeight: 600 },
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 10,
                            paddingInline: 16,
                        },
                    },
                },
                // ADD THIS ⬇⬇⬇
                MuiTextField: {
                    defaultProps: {
                        size: 'small',
                    },
                },

                MuiInputBase: {
                    styleOverrides: {
                        root: {
                            fontSize: '0.875rem', // smaller text
                            paddingTop: 6,
                            paddingBottom: 6,
                        },
                        input: {
                            padding: '8px 10px', // reduce height
                        },
                    },
                },

                MuiFormLabel: {
                    styleOverrides: {
                        root: {
                            fontSize: '0.85rem',
                        },
                    },
                },

                MuiCard: {
                    styleOverrides: {
                        root: {
                            borderRadius: 16,
                            boxShadow:
                                mode === 'light'
                                    ? '0 10px 40px rgba(15, 23, 42, 0.06)'
                                    : '0 10px 40px rgba(0, 0, 0, 0.4)',
                        },
                    },
                },
                MuiPaper: {
                    styleOverrides: {
                        root: {
                            backgroundImage: 'none',
                        },
                    },
                },
            },
        }),
    );

export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
    const { mode, updateAppearance } = useAppearance();
    const theme = useMemo(() => buildTheme(mode), [mode]);

    return (
        <ColorModeContext.Provider value={{ mode, setMode: updateAppearance }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export function useColorMode() {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error('useColorMode must be used within MuiThemeProvider');
    }

    return context;
}
