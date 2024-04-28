<!-- markdownlint-disable -->
<div align="center">
    <h1>🔥 svelte-forge-ui 🔥</h1>
<p>It's a component library for Svelte. These component designs are lightweight and flexible.</p>
</div>
<hr />
<!-- markdownlint-restore -->

> [!WARNING]
> This library is currently in the creation phase and it is not recommended to implement it in productive environments, but we will soon release our version 1.0.0 which will be the stable version. Likewise, we appreciate that you use our lib for testing while our stable version is available..

## Table of Contents

- [Table of Contents](#table-of-contents)
- [The Problem](#the-problem)
- [This Solution](#this-solution)
- [Installation](#installation)
- [Example How to use](#example-how-to-use)
- [LICENSE](#license)

## The Problem

We require a collection of simple components that have flexibility to be modified. We require this to avoid always creating several components of the same thing, avoiding duplicating code, in addition to already having different style formats for each component.

## This Solution

**`svelte-forge-ui`** is a lightweight and easy-to-use solution, which seeks to give its users the different components that exist with different style formats, in addition to allowing flexibility when modifying certain parameters of the components.

> [!NOTE]
> These collections of components below use tailwind to help with a much faster design to implement.

## Installation

The component package is distributed through **npm**, which is included with **node**. You should install it as a `dependencies`.

npm:

```bash
npm install svelte-forge-ui
```

Yarn:

```bash
yarn add svelte-forge-ui
```

## Example How to use

We import the library into the `<script></script>` tags and create a variable that will take the data from **InputFloat**.

<!-- markdownlint-disable -->

```typescript
import { InputFloat } from 'svelte-forge-ui';
let inputFloat = '';
```

<!-- markdownlint-restore -->

Now let's call the `<InputFloat/>` component and set the required properties **_nameInput_**, **_labelText_** and **_valueInput_**.

<!-- markdownlint-disable -->

```svelte
<InputFloat
	type="text"
	className=""
	nameInput="input-float"
	labelText="Input Float"
	textSize="sm"
	rounded="none"
	colorHex={'#2980B9'}
	bind:valueInput={inputFloat}
/>
```

<!-- markdownlint-restore -->

You can also use CSS variables to place your own colors. The first thing will be to create the name of your theme, by default it is called **`primary`** but you can change it with the **`theme`** property.

After choosing the name or thinking about whether to leave it as default, you will have to create the css variables in `:root` so that your components have colors. The format that should be used for these variables should be the **name of the topic** that you chose **followed by a hyphen** and the **numbers from 100 to 900 of 100 in 100**. Below we will see an example taking into account that our theme is called **`primary`**:

<!-- markdownlint-disable -->

```css
:root {
	--primary-100: #d0dde2;
	--primary-200: #a0bbc5;
	--primary-300: #7199a8;
	--primary-400: #41778b;
	--primary-500: #12556e;
	--primary-600: #0e4458;
	--primary-700: #0b3342;
	--primary-800: #07222c;
	--primary-900: #041116;
}
```

<!-- markdownlint-restore -->

Now in the component to activate the CSS variables you must use the **`useCss`** property and the component would look like this:

<!-- markdownlint-disable -->

```svelte
<InputFloat
	type="text"
	className=""
	nameInput="input-float"
	labelText="Input Float"
	textSize="sm"
	rounded="none"
	useCss
	bind:valueInput={inputFloat}
/>
```

<!-- markdownlint-restore -->

The other properties found are not mandatory but are properties that allow you to modify the style of the component.

## LICENSE

[MIT](LICENSE)
