from fastapi import WebSocket
from typing import List
import json

class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        self.log_active_connections("Client connected")

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)
        self.log_active_connections("Client disconnected")

    async def send_personal_message(self, message: dict, websocket: WebSocket):
        await websocket.send_text(json.dumps(message))

    async def broadcast(self, message: dict):
        connections_count = len(self.active_connections)
        print(f"Broadcasting message to {connections_count} clients")
        for connection in self.active_connections:
            await connection.send_text(json.dumps(message))
        print(f"Message sent to {connections_count} clients")

    def log_active_connections(self, action):
        print(f"{action}. Total active connections: {len(self.active_connections)}")

# Crear una única instancia global de ConnectionManager
manager = ConnectionManager()

# Proveer acceso a la instancia global
def get_manager():
    return manager