const addNewMessageText = 'addNewMessageText';
const newMessage = "newMessage";

const dialogsPageReducer = (state, action) => {

    switch (action.type) {

        case newMessage:
            let message = {
                id: 4,
                message: state.newMessages,
            };
            state.messages.push(message);
            state.newMessages = '';
            return state;
        case addNewMessageText:
            state.newMessages = action.newText;
            return state;

        default:
            return state;
    }};

export let newMessageActionCreator = (text) => {

    return {type: addNewMessageText, newText: text};
};

export let addMessageActionCreator = () => {

    return {type: newMessage};
};
    export default dialogsPageReducer;