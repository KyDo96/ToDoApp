const initialState={
    screenIndex:1
}
const screenReducer =(state=initialState,action)=>{
    switch(action.type){
        case "CHANGE_SCREEN":{
            
                state.screenIndex=action.index;
            return {...state};
        }
        default:
            return state;
    }
}

export default screenReducer; 