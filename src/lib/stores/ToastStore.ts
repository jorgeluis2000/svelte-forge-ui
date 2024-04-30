import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import type {
	IToast,
	IToastDefault,
	IToastLoading,
	IToastUpdated,
	TypeToast
} from '$lib/domains/interfaces/Toast.interface';

export const toasts = writable([] as IToast[]);

export const addLoadingToast = (toast: IToastLoading) => {
	const defaults: IToastDefault = {
		id: toast.id,
		type: 'loading',
		dismissible: toast.dismissible ?? true,
		timeout: 0,
		message: toast.message ?? 'Loading...'
	};
	const newToast = defaults as IToast;
	toasts.update((all) => [{ ...newToast }, ...all]);
	if (defaults.timeout) setTimeout(() => dismissToast(defaults.id), defaults.timeout);
};

export const updateToast = (toast: IToastUpdated) => {
	const newToast: IToast = {
		id: toast.id,
		message: toast.message,
		dismissible: toast.dismissible ?? true,
		timeout: toast.timeout ?? 4000,
		type: toast.type
	};
	dismissToast(toast.id);
	toasts.update((all) => [{ ...newToast }, ...all]);
	setTimeout(() => dismissToast(toast.id), newToast.timeout);
};

export const addToast = (toast: IToast) => {
	const uuid = uuidv4();

	const defaults: IToastDefault = {
		id: uuid,
		type: 'info',
		dismissible: true,
		timeout: 4000
	};
	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);

	if (toast.timeout) setTimeout(() => dismissToast(defaults.id), toast.timeout);
};

export const generateID = () => {
	return uuidv4();
};

export const dismissToast = (id: string) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};

export function getTypeToast(httpCode: number) {
	let typeToast: TypeToast = 'loading';

	if (httpCode >= 1000 && httpCode <= 2999) {
		typeToast = 'success';
	} else if (httpCode <= 3999) {
		typeToast = 'info';
	} else if (httpCode <= 4999) {
		typeToast = 'error';
	} else if (httpCode >= 5000) {
		typeToast = 'warning';
	}
	return typeToast;
}
