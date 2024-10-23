import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const AddUserInfoApi = async (reqBody)=> {
  return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}

 

export const getEventApi = async()=> {
  return await commonApi('GET',`${serverUrl}/videos`)
}

export const addFavoriteApi = async(reqBody)=> {
  return await commonApi('POST',`${serverUrl}/favorites`, reqBody)
}

export const getAllFavoriteItemsApi = async()=> {
  return await commonApi('GET',`${serverUrl}/favorites`)
}

export const removeFavoriteItemsApi = async(id)=> {
  return await commonApi('DELETE',`${serverUrl}/favorites/${id}`)
}