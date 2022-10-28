interface BoardingRowData {
  priority: string;
  passenger: { name: string; seat: string };
}

interface BoardingRow {
  id: string;
  data: BoardingRowData;
}
