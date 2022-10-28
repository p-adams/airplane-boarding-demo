<script lang="ts">
  import { range } from "../SeatChart/utils";
  // import { MOCK_ROW as rows } from "./utils";
  const PASSENGER_LIMIT = 96;
  const boardingRow = [...range({ limit: 24 })];
  const boardingGate = [...range({ limit: PASSENGER_LIMIT })];
</script>

<div class="BoardingGate" />

<div class="BoardingRow">
  {#each boardingRow as row}
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
