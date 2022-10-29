<script lang="ts">
  import BoardingArea from "../Boarding/BoardingArea.svelte";
  import SeatChart from "../SeatChart/index.svelte";
</script>

<div class="AirportArea">
  <div class="BoardingArea">
    <BoardingArea />
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
