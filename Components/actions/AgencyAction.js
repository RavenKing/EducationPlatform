
import axios from 'axios';



export function RegisterUser(rdata)
{
	return dispatch=>{

		axios.post('http://localhost:8083/api/users',{data:rdata}).then(
			function(response) {       							//response为从Agency中取到的数据
	    		console.log(response);
	  		})
	  	.catch(function(error){
	    console.log(error);
	  });
}
}
export function LoginUser(User)
{

	console.log(User);
	return dispatch=>{
		axios.get('http://localhost:8083/api/users?user_name='+User.user_name).then(
			function(response) {       		

	    		if(response.data)
	    		{const user= response.data.shift()
	    		console.log(user);
	    		dispatch({type:"LOGIN",payload:user})
	    		}

	  		})
	  	.catch(function(error){
	    console.log(error);
	  });
}


}

export function fetchAgency (name) {

	return dispatch=>{

		axios.get('http://localhost:8083/api/agencys').then(
			function(response) {       							//response为从Agency中取到的数据
				dispatch({type:'LOGGIN',payload:response.data}) //payload  传递要更新到reducer的数据
	    		console.log(response);
	  		})
	  	.catch(function(error){
	    console.log(error);
	  });


	}
}