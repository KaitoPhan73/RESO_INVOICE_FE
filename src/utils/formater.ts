import { format } from "date-fns";

export const formattedDate = (timestamp: any) => {
  return format(new Date(timestamp), "dd/MM/yyyy");
};

export const formattedDateTime = (timestamp: any) => {
  return format(new Date(timestamp), "dd/MM/yyyy HH:mm");
};
