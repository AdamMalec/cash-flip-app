interface Invoice {
	id: string
	invoiceStatus: InvoiceStatus
	issueDate: string
	invoiceNumber: string
	client: Client
	dueDate: string
	subject?: string
	lineItems?: lineItems[]
	discount?: number
	notes?: string
	terms?: string
	createdAt: string
}

interface Client {
  clientStatus?: ClientStatus
  city?: string
  email: string
  id: string
  name: string
  state?: string
  street?: string
  zip?: string
}

interface LineItem {
	id: string
	amount: number
	quantity: number
	description: string
}

interface Settings {
	name: string
	email: string
	street: string
	city: string
	state: string
	zip: string
}
