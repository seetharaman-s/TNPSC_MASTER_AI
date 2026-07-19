import os
import shutil
import uuid
from pathlib import Path

from fastapi import HTTPException, UploadFile


class UploadService:

    BASE_UPLOAD_DIR = Path("uploads")

    MAX_FILE_SIZE = 20 * 1024 * 1024  # 20 MB

    IMAGE_EXTENSIONS = {
        ".jpg",
        ".jpeg",
        ".png",
        ".webp",
    }

    PDF_EXTENSIONS = {
        ".pdf",
    }

    @staticmethod
    def create_directory(folder: str) -> Path:
        directory = UploadService.BASE_UPLOAD_DIR / folder
        directory.mkdir(parents=True, exist_ok=True)
        return directory

    @staticmethod
    def generate_filename(filename: str) -> str:
        extension = Path(filename).suffix.lower()
        return f"{uuid.uuid4().hex}{extension}"

    @staticmethod
    def validate_pdf(file: UploadFile):

        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="Invalid file."
            )

        extension = Path(file.filename).suffix.lower()

        if extension not in UploadService.PDF_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail="Only PDF files are allowed."
            )

    @staticmethod
    def validate_image(file: UploadFile):

        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="Invalid image."
            )

        extension = Path(file.filename).suffix.lower()

        if extension not in UploadService.IMAGE_EXTENSIONS:
            raise HTTPException(
                status_code=400,
                detail="Only JPG, PNG, JPEG and WEBP images are allowed."
            )

    @staticmethod
    def save_file(
        file: UploadFile,
        folder: str,
    ) -> str:

        directory = UploadService.create_directory(folder)

        filename = UploadService.generate_filename(
            file.filename
        )

        destination = directory / filename

        with destination.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return "/" + destination.as_posix()

    @staticmethod
    def upload_book_pdf(file: UploadFile):
        UploadService.validate_pdf(file)
        return UploadService.save_file(file, "books/pdf")

    @staticmethod
    def upload_book_cover(file: UploadFile):
        UploadService.validate_image(file)
        return UploadService.save_file(file, "books/covers")

    @staticmethod
    def upload_note_pdf(file: UploadFile):
        UploadService.validate_pdf(file)
        return UploadService.save_file(file, "notes/pdf")

    @staticmethod
    def upload_current_affair_pdf(file: UploadFile):
        UploadService.validate_pdf(file)
        return UploadService.save_file(file, "current_affairs/pdf")

    @staticmethod
    def upload_quiz_image(file: UploadFile):
        UploadService.validate_image(file)
        return UploadService.save_file(file, "quizzes/images")

    @staticmethod
    def delete_file(file_path: str):

        path = Path(file_path.lstrip("/"))

        if not path.exists():
            return False

        path.unlink()

        return True