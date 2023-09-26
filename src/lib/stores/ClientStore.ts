import { displayErrorMessage } from "$lib/utils/handleError";
import supabase from "$lib/utils/supabase";
import toast from "svelte-french-toast";
import { writable } from "svelte/store";

export const clients = writable<Client[]>([]);

export async function loadClients() {
  const { data, error } = await supabase
    .from('client')
    .select('*, invoice(id, invoiceStatus, lineItems(*))')

  if (error) {
    displayErrorMessage(error as Error);
    return;
  }

  clients.set(data as Client[]);
}

export const addClient = async (clientToAdd: Client) => {
  const { data, error } = await supabase
    .from('client')
    .insert([
      { ...clientToAdd, clientStatus: "active" },
    ])
    .select()

  if (error) {
    displayErrorMessage(error as Error);
    return;
  }

  const id = data[0].id;

  clients.update((prev: Client[]) => [...prev, { ...clientToAdd, clientStatus: "active", id }]);

  toast.success('Your client was successfully created.', {
    style: 'font-size: 0.8rem',
    iconTheme: {
      primary: '#22c697',
      secondary: '#f8f8f8'
    }
  });

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
    displayErrorMessage(error as Error)
    return;
  }

  if (data && data[0]) return data[0] as Client;

  console.warn('cannot find a client');
}
