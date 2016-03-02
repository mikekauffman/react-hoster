const initialLoaderState = {
  loaded: true
}

export default function loader(state=initialLoaderState, action) {
  switch (action.type) {
    case 'BEGIN_LOADING':
      return {
      ...state,
      loaded: false
    }
    case 'END_LOADING':
      return {
      ...state,
      loaded: true
    }
    default:
      return state
  }
}


