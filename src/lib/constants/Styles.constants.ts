import type { StyleClass } from '$lib/domains/types/Style.type';
import type { ThemeColor } from '$lib/domains/types/ThemeColor.type';
import type { TypeAlarm } from '$lib/domains/types/TypeAlarm.type';
import type { GeneralSize, RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
import {
	DEFAULT_COLOR_ERROR,
	DEFAULT_COLOR_INFO,
	DEFAULT_COLOR_LOADING,
	DEFAULT_COLOR_SUCCESS,
	DEFAULT_COLOR_TIME,
	DEFAULT_COLOR_WARNING
} from './DefaultStyles.constants';
import type { TypeToast } from '$lib/domains/interfaces/Toast.interface';

export const ROUNDED_STYLE: StyleClass<RoundedSize>[] = [
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

export const TEXT_SIZE_STYLE: StyleClass<TextSize>[] = [
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



export const COLOR_ALARM_FULL_STYLE: StyleClass<TypeAlarm>[] = [
	{ type: 'success', class: 'text-green-500 bg-green-100' },
	{ type: 'error', class: 'text-red-500 bg-red-100' },
	{ type: 'warning', class: 'text-amber-500 bg-amber-100' },
	{ type: 'info', class: 'text-sky-500 bg-sky-100' },
	{ type: 'loading', class: 'text-gray-500 bg-gray-100' },
	{ type: 'time', class: 'text-orange-500 bg-orange-100' }
];

export const COLOR_ALARM_STYLE: StyleClass<TypeToast>[] = [
	{ type: 'success', class: DEFAULT_COLOR_SUCCESS },
	{ type: 'error', class: DEFAULT_COLOR_ERROR },
	{ type: 'warning', class: DEFAULT_COLOR_WARNING },
	{ type: 'info', class: DEFAULT_COLOR_INFO },
	{ type: 'loading', class: DEFAULT_COLOR_LOADING },
	{ type: 'time', class: DEFAULT_COLOR_TIME }
];

export const COLOR_TEXT_ALARM_STYLE: StyleClass<TypeAlarm>[] = [
	{ type: 'success', class: 'text-green-500' },
	{ type: 'error', class: 'text-red-500' },
	{ type: 'warning', class: 'text-amber-500' },
	{ type: 'info', class: 'text-sky-500' },
	{ type: 'loading', class: 'text-gray-500' },
	{ type: 'time', class: 'text-orange-500' }
];

export const SIZE_STYLE: StyleClass<GeneralSize>[] = [
	{ type: 'xs', class: 'size-2.5' },
	{ type: 'sm', class: 'size-5' },
	{ type: 'base', class: 'size-6' },
	{ type: 'md', class: 'size-8' },
	{ type: 'lg', class: 'size-14' },
	{ type: 'xl', class: 'size-16' }
];

export const THEME_COLOR_STYLE: StyleClass<ThemeColor>[] = [{ type: 'info', class: '' }];
