
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
     


      return Object.assign({}, state, {
          activitys:[1,2,3,4,5],
        user: action.payload[0].name
      });
    }
    case "FINISHED": // 登录完成
      return Object.assign({}, state, {
        status: 'done',
        isSuccess: action.isSuccess,
        user: action.user
      })
    default:
      return state;
  }
}