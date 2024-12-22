export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleTaskEdit: (id: string, text: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleTaskEdit: (id: string, text: string) => void;
}

export interface TaskInputProps {
  onAdd: (task: string) => void;
}
