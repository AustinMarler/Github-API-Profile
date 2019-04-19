const initialState = {
  userData: {},
  reposData: []
}

export default function (state = initialState, action) {
  switch ( action.type ) {
    case 'GET_USER_DATA':
      return {...state, userData: action.userData}
    case 'GET_USER_REPOS_DATA':
      return {...state, reposData: action.reposData}
    default:
      return state
  }
}