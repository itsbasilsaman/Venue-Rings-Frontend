import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const AddUserInfoApi = async (reqBody)=> {
  return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

export const getVideoApi = async()=> {
  return await commonApi('GET',`${serverUrl}/videos`)
}