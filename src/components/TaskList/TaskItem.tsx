import React from 'react';
import { Task } from '../../store/data/task/types';

interface OwnProps {
  task: Task
}

export default function TaskItem({ task }: OwnProps) {
  return <li>{task.title}</li>;
}
