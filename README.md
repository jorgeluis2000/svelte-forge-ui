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

Además puedes utilizar variables de css para colocar tus propios colores. Lo primero será crear el nombre de tu tema, por defecto se llama **`primary`** pero lo puedes cambiar con la propiedad **`theme`**.

Luego de escoger el nombre o pensar si dejarlo por defecto, deberás crear las variables de css en `:root` para que tus componentes tenga colores. El formato que se debe usar para estas variables debe ser el **nombre del tema** que escogiste **enseguida de un guio** y los **números del 100 al 900 de 100 en 100**. A continuación veremos un ejemplo teniendo en cuenta que nuestro tema se llama **`primary`**:

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

Ahora en el componente para activar las variables de css deberá usar la propiedad **`useCss`** y el componente quedaría de esta forma:

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
