# Electron, PocketBase, MUI DataGrid y Jotai: Herramientas que simplifican el desarrollo de pequeñas soluciones

Este repositorio sirve de ejemplo para un artículo en el que se desea mostrar cuatro herramientas que ayudan en el desarrollo de pequeñas soluciones. Si te sirve, considera dar una ⭐. 

Se trata de una aplicación de escritorio desarrollada con [Electron-vite](https://electron-vite.org/) que usa un backend de código abierto llamado [PocketBase](https://pocketbase.io/) con el cual incorpora una base de datos (SQLite) con suscripciones en tiempo real, administración de autenticación incorporada, una interfaz de usuario conveniente y una API REST simple. El diseño UI esta basado en componentes [MUI](https://mui.com/) y para la gestión de estado se gestión con [Jotai](https://jotai.org/).

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*RUTaZ3tUO-Qo4SSTuDZN2A.gif)

## Requisitos

- 🔨Recomiendo descargar el ejecutable de [PocketBase](https://pocketbase.io/) para su sistema operativo y colocarlo en la carpeta `./pb`. 
- ⚒️Adecuar el script `./src/preload/pb.ts` para ejecutar PocketBase antes del resto de la aplicación
- 🛠️A modo de ejemplo, este repo incluye un archivo `./pb/pb_schema.json` que contiene la configuración de una base de datos, adecuada para el ejemplo que se desarrolla en este espacio. 
- 🛠️Para instalar dependencias, simplemente ejecutar el comando `npm install ` (NodeJS debe ser parte de sistema y estar actualizado a la versión `lts`).
- 🛠️Para ejecutar una versión de desarrollo, ejecutar el comando `npm run dev`.
- 🛠️El resto de los comandos pueden ser visualizados en el archivo `package.json`. 

## Configuración

Es importante ejecutar el backend a través de su ejecutable, al menos la primera vez, para configurar la base de datos. Para hacer este paso, puede seguir la [guía oficial](https://pocketbase.io/docs/) de PocketBase.

Para importar la configuración `./pb/pb_schema.json` , diríjase a `settings>import collections` e importe el archivo dado.

Si todo fue bien, ya puede ejecutar el ejemplo en modo de desarrollo.

## Como usar este ejemplo

Una vez ejecutada la aplicación, puede acceder al backend ya sea mediante la dirección `localhost:8090/_/` o haciendo clic en el icono `storage` localizado en el panel superior a la derecha. 

Allí puede agregar más elementos a la colección `productos` que serán tomados por la aplicación principal. 

El contexto en el cual se desenvuelve el ejemplo puede ser leído en el siguiente [artículo](https://medium.com/@joackob/electron-pocketbase-mui-datagrid-y-jotai-herramientas-para-pequeñas-soluciones-3a84bf0f9791). 
