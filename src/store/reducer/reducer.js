import { GET_DATA } from "../actionTypes";

const initState = {
    data : []
       
  
};
    


const appReducer = (state = initState, action) => {
    // eslint-disable-next-line default-case
   
    switch(action.type){

        case GET_DATA :
            return {
                ...state,
                data: [ action.payload]
                
             };
             
             default:
                return initState
               
             
     
    }
        
   
}

  

export default appReducer;