<script lang="ts">
	import Button from "$lib/components/Button.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import { deleteInvoice } from "$lib/stores/InvoiceStore";
	import { centsToDollars, invoiceTotal } from "$lib/utils/moneyHelpers";
	import { createEventDispatcher } from "svelte";
	import toast from 'svelte-french-toast';

  export let invoice: Invoice;
  export let isModalShow = false;

  const dispatch = createEventDispatcher();
</script>

<Modal isVisible={isModalShow} on:close>
	<div class="modal__content">
		<h6>Are you sure you want delete this invoice to
			<span>{invoice.client.name}</span> for
			<span>${centsToDollars(invoiceTotal(invoice.lineItems, invoice.discount))}</span>&nbsp;?
		</h6>
		<div class="modal__buttons">
			<Button label="Yes, Delete it" style="destructive"  onClick={() => {
				deleteInvoice(invoice);
        dispatch('close');
				toast.success('Your invoice was successfully deleted.', {
				style: 'font-size: 0.8rem;',
				iconTheme: {
					primary: '#22c697',
					secondary: '#f8f8f8'
				}
			});
			}} />
			<Button label="Cancel" style="secondary"  onClick={() => {dispatch('close')}} />
		</div>
	</div>
</Modal>

<style>
  .modal__content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 8.8rem;
		text-align: center;
	}

	.modal__content h6 {
		color: var(--color-black);
	}

	.modal__content span {
		color: var(--color-error);
	}

	.modal__buttons {
		display: flex;
		column-gap: 1rem;
	}
</style>
