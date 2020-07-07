const DataFetch = [];

export default (state = DataFetch, action) => {
    switch (action.type) {
        case 'TEST_FETCH_DATA':
            return {
                ...state,DataFetch:action.payload,
            }
        case 'SUBMIT_DATA':
                var selected=action.payload;
                var Average_score=0;  
                var i;var Bar_Width;

                if(selected.TypeOfScore==="server")
                        {
                        var filter_Data=state.DataFetch
                        for(i=0;i<filter_Data.length;i++){
                                if(filter_Data[i][0]===selected.CountryName){
                                    Average_score+=filter_Data[i][1]
                                }
                            } 
                        }
                else{
                    var filterData=state.DataFetch.filter(x => x.country===selected.CountryName);
                        for(i=0;i<filterData.length;i++){  
                            // console.log("filter_Data[score]",filterData[i].score); 
                            Average_score+=filterData[i].score
                        }
                    }

                   Bar_Width=parseInt(2*Average_score);

            return {
                ...state,AverageScore:Average_score,BarWidth:Bar_Width
            }

        default:
            return state;
     }
}