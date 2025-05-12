import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const ConfirmDelete = async (onConfirm: () => void) => {
  const result = await MySwal.fire({
    title: 'Are you sure?',
    text: "You can't undo this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  });

  if (result.isConfirmed) {
    onConfirm();
  }
};

export default ConfirmDelete;