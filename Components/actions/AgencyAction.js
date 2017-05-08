
import axios from 'axios';


export function fetchAgency (name) {

	return dispatch=>{

		axios.get('http://localhost:8083/api/Agency').then(
			function(response) {       							//response为从Agency中取到的数据


				dispatch({type:'LOGGIN',payload:response.data}) //payload  传递要更新到reducer的数据
	    		console.log(response);
	  		})
	  	.catch(function(error){
	    console.log(error);
	  });


	}
}