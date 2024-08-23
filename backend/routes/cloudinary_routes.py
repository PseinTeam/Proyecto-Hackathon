from fastapi import APIRouter, File, UploadFile
from pydantic import BaseModel
import os
import cloudinary.uploader
from services.cloudinary_config import cloudinary

routers = APIRouter()

class DeleteRequest(BaseModel):
    public_id: str

@routers.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    try:
        # Guarda el archivo temporalmente
        file_path = f"temp/{file.filename}"
        with open(file_path, "wb") as buffer:
            buffer.write(file.file.read())
        
        # Sube la imagen a Cloudinary
        result = cloudinary.uploader.upload(file_path)
        # Elimina el archivo temporal
        os.remove(file_path)
        
        return {"url": result["secure_url"]}
    except Exception as e:
        return {"error": str(e)}

@routers.delete("/delete/")
async def delete_image(delete_request: DeleteRequest):
    try:
        result = cloudinary.uploader.destroy(delete_request.public_id)
        return result
    except Exception as e:
        return {"error": str(e)}
