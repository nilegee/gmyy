<script lang="ts">
  let stats = $state([] as string[]);
</script>

<h1 class="text-xl font-bold mb-4">Dashboard</h1>
<div class="grid gap-4">
  {#each stats as stat}
    <div class="p-4 border rounded">{stat}</div>
  {/each}
</div>
