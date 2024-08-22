from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database.db import get_db
from controllers.rol_permisos_controllers import get_all_permisos, quitar_permiso_al_rol, agregar_permiso_al_rol
from models.schemas.permisos_schema import PermisoRequest


permiso_rutes = APIRouter(prefix='/permiso', tags=['Permisos'])

@permiso_rutes.get('/role/getPermissions')
async def get_all_permisos_route(db: Session = Depends(get_db)):
    return get_all_permisos(db)

@permiso_rutes.post('/role/addPermission')
async def agregar_permiso_a_usuario(request: PermisoRequest, db: Session = Depends(get_db)):
    id_permiso = request.id_permiso
    id_user = request.id_user
    return agregar_permiso_al_rol(id_user, id_permiso, db)

@permiso_rutes.patch('/role/removePermission')
async def sacar_permiso_a_usuario(request: PermisoRequest, db: Session = Depends(get_db)):
    id_permiso = request.id_permiso
    id_user = request.id_user
    return quitar_permiso_al_rol(id_user, id_permiso, db)