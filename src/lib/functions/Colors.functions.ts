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

export function transformListToObject(
	colorList: string[],
	defaultValue: string
): { [key: string]: string } {
	const transformedObject: { [key: string]: string } = {};

	colorList.forEach((color, index) => {
		const key = (index + 1) * 100;
		transformedObject[key.toString()] = color;
	});

	transformedObject['DEFAULT'] = defaultValue;

	return transformedObject;
}

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

export function hslToHex(h: number, s: number, l: number): string {
	h /= 360;
	s /= 100;
	l /= 100;

	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
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

	const toHex = (x: number) => {
		const hex = Math.round(x * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
