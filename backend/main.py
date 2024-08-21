from fastapi import FastAPI
from routes.user_routes import user_rutes
from routes.auth_routes import auth_router
from fastapi.middleware.cors import CORSMiddleware
import init_db
from services.roles_permisos_asignacion import Db_insert_RP

# Para iniciar el proyecto: uvicorn main:app --reload
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_rutes)
app.include_router(auth_router)

Db_insert_RP()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
