

export function testData() {
 const data = [ {country: "Pakistan", score: 23}, {country: "Pakistan", score: 127}, {country: "India", score: 3}, {country: "India", score: 71}, {country: "Australia", score: 31}, {country: "India", score: 22}, {country: "Pakistan", score: 81}, ];
    return  dispatch =>{
           dispatch({ type:"TEST_FETCH_DATA", payload:data});
    }
}


export function SeverData(){
    return dispatch=>{
        return fetch("https://cors-anywhere.herokuapp.com/http://www2.rsphinx.com/static/misc/cric_scores.json")
        .then(result=>result.json())
        .then((data)=>{
            dispatch({type:"TEST_FETCH_DATA",payload:data})
        })
    }
}


export function SubmitCountryName(data) {
    return  dispatch =>{
        // console.log("submit data",data)
           dispatch({type:"SUBMIT_DATA",payload:data});
    }
}
