import { writable } from "svelte/store";
import data from "../../seed.json";

export const clients = writable<Client[]>([]);

export function loadClients() {
  clients.set(data.clients);
}

export function addClient(clientToAdd: Client) {
	clients.update((prev: Client[]) => [...prev, {...clientToAdd, clientStatus: 'active'}]);
	return clientToAdd;
}

export function updateClient(clientToUpdate: Client) {
	clients.update(prev => prev.map((cur: Client) => cur.id === clientToUpdate.id ? clientToUpdate : cur));
	return clientToUpdate;
}

export function getClientById(id: string) {
	return data.clients.find(client => client.id === id);
}
