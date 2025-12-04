import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from users import router
import uvicorn

load_dotenv()
app = FastAPI()

PORT = int(os.getenv("PORT"))

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(router)

if __name__ == '__main__':
    uvicorn.run("main:app", reload=True, port=PORT)