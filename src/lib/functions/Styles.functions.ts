import type { RoundedSize, TextSize } from './../domains/types/Sizes.type';

/**
 * Retrieves the appropriate rounded style object based on the provided rounded size selection.
 *
 * @param listStyleRounded - An array of objects containing rounded size configurations.
 *                            Each object has a 'type' property of type 'RoundedSize' and
 *                            a 'class' property representing the corresponding CSS class.
 * @param roundedSelected - The selected rounded size value of type 'RoundedSize'.
 *
 * @returns The rounded style object matching the selected rounded size.
 *          If no match is found, returns an object with { type: 'none', class: 'rounded-none' }.
 * @example
 * const listStyleRounded = [
 *     { type: 'sm', class: 'rounded-sm' },
 *     { type: 'md', class: 'rounded-md' },
 *     { type: 'lg', class: 'rounded-lg' },
 *     { type: 'xl', class: 'rounded-xl' },
 * ];
 * const roundedStyle = getRoundedStyle(listStyleRounded, 'md');
 * console.log(roundedStyle); // Output: { type: 'md', class: 'rounded-md' }
 * const noMatchStyle = getRoundedStyle(listStyleRounded, 'full');
 * console.log(noMatchStyle); // Output: { type: 'none', class: 'rounded-none' }
 */
export function getRoundedStyle(
	listStyleRounded: { type: RoundedSize; class: string }[],
	roundedSelected: RoundedSize
) {
	return (
		listStyleRounded.find((itemRounded) => itemRounded.type === roundedSelected) ?? {
			type: 'none',
			class: 'rounded-none'
		}
	);
}

/**
 * Retrieves the appropriate text size style object based on the provided text size selection.
 *
 * @param listStyleTextSize - An array of objects containing text size configurations.
 *                             Each object has a 'type' property of type 'TextSize' and
 *                             a 'class' property representing the corresponding CSS class.
 * @param textSizeSelected - The selected text size value of type 'TextSize'.
 *
 * @returns The text size style object matching the selected text size.
 *          If no match is found, returns an object with { type: 'base', class: 'text-base' }.
 * @example
 * const listStyleRounded = [
 *     { type: 'xs', class: 'text-xs' },
 *     { type: 'sm', class: 'text-sm' },
 *     { type: 'base', class: 'text-base' },
 *     { type: 'lg', class: 'text-lg' },
 *     { type: 'xl', class: 'text-xl' },
 * ];
 * const roundedStyle = getRoundedStyle(listStyleRounded, 'md');
 * console.log(roundedStyle); // Output: { type: 'md', class: 'rounded-md' }
 * const noMatchStyle = getRoundedStyle(listStyleRounded, 'full');
 * console.log(noMatchStyle); // Output: { type: 'base', class: 'text-base' }
 */
export function getTextSizeStyle(
	listStyleTextSize: { type: TextSize; class: string }[],
	textSizeSelected: TextSize
) {
	return (
		listStyleTextSize.find((itemTextSize) => itemTextSize.type === textSizeSelected) ?? {
			type: 'base',
			class: 'text-base'
		}
	);
}

/**
 * Applies CSS variables to the specified element.
 * @param {HTMLElement} node - The HTML node to which CSS variables will be applied.
 * @param {Record<string, string>} variables - An object containing CSS variables as key-value pairs.
 * Keys are the names of the variables and values are the values to be assigned to those variables.
 * @returns {Object} - An object with an `update` method that allows updating the CSS variables of the node.
 */
export function cssVariables(node: HTMLElement, variables: Record<string, string>) {
	setCssVariables(node, variables);

	return {
		/**
		 * Updates the CSS variables of the node with new values.
		 * @param {Record<string, string>} variables - An object containing the updated CSS variables.
		 */
		update(variables: Record<string, string>) {
			setCssVariables(node, variables);
		}
	};
}

/**
 * Sets CSS variables on the specified element.
 * @param {HTMLElement} node - The HTML node to which CSS variables will be applied.
 * @param {Record<string, string>} variables - An object containing CSS variables as key-value pairs.
 * Keys are the names of the variables and values are the values to be assigned to those variables.
 */
function setCssVariables(node: HTMLElement, variables: Record<string, string>) {
	for (const name in variables) {
		node.style.setProperty(`--${name}`, variables[name]);
	}
}