export function sumLineItems(lineItems: LineItem[] | undefined) {
	if (!lineItems) return 0;
	return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0);
}

export function centsToDollars(cents: number): string {
	const dollars = cents / 100;
	const dollarsWithDecimals = dollars.toFixed(2);
	return addThousandsSeparator(dollarsWithDecimals);
}

export function centsToDollarsWithoutCommas(cents: number): string {
	const dollars = cents / 100;
	return dollars.toFixed(2);
}

export function invoiceTotal(lineItems: LineItem[] | undefined, discount: number | undefined) {
	const lineItemsSum = sumLineItems(lineItems);
	if(discount) {
		const invoiceDiscount = lineItemsSum * (discount / 100);
		return lineItemsSum - invoiceDiscount;
	}
	return lineItemsSum;
}

export function dollarsToCents(dollars: number): number {
	return dollars * 100;
}

export function addThousandsSeparator(myNum: string): string {
	return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function sumInvoices(invoices: Invoice[] | undefined): number {
	if (!invoices) return 0;
	return invoices.reduce((pervValue, curValue) => {
		const invoiceSum = invoiceTotal(curValue.lineItems, curValue.discount);
		return pervValue + invoiceSum;
	}, 0);
}
