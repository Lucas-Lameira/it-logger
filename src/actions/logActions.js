import { 
  GET_LOGS, 
  SET_LOADING, 
  LOGS_ERROR, 
  ADD_LOG,
  UPDATE_LOG, 
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS
} from './types';

//get logs from server
export const getLogs = () => async (dispatch) => {  
  try{
    //redux thunk allows to return a function directly
    setLoading();
    const response = await fetch('/logs');
    const data = await response.json();
  
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  }catch(error){
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

//search logs from server
export const searchLogs = (text) => async (dispatch) => {  
  try{
    //redux thunk allows to return a function directly
    setLoading();
    const response = await fetch(`/logs?q=${text}`);
    const data = await response.json();
  
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  }catch(error){
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

//add log
export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const response = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
     
    dispatch({
      type: ADD_LOG,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
}

//update log
export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const response = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
     
    dispatch({
      type: UPDATE_LOG,
      payload: data
    });

  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

//delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try{
    setLoading();

    await fetch(`/logs/${id}`, {method: 'DELETE'});

    dispatch({
      type: DELETE_LOG,
      payload: id
    });
  }catch(error){
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  };
};

//sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

//sets current log - no dealing with the backend
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

//Clear current log - no dealing with the backend
export const clearCurrent = () => {
  return {type: CLEAR_CURRENT};
  //there is no need for payload cuz we are setting the current state back to null
};