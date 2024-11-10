import { createContext, FC, useContext, useState } from "react";
import { TaskContextType } from "../types.ts/types";
interface TaskContextProviderProps {
  children: React.ReactNode;
}

export interface TaskUseState {
  tasks: TaskContextType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskContextType[]>>;
}
const TaskContext = createContext<TaskUseState | undefined>(undefined);

export const TaskContextProvider: FC<TaskContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<TaskContextType[]>([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
