from database.db import engine, Base
from models.user_models import Users
from models.roles import Rol
from models.permisos import Permisos
from models.roles_permisos import Rol_permiso
from models.user_permisos import User_Permiso


try:
    Base.metadata.create_all(engine, checkfirst=True)
    print("Tablas creadas con éxito")
except Exception as e:
    print(f"Error al crear tablas: {e}")
