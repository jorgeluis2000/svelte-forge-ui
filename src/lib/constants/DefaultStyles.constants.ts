import type { StyleClass } from '$lib/domains/types/Style.type';
import type { GeneralSize, RoundedSize, TextSize } from '$lib/domains/types/Sizes.type';
import type { TypeAlarm } from '$lib/domains/types/TypeAlarm.type';

export const DEFAULT_ALARM: StyleClass<TypeAlarm> = {
	type: 'info',
	class: 'text-sky-500 bg-sky-100'
};
export const DEFAULT_SIZE: StyleClass<GeneralSize> = { type: 'base', class: 'size-6' };
export const DEFAULT_TEXT_SIZE: StyleClass<TextSize> = { type: 'base', class: 'text-base' };
export const DEFAULT_ROUNDED_SIZE: StyleClass<RoundedSize> = {
	type: 'none',
	class: 'rounded-none'
};

export const DEFAULT_COLOR_HEX: string = '#12556e';
export const DEFAULT_THEME: string = 'primary';
export const DEFAULT_COLOR_ERROR: string = '#ef4444';
export const DEFAULT_COLOR_INFO: string = '#0ea5e9';
export const DEFAULT_COLOR_WARNING: string = '#f59e0b';
export const DEFAULT_COLOR_SUCCESS: string = '#10b981';
export const DEFAULT_COLOR_LOADING: string = '#64748b';
export const DEFAULT_COLOR_TIME: string = '#f97316';
