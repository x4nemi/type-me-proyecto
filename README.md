# Type Me

Proyecto realizado para la materia de **Programación para Internet**

⌨️ Para poder correr este proyecto localmente tienes que seguir los siguientes pasos en tu barra de comandos:

Clonar el repositorio en donde gustes:

`gh repo clone x4nemi/type-me-proyecto`

Instalar dependencias necesarias:

`npm install`

Para correrlo y poder interactuar:

`npm run dev`

🌐 Después de esto te dará un link a seguir para abrir en el navegador. 

---

## 🗃 Dependencias utilizadas

### Base de datos

  - Firebase
  - Cloudinary (sólo imágenes)

### Manejo de rutas

  - React Router

### Estados de entidades

  - React Redux
  - Redux Toolkit
  - Redux Persist

### Estilos

  - Tailwindcss
  - DaysUI

### Alertas

  - React-Toastify

---

## Estructura de la base de datos
Se usaron dos documentos como las siguientes rutas:

### Profile
`profile/:uid`

Para los perfiles creados siendo `uid` único para cada perfil y teniendo la forma:
  ```
  {
      uid: string
      displayName: string,
      photoURL: string | null,
      type: string,
   }
  ```
Este documento se crea cuando se inicia sesión con Google la primera vez o cuando se crea la cuenta. Puede leerse al entrar a la aplicación cuando se inicia sesión. 
Se puede editar todas las propiedades excepto el `uid`. No puede eliminar un documento.


### Publications
`publications/:uid`

Si el perfil con `uid` tenía publicaciones, es un arreglo de objetos que vienen de la siguiente forma:

  ```
   {
       uid: string,
       displayName: string,
       photoURL: string | null,
       type: string,
       voted_type: string,
       description: string,
   }           
  ```
  
Este documento cuenta con todas las características del CRUD pero hay unas limitaciones a estas características:
    
Puedes crear publicaciones si:
    
  - No eres el propietario del perfil que ves
 
Puedes leer publicaciones si
    
  - Estás en cualquier perfil
 
Puedes editar publicaciones si:

  - Creaste la publicación
    
Puedes eliminar publicaciones si:

  - Creaste la publicación
  - Las publicaciones están en tu perfil
