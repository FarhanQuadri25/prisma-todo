import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

const SingleTaskPage = async ({ params }) => {
  const { id } = await params;
  const task = await getTask(id);
  return (
    <>
      <div className="mb-16 new-container p-12 mx-auto">
        <Link
          href={"/"}
          className="btn btn-accent text-xl capitalize font-poppins"
        >
          &#8592; back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTaskPage;
