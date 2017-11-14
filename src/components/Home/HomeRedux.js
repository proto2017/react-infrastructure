
const homeState = {
    count: 0
};

const homeReducer = (state=homeState, action) => {
    switch (action.type) {
        case 'add':
            return {
                count: ++state.count
            }
        case 'reduce':
            return {
                count: --state.count
            }
        default:
            return state;
    }
};

export default homeReducer;