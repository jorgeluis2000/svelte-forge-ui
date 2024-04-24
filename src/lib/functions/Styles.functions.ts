import type { RoundedSize } from "./../domains/types/Sizes.type";

export function getRoundedStyle(listStyleRounded: { type: RoundedSize; class: string }[], roundedSelected: RoundedSize) {
    return listStyleRounded.find((itemRounded) => itemRounded.type === roundedSelected);
}
