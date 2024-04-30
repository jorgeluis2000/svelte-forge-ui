
export interface IToast {
    id?: string
    type?: TypeToast
    dismissible?: boolean
    timeout?: number
    message: string
}

export interface IToastLoading {
    id: string
    dismissible?: boolean
    message?: string
}

export interface IToastUpdated {
    id: string
    dismissible?: boolean
    timeout?: number
    message: string
    type: TypeToast
}

export interface IToastDefault {
    id: string
    type: TypeToast
    dismissible: boolean
    timeout: number
    message?: string
}

export type TypeToast = 'info' | 'error' | 'warning' | 'success' | 'loading' | 'custom'