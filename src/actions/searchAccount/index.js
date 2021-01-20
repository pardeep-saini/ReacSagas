import { SEARCH_RESULT } from "./serachAccountConstant";

export const getSearchByAccount = resultObject => {
    console.log("resultObject", resultObject)
  const type = SEARCH_RESULT;
  return { type, resultObject };
};

