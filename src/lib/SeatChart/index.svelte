<script lang="ts">
  import BoardingRow from "../BoardingRow/index.svelte";
  import { range } from "./utils";
  const seatRow = [...range({ start: 22, limit: 38, exclude: [33] })];
</script>

<div class="Seat-chart">
  <div class="Port">
    {#each seatRow as row}
      <div class="Row-label Port">{row}</div>
      <div class="Seat-row">
        <div class="Seat">a</div>
        <div class="Seat">b</div>
        <div class="Seat">c</div>
      </div>
    {/each}
  </div>
  <div class="Aisle"><BoardingRow /></div>
  <div class="Starboard">
    {#each seatRow as row}
      <div class="Row-label Starboard">{row}</div>
      <div class="Seat-row">
        <div class="Seat">d</div>
        <div class="Seat">e</div>
        <div class="Seat">f</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .Seat-chart {
    display: grid;
    grid-template-columns: 1fr 40px 1fr;
    border: 1px solid;
    border-radius: 6px;
    padding: 6px;
    background-color: #e8e9eb;
  }
  .Seat-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }
  .Seat {
    border: 1px solid gray;
    width: 24px;
    font-size: small;
    font-weight: 900;
  }
  .Row-label {
    font-size: xx-small;
    font-weight: 900;
  }
  .Row-label.Port {
    text-align: left;
  }
  .Row-label.Starboard {
    text-align: right;
  }
  .Aisle {
    background-color: #cccdc6;
    margin-left: 4px;
    margin-right: 4px;
  }
</style>
