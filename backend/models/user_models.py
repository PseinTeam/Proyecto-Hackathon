from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database.db import Base

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String)
    email = Column(String)
    puesto_trabajo = Column(String)
    password = Column(String)
    id_role = Column(Integer, ForeignKey('roles.id'))
    telefono = Column(String)  # Nuevo campo para el número de teléfono

    alert_messages = relationship("AlertMessage", back_populates="user")
    rol = relationship("Rol", back_populates="users")
    user_permisos = relationship("User_Permiso", back_populates="user")
