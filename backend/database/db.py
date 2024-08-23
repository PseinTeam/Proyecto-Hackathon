from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from config import DB_DRIVER, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME
from sqlalchemy.orm import sessionmaker,declarative_base

DB_USERNAME_TEST = 'ivanpz'
DB_NAME_TEST = 'aña'

# Crear la URL de conexión a la base de datos usando las variables de entorno
url = URL.create(
    drivername=DB_DRIVER,
    username=DB_USERNAME_TEST,
    password=DB_PASSWORD,
    host=DB_HOST,
    port=DB_PORT,
    database=DB_NAME_TEST
)

# Crear el motor de SQLAlchemy
Base = declarative_base()

engine = create_engine(url)
sessionLocal = sessionmaker(bind=engine)



def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close() 
