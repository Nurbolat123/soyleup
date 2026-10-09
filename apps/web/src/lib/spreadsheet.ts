"use client";

import ExcelJS from "exceljs";

function csvEscape(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function cellToString(v: ExcelJS.CellValue): string {
  if (v == null) return "";
  if (typeof v === "object") {
    if ("text" in v) return String((v as { text: unknown }).text ?? "");
    if ("result" in v) return String((v as { result: unknown }).result ?? "");
    if (v instanceof Date) return v.toISOString();
  }
  return String(v);
}

/** Читает загруженный файл (.xlsx/.xls или .csv) и превращает первый лист в CSV-текст. */
export async function fileToCsv(file: File): Promise<string> {
  if (/\.csv$/i.test(file.name)) return file.text();

  const buffer = await file.arrayBuffer();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(buffer);
  const sheet = workbook.worksheets[0];
  if (!sheet) return "";

  const lines: string[] = [];
  sheet.eachRow({ includeEmpty: false }, (row) => {
    const values = (row.values as ExcelJS.CellValue[]).slice(1);
    lines.push(values.map((v) => csvEscape(cellToString(v))).join(","));
  });
  return lines.join("\n");
}

/** Собирает и скачивает .xlsx-шаблон: первая строка — заголовки (жирным), дальше — примеры заполнения. */
export async function downloadXlsxTemplate(filename: string, headers: string[], exampleRows: (string | number)[][]) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Шаблон");
  sheet.addRow(headers);
  sheet.getRow(1).font = { bold: true };
  exampleRows.forEach((row) => sheet.addRow(row));
  sheet.columns.forEach((col) => {
    col.width = 22;
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
