

const initialState = {
    count: 0,
};


const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return{
                ...state,
                count: state.count + 1,
            };
        default:
            return state;
    }
};