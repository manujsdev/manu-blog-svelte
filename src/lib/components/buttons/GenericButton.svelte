<script lang="ts">
  export let text = 'Click me';
</script>

<button on:click>{text}</button>

<style>
  button {
    color: var(--theme-colorButton);
    text-decoration: none;
    transition: all 0.3s ease 0s;
    background-color: var(--theme-backgroundButton);
    font-size: 1.145em;
    width: 9em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    cursor: pointer;
  }

  button:hover {
    transition: 0.5s;
    background-color: var(--theme-orange208);
  }

  @media (min-width: 768px) {
    button {
      font-size: 1.5em;
      width: 9.9em;
    }
  }

  @media (min-width: 1920px) {
    button {
      font-size: 18px;
    }
  }
</style>
