# Delilah Restó
  
Consta de la creación de una API para un restaurante donde se le permite al usuario: registrarse, hacer log in, ver los detalles de su perfil, consultar los productos disponibles y hacer una orden con los productos deseados. Al administrador se le permite: registrarse, hacer log in, ver los detalles de todos los usuarios registrados, crear, modificar y eliminar los productos (CRUD) y actualizar el estado de las órdenes creadas.
  
Este proyecto es el tercero y último del programa de Full Stack Web Development de Acámica, para el cuál se utilizaron los siguientes recursos y tecnologías:

- Node.js | Express.js
- MySQL | Sequelize | XAMPP
- JWT para generar el token de autenticación
- [bcrypt](https://www.npmjs.com/package/bcrypt) como método para hacer el hash y la verificación al hacer login 
- [multer](https://www.npmjs.com/package/multer) middleware para manejar la subida de archivos a través de FormData requests
-  [dotenv](https://www.npmjs.com/package/dotenv) para generar variables de ambiente de manera local
-  [morgan](https://www.npmjs.com/package/morgan) para generar logs al recibir cualquier solicitud del servidor


## Instalación


Primero se tiene que crear la base de datos con MySQL para ello necesitas tener instalada [XAMPP](https://www.apachefriends.org/download.html) o alguna otra herramienta parecida que te permita inicializar el servidor y crear la base de datos.  

Asegúrate que el servidor de MySQL esté inicializado en el puerto 3306 e igualmente que Apache se haya inicializado de forma correcta.

Ingresa al panel de control del servidor de MySQL y crea una base de datos llamada `delilah_resto`, y ahora sí estás listx para continuar con el repositorio.

Ahora, clona el repositorio a tu dispositivo local descargando el archivo ZIP o ejecutando el siguiente comando en tu terminal:

```bash
git clone https://github.com/randrerd/delilah-resto.git
```

Ahora que la base de datos fue creada y tenemos todos los archivos necesarios, se necesita importar el archivo `queries.sql` que puedes encontrar dentro del directorio `db` del repositorio. Este archivo se importa a través del panel de control del servidor de MySQL en la sección de `Import`, ahí podrás seleccionar el archivo y se ejecutarán los queries necesarios para crear las tablas e insertar los datos a ellas.

Luego, necesitas ubicarte en el directorio descargado con la terminal y descargar e instalar las dependencias del repositorio ejecutando el siguiente comando:

```bash
npm install
```
Ejecuta el siguiente código para inicializar la conexión a la base de datos y poder interactuar con ella.

```bash
npm run start
```

## Uso

Para hacer uso de la API y el servidor que instalaste, necesitarás alguna herramienta de desarrollo de API como [Postman](https://www.postman.com/) para probar los distintos endpoints creados.  

Una vez tengas instalado Postman (también puedes usar la versión web), ingresa a la [colección de Postman](https://documenter.getpostman.com/view/11884706/TVCmQQHa), haz clic en el botón `Run in Postman` y listo! Ya puedes probar la API completamente a través de los Endpoints.

