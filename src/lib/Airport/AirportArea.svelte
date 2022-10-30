<script lang="ts">
  import { range } from "../../utils";
  import BoardingArea from "../Boarding/BoardingArea.svelte";
  import SeatChart from "../SeatChart/index.svelte";
  export const PASSENGER_LIMIT = 96;
  const passengers = [...range({ limit: PASSENGER_LIMIT })];
</script>

<div class="AirportArea">
  <div class="BoardingArea">
    <BoardingArea {passengers} />
  </div>
  <SeatChart />
</div>

<style>
  .AirportArea {
    display: flex;
  }
  .BoardingArea {
    margin-right: 10px;
  }
</style>
