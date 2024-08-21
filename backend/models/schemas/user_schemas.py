from typing import Annotated
from pydantic import BaseModel, Field, EmailStr

from database.db import Base


class UserBase(BaseModel):
    full_name: str = Field(min_length=4,max_length=30)
    email: EmailStr
    puesto_trabajo: str = Field(min_length=3,max_length=100)
    id_role: int

class CreateUsersRequest(BaseModel):
    puesto_trabajo: str = Field(min_length=3,max_length=100)
    num_usuarios: int = Field(ge=1)

class UpdateUserRequest(BaseModel):
    id: int
    new_name: str = Field(min_length=4, max_length=30, default=None)
    new_email: EmailStr = Field(default=None)
    new_password: str = Field(default=None)


class LoginRequest(BaseModel):
    full_name: str = Field(min_length=4,max_length=30)
    password: str 

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int
    class Config:
        from_attributes = True

class DBUser(User):
    password: str

class ShowUser(BaseModel):
    status: str
    users: list[UserBase]

class ShowUser500(BaseModel):
    detail: Annotated[str, Field("Error al crear usuario: {usuario}")]
