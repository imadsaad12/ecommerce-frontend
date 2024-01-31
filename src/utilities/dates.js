export const formatAsDDMMYYYY = (date) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return formattedDate;
};
