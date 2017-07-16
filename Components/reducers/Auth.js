export default function auth (
  state = {
    user_name:[],
    token: {
      authorized:false,
      user:null,
      hint:null
    }
  }, action
) {
  switch (action.type) {
    case "AUTH_SET_TOKEN":{
           return {...state,token:action.payload}
    }
    
    case "AUTH_DELETE_TOKEN":{
      console.log(action.payload)
            return Object.assign({}, state, {
        token: {
          authorized:false,
          user:null
        }
      })
    }
    case "REG_CHECK":{
      return {...state,token:action.payload}
    }
   
    default:{

      return state
    }
  }
}