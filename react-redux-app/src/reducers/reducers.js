import FETCH_CHARICTERS_START from '../actions/actions';
import FETCH_CHARICTERS_SUCCESS from '../actions/actions';
import FETCH_CHARICTERS_ERROR from '../actions/actions';


const initialState = {
    char_id: Number,
    name:"",
    birthday:"",
    occupation:[],
    img:"",
    status:"",
    nickname:"",
    appearance:[],
    portrayed:"",
    category:"",
    better_call_saul_appearance:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: 
        return state;
    }
};

export default reducer