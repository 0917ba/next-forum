import {AppProgressBar as ProgressBar} from "next-nprogress-bar";
import React from "react";

interface Props {
    children: React.ReactNode;
}
export const ProgressBarProvider = ({ children }: Props) => {
    return (
        <>
            {children}
            <ProgressBar
                height="4px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
}