interface BoardingRowData {
  priority: string;
  passenger: { [key: string]: any };
}

interface BoardingRow {
  id: string;
  data: BoardingRowData;
}
