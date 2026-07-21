from datetime import datetime, timedelta, timezone
from uuid import uuid4
import os
from typing import Any

from jose import JWTError, jwt
from passlib.context import CryptContext


# ==========================================================
# JWT Configuration
# ==========================================================

SECRET_KEY = os.getenv(
    "SECRET_KEY",
    "tnpsc-master-ai-secret-key",
)

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24        # 1 day
REFRESH_TOKEN_EXPIRE_DAYS = 7


# ==========================================================
# Password Hashing
# ==========================================================

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


# ==========================================================
# Internal JWT Helper
# ==========================================================

def _create_token(
    *,
    subject: str,
    token_type: str,
    expires_delta: timedelta,
    extra_claims: dict[str, Any] | None = None,
) -> str:

    now = datetime.now(timezone.utc)

    payload = {
        "sub": subject,
        "type": token_type,
        "iat": now,
        "exp": now + expires_delta,
        "jti": str(uuid4()),
    }

    if extra_claims:
        payload.update(extra_claims)

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )


# ==========================================================
# Access Token
# ==========================================================

def create_access_token(
    subject: str,
    extra_claims: dict[str, Any] | None = None,
) -> str:

    return _create_token(
        subject=subject,
        token_type="access",
        expires_delta=timedelta(
            minutes=ACCESS_TOKEN_EXPIRE_MINUTES
        ),
        extra_claims=extra_claims,
    )


# ==========================================================
# Refresh Token
# ==========================================================

def create_refresh_token(
    subject: str,
) -> str:

    return _create_token(
        subject=subject,
        token_type="refresh",
        expires_delta=timedelta(
            days=REFRESH_TOKEN_EXPIRE_DAYS
        ),
    )


# ==========================================================
# Decode Token
# ==========================================================

def decode_token(token: str) -> dict[str, Any]:

    return jwt.decode(
        token,
        SECRET_KEY,
        algorithms=[ALGORITHM],
    )


# ==========================================================
# Token Helpers
# ==========================================================

def get_token_subject(
    token: str,
) -> str:

    payload = decode_token(token)

    return payload["sub"]


def get_token_type(
    token: str,
) -> str:

    payload = decode_token(token)

    return payload["type"]


def is_access_token(
    token: str,
) -> bool:

    try:
        return get_token_type(token) == "access"
    except JWTError:
        return False


def is_refresh_token(
    token: str,
) -> bool:

    try:
        return get_token_type(token) == "refresh"
    except JWTError:
        return False