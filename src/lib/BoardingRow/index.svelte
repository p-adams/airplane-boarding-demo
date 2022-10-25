<script lang="ts">
  import { MOCK_ROW as rows } from "./utils";
</script>

<div>
  {#each rows as row}
    {row.data.priority}
  {/each}
</div>
