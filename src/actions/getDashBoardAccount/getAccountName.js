import { GET_ACCOUNT_DETAILS,OPEN_ROUTER_SCREEN } from "./getAccountNameConstant";

export const getAccountDetails = (details) => {
    const type = GET_ACCOUNT_DETAILS;
    return {type, details}
};

export const openRouterScreen = (details, row) => {
    console.log("detailsdetails",details, row)
    const type = OPEN_ROUTER_SCREEN;
    return {type, details, row}
};


