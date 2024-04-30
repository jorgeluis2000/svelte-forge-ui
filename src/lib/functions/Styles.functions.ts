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

function setCssVariablesSVG(node: SVGElement, variables: Record<string, string>) {
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
function setCssVariables(node: HTMLElement, variables: Record<string, string>) {
	for (const name in variables) {
		node.style.setProperty(`--${name}`, variables[name]);
	}
}

export function setTypeAction(node: HTMLInputElement, typeInput: string) {
	node.type = typeInput;
}
