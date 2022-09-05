<script lang="ts">
  export let label: any = undefined;
</script>

<div class="main round label-color" style="--label-background-color: {label.background}">
  <div class="round label-color label-border">{label.name}</div>
</div>

<style>
  .main {
    width: 7.3em;
    height: max-content;
    margin: 1px;
  }
  .round {
    border-radius: 4px;
    padding: 3px;
  }

  .label-color {
    color: #fff;
    background-color: var(--label-background-color);
    font-size: 0.93em;
  }

  .label-border {
    border: 1px solid #ccc !important;
  }
</style>
