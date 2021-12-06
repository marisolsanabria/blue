# blue

Este proyecto fue generado con  [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Integrantes, roles y funciones

| Nombre | Rol  | Funciones  |
| :---:   | :-: | :-: |
| Soranyi Lissette Martinez Parrado | Scrum master | Gestionar, coordinar, monitorear y servir de apoyo en el desarrollo del scrum team |
| Marisol Sanabria Naranjo | Scrum master | Planificar las reuniones, llevar control del avance e imprevistos que se puedan presentar durante el desarrollo, servir de apoyo al scrum team |
| Jaime Andres quiñones Chacón | Scrum team | Elaborar el frontend de las vistas de registro de usuarios, listado de productos, filtros, lista de deseos y compras. |
| John Martinez | Scrum team | Elaborar el Backend de las vistas de registro de usuarios, listado de productos, filtros, lista de deseos y compras. |
| Daniel segura | Scrum team | Crear y administrar la base de datos, realizar el backend de las vistas del administrador, de tal forma que permita guardar los productos con sus respectiva descripción y precio. |
| Famber Coronel | Scrum team | Elaborar el Backend de las vistas de registro de usuarios, listado de productos, filtros, lista de deseos y compras. |

## Objetivos

- Elaborar una vista de registro e ingreso de la cuenta del administrador que permita el ingreso de un usuario y contraseña.
- Elaborar las vistas de registro e ingreso para los perfiles de los clientes, esta debe permitir el registro e ingreso mediante un correo electrónico y contraseña, o mediante una cuenta de google.
- Crear una base de datos y vincularla al proyecto.
- Diseñar una vista para el registro de productos, la cual sólo sea habilitada para la cuenta de administrador.
- Crear la vista de productos que tendrá el cliente, con el código respectivo que permita filtrar los productos de acuerdo a género, tipo, talla y color.
- Elaborar con total funcionalidad una página de lista de deseos, en los cuales se podrá ver los artículos que el cliente ha guardado como favoritos.
- Creamos vista de contacto de la empresa y un buzón de quejas y reclamos
- Crear una página de carrito de compras. 

## Misión

Innovar, liderar y proveer un servicio integral proporcionando una plataforma para compras en línea de tal manera que nuestros clientes puedan adquirir los últimos productos y promociones desde la comodidad de sus casas o trabajo, sin gastar tiempo ni dinero en movilizarse a un punto físico; haciendo de esto una experiencia más agradable para aquellos que desean estar a la moda.

## Product Backlog

[Jira](https://soranyi.atlassian.net/jira/software/projects/PT/boards/1)

### HHU01 - Ingreso al sistema  

**Como:**  Usuario

**Puedo:** Ingresar a la plataforma 

**Para:** Hacer uso de las funcionalidades de la plataforma
 
**Criterios de aceptación**

***Criterios de Aceptación 1: Ingreso exitoso***
- Cuando el ingreso del usuario y contraseña son correctos 
- Entonces el sistema permitirá el ingreso al sistema
 
***Criterios de Aceptación 2: Ingreso fallido***
- Cuando el ingreso del usuario y contraseña son incorrectos
- Entonces el sistema NO permitirá el ingreso 
- Y el sistema presentará una alerta con el siguiente mensaje: “Usuario y/o contraseña no válida”. El usuario podrá volver a ingresar sus datos o recuperar su contraseña en el caso de que sea necesario.
 
***Criterios de Aceptación 3: Falta uno o más campos obligatorios.***
- Cuando el usuario oprima el botón “Ingresar” y haga falta algún campo (correo y/o contraseña).
- Entonces el sistema no permitirá el ingreso al sistema.
- Y aparecerá el mensaje: “Por favor ingrese su correo y/o contraseña”
 
***Criterios de Aceptación 4. Usuario no registrado.***
- En el caso de que el usuario no se encuentre registrado.
- Entonces el sistema lo enviará a que se registre según su rol.

### HU02 - Registro en el sistema  

**Como:**  Usuario

**Puedo:** Registrarme en la plataforma 

**Para:** Para tener una personalización en cuanto a las funcionalidades del sistema
 
**Criterios de aceptación**

***Criterios de Aceptación 1: Registro exitoso***
- Cuando el usuario rellena todos los campos correspondientes al registro 
- Entonces el sistema lo registrará como un nuevo usuario en el sistema
 
***Criterios de Aceptación 2: Falta campos obligatorios***
- Cuando el usuario oprima el botón “registrar” y haga falta algún campo correspondiente al registro.
- Entonces el sistema no permitirá realizar el registro
- Y aparecerá el mensaje: “Por favor rellene los campos correspondientes
 
***Criterios de Aceptación 3: Registro según el rol.***
- Para el registro el sistema permitirá uno como administrador o como cliente. Dependiendo de lo que se necesite.
 
### HHU03 - Gestionar productos  

**Como:**  Administrador de la tienda

**Puedo:** Modificar los productos que ofrece la tienda

**Para:** Ofrecer el catálogo de productos según disponibilidad de la tienda
 
**Criterios de aceptación**

**Criterios de Aceptación 1: Agregar productos.**
- Adicionar nuevos campos de información en los productos del inventario de la tienda.
- Los productos deben estar dentro de una categoría y el sistema le solicitará todos los datos obligatorios que debe tener cada producto.
- En el caso que no complete todos los campos, no puede agregar el producto.
 
**Criterios de Aceptación 2: Editar productos.**
- Cambiar atributos de los productos registrados en el catálogo de la tienda.
- El sistema le preguntará al administrador si desea hacer los cambios, para evitar errores.
 
**Criterios de Aceptación 3. Eliminar productos.**
- Eliminar campos de información en los productos del inventario de la tienda.
- En este caso el sistema le permite al usuario eliminar productos según la necesidad.
- El sistema presentará advertencia al momento que se oprima el botón “guardar “, para evitar errores.

### HHU04 - Gestionar compra  

**Como:**  Cliente

**Puedo:** Tener un carrito de compras

**Para:** Tener información y control de los productos que voy a comprar
 
**Criterios de aceptación**

**Criterios de Aceptación 1: Eliminar productos.**
- El carrito de compras le permitirá eliminar productos antes de proceder a la compra.
 
**Criterios de Aceptación 2: Aumentar cantidad de productos.**
- Cambiar atributos de los productos registrados en el catálogo de la tienda.
- El sistema le debe permitir aumentar la cantidad en los artículos que estén dentro del carrito de compras, validando la disponibilidad.


### HHU05 - Consultar productos  

**Como:**  Cliente

**Puedo:** Navegar en la plataforma

**Para:** Revisar y escoger los productos que quiera comprar
 
**Criterios de aceptación**

**Criterios de Aceptación 1: Filtrar productos.**
- La plataforma le debe permitir al usuario, navegar de forma más fácil para lograr una mejor experiencia de usuario. Por esta razón debe presentar un filtro por categorías de los productos.
 
**Criterios de Aceptación 2: Búsqueda por texto.**
- En el caso de que el usuario quiera buscar algo en específico, el sistema debe responder ante esta solicitud

## Sprint 2

Entregables

-Contenido del Sprint #2[https://drive.google.com/drive/folders/1PhSjUlh6iH8tV1dkR4m1HxbKItZHvfzc?usp=sharing].

Nota: Los entregables para el Sprint 2, fueron organizados en una carpeta de drive compartida. Allí se adjuntarón:

-Las capturas de las instalaciones.

-Diagramas UML (Clases y Casos de Uso).

-Avance del wireframe del aplicativo.

## Sprint 3

Entregables

-Contenido del Sprint #3[https://drive.google.com/drive/folders/1rqseFlQoLFXGJoDbbfAlw6d50utjiDe7].

Nota: Los entregables para el Sprint 3, fueron organizados en una carpeta de drive compartida. Allí se adjuntarón:

-Instalacion dependencias.

-Pruebas Insomnia.

-Las demás actividades se ven reflejadas en el backend del proyecto.

