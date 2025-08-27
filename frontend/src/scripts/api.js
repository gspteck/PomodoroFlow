const API_BASE_URL = 'http://127.0.0.1:8000/api';

//  //  AUTHENTICATION
//  Test Access Token from Local storage
export const testAccessToken = async () => {
  console.log('Access token:', localStorage.getItem('token'));
  try {
    const user = await getUser();
    const email = user.email;
    const response = await getAllTasks(email);
    if (response) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
  console.error('Error testing access token:', error);
  return false;
  }
}
//  Register a new account
export const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    return response.json();
  } catch (error) {
    console.error('Error registering account:', error);
    return {'error': true, 'message': error};    
  }
};
//  Login to an existing account
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      //  Save token in local storage
      localStorage.setItem('token', data['access_token']);
    }
    return data;
  } catch (error) {
    console.error('Error loggin in to account:', error);
    return {'error': true, 'message': error};    
  }
};
//  Logout from account
export const logout = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (response) {
      localStorage.removeItem('token');
    }
    return response.json();
  } catch (error) {
    console.error('Error loggin out of account:', error);
    return {'error': true, 'message': error};    
  }
};
//  Get user data
export const getUser = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/user`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error('Error getting user data:', error);
    return {'error': true, 'message': error};    
  }
};
//  //  TASK MANAGEMENT
//  Get all user tasks
export const getAllTasks = async (user_id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/get-tasks/${user_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }, 
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.error('Error getting all tasks:', error);
    return {'error': true, 'message': error};    
  }
};
//  Create a new task
export const createTask = async (taskData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/create-task`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(taskData),
    });
    return response.json();
  } catch (error) {
    console.error('Error creating new task:', error);
    return {'error': true, 'message': error};    
  }
};
//  Get a single task
export const getSingleTask = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(`Error getting task [${id}]:`, error);
    return {'error': true, 'message': error};    
  }
};
//  Update a task
export const updateTask = async (id, taskData) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(taskData),
    });
    return response.json();
  } catch (error) {
    console.error(`Error updating task [${id}]`, error);
    return {'error': true, 'message': error};    
  }
};
//  Delete a task
export const deleteTask = async (id) => {
  try {
    const token = localStorage.getItem('token');
    const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(`Error deleting task [${id}]:`, error);
    return {'error': true, 'message': error};    
  }
}
