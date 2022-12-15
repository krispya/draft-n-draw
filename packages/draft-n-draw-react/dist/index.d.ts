import { Drafter } from '@draft-n-draw/vanilla';
export * from '@draft-n-draw/vanilla';
import React from 'react';

declare const getDrafter: () => Drafter;
declare function DrafterProvider({ children }: {
    children: React.ReactNode;
}): JSX.Element;
declare function useDrafter(): Drafter;

export { DrafterProvider, getDrafter, useDrafter };
