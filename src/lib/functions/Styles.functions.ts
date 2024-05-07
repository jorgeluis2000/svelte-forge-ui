import type { TypeButton } from '$lib/domains/types/TypeButton.type';
import type { StyleClass } from '../domains/types/Style.type';

/**
 * Retrieves a custom style object from a list of styles based on a selected value.
 *
 * @template TypeStyle - The type of the style object's 'type' property.
 * @param {Array<StyleClass<TypeStyle>>} listStyle - An array of style objects containing a 'type' property of type TypeStyle and a 'class' property of type string.
 * @param {TypeStyle} selected - The value of the 'type' property to match against the listStyle array.
 * @param {StyleClass<TypeStyle>} defaultNotSelected - The default style object to return if no match is found in the listStyle array.
 * @returns {StyleClass<TypeStyle>} The style object from the listStyle array that matches the 'selected' value, or the 'defaultNotSelected' object if no match is found.
 */
export function getCustomStyle<TypeStyle>(
	listStyle: StyleClass<TypeStyle>[],
	selected: TypeStyle,
	defaultNotSelected: StyleClass<TypeStyle>
): StyleClass<TypeStyle> {
	return listStyle.find((item) => item.type === selected) ?? defaultNotSelected;
}

/**
 * Applies CSS variables to the specified element.
 * @param {HTMLElement} node - The HTML node to which CSS variables will be applied.
 * @param {Record<string, string>} variables - An object containing CSS variables as key-value pairs.
 * Keys are the names of the variables and values are the values to be assigned to those variables.
 * @returns {Object} - An object with an `update` method that allows updating the CSS variables of the node.
 */
export function cssVariables(node: HTMLElement, variables: Record<string, string>): object {
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

export function cssVariablesSVG(node: SVGElement, variables: Record<string, string>) {
	setCssVariablesSVG(node, variables);

	return {
		update(variables: Record<string, string>) {
			setCssVariablesSVG(node, variables);
		}
	};
}

/**
 * Sets CSS variables on an SVG element.
 *
 * @param {SVGElement} node - The SVG element on which CSS variables need to be set.
 * @param {Record<string, string>} variables - An object containing key-value pairs of CSS variable names and their corresponding values.
 */
export function setCssVariablesSVG(node: SVGElement, variables: Record<string, string>) {
	for (const name in variables) {
		node.style.setProperty(`--${name}`, variables[name]);
	}
}

/**
 * Sets CSS variables on the specified element.
 * @param {HTMLElement} node - The HTML node to which CSS variables will be applied.
 * @param {Record<string, string>} variables - An object containing CSS variables as key-value pairs.
 * Keys are the names of the variables and values are the values to be assigned to those variables.
 */
export function setCssVariables(node: HTMLElement, variables: Record<string, string>) {
	for (const name in variables) {
		node.style.setProperty(`--${name}`, variables[name]);
	}
}

/**
 * Sets the type attribute of an HTML input element.
 *
 * @param {HTMLInputElement} node - The HTML input element whose type attribute needs to be set.
 * @param {string} typeInput - The desired type for the input element.
 */
export function setTypeAction(node: HTMLInputElement, typeInput: string) {
	node.type = typeInput;
}


/**
 * Sets the type attribute of an HTML button element.
 *
 * @param {HTMLButtonElement} node - The HTML button element whose type attribute needs to be set.
 * @param {TypeButton} typeButton - The desired type for the button element.
 */
export function setTypeActionButton(node: HTMLButtonElement, typeButton: TypeButton) {
	node.type = typeButton;
}