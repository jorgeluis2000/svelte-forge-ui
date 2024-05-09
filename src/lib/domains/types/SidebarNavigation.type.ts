import type { ComponentType } from "svelte";
import type { TypeItem } from "./TypeButton.type";

export type ItemList = {
    opened: boolean;
    isList?: boolean;
    icon?: ComponentType;
    nameItem: string;
    href?: string;
    subItems: SubItems[];
}

export type SubItems = {
    href?: string;
    type?: TypeItem
    text: string;
}


export type ItemTabList = {
    opened: boolean
    isList?: boolean
    type?: TypeItem
    color: string
    nameItem: string
    href?: string
    icon: ComponentType
    items: GroupItemSubMenuTabList[]
}

export type GroupItemSubMenuTabList = {
    title: string
    items: ItemSubMenuTabList[]
}

export type ItemSubMenuTabList = {
    color: string
    type?: TypeItem
    text: string
    href?: string
    icon: ComponentType
}