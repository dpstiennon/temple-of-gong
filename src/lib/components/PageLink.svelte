<script lang="ts">
  import { navigateTo } from '../router.svelte';

  interface Props {
    targetPageId: string;
    text: string;
  }

  let { targetPageId, text }: Props = $props();

  function handleClick() {
    navigateTo(targetPageId);
  }
</script>

<button class="page-link" onclick={handleClick}>
  {text}
</button>

<style>
  .page-link {
    display: block;
    width: 100%;
    padding: 0.875rem 1.25rem;
    background: linear-gradient(135deg, #2d4a3e 0%, #1d3a2e 100%);
    border: 1px solid #3d6a5e;
    border-radius: 8px;
    color: #a8d8c8;
    font-size: 1rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .page-link:hover {
    background: linear-gradient(135deg, #3d6a5e 0%, #2d5a4e 100%);
    border-color: #5d8a7e;
    transform: translateX(4px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .page-link:active {
    transform: translateX(2px);
  }
</style>
