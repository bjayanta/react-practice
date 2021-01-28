import { MYLOG } from "../types";

export const printLog = (input) => {
    return {
        type: MYLOG,
        payLoad: input
    }
}