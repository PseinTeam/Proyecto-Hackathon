from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from controllers.socket_controllers import get_manager
import json

router = APIRouter()


manager = get_manager()

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            message = json.loads(data)
            if message.get('message') == 'Emergencia':
                print("Received an emergency message.")
                await manager.broadcast({"type": "emergency", "message": "Emergencia"})
            else:
                await manager.broadcast({"type": "alert", "message": message})
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast({"type": "info", "message": "A client left the chat"})
    except Exception as e:
        print(f"An error occurred: {e}")