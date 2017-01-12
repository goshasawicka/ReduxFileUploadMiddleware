export default function ({dispatch}) {
  return next => action => {
    if(action.payload && action.payload.file_content && action.payload.file_content instanceof FileList) {

      let reader = new FileReader();
      let file = action.payload.file_content[0];

      reader.onloadend = () => {
        const newPayload = {...action.payload, file_content: reader.result};
        const newAction = {...action, payload: newPayload};
        dispatch(newAction);
      };
      reader.readAsDataURL(file);
    } else {
      return next(action);
    }
  }
}
