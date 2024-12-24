"use client";
import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form
      action={editTask}
      className="p-12 new-container mx-auto border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full font-poppins capitalize text-xl"
      />
      <div className="form-control">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text text-xl font-poppins tracking-wider">
            completed
          </span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-success btn-block font-poppins text-xl capitalize"
      >
        Edit
      </button>
    </form>
  );
};

export default EditForm;
