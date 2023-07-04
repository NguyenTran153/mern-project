import { CommonRequest } from "./ApiCall";
import { BASE_URL } from "./helper";

export const registerFunction = async (data, header) => {
  return await CommonRequest("POST", `${BASE_URL}/user/register`, data, header);
};

export const userGetFunction = async (search, gender, status, sort, page) => {
  return await CommonRequest(
    "GET",
    `${BASE_URL}/user/details?search=${search}&gender=${gender}&status=${status}&sort=${sort}&page=${page}`,
    ""
  );
};

export const singleUserGetFunction = async (id) => {
  return await CommonRequest("GET", `${BASE_URL}/user/${id}`, "");
};

export const editFunction = async (id, data, header) => {
  return await CommonRequest(
    "PUT",
    `${BASE_URL}/user/edit/${id}`,
    data,
    header
  );
};

export const deleteFunction = async (id) => {
  return await CommonRequest("DELETE", `${BASE_URL}/user/delete/${id}`, {});
};

export const statusChange = async (id, data) => {
  return await CommonRequest("PUT", `${BASE_URL}/user/status/${id}`, { data });
};

export const exportToCSV = async () => {
  return await CommonRequest("GET", `${BASE_URL}/userexport`, "");
};
