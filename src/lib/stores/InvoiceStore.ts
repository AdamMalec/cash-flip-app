import supabase from "$lib/utils/supabase";
import { writable } from "svelte/store";

export const invoices = writable<Invoice[]>([]);

export const loadInvoices = async() => {

	const { data, error } = await supabase
	.from('invoice')
	.select('*, client(id, name), lineItems(*)')
	console.log(data);

	if (error) {
		console.log(
			'%cSUPER LOG: ',
			'color: yellow; background-color: blue;',
			error
		);
		return
	}

	invoices.set(data as Invoice[])
}

export const addInvoice = (invoiceToAdd: Invoice) => {
	invoices.update((prev: Invoice[]) => [...prev, invoiceToAdd]);

	return invoiceToAdd;
}

export const updateInvoice = (invoiceToUpdate: Invoice) => {
	invoices.update((prev: Invoice[]) => prev.map((cur: Invoice) => cur.id === invoiceToUpdate.id ? invoiceToUpdate : cur));
	return invoiceToUpdate;
}

export const getInvoiceById = async(id: string) => {

	const { data, error } = await supabase
	.from('invoice')
	.select('*, client(id, name), lineItems(*)')
	.eq('id', id);

	console.log(data);

	if (error) {
		console.error(error);
		return
	}

	if (data && data[0]) {
		return data[0]
	}

	console.warn('Can not find invoice with id: ' + id);
}

export const deleteInvoice = (invoiceToDelete: Invoice) => {
	invoices.update((prev: Invoice[]) => prev.filter((cur: Invoice) => cur.id !== invoiceToDelete.id));

	return invoiceToDelete;
}
