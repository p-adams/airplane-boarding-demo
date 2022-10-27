<script lang="ts">
  import { range } from "../SeatChart/utils";
  // import { MOCK_ROW as rows } from "./utils";
  const PASSENGER_LIMIT = 96;
  const rows = [...range({ limit: 24 })];
</script>

<div class="BoardingRow">
  {#each rows as row}
    <div class="Passenger">{row}</div>
  {/each}
</div>

<style>
  .BoardingRow {
    display: flex;
    flex-direction: column;
  }
  .Passenger {
    display: flex;
    justify-content: center;
    font-size: smaller;
  }
</style>
