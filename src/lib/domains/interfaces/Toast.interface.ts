import type { ComponentType } from 'svelte';

export interface IToast {
	id?: string;
	type?: TypeToast;
	dismissible?: boolean;
	timeout?: number;
	message: string;
	component?: ComponentType;
}

export interface IToastLoading {
	id: string;
	dismissible?: boolean;
	message?: string;
}

export interface IToastUpdated {
	id: string;
	dismissible?: boolean;
	timeout?: number;
	message: string;
	type: TypeToast;
	component?: ComponentType;
}

export interface IToastDefault {
	id: string;
	type: TypeToast;
	dismissible: boolean;
	timeout: number;
	message?: string;
	component?: ComponentType;
}

export type TypeToast = 'info' | 'error' | 'warning' | 'success' | 'loading' | 'custom';
