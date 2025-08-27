import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
import { FaAngleDown } from "react-icons/fa";

import { DashMenu } from './nav.js';

import {
  testAccessToken,
  logout,

  getUser,
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from '../scripts/api.js';

import '../stylesheets/dash.css';

function Dash() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
      tokenTest();
    getData();
  }, []);

  function l() {
    logout();
    tokenTest();
  }

  function tokenTest() {
    testAccessToken().then(response => {
      console.log('Access token test response:', response);
      if (!response) {
        navigate('/auth');
      }
    }).catch(error => {
      console.error('Access token test error:', error);      
    });
  }

  async function getData() {
    const userData = await getUser();
    console.log(userData);
    
    if (userData.id != null) {
      const tasks = await getAllTasks(userData['id']);
      setUserData(userData);
      setTaskData(tasks); 
    }
  }

  class TaskManagement {
    render() {
      if (taskData.length === 0) {
        return <p>No tasks available.</p>
      }
      return taskData.map((task, index) => {
        return (
          <div key={ index } className="task-item">
            <input type="checkbox" checked={ task.task_status } onChange={ () => taskManager.update(task.id, {"task_status": !task.task_status}) } />
            <div id="task-info-wrapper">
              <input id={ `title-${task.id}`} className='task-title-input' defaultValue={ task.task_title } />
              <input id={ `descr-${task.id}`}className='task-description-input' defaultValue={ task.task_description } />
              <input type='date' id={ `due-${task.id}` } className='task-duedate-input' defaultValue={ task.task_due_date } />
            </div>
            
            <select id={ `priority-${task.id}` } defaultValue= {
              task.task_priority == 2
                ? 'high'
                : task.task_priority == 1
                  ? 'medium'
                  : 'low'
            }>
              <option value="low">LOW</option>
              <option value="medium">MEDIUM</option>
              <option value="high">HIGH</option>         
            </select>
            <div id="task-buttons-wrapper">
              <button onClick={ () => {
                const newTitle = document.getElementById(`title-${task.id}`).value;
                const newDescription = document.getElementById(`descr-${task.id}`).value;
                const newDueDate = document.getElementById(`due-${task.id}`).value;
                const selectorValue = document.getElementById(`priority-${task.id}`).value;
                let priority = 0;
                selectorValue == 'high'
                  ? priority = 2
                  : selectorValue == 'medium'
                    ? priority = 1
                    : priority = 0;

                taskManager.update(task.id, {
                  task_title: newTitle,
                  task_description: newDescription,
                  task_due_date: newDueDate,
                  task_priority: priority,
                })
              } }>update</button>
              <button onClick={ () => taskManager.delete(task.id) }>del</button>
            </div>
          </div>
        );
      });
    }

    async create(data) {
      try {
        const response = await createTask(data);
        console.log(response);

        getData();
      } catch (error) {
        console.error('Error creating task:', error);
      }
    }

    async update(id, data) {
      try {
        const response = await updateTask(id, data);
        console.log(response);

        getData();
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }

    async delete(id) {
      try {
        const response = await deleteTask(id);
        console.log(response);

        getData();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  }
  const taskManager = new TaskManagement();

  return (
		<>
			<div id="dash-wrapper">
				<DashMenu />
				<div id="dash-content"> 
          <TbLogout onClick={ l } /><br />
          
          <input id='task-title-creation-input' placeholder='Title' />
          <input id='task-description-creation-input' placeholder='Description' />
          <input id='task-date-creation-input' type='date' />
          <select id='task-priority-creation-input'>
            <option value='low'>LOW</option>
            <option value='medium'>MEDIUM</option>
            <option value='high'>HIGH</option>
          </select>
          <button onClick={ () => {
            const title = document.getElementById('task-title-creation-input').value;
            const description = document.getElementById('task-description-creation-input').value;
            const dueDate = document.getElementById('task-date-creation-input').value;
            const selectorValue = document.getElementById('task-priority-creation-input').value;
            let priority = 0;
            selectorValue == 'high'
              ? priority = 2
              : selectorValue == 'medium'
                ? priority = 1
                : priority = 0;

            taskManager.create(
              {
                user_id: userData.id,
                task_title: title,
                task_description: description,
                task_due_date: dueDate,
                task_status: false,
                task_priority: priority,
              }
            );
          }}>ADD</button>
          
          <div id="task-container">
            { taskManager.render() }
          </div>
				</div>
			</div>
		</>
  );
}

export default Dash;
