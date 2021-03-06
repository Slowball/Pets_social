const SET_NEW_MESSAGE = "SET_NEW_MESSAGE";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Old dog',
            url: 'https://sniffandwag.com/wp-content/uploads/2019/07/funniest-dogs-and-cats.jpg'
        },
        {
            id: 2,
            name: 'Funny dog',
            url: 'https://i.pinimg.com/originals/c4/90/75/c4907577a372c21c3ea70cad4b59eb07.jpg'
        },
        {
            id: 3,
            name: 'My husband',
            url: 'https://i.insider.com/5da9e261045a31389043bc43?width=1100&format=jpeg&auto=webp'
        },
        {
            id: 4,
            name: 'My.. amm',
            url: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/01/funny-dog-teeth-toofers-3-5e255a95cd31e__700.jpg'
        },
        {
            id: 5,
            name: 'FBad ass',
            url: 'https://allabout-pets.com/wp-content/uploads/2019/06/funny-dog-names.jpg'
        },
        {
            id: 6,
            name: 'Old dog',
            url: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/06/funny-dog-onesies2.jpg'
        },
    ],

    messages: [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Hello my little friend'},
        {id: 3, message: 'u see this?'},
    ],
};

const dialogsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_NEW_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
};

export let addMessageActionCreator = (newMessageBody) => {return {type: SET_NEW_MESSAGE, newMessageBody}};
export default dialogsPageReducer;