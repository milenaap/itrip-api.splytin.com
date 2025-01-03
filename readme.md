# Proyecto Prueba Python Plesk

### Install Local & Plesk

```sh

// Entorno virtual (https://flask.palletsprojects.com/en/3.0.x/installation/)
- python3 -m venv venv                      // MacOs
- source venv/bin/activate                  // MacOs
- pip install --upgrade pip

- python3.exe -m venv venv                  // Windows
- .\venv\bin\activate                       // Windows
- python3.exe -m pip install --upgrade pip  // Windows
- deactivate                                // Deactivate



// Instalar librerias:
- pip install Flask                   // Flask
- pip install gunicorn                // Gunicorn
- pip install requests                // Gunicorn
- pip list                            // Listar pip instalados
- pip install flask-wtf               // Formularios 
- pip install python-dotenv           // Variables de entorno
- pip install mysql-connector-python  // MySQL


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