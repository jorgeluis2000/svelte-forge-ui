import type { RoundedSize } from "./../domains/types/Sizes.type";

export const ROUNDED_STYLE: { type: RoundedSize; class: string }[] = [
    { type: 'none', class: 'rounded-none' },
    { type: 'sm', class: 'rounded-sm' },
    { type: 'base', class: 'rounded' },
    { type: 'md', class: 'rounded-md' },
    { type: 'lg', class: 'rounded-lg' },
    { type: 'xl', class: 'rounded-xl' },
    { type: '2xl', class: 'rounded-2xl' },
    { type: '3xl', class: 'rounded-3xl' },
    { type: 'full', class: 'rounded-full' }
];