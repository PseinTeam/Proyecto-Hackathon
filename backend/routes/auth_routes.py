from fastapi import APIRouter, Header, HTTPException, status
from services.jwt import validate_token

auth_router = APIRouter(prefix='/auth', tags=['Auth'])

@auth_router.post('/validate/token')
async def validate_token_route(Authorization: str = Header(None)):
    if not Authorization:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Authorization header not found")
    token = Authorization.split(" ")[1]
    response = validate_token(token, output=True)
    if response is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid token")
    return {"message": "Token válido", "Usuario": response}
