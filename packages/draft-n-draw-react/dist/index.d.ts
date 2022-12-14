import { Drafter as Drafter$1 } from '@draft-n-draw/vanilla';
import React from 'react';

declare const getDrafter: () => Drafter$1;
declare function Drafter({ children }: {
    children: React.ReactNode;
}): JSX.Element;
declare function useDrafter(): Drafter$1;

export { Drafter, getDrafter, useDrafter };
