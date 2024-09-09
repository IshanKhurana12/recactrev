


export default function Postreducer(state,action) {
    switch(action.type){
        case "setdata":
            return action.data
        case "remove":
            return  state.filter((post)=>post.id!==action.index);
        
        default:
            return state
    }
}
