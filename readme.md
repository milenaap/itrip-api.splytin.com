# Proyecto Django

### Install

```sh

// Entorno virtual (https://flask.palletsprojects.com/en/3.0.x/installation/)
- python3 -m venv venv                      // MacOs
- source venv/bin/activate                  // MacOs
- pip install --upgrade pip

- python3.exe -m venv venv                  // Windows
- .\venv\bin\activate                       // Windows
- python3.exe -m pip install --upgrade pip  // Windows
- deactivate                                // Deactivate

```


### Instalar librerias

```sh

- pip install Django                        // Django
- django-admin --version                    // Ver version
- pip install mysqlclient                   // MySQL

```





### Crear Proyecto

```sh

- django-admin startproject myproject       // Crear proyecto
- cd myproject                              // Ingresar al proyecto
- python manage.py runserver                // Correr servidor


manage.py: Herramienta de línea de comandos para administrar tu proyecto.
settings.py: Configuración principal de tu proyecto (base de datos, apps instaladas, etc.).
urls.py: Configuración de las rutas de tu proyecto.
wsgi.py y asgi.py: Archivos para servir tu aplicación (usados por servidores web).

```





### Crear Aplicación

```sh

- python manage.py startapp myapp           // Crear aplicación


models.py: Define la estructura de la base de datos.
views.py: Contiene la lógica de las vistas.
admin.py: Configura la interfaz de administración.


Y en settings.py, debes agregar la aplicación a la lista de INSTALLED_APPS:

INSTALLED_APPS = [
    ...
    'myapp',
]

```



### Definir rutar 

```sh
1) Abre myproject/urls.py y agrega la ruta a tu aplicación:

...
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),  # Ruta del panel de administración
    path('', include('myapp.urls')),  # Incluye las rutas de tu app
]
...

2) Luego, en myapp/, crea un archivo urls.py:

....

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
...

3) Define la función home en myapp/views.py:

...

from django.http import HttpResponse

def home(request):
    return HttpResponse("¡Hola, mundo! Este es mi primer proyecto Django.")

...

```



### Configurar Base de Datos

```sh

- Abre settings.py y configura tu base de datos:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # Motor de base de datos MySQL
        'NAME': 'nombre_de_tu_base_datos',     # Nombre de tu base de datos
        'USER': 'tu_usuario',                 # Usuario de la base de datos
        'PASSWORD': 'tu_contraseña',          # Contraseña del usuario
        'HOST': 'localhost',                  # Dirección del servidor MySQL
        'PORT': '3306',                       # Puerto de MySQL (por defecto es 3306)
    }
}

- Luego, crea la base de datos en MySQL:

python manage.py migrate

- Y crea un superusuario 

python manage.py createsuperuser

- Para acceder al panel de administración:

http://127.0.0.1:8000/admin/

```




### Install Plesk

```sh


// Instala los requirimientos:
pip freeze > requirements.txt     // Crear archivo requerimientos
pip install -r requirements.txt   // Instalar requerimientos 




// PLESK Servidor - WSGI (es el que tengo que buscar)
// Configurar en Dominio -> Apache & nginx Settings -> Additional directives for HTTPS. El servicio se ejecutará con Apache y escribir:

...
<Location "/">
	ProxyPass http://localhost:8000/
	ProxyPassReverse http://localhost:8000/
</Location>
...



// Para probar el servidor
source venv/bin/activate 
gunicorn -w 4 -b 127.0.0.1:8001 --reload app:app




Para nuevo hacer script:

sudo nano /etc/systemd/system/gunicorn-manejo-flask.splytin.com.service

-----------------

[Unit]
Description=Gunicorn instance for manejo-flask.splytin.com
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/vhosts/splytin.com/manejo-flask.splytin.com
Environment="PATH=/var/www/vhosts/splytin.com/manejo-flask.splytin.com/venv/bin"
ExecStart=/var/www/vhosts/splytin.com/manejo-flask.splytin.com/venv/bin/gunicorn -w 4 -b 127.0.0.1:8001 --reload app:app

[Install]
WantedBy=multi-user.target

-----------------

// En el terminal:
sudo systemctl daemon-reload
sudo systemctl start gunicorn-manejo-flask.splytin.com
sudo systemctl enable gunicorn-manejo-flask.splytin.com


// Para Gestión, errores y pruebas del servidor Gunicorn:
sudo systemctl restart gunicorn-manejo-flask.splytin.com
sudo systemctl status gunicorn-manejo-flask.splytin.com

sudo journalctl -u gunicorn-manejo-flask.splytin.com



// Permisos:
sudo chown -R www-data:www-data /var/www/vhosts/splytin.com/manejo-flask.splytin.com
sudo chmod -R 775 /var/www/vhosts/splytin.com/manejo-flask.splytin.com


```


