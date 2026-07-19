import api from "./api";

export const BookmarkService = {

  get(bookId: number) {
    return api.get(
      `/books/${bookId}/bookmarks`
    );
  },

  add(bookId: number, page: number) {
    return api.post(
      `/books/${bookId}/bookmark`,
      { page }
    );
  },

  remove(bookId: number, page: number) {
    return api.delete(
      `/books/${bookId}/bookmark/${page}`
    );
  },

};