<script lang="ts">
  import { MOCK_ROW as rows } from "./utils";
  const PASSENGER_LIMIT = 96;
</script>

<div>
  {#each rows as row}
    {row.data.priority}
  {/each}
</div>
