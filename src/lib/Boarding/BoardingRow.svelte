<script lang="ts">
  import { range } from "../../utils";
  // import { MOCK_ROW as rows } from "./utils";
  const boardingRow = [...range({ limit: 24 })];
</script>

<div class="BoardingRow">
  {#each boardingRow as row}
    <div class="Passenger">{row}</div>
  {/each}
</div>

<style>
  .BoardingRow {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .Passenger {
    display: flex;
    justify-content: center;
    font-size: smaller;
  }
</style>
