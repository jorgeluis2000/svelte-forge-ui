<!-- markdownlint-disable -->
<div align="center">
    <h1>🔥 svelte-forge-ui 🔥</h1>
<p>It's a component library for Svelte. These component designs are lightweight and flexible.</p>
</div>
<hr />
<!-- markdownlint-restore -->
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
	bind:valueInput={inputFloat}
/>
```

<!-- markdownlint-restore -->

The other properties found are not mandatory but are properties that allow you to modify the style of the component.

## LICENSE

[MIT](LICENSE)
