<script lang="ts">
  import { range } from "../../utils";
  export const PASSENGER_LIMIT = 96;
  const boardingGate = [...range({ limit: PASSENGER_LIMIT })];
</script>

<div class="BoardingGate">
  {#each boardingGate as gate}
    <div>{gate}</div>
  {/each}
</div>
