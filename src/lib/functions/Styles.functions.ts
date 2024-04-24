import type { RoundedSize, TextSize } from "./../domains/types/Sizes.type";

export function getRoundedStyle(listStyleRounded: { type: RoundedSize; class: string }[], roundedSelected: RoundedSize) {
    return listStyleRounded.find((itemRounded) => itemRounded.type === roundedSelected);
}

export function getTextSizeStyle(listStyleTextSize: { type: TextSize; class: string }[], textSizeSelected: TextSize) {
    return listStyleTextSize.find((itemTextSize) => itemTextSize.type === textSizeSelected);
}
