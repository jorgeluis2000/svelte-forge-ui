/**
 * Generates a color scale based on a given base color and number of steps.
 *
 * @param baseColor - The base color in hexadecimal format (e.g., "#FF0000" for red).
 * @param steps - The number of steps in the color scale (default is 8).
 * @returns An array of hexadecimal color strings representing the color scale.
 */
export function generateColorScale(baseColor: string, steps: number = 8): string[] {
	let colorScale: string[] = [];
	try {
		const baseHSL = hexToHSL(baseColor);

		const luminosityStep = 100 / (steps + 3);

		colorScale = Array.from({ length: steps + 1 }, (_, index) => {
			const luminosity = index * luminosityStep;
			return hslToHex(baseHSL[0], baseHSL[1], luminosity);
		});

		colorScale.push(baseColor);

		colorScale.sort((color1, color2) => {
			const luminosity1 = hexToHSL(color1)[2];
			const luminosity2 = hexToHSL(color2)[2];

			return luminosity1 - luminosity2;
		});
		colorScale.shift();
		colorScale.reverse();
	} catch (error) {}
	return colorScale;
}

/**
 * Transforms a list of colors into an object with numeric keys and a default value.
 *
 * @param colorList - An array of color strings.
 * @param defaultValue - The default value to be assigned to the 'DEFAULT' key in the resulting object.
 * @returns An object with numeric keys (starting from 100) and the corresponding color values from the input list, plus a 'DEFAULT' key with the provided default value.
 */
export function transformListToObject(
	colorList: string[],
	defaultValue: string
): { [key: string]: string } {
	const transformedObject: { [key: string]: string } = {};

	/**
	 * Iterate over each color in the colorList array.
	 * For each color, create a key by multiplying the index (starting from 1) by 100.
	 * Assign the color value to the corresponding key in the transformedObject.
	 */
	colorList.forEach((color, index) => {
		const key = (index + 1) * 100;
		transformedObject[key.toString()] = color;
	});

	/**
	 * Assign the provided defaultValue to the 'DEFAULT' key in the transformedObject.
	 */
	transformedObject['DEFAULT'] = defaultValue;

	return transformedObject;
}

/**
 * Converts a hexadecimal color code to its corresponding HSL (Hue, Saturation, Lightness) values.
 *
 * @param {string} hex - The hexadecimal color code to be converted (e.g., "#FF0000" for red).
 * @returns {number[]} An array containing the HSL values [hue, saturation, lightness].
 */
export function hexToHSL(hex: string): number[] {
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (max !== min) {
		s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2.0 - max - min);

		switch (max) {
			case r:
				h = (g - b) / (max - min) + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / (max - min) + 2;
				break;
			case b:
				h = (r - g) / (max - min) + 4;
				break;
		}

		h /= 6;
	}

	return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

/**
 * Converts HSL (Hue, Saturation, Lightness) color values to a hexadecimal color code.
 *
 * @param {number} h - The hue value, ranging from 0 to 360.
 * @param {number} s - The saturation value, ranging from 0 to 100.
 * @param {number} l - The lightness value, ranging from 0 to 100.
 * @returns {string} The hexadecimal color code representing the HSL color.
 */
export function hslToHex(h: number, s: number, l: number): string {
	h /= 360;
	s /= 100;
	l /= 100;

	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		/**
		 * Helper function to calculate the RGB values based on the hue, saturation, and lightness.
		 *
		 * @param {number} p - The first component of the RGB calculation.
		 * @param {number} q - The second component of the RGB calculation.
		 * @param {number} t - The third component of the RGB calculation.
		 * @returns {number} The calculated RGB value.
		 */
		const hue2rgb = (p: number, q: number, t: number) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;

		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	/**
	 * Helper function to convert a decimal value to a hexadecimal string.
	 *
	 * @param {number} colorX - The decimal value to be converted.
	 * @returns {string} The hexadecimal string representation of the decimal value.
	 */
	const toHex = (colorX: number): string => {
		const hex = Math.round(colorX * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
