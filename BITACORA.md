# Prueba tecnica Front Ecomsur 2021

- [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
- [Descripción de la solución](#descripción-solución)
- [Descripción de los componentes](#descripción-componentes)

## Instalar y Correr la aplicación

- La única dependencia extra añadida dentro del archivo `package.json` ha sido: `"react-router": "5.2.0"`.
![Dependencias](/dependencias.png)

- De igual manera, una vez ubicado en la carpeta `root` de la aplicacion se corre el comando: `npm install react-router-dom`.

- Punto y aparte, la instalación ha sido la misma siguiendo la información del README.md proporcionado.

## Descripción de la solución

- He optado por hacer uso del hook `useReducer()` para el manejo de estados, (la lógica del mismo se encuntra dentro del componente `<ProductDisplayPage/>`). Por ello, he creado dentro de la carperta `/components` tanto las acciones como el reducer en sus respectivos folders.
- Dentro de `/reducer/shoppingReducer.js` realicé el consumo de la API local y toda la lógica necesaria para inicializar un arreglo de `productos` y de `carrito` como estados iniciales.

## Descripción de los componentes

- ### `<App/>`
No sufrió ninguna modificación, pero dentro del mismo decidí crear un nuevo componente llamado `<ProductListPage/>`, para representar todo el contenido de la aplicación.

- ### `<ProductListPage/>`
Corresponde al componente envoltorio, por lo que solo se encarga de renderizar los componentes correspondientes de la barra de navegación y del catálogo y carrito.

- ### `<NavigatorBarra/>`
Representa la barra de navegación (para redirigirse al `/home`, y para desplegar el `/MiniCart`; este último representaría un listado de los productos añadidos al carrito).

- ### `<ProductDisplayPage/>`
Dentro de este componente pretendo mostrar todos los objetos que han sido instanciados dentro del estado inicial correspondiente al arreglo `productos[]`, simulando la lista de todos los productos disponibles, gracias a un mapeado del mismo puedo crear dinamicamente el componente necesario para cada producto.

- ### `<FullPageProduct/>`

- ### `<MiniCart/>`

- ### `<ProductItem/>`
Con este componente me apoyé para simular un producto independiente dentro de todo el catálogo de productos. Presenta toda la información relevante para un usuario, así como un botón que permitirá añadirlo dentro del carro de compras
![Dependencias](./bitacora-images/product-item.png)

- ### `<CartPage/>`
Al igual que `<ProductItem/>` funciona como un producto, pero a diferncia del pasado, este lo hace como si se encontrara ya dentro del carrito de compras, mostrando información aun más sintetizada, teniendo como añadido un contador del total de productos que han sido seleccionados del mismo y su precio total.