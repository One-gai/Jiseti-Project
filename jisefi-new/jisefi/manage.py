from backend import create_app
from backend.extensions import db
from flask_migrate import Migrate

# Create app instance
app = create_app()

# Setup Flask-Migrate
migrate = Migrate(app, db)

# Optional: allow running with `flask` command
# Only needed if FLASK_APP isn't set in env
if __name__ == '__main__':
    app.run()
