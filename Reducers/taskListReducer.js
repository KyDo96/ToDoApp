const initialState={
    taskList:true,
    user:'',
    currentDate:'',
    todayList:[
        {
            id:1,
            name:"Learning1"},
        {
            id:2,
            name:"Learning2"},
        {
            id:3,
            name:"Learning3"},
        {
            id:4,
            name:"Learning4"},
        {
            id:5,
            name:"Learning5"},
    ],
    listAll:[
        {
            id:1,
            name:"Learning1"},
        {
            id:2,
            name:"Learning2"},
        {
            id:3,
            name:"Learning3"},
        {
            id:4,
            name:"Learning4"},
        {
            id:5,
            name:"Learning5"},
        {
            id:6,
            name:"Learning6"},
        {
            id:7,
            name:"Learning7"},
        {
            id:8,
            name:"Learning8"},
        {
            id:9,
            name:"Learning9"},
            {
                id:10,
                name:"Learning4"},
            {
                id:11,
                name:"Learning5"},
            {
                id:12,
                name:"Learning6"},
            {
                id:13,
                name:"Learning7"},
            {
                id:14,
                name:"Learning8"},
            {
                id:15,
                name:"Learning9"},
    ],
}
const taskListReducer =(state=initialState,action)=>{
    switch(action.type){
        case "CHANGE_TAB":{
            if(state.taskList){
                state.taskList=false;
            }else{
                state.taskList=true;
            }
            return {...state};
        }
        case "SAVE_USER":{
            state.user=action.payload;
            return{...state}
        }
        case 'SET_DATE':{
            state.currentDate=action.payload;
            return{...state}
        }
        default:
            return state;
    }
}

export default taskListReducer; 