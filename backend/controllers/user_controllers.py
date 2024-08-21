from models.user_models import Users
from models.schemas.user_schemas import UserCreate
from sqlalchemy.orm import Session
from controllers.password_hasheado import hash_password, verify_password

def authenticate_user(full_name: str, password: str, db: Session):
    user = db.query(Users).filter(Users.full_name == full_name).first()
    if not user or not verify_password(password, user.password):
        return False
    return user

def create_user(user: UserCreate, db: Session):
    hashed_password = hash_password(user.password)
    db_user = Users(full_name=user.full_name, email=user.email, puesto_trabajo=user.puesto_trabajo, password=hashed_password, id_role=user.id_role)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_id(id: int, db: Session):
    user = db.query(Users).filter(Users.id == id).first()
    if not user:
        return None
    return user
