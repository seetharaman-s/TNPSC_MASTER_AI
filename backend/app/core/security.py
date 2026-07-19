from datetime import datetime, timedelta, timezone
import os
from typing import Any, Optional

from jose import JWTError, jwt
from passlib.context import CryptContext


# ------------------------------------------------------------------
# JWT Configuration
# ------------------------------------------------------------------

SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "tnpsc-master-ai-secret-key",
)

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24
REFRESH_TOKEN_EXPIRE_DAYS = 7


# ------------------------------------------------------------------
# Password Hashing
# ------------------------------------------------------------------

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto",
)


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(
    plain_password: str,
    hashed_password: str,
) -> bool:
    return pwd_context.verify(
        plain_password,
        hashed_password,
    )


# ------------------------------------------------------------------
# Access Token
# ------------------------------------------------------------------

def create_access_token(
    data: dict,
    expires_delta: Optional[timedelta] = None,
) -> str:

    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + (
        expires_delta
        or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    to_encode.update(
        {
            "exp": expire,
            "type": "access",
        }
    )

    return jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


# ------------------------------------------------------------------
# Refresh Token
# ------------------------------------------------------------------

def create_refresh_token(
    data: dict,
) -> str:

    expire = datetime.now(timezone.utc) + timedelta(
        days=REFRESH_TOKEN_EXPIRE_DAYS
    )

    payload = data.copy()

    payload.update(
        {
            "exp": expire,
            "type": "refresh",
        }
    )

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


# ------------------------------------------------------------------
# Decode Token
# ------------------------------------------------------------------

def decode_token(
    token: str,
) -> Optional[dict]:

    try:
        return jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )

    except JWTError:
        return None


# ------------------------------------------------------------------
# Extract Subject
# ------------------------------------------------------------------

def get_token_subject(
    token: str,
) -> Optional[Any]:

    payload = decode_token(token)

    if not payload:
        return None

    return payload.get("sub")