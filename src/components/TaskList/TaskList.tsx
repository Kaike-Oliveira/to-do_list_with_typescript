// CORE
import * as React from 'react';

// STYLE
import styles from './TaskList.module.css';

// INTERFACE
import { ITask } from '../../interfaces/Task';

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
};

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
    return (
      <>
        {taskList.length > 0 ? (
          taskList.map((task) => (
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Difficulty: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i
                  className="bi bi-pencil"
                  onClick={() => {
                    handleEdit(task)
                  }}
                ></i>
                <i
                  className="bi bi-trash"
                  onClick={() => {
                    handleDelete(task.id);
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p>Don't has registered tasks</p>
        )}
      </>
    );
};

export default TaskList;