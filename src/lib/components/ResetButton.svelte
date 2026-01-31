<script lang="ts">
  import { resetInventory } from '../inventory.svelte';
  import { resetActivatedZones } from '../dragState.svelte';
  import { navigateTo } from '../router.svelte';

  function handleReset() {
    if (confirm('Are you sure you want to start over? All progress will be lost.')) {
      resetInventory();
      resetActivatedZones();
      navigateTo('start');
    }
  }
</script>

<button class="reset-button" onclick={handleReset}>
  Start Over
</button>

<style>
  .reset-button {
    width: 100%;
    padding: 0.625rem 1rem;
    background: linear-gradient(135deg, #4a2a2a 0%, #3a1a1a 100%);
    border: 1px solid #6a3a3a;
    border-radius: 8px;
    color: #d88;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .reset-button:hover {
    background: linear-gradient(135deg, #5a3a3a 0%, #4a2a2a 100%);
    border-color: #8a5a5a;
  }
</style>
