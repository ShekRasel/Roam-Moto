export function localDate(date = new Date()) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

export function returnDate(start: string, days: number) {
  if (!start) return "";
  const date = new Date(start + "T12:00:00");
  if (Number.isNaN(date.getTime())) return "";
  date.setDate(date.getDate() + days);
  return localDate(date);
}

export function displayDate(value: string) {
  if (!value) return "Choose a date";
  const date = new Date(value + "T12:00:00");
  if (Number.isNaN(date.getTime())) return "Choose a date";
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
