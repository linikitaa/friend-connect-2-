'use client';

import {ThemeProvider} from "./ThemeProvider/ThemeProvider";
import { ReduxProvider } from "./ReduxProvider/ReduxProvider";
import {ReactNode} from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ReduxProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}