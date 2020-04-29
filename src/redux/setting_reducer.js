import Settings from "../components/Main/Settings/Settings";
import React from "react";

let initialState = <Settings settings="Set react for free"/>

const settingReducer = (state = initialState, action) => {
    return state;
};

export default settingReducer;