# Prueba tecnica Front Ecomsur 2021

- [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
- [Descripción de la solución](#descripción-de-la-solución)
- [Descripción de los componentes](#descripción-de-los-componentes)

## Instalar y Correr la aplicación

- La única dependencia extra añadida dentro del archivo `package.json` ha sido: `"react-router": "5.2.0"`.
![Dependencias](/dependencias.PNG)

- De igual manera, una vez ubicado en la carpeta `root` de la aplicacion se corre el comando: `npm install react-router-dom`.

- Punto y aparte, la instalación ha sido la misma siguiendo la información del README.md proporcionado.

## Descripción de la solución

- He optado por hacer uso del hook `useReducer()` para el manejo de estados, (la lógica del mismo se encuntra dentro del componente `<ProductDisplayPage/>`). Por ello, he creado dentro de la carperta `/components` tanto las acciones como el reducer en sus respectivos folders.
- Dentro de `/reducer/shoppingReducer.js` realicé el consumo de la API local y toda la lógica necesaria para inicializar un arreglo de `productos` y de `carrito` como estados iniciales. Para el primero hice uso de una función llamda `renderTheData` para poder instanciar los elementos dentro de el mediante el método `push` ya que corresponde a un arreglo de produtos, por otra parte, `carrito` comienza como un arreglo vacio, con la lógica de que aun no se ha comprado nada.

### FUNCIÓN REDUCTORA
- Para ella, tomé en cuenta las acciones que pueden alterar el estado inicial, siguiendo los casos de:
--AÑADIR UN ELEMENTO AL CARRITO:
Dentro de este caso pueden suceder dos cosas: se añade un elemento que no se encontraba en el carrito o se aumenta la cantidad de un elemento si ya se encontraba presente.
--QUITAR UN ELEMENTO AL CARRITO:
Dentro de este caso pueden suceder dos cosas: se elimina de uno en uno el elemento que se encuntra en el carrito siempre que la cantidad del mismo sea mayor a uno, o del caso contrario se filtra el elemento del estado eliminando su presencia del carrito.
--QUITAR TODOS LOS ELEMENTOS DE UN MISMO PRODUCTO DEL CARRITO
Se filtra el elemento del estado eliminando su presencia del carrito.
--VACIAR EL CARRITO
Se regresa el estado inicial (ya que el carrito de compras está vacio en un inicio)

## Descripción de los componentes

- ### `<App/>`
No sufrió ninguna modificación, pero dentro del mismo decidí crear un nuevo componente llamado `<ProductListPage/>`, para representar todo el contenido de la aplicación.

- ### `<ProductListPage/>`
Corresponde al componente envoltorio, por lo que solo se encarga de renderizar los componentes correspondientes de la barra de navegación y del catálogo y carrito.
![Componente ProductListPage](/productlistpage.png)

- ### `<NavigatorBarra/>`
Representa la barra de navegación (para redirigirse al `/home`, y para desplegar el `/MiniCart`; este último representaría un listado de los productos añadidos al carrito).
![Componente NavigatorBarra](/navigatorbarra.png)

- ### `<ProductDisplayPage/>`
Dentro de este componente pretendo mostrar todos los objetos que han sido instanciados dentro del estado inicial correspondiente al arreglo `productos[]`, simulando la lista de todos los productos disponibles, gracias a un mapeado del mismo puedo crear dinamicamente el componente necesario para cada producto.
![Componente ProductDisplayPage](/productdisplaypage.png)

- ### `<FullPageProduct/>`
//INCONCLUSO

- ### `<MiniCart/>`
//INCONCLUSO

- ### `<ProductItem/>`
Con este componente me apoyé para simular un producto independiente dentro de todo el catálogo de productos. Presenta toda la información relevante para un usuario, así como un botón que permitirá añadirlo dentro del carro de compras.
![Componente ProductItem](/product-item.png)

- ### `<CartPage/>`
Al igual que `<ProductItem/>` funciona como un producto, pero a diferncia del pasado, este lo hace como si se encontrara ya dentro del carrito de compras, mostrando información aun más sintetizada, teniendo como añadido un contador del total de productos que han sido seleccionados del mismo y su precio total.

![Componente CartPage](/cartpage.png)