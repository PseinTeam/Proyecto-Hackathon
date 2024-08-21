from fastapi import FastAPI, status, HTTPException, APIRouter, Depends
from database.db import get_db
from models.alert_messages import AlertMessage
from models.schemas.alert_messages_schema import AlertMessageRequest
from sqlalchemy.orm import Session



alert_router = APIRouter()


@alert_router.post('/SendAlertMessage')
async def send_message(alert_message: AlertMessageRequest, db: Session = Depends(get_db)):
    full_name = alert_message.full_name
    user_id = alert_message.user_id
    puesto_trabajo = alert_message.puesto_trabajo
    message = alert_message.message
    print (full_name, user_id, puesto_trabajo, message)

    if not message:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Message is required")

    # Lógica para enviar mensaje de alerta
    # Asumiendo que tienes una lógica para manejar esto en la clase AlertMessage
    alert = AlertMessage(full_name=full_name, user_id=user_id, puesto_trabajo=puesto_trabajo, message=message)
    
    db.add(alert)
    db.commit()

    return {"message": "Alert message sent successfully"}