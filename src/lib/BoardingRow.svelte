<script lang="ts">
  interface BoardingRowData {
    priority: string;
    passenger: { [key: string]: any };
  }

  interface BoardingRow {
    id: string;
    data: BoardingRowData;
  }
  const row: BoardingRow[] = [];
</script>

<div>row</div>
