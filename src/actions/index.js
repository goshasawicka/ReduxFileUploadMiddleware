export const GET_FILES= 'GET_FILES';
export const NEW_FILE = 'NEW_FILE';
export const DELETE_FILE = 'DELETE_FILE';


const ROOT_URL ='http://localhost:8081';

export function getFiles() {
  return{
    type: GET_FILES,
    url: `${ROOT_URL}/`,
    method: 'GET',
  };
}

export function createFile(props){
  return {
    type: NEW_FILE,
    payload: props,
    url: `${ROOT_URL}/newfile`,
    method: 'POST',
    redirect: '/',
  };
}

export function deleteFile(id) {
  return {
    type: DELETE_FILE,
    payload: id,
    url: `${ROOT_URL}/file/delete/${id}`,
    method: 'DELETE',
  };
}
