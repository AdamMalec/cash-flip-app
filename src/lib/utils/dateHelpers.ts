import { isBefore } from "date-fns";

// Convert date from yyyy-mm-dd to d-m-yyyy
export function convertDate(myDate: string): string {
	const [year, month, day] = myDate.split('-');
	return `${parseInt(day)}/${parseInt(month)}/${year}`;
}

export const isLate = (myDate: string): boolean => {
	const [year, month, day] = myDate.split('-');
	const dueDate = new Date(parseInt(year), parseInt(month), parseInt(day));
	const today = new Date();
	return isBefore(dueDate, today);
}
