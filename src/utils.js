export function convertToIST(dateTimeString) {
  const dateTime = new Date(dateTimeString);

  dateTime.setHours(dateTime.getHours() + 5);
  dateTime.setMinutes(dateTime.getMinutes() + 30);

  const istDate = dateTime.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  const istTime = dateTime.toISOString().split("T")[1].split(".")[0];

  return istDate.replaceAll(",", " ") + " " + istTime;
}
