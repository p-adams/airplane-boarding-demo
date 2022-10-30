<script lang="ts">
  export let passengers;
</script>

<div class="BoardingGate-container">
  <div class="BoardingGate">
    {#each passengers as passenger}
      <div class="Passenger">{passenger}</div>
    {/each}
  </div>
</div>

<style>
  .BoardingGate-container {
    border-left: 1px solid;
  }
  .BoardingGate {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-left: 10px;
  }
  .Passenger {
    font-size: x-small;
  }
</style>
