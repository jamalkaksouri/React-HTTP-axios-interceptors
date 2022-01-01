import http from "./httpService";
import instance from "../axiosInstance";

//#region getAllCommentsService
export function getAllCommentsService() {
  return http.get("/comments");
}
//#endregion

//#region getSinlgeCommentService
export function getSinlgeCommentService(commentId) {
  return http.get(`/comments/${commentId}`);
}
//#endregion

//#region addNewCommentService
export function addNewCommentService(data) {
  const token = "SECURE TOKEN !";
  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return http.post("/comments", data, header);
}
//#endregion

//#region deleteCommentService
export function deleteCommentService(commentId) {
  return http.delete(`/comments/${commentId}`);
  // return instance.delete(`/comments/${commentId}`);
}
//#endregion

//#region editCommentService
export function editCommentService(commentId, newData) {
  return http.put(`/comments/${commentId}`, newData);
}
//#endregion
