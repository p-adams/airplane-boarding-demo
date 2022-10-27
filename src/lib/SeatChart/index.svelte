<script lang="ts">
  import { range } from "./utils";
  function seatRow() {
    const rr: RRange = { start: 22, limit: 38, exclude: [33] };
    return [...range(rr)];
  }
</script>

<div class="Seat-chart">
  <div class="Port">
    {#each seatRow() as row}
      <div class="Row-label Port">{row}</div>
      <div class="Seat-row">
        <div class="Seat">a</div>
        <div class="Seat">b</div>
        <div class="Seat">c</div>
      </div>
    {/each}
  </div>
  <div class="Starboard">
    {#each seatRow() as row}
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
    height: 600px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  .Seat-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .Row-label {
    font-size: xx-small;
  }
  .Row-label.Port {
    text-align: left;
  }
  .Row-label.Starboard {
    text-align: right;
  }
</style>
