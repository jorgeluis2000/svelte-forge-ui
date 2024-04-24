<script lang="ts">
  import XMark from "./../../icons/XMark.svelte";
  import type { ItemSelect } from "./../../domains/types/Select.type";
  export let selected: ItemSelect[];
  export let listShow: ItemSelect[];
  async function handlerSelected(item: ItemSelect) {
    const exist = selected.find((searching) => searching.value === item.value);
    if (exist) {
      selected = [
        ...selected.filter((searching) => searching.value !== item.value),
      ];
    } else {
      selected = [...selected, item];
    }
  }
</script>

<ul>
  {#each listShow as item}
    <button
      type="button"
      on:click={() => {
        handlerSelected(item);
      }}
      class="flex my-3"
    >
      <span
        class={`my-check-box ${
          selected.find((searching) => searching.value == item.value)
            ? "activate"
            : ""
        }`}
      >
        {#if selected.find((searching) => searching.value == item.value)}
          <XMark className="w-10" />
        {:else}
          <XMark className="w-10 opacity-0" />
        {/if}
      </span>
      <span class="mx-1">{item.text}</span>
    </button>
  {/each}
</ul>

<style lang="postcss">
  .my-check-box {
    @apply flex justify-center items-center transition-all duration-300 text-primary-500 border border-primary-300 w-5 h-5;
  }
  .my-check-box.activate {
    @apply border-primary-500;
  }
</style>
