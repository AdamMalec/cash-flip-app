import toast from 'svelte-french-toast';

export const displayErrorMessage = (error: Error) => {
  console.error(error);
  toast.error(error.message)
}
