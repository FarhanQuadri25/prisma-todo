import { deleteTask } from "@/utils/actions";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-ghost hover:bg-rose-500 bg-rose-700 btn-sm font-poppins font-bold text-white capitalize transition-all delay-100">
        delete
      </button>
    </form>
  );
};

export default DeleteForm;
