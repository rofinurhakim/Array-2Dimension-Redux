

const DataService = {


    loadData(dispatch, data) {
        let dataTemp = data
        for(let i = 0;i < data.length; i++) {
            let cube = dataTemp[i]
            for (let j = 0;j < data[i].length; j++) {
              if(j === 0){
                cube[j]= "baris"+i
             }
                    if (cube[j] === cube[j-1]) {
                        cube[j] = 'before'
                    
                }
           
             
         } 
         
        }
        dispatch({ type: "GET_DATA", payload: data})
    }
}




export default DataService;