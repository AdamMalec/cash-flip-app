interface Invoice {
	id: string
	invoiceStatus: InvoiceStatus
	issueDate: string
	invoiceNumber: string
	client: Client
	dueDate: string
	subject?: string
	lineItems?: lineItems[]
	notes?: string
	terms?: string
	createdAt: string
}

interface Client {
	id: string
	clientStatus: ClientStatus
	name: string
	email: string
	state: string
	city: string
	street: string
	zip: string
}

interface lineItems {
	id: string
	amount: number
	quantity: number
	description: string
}

enum InvoiceStatus {
	draft = 'draft',
	sent = 'sent',
	paid = 'paid',
}

enum ClientStatus {
	active = 'active',
	archived = 'archived',
}
