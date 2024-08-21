from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from database.db import Base
from .user_models import Users

class AlertMessage(Base):
    __tablename__ = "alert_messages"
    id_message = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'), index=True)
    full_name = Column(String, index=True)
    puesto_trabajo = Column(String)
    message = Column(String)
    
    # Relación con la tabla de usuarios
    user = relationship("Users", back_populates="alert_messages")