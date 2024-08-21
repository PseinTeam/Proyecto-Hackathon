from database.db import engine, Base
from models.user_models import Users

try:
    Base.metadata.create_all(engine, checkfirst=True)
    print("Tablas creadas con éxito")
except Exception as e:
    print(f"Error al crear tablas: {e}")
