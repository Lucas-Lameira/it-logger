import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types';
   
//get logs from server
export const getTechs = () => async (dispatch) => {  
  try{
    //redux thunk allows to return a function directly
    setLoading();
    
    const response = await fetch('/techs');
    const data = await response.json();
  
    dispatch({
      type: GET_TECHS,
      payload: data
    });
  }catch(error){
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

//add tech to server (db.json)
export const addTech = (tech) => async (dispatch) => {  
  try{
    //redux thunk allows to return a function directly
    setLoading();
    
    const response = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
  
    dispatch({
      type: ADD_TECH,
      payload: data
    });
  }catch(error){
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

//delete tech from server (db.json)
export const deleteTech = id => async (dispatch) => {  
  try{
    //redux thunk allows to return a function directly
    setLoading();
    
    await fetch(`/techs/${id}`, {
      method: 'DELETE'
    });
  
    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  }catch(error){
    dispatch({
      type: TECHS_ERROR,
      payload: error.response.statusText
    });
  };
};

//sets loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};