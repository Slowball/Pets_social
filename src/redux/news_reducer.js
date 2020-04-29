import News from "../components/Main/News/News";
import React from "react";

let initialState = (<News news={'Chet novoe'}/>)

const newsReducer = (state = initialState, action) => {
    return state;
};

export default newsReducer;