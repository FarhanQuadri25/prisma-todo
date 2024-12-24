import { getAllTasks } from "@/utils/actions";
import DeleteForm from "./DeleteForm";
import Link from "next/link";

const TaskList = async () => {
  const tasks = await getAllTasks();
  if (tasks.length === 0) {
    return (
      <h1 className="text-center font-poppins font-bold text-2xl capitalize">
        No tasks to show...
      </h1>
    );
  }
  return (
    <ul className="mt-8 font-poppins font-bold text-xl">
      {tasks.map((task) => {
        const { id, content, completed } = task;
        return (
          <li
            key={id}
            className="flex justify-between items-center px-6 py-4 mb-7 border border-base-300 rounded-lg shadow-lg hover:translate-y-4 transition-all delay-100 cursor-pointer"
          >
            <h2
              className={`text-lg capitalize ${
                completed ? `line-through` : null
              }`}
            >
              {content}
            </h2>
            <div className="flex gap-6 items-center">
              <Link
                href={`/tasks/${id}`}
                className="btn btn-primary btn-sm capitalize"
              >
                edit
              </Link>
              <DeleteForm id={id} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
