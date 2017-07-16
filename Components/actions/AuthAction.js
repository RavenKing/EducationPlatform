const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN'
const AUTH_DELETE_TOKEN = 'AUTH_DELETE_TOKEN'
import axios from "axios"
export function setAuthToken (parameter) {
  var config = {
  headers:{"Access-Control-Allow-Origin":"*",}
  }
return dispatch=>{
    console.log("data is ",parameter);
    if(!parameter.user_name){
      var data = {
          authorized:false,
          error:"Username",
          hint:"user",
          user_name:null
      };
      dispatch({type:"AUTH_SET_TOKEN",payload:data});
    }
    else{
axios.get('http://localhost:8083/api/users?user_name='+parameter.user_name).
then(function(response){
      if(response.status == 200){
            
            const ruser = response.data.shift()
      	if(ruser.user_name)
            {
           var data = {
          authorized:true,
          user:{
              user_name:response.data.user_name,
             },
             hint:"logged"
        }
        }
        else
        {
 		   var data = {
          authorized:false,
          error:"Username",
          hint:"user",
          user_name:null
      };

        }


        dispatch({type:"AUTH_SET_TOKEN",payload:data});         
      	
      }
      }).catch(function (error) {
    console.log("error is",error);
  });

  }
  }
}