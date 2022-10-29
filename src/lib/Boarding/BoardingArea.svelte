<script lang="ts">
  import { range } from "../../utils";
  export const PASSENGER_LIMIT = 96;
  const boardingGate = [...range({ limit: PASSENGER_LIMIT })];
</script>

<div class="BoardingGate-container">
  <div class="BoardingGate">
    {#each boardingGate as gate}
      <div class="Gate">{gate}</div>
    {/each}
  </div>
</div>

<style>
  .BoardingGate-container {
    border-left: 1px solid;
  }
  .BoardingGate {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-left: 10px;
  }
  .Gate {
    font-size: x-small;
  }
</style>
