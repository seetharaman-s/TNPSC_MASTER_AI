from datetime import datetime, timezone
from uuid import uuid4


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def generate_uuid():

    return uuid4()


def success_response(
    message: str,
    data=None,
):

    return {
        "success": True,
        "message": message,
        "data": data,
    }


def error_response(
    message: str,
):

    return {
        "success": False,
        "message": message,
    }

