
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