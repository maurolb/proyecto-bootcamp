import { types } from "../types/types"

const initialState = {
	source: [
		{
			id: 1,
			category: 'monitores',
			name: "Monitor BenQ GW2780 27''",
      stock: 25,
      price: 30000,
			specs: "Resolución 1920px-1080px con relación de aspecto 16:9, panel IPS, posee conexión D-Sub HDMI DisplayPort y Jack de 3.5mm, altavoces incluidos",
			img: "https://http2.mlstatic.com/D_NQ_NP_929247-MLA43989185209_112020-O.jpg",
		},
		{
			id: 2,
			category: 'monitores',
			name: "Monitor Asus Gaming VG248QG 24''",
      stock: 5,
      price: 50000,
			specs: "Resolución 1920px-1080px con relación de aspecto 16:9, pantalla antireflejos, panel TN, posee conexión DVI-D HDMI DisplayPort y Jack de 3.5mm, altavoces incluidos",
			img: "https://http2.mlstatic.com/D_NQ_NP_887397-MLA46544970616_062021-O.jpg",
		},
		{
			id: 3,
			category: 'monitores',
			name: "Monitor curvo LG UltraGear 34GL750 34''",
      stock: 13,
      price: 130000,
			specs: "Resolución 2560px-1080px con relación de aspecto 21:9, monitor curvo, panel IPS, posee conexión HDMI*2 DisplayPort y Jack de 3.5mm",
			img: "https://http2.mlstatic.com/D_NQ_NP_745170-MLA44913793139_022021-O.jpg",
		},
		{
			id: 4,
			category: 'monitores',
			name: "Monitor curvo DreamsTime Ultra Gamer ffff 5''",
      stock: 1,
      price: 150000,
			specs: "Resolución infinita, con relación de aspecto indefinida, monitor curvo, panel IPS TNT CRONICA, posee conexión HDMI only",
			img: "https://thumbs.dreamstime.com/b/monitor-de-ordenador-antiguo-con-fondo-blanco-aislado-en-183989673.jpg",
		},
	
    {
			id: 5,
			category: 'placa-video',
			name: "Placa de Video Gforce GTX 1660 Super 6gb",
      stock: 34,
      price: 155000,
			specs: "Conector de 8 pines, tipo de memoria GDDR6, Consumo 450W, puertos DP+HDMI+DVI",
			img: "https://http2.mlstatic.com/D_862372-MLA46182444915_052021-O.jpg",
		},
    {
			id: 6,
			category: 'placa-video',
			name: "Placa de Video Gforce RTX 3090 24gb",
      stock: 9,
      price: 700000,
			specs: "Interfaz PCI-Express 4.0, resolución máxima 7680px-4320px, Consumo 750W, Ray tracing, permite conexción de 4 pantallas simultáneas",
			img: "https://m.media-amazon.com/images/I/91XyrUFYKfL._AC_SS450_.jpg",
		},
    {
			id: 7,
			category: 'placa-video',
			name: "Placa de Video Radeon RX 6900 XT 16gb",
      stock: 3,
      price: 400000,
			specs: "Interfaz PCI-Express 4.0, resolución máxima 7680px-4320px, Consumo 750W, Ray tracing, permite conexción de 4 pantallas simultáneas",
			img: "https://celularesbuenosaires.com.ar/aplicacion_agro_filedata/siga_webturismo/ecommerce_pictures/1830/degoogle.jpg",
		},
    {
			id: 8,
			category: 'placa-video',
			name: "Placa de Video Radeon RX 580 8gb",
      stock: 69,
      price: 130000,
			specs: "Interfaz PCI-Express 3.0, resolución máxima 7680px-4320px, tipo de memoria GDDR5, Consumo 400w, puertos DP+HDMI+DVI",
			img: "https://http2.mlstatic.com/D_862372-MLA46182444915_052021-O.jpg",
		},
  
    {
			id: 9,
			category: 'procesadores',
			name: "Procesador Intel Core i9 10900K",
      stock: 45,
      price: 80000,
			specs: "10 núcleos y 20 hilos, Memoria caché de 20MB, gráfica integrada UHD Graphics 630, soporta memoria RAM DDR4, potencia 125W, cuenta con Hyper-Threading",
			img: "https://www.venex.com.ar/products_images/1626718553_i9decima.png",
		},
    {
			id: 10,
			category: 'procesadores',
			name: "Procesador Intel Core i7 10700K",
      stock: 87,
      price: 50000,
			specs: "8 núcleos y 16 hilos, Memoria caché de 16MB, gráfica integrada UHD Graphics 630, soporta memoria RAM DDR4, potencia 125W, cuenta con Hyper-Threading",
			img: "https://lellinsumos.com.ar/wp-content/uploads/2021/11/BX8070110700K_2.jpg",
		},
    {
			id: 11,
			category: 'procesadores',
			name: "Procesador AMD Ryzen 9 5900X",
      stock: 69,
      price: 130000,
			specs: "12 núcleos y 24 hilos, caché L2 6MB - caché L3 64MB, sin gráfica integrada, soporta memoria RAM DDR4, potencia 105W",
			img: "https://www.comeros.com.ar/wp-content/uploads/2020/11/COMEROS-AMD-100-100000061WOF-1.jpg",
		},
    {
			id: 12,
			category: 'procesadores',
			name: "Procesador AMD Ryzen 7 5700G",
      stock: 64,
      price: 50000,
			specs: "8 núcleos y 16 hilos, Memoria caché 16MB, Gráfica integrada Radeon Graphics, soporta memoria RAM DDR4, portencia 65W",
			img: "https://mundofix.com/184692-home_default/amd-ryzen-7-5700g-am4.jpg",
		},
  ]
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    

    default:
      return state
  }
}