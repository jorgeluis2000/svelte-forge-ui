import type { ThemeColor } from '../domains/types/ThemeColor.type';
import type { TypeAlarm } from '../domains/types/TypeAlarm.type';
import type { RoundedSize, TextSize } from './../domains/types/Sizes.type';

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
	{ type: '9xl', class: 'text-9xl' }
];


export const COLOR_ALARM_STYLE: { type: TypeAlarm; class: string }[] = [
	{ type: 'success', class: 'text-green-500 bg-green-100' },
	{ type: 'error', class: 'text-red-500 bg-red-100' },
	{ type: 'warning', class: 'text-amber-500 bg-amber-100' },
	{ type: 'info', class: 'text-sky-500 bg-sky-100' },
	{ type: 'loading', class: 'text-gray-500 bg-gray-100' },
	{ type: 'time', class: 'text-orange-500 bg-orange-100' },
	{ type: 'primary', class: 'text-primary-500 bg-primary-100' },
	{ type: 'secondary', class: 'text-secondary-500 bg-secondary-100' },
]


export const COLOR_TEXT_ALARM_STYLE: { type: TypeAlarm; class: string }[] = [
	{ type: 'success', class: 'text-green-500' },
	{ type: 'error', class: 'text-red-500' },
	{ type: 'warning', class: 'text-amber-500' },
	{ type: 'info', class: 'text-sky-500' },
	{ type: 'loading', class: 'text-gray-500' },
	{ type: 'time', class: 'text-orange-500' },
	{ type: 'primary', class: 'text-primary-500' },
	{ type: 'secondary', class: 'text-secondary-500' },
]


export const SIZE_STYLE: { type: TypeAlarm; class: string }[] = []

export const THEME_COLOR_STYLE: { type: ThemeColor; class: string }[] = [
	{ type: 'light', class: ""}
]