'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ReactNode} from 'react'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

type Props = {
    children: ReactNode
}

export default function DarkMode(params:Props) {
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {params.children}
            </ThemeProvider>
        </>
    )
}