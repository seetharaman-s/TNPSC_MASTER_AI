from fastapi import (
    APIRouter,
    File,
    HTTPException,
    UploadFile,
)

from app.services.upload_service import UploadService

router = APIRouter(
    prefix="/upload",
    tags=["Upload"],
)


@router.post("/books/pdf")
async def upload_book_pdf(
    file: UploadFile = File(...)
):
    try:
        file_path = UploadService.upload_book_pdf(file)

        return {
            "success": True,
            "message": "Book PDF uploaded successfully.",
            "file_path": file_path,
        }

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.post("/books/cover")
async def upload_book_cover(
    file: UploadFile = File(...)
):
    try:
        file_path = UploadService.upload_book_cover(file)

        return {
            "success": True,
            "message": "Book cover uploaded successfully.",
            "file_path": file_path,
        }

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.post("/notes/pdf")
async def upload_note_pdf(
    file: UploadFile = File(...)
):
    try:
        file_path = UploadService.upload_note_pdf(file)

        return {
            "success": True,
            "message": "Note PDF uploaded successfully.",
            "file_path": file_path,
        }

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.post("/current-affairs/pdf")
async def upload_current_affair_pdf(
    file: UploadFile = File(...)
):
    try:
        file_path = UploadService.upload_current_affair_pdf(file)

        return {
            "success": True,
            "message": "Current Affair PDF uploaded successfully.",
            "file_path": file_path,
        }

    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.delete("/")
async def delete_uploaded_file(
    file_path: str,
):
    deleted = UploadService.delete_file(file_path)

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="File not found.",
        )

    return {
        "success": True,
        "message": "File deleted successfully.",
    }

@router.post("/quizzes/image")
async def upload_quiz_image(
    file: UploadFile = File(...)
):
    file_path = UploadService.upload_quiz_image(file)

    return {
        "success": True,
        "file_path": file_path,
    }