from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    # ==========================================
    # Application
    # ==========================================

    APP_NAME: str = "TNPSC MASTER AI"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True

    # ==========================================
    # Database
    # ==========================================

    DATABASE_URL: str

    # ==========================================
    # JWT
    # ==========================================

    SECRET_KEY: str

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    REFRESH_TOKEN_EXPIRE_DAYS: int = 7

    # ==========================================
    # Uploads
    # ==========================================

    UPLOAD_DIR: str = "uploads"

    MAX_UPLOAD_SIZE: int = 20 * 1024 * 1024

    # ==========================================
    # Email
    # ==========================================

    SMTP_HOST: str = ""

    SMTP_PORT: int = 587

    SMTP_USERNAME: str = ""

    SMTP_PASSWORD: str = ""

    SMTP_FROM_EMAIL: str = ""

    # ==========================================
    # Model Config
    # ==========================================

    model_config = SettingsConfigDict(
        env_file=".env",
        case_sensitive=True,
    )


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()