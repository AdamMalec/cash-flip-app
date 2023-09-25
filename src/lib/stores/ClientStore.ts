import supabase from "$lib/utils/supabase";
import { writable } from "svelte/store";

export const clients = writable<Client[]>([]);

export async function loadClients() {
  const { data, error } = await supabase
    .from('client')
    .select('*, invoice(id, invoiceStatus, lineItems(*))')

  if (error) {
    console.error(error);
    return;
  }

  clients.set(data as Client[]);
}

export function addClient(clientToAdd: Client) {
	clients.update((prev: Client[]) => [...prev, {...clientToAdd, clientStatus: 'active'}]);
	return clientToAdd;
}

export function updateClient(clientToUpdate: Client) {
	clients.update(prev => prev.map((cur: Client) => cur.id === clientToUpdate.id ? clientToUpdate : cur));
	return clientToUpdate;
}

export async function getClientById(id: string) {
  const { data, error } = await supabase
    .from('client')
    .select('*, invoice(id, invoiceStatus, invoiceNumber, dueDate, client(id, name), lineItems(*))')
    .eq('id', id);

  if (error) {
    console.error(error);
    return;
  }

  if (data && data[0]) return data[0] as Client;

  console.warn('cannot find a client');
}
