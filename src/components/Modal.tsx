"use client"

import { ComponentProps, useCallback, useEffect, useRef } from "react";
import { Container } from "./Container";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface Props extends ComponentProps<"div"> {
    header: React.ReactNode
    pathToReturn?: string
}

const Modal = ({ header, children, pathToReturn }: Props) => {
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        if (pathToReturn) router.push(pathToReturn);
        else router.back()
    }, [router, pathToReturn]);

    const onClick = useCallback((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();

        if (
            event.target === overlayRef.current ||
            event.target === containerRef.current
        ) onDismiss();
    }, [onDismiss, overlayRef, containerRef]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape") onDismiss();
    }, [onDismiss]);

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return (
        <div
            ref={overlayRef}
            onClick={onClick}
            className="w-full h-full fixed inset-0 bg-default/90 z-50 flex items-center justify-center"
        >
            <Container ref={containerRef}>
                <div className="col-span-4 rounded-lg bg-white p-4 xl:col-start-5 md:col-start-3">
                    <div className="relative flex items-center justify-center px-4 mb-6">
                        {header}
                        <Button
                            onClick={onDismiss}
                            suffix="close"
                            variant="text"
                            iconClassname="w-4 h-4"
                            className="absolute top-0 right-0 !p-0"
                        />
                    </div>
                    {children}
                </div>
            </Container>
        </div>
    );
};


export default Modal