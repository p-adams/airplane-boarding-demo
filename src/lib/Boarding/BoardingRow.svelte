<script lang="ts">
  import { range } from "../../utils";
  // import { MOCK_ROW as rows } from "./utils";
  const boardingRow = [...range({ limit: 24 })];
</script>

<div class="BoardingRow">
  {#each boardingRow as row}
    <div class="BoardingSlot-wrapper">
      <div class="BoardingSlot" />
    </div>
  {/each}
</div>

<style>
  .BoardingRow {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .BoardingSlot-wrapper {
    display: flex;
    justify-content: center;
  }
  .BoardingSlot {
    border: 1px solid gray;
    border-radius: 50%;
    width: 16px;
    height: 16px;
  }
</style>
