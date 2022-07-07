import { createStore} from "redux";
import { Provider} from "react-redux";

const data = {
    rate: [],
    numberId: []
}
const reducer =(state=data, action)=>{
    switch (action.type){

        case 'ADD_RATE':
            return {...state, rate: action.product, numberId: action.numberId}
        case 'DELETE_RATE':
            return {...state, rate: [], numberId:[]}
        default:
            break;
    }
    return state;
  }
  const store = createStore(reducer);
  export { store }