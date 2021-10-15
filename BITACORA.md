# Prueba tecnica Front Ecomsur 2021

- [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
- [Descripción de la solución](#descripción-solución)
- [Descripción de los componentes](#descripción-componentes)

## Instalar y Correr la aplicación

- La única dependencia extra añadida dentro del archivo `package.json` ha sido: `"react-router": "5.2.0"`.
![Dependencias](./bitacora-images/dependencias.png)

- De igual manera, una vez ubicado en la carpeta `root` de la aplicacion se corre el comando: `npm install react-router-dom`.

- Punto y aparte, la instalación ha sido la misma siguiendo la información del README.md proporcionado.

## Descripción de la solución

- He optado por hacer uso del hook `useReducer()` para el manejo de estados, (la lógica del mismo se encuntra dentro del componente `<ProductDisplayPage>`). Por ello, he creado dentro de la carperta `/components` tanto las acciones como el reducer en sus respectivos folders.
- Dentro de `/reducer/shoppingReducer.js` realicé el consumo de la API local y toda la lógica necesaria para inicializar un objeto `productos` y `carrito` como estados iniciales.

## Descripción de los componentes

### `<App/>`
No sufrió ninguna modificación, pero dentro del mismo decidí crear un nuevo componente llamado `<ProductListPage/>`, para representar todo el contenido de la aplicación.

### `<ProductListPage/>`
Ya que corresponde al componente envoltorio, separé el contenido en dos componentes: 
#### (`<NavigatorBarra/>`) 
Representa la barra de navegación (para redirigirse al `/home`, y para desplegar el `/MiniCart`; este último representaría un listado de los productos añadidos al carrito), y
#### (`<ProductDisplayPage/>`)
Que corresponde tando al catálogo de los productos y al carrito.

### (`<NavigatorBarra/>`) 
//INCONCLUSO
### (`<ProductDisplayPage/>`)