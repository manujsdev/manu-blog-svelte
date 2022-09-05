<script lang="ts">
  import { appStore } from '$lib/stores/AppStore';
</script>

<div class="container">
  <a href="/blog" class={`color-text-navbar-${$appStore.onScrolling ? 'onscroll' : 'primary'}`}>blog</a>
</div>

<style>
  a {
    font-size: 17px;
    line-height: 17px;
    margin: 0 2vw;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease 0s;
  }

  a:hover {
    transition: 0.5s;
    border-radius: 3px;
    color: var(--theme-bg1);
  }

  @media (min-width: 1024px) {
    .container {
      display: flex;
      padding: 0;
      justify-content: space-around;
      align-items: center;
      width: auto;
    }
  }
</style>
