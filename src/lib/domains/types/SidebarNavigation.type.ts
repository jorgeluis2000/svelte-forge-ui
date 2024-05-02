import type { ComponentType } from "svelte";

export type ItemList = {
    opened: boolean;
    isList: boolean;
    icon: ComponentType;
    nameItem: string;
    href: string;
    subItems: SubItems[];
}

export type SubItems = {
    href?: string;
    text: string;
}


export type ItemTabList = {
    opened: boolean
    isList: boolean
    color: string
    nameItem: string
    href: string
    icon: ComponentType
    items: GroupItemSubMenuTabList[]
}

export type GroupItemSubMenuTabList = {
    title: string
    items: ItemSubMenuTabList[]
}

export type ItemSubMenuTabList = {
    color: string
    text: string
    href: string
    icon: ComponentType
}