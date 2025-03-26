import { create } from "zustand";

const useTaskStore = create((set) => ({
  tasks: [
    { id: 1, title: "Finish project report", isDone: false },
    { id: 2, title: "Prepare meeting presentation", isDone: false },
    { id: 3, title: "Code review", isDone: true },
    { id: 4, title: "Update website content", isDone: true },
    { id: 5, title: "Fix UI bug on homepage", isDone: false },
    { id: 6, title: "Schedule team meeting", isDone: true },
  ],
  addTask: (newTask) => {
    set((state) => ({tasks: [...state.tasks, newTask]}) )
  },
  removeTask: (taskId) => {
    set((state) => ({ tasks: state.tasks.filter((el) => el.id !== taskId) }));
  },
  doneTask: (taskId) => {
    set((state) => ({tasks : state.tasks.map(el => el.id == taskId ? {...el,isDone : !el.isDone} : el)}));
  },
}));

export default useTaskStore;
