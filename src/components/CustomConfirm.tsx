import toast from 'react-hot-toast';

 export const ConfirmDelete = (onConfirm: () => void) => {
  toast(
    (t) => (
      <span>
        Are you sure?
        <button onClick={() => { toast.dismiss(t.id); onConfirm(); }}>Yes</button>
        <button onClick={() => toast.dismiss(t.id)}>No</button>
      </span>
    ),
    { duration: 4000 }
  );
};
