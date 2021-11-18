export function manageFriends(state={
    friends: []
}, action) {
    switch (action.type) {
        case "ADD_FRIEND":
            return { ...state, friends: [ ...state.friends, action.friend ]};
        case "REMOVE_FRIEND":
            const remover = state.friends.findIndex(friend => friend.id === action.id)
            return {  ...state, friends: [...state.friends.slice(0, remover),
                    ...state.friends.slice(remover + 1)]};
        default:
            return state;
    }
}




// friends: [
//     ...state.friends.slice(0, removalIndex), slice off first through one being removed
//     ...state.friends.slice(removalIndex + 1) slice off last one (one being removed) through the end (aka just that last one)