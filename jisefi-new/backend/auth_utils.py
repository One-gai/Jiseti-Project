# backend/auth_utils.py
from flask import session, abort
from functools import wraps
from backend.models import User

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user_id = session.get("user_id")
        if not user_id:
            abort(401, description="Unauthorized. Please log in.")
        
        user = User.query.get(user_id)
        if not user or not user.is_admin:
            abort(403, description="Forbidden. Admins only.")
        
        return f(*args, **kwargs)
    return decorated_function

