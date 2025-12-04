from fastapi import APIRouter
from forms import UserLogin, UserRegister
from random import randint


router = APIRouter(
    prefix='/api'
)

NextID = randint(1, 999695995)

users = []

@router.get("/users")
def get_all_users():
    return users

@router.post("/users/register")
def add_user(req: UserRegister):
    global NextID

    newUser = {
        "id": randint(1, 999695995),
        "email": req.email,
        "password": req.password
    }
    users.append(newUser)
    return f"Добавлен пользователь {newUser}"




@router.post("/users/login")
def add_user(req: UserLogin):
    for user in users:
        if user["email"] == req.email and user["password"] == req.password:
            return "Успешно авторизован"
        
        else:
            return "Неправильная почта или пароль"