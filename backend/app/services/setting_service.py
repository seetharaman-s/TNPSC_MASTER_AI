from sqlalchemy.orm import Session

from app.models.setting import Setting
from app.repositories.setting_repository import SettingRepository


class SettingService:

    # --------------------------------------------------
    # Get Settings
    # --------------------------------------------------

    @staticmethod
    def get_settings(
        db: Session,
    ) -> Setting:

        return SettingRepository.get_or_create(db)

    # --------------------------------------------------
    # Update Settings
    # --------------------------------------------------

    @staticmethod
    def update_settings(
        db: Session,
        data: dict,
    ) -> Setting:

        setting = SettingRepository.get_or_create(db)

        return SettingRepository.update(
            db=db,
            setting=setting,
            data=data,
        )

    # --------------------------------------------------
    # Reset Settings
    # --------------------------------------------------

    @staticmethod
    def reset_settings(
        db: Session,
    ) -> Setting:

        return SettingRepository.reset(db)

    # --------------------------------------------------
    # General Settings
    # --------------------------------------------------

    @staticmethod
    def update_general(
        db: Session,
        data: dict,
    ) -> Setting:

        allowed = {
            "app_name",
            "app_logo",
            "footer_text",
            "contact_email",
            "contact_phone",
        }

        payload = {
            k: v
            for k, v in data.items()
            if k in allowed
        }

        return SettingService.update_settings(
            db,
            payload,
        )

    # --------------------------------------------------
    # Appearance
    # --------------------------------------------------

    @staticmethod
    def update_appearance(
        db: Session,
        data: dict,
    ) -> Setting:

        allowed = {
            "default_language",
            "default_theme",
        }

        payload = {
            k: v
            for k, v in data.items()
            if k in allowed
        }

        return SettingService.update_settings(
            db,
            payload,
        )

    # --------------------------------------------------
    # TNPSC Settings
    # --------------------------------------------------

    @staticmethod
    def update_tnpsc(
        db: Session,
        data: dict,
    ) -> Setting:

        allowed = {
            "default_exam",
            "current_affairs_enabled",
            "daily_quiz_enabled",
            "motivation_enabled",
            "ai_explanation_enabled",
        }

        payload = {
            k: v
            for k, v in data.items()
            if k in allowed
        }

        return SettingService.update_settings(
            db,
            payload,
        )

    # --------------------------------------------------
    # Upload Settings
    # --------------------------------------------------

    @staticmethod
    def update_upload(
        db: Session,
        data: dict,
    ) -> Setting:

        allowed = {
            "max_upload_size_mb",
            "upload_path",
        }

        payload = {
            k: v
            for k, v in data.items()
            if k in allowed
        }

        return SettingService.update_settings(
            db,
            payload,
        )
    