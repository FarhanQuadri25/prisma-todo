import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

export default async function Home() {
  return (
    <div className="new-container mx-auto p-4">
      <TaskForm />
      <TaskList />
    </div>
  );
}
