from sqlalchemy.orm import Session

from app.models.setting import Setting


class SettingRepository:

    # --------------------------------------------------
    # Get Application Settings
    # --------------------------------------------------

    @staticmethod
    def get(db: Session) -> Setting | None:
        return db.query(Setting).first()

    # --------------------------------------------------
    # Create Default Settings
    # --------------------------------------------------

    @staticmethod
    def create(
        db: Session,
        data: dict,
    ) -> Setting:

        setting = Setting(**data)

        db.add(setting)
        db.commit()
        db.refresh(setting)

        return setting

    # --------------------------------------------------
    # Update Settings
    # --------------------------------------------------

    @staticmethod
    def update(
        db: Session,
        setting: Setting,
        data: dict,
    ) -> Setting:

        for key, value in data.items():

            if hasattr(setting, key):

                setattr(setting, key, value)

        db.commit()
        db.refresh(setting)

        return setting

    # --------------------------------------------------
    # Get or Create Settings
    # --------------------------------------------------

    @staticmethod
    def get_or_create(
        db: Session,
    ) -> Setting:

        setting = db.query(Setting).first()

        if setting:
            return setting

        setting = Setting()

        db.add(setting)
        db.commit()
        db.refresh(setting)

        return setting

    # --------------------------------------------------
    # Reset Settings to Defaults
    # --------------------------------------------------

    @staticmethod
    def reset(
        db: Session,
    ) -> Setting:

        setting = db.query(Setting).first()

        if not setting:

            setting = Setting()

            db.add(setting)

        else:

            setting.app_name = "TNPSC MASTER AI"
            setting.app_logo = None
            setting.footer_text = None
            setting.contact_email = None
            setting.contact_phone = None

            setting.default_language = "Tamil"
            setting.default_theme = "light"
            setting.default_exam = "Group 4"

            setting.current_affairs_enabled = True
            setting.daily_quiz_enabled = True
            setting.motivation_enabled = True
            setting.ai_explanation_enabled = True

            setting.max_upload_size_mb = 50
            setting.upload_path = "uploads/"

        db.commit()
        db.refresh(setting)

        return setting