import { GET_ACCOUNT_DETAILS } from "./getAccountNameConstant";

export const getAccountDetails = (details) => {
    const type = GET_ACCOUNT_DETAILS;
    return {type, details}
};
