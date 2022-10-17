<script lang="ts">
  export let text = 'Click me';
</script>

<button
  on:click
  class="text-theme-colorButton bg-theme-backgroundButton w-40 h-12 cursor-pointer hover:bg-theme-orange208 transition duration-500 md:text-2xl md:w-64"
  >{text}</button
>
