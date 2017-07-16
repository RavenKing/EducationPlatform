
// 初始状态
const initialState = {
  status: 'init', // init,doing,done
  isSuccess: false,
  user: null,
  activitys:[],
  schools:[]
}

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case "INIT": // 初始状态
      return Object.assign({}, state, {
        status: 'init',
        isSuccess: false,
        user: null
      });
    case "LOGGIN": // 正在登录
    {
     
     console.log(action.payload)
      return Object.assign({}, state, {
        user: action.payload[0].agency_name
      });
    }
    case "FINISHED": // 登录完成
      return Object.assign({}, state, {
        status: 'done',
        isSuccess: action.isSuccess,
        user: action.user
      })

      case "LOGIN":
      {

        return Object.assign({},state,
        {
          user:action.payload

        })
      }

    default:
      return state;
  }
}