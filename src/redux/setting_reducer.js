import Settings from "../components/Main/Settings/Settings";
import React from "react";

let initialState = <Settings settings="pizdec react"/>

const settingReducer = (state = initialState, action) => {
    return state;
};

export default settingReducer;