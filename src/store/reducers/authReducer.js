const auth = (state = {logged: false}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        logged: true
      }

    case 'SIGN_OUT':
      return {
        ...state,
        logged: false
      }

    default:
      return state
  }
}

export default auth