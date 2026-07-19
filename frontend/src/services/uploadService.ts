import api from "./api";

export const UploadService = {

  uploadBookPDF(formData: FormData) {
    return api.post("/upload/books/pdf", formData);
  },

  uploadBookCover(formData: FormData) {
    return api.post("/upload/books/cover", formData);
  },

  uploadNotePDF(formData: FormData) {
    return api.post("/upload/notes/pdf", formData);
  },

  uploadCurrentAffairPDF(formData: FormData) {
    return api.post("/upload/current-affairs/pdf", formData);
  },

  uploadQuizImage(formData: FormData) {
    return api.post("/upload/quizzes/image", formData);
  },

  deleteFile(filePath: string) {
    return api.delete("/upload", {
      params: {
        file_path: filePath,
      },
    });
  },
};