import http from "./httpService";
import instance from "../axiosInstance";

export function getAllCommentsService() {
  return http.get("/comments");
}

export function getSinlgeCommentService(commentId) {
  return http.get(`/comments/${commentId}`);
}

export function addNewCommentService(data) {
  return http.post("/comments", data);
}

export function deleteCommentService(commentId) {
  return instance.delete(`/comments/${commentId}`);
}
