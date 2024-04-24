import type { RoundedSize, TextSize } from "./../domains/types/Sizes.type";

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

export const TEXT_SIZE_STYLE: { type: TextSize; class: string }[] = [
    { type: 'xs', class: 'text-xs' },
    { type: 'sm', class: 'text-sm' },
    { type: 'base', class: 'text-base' },
    { type: 'lg', class: 'text-lg' },
    { type: 'xl', class: 'text-xl' },
    { type: '2xl', class: 'text-2xl' },
    { type: '3xl', class: 'text-3xl' },
    { type: '4xl', class: 'text-4xl' },
    { type: '5xl', class: 'text-5xl' },
    { type: '6xl', class: 'text-6xl' },
    { type: '7xl', class: 'text-7xl' },
    { type: '8xl', class: 'text-8xl' },
    { type: '9xl', class: 'text-9xl' },
];