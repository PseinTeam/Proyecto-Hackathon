from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import random
from controllers.user_controllers import create_user, authenticate_user, get_user_by_id
from services.jwt import write_token
from database.db import get_db
from models.schemas.user_schemas import UserCreate, CreateUsersRequest, LoginRequest, UpdateUserRequest

user_rutes = APIRouter(prefix='/Usuarios', tags=['Crud de Usuarios'])

@user_rutes.post('/createUsers')
async def create_users(request: CreateUsersRequest, db: Session = Depends(get_db)):
    users = []
    for i in range(request.num_usuarios):
        password = "123456"
        email = f"email{random.randint(1, 100000)}@predeterminado.com"
        user_data = {
            "full_name": f"Usuario N{i+1}",
            "email": email,
            "password": password,
            "puesto_trabajo": request.puesto_trabajo,
            'id_role': 4
        }
        db_user = create_user(UserCreate(**user_data), db)
        users.append(db_user)
    return {"status": "success", "users": users}

@user_rutes.post('/login')
async def login_user(login_request: LoginRequest, db: Session = Depends(get_db)):
    full_name = login_request.full_name
    password = login_request.password
    user = authenticate_user(full_name, password, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")
    token = write_token({"id": user.id})
    return token

@user_rutes.patch('/user/updateData')
async def update_user_data(request: UpdateUserRequest, db: Session = Depends(get_db)):
    user_id = request.id
    user = get_user_by_id(user_id, db)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return {"message": "User data updated successfully"}
