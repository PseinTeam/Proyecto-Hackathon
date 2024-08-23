from urllib import response
from fastapi import FastAPI, responses
from routes.user_routes import user_rutes
from routes.alert_routes import alert_router
from routes.auth_routes import auth_router
from routes.permiso_routes import permiso_rutes
from fastapi.middleware.cors import CORSMiddleware
import init_db
from services.roles_permisos_asignacion import Db_insert_RP
from routes.socket_routes import router as websocket_router
from routes.ia_routes import router as ia_router
from routes.ia_ambiente_routes import router as ia_ambiente_router

# Para iniciar el proyecto: uvicorn main:app --reload
app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", include_in_schema=False)
def redirigir_docs():
    return responses.RedirectResponse(url="/docs")


app.include_router(websocket_router)
app.include_router(alert_router)
app.include_router(user_rutes)
app.include_router(auth_router)
app.include_router(permiso_rutes)
app.include_router(ia_router)
app.include_router(ia_ambiente_router)

Db_insert_RP()



if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
