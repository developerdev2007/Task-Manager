export interface TaskContextType {
  title: string;
  description: string;
  status: "To Do" | "In Progress" | "Completed" | "Timeout";
  createdAt: Date;
  priority: "Low" | "High";
  deadLine: Date;
}
