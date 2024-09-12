PASO 1: Crea un archivo JSON con la estructura de tu plantilla.

EJEMPLO:

{
  "templates": {
    "project": {
      "folders": [
        "client",
        "server",
        "server/config",
        "server/middleware",
        "server/routes",
        "server/models",
        "server/utils"
      ],
      "files": [
        { "path": "client/index.html", "content": "" },
        { "path": "client/styles.css", "content": "" },
        { "path": "client/script.js", "content": "" },
        { "path": "server/config/database.js", "content": "" },
        { "path": "server/middleware/auth.js", "content": "" },
        { "path": "server/middleware/validate.js", "content": "" },
        { "path": "server/routes/auth.js", "content": "" },
        { "path": "server/routes/user.js", "content": "" },
        { "path": "server/models/User.js", "content": "" },
        { "path": "server/utils/jwt.js", "content": "" },
        { "path": "server/server.js", "content": "" },
        { "path": ".env", "content": "" },
        { "path": "package.json", "content": "" }
      ]
    }
  }
}

PASO 2: Guarda el json y encima de el haz clic derecho y selecciona "Crear Estructura"

Si no os funciona contactarme por aqui: https://github.com/instak1ll