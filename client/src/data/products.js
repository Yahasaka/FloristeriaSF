export const products = [
    { id: 1, name: 'Rosas Rojas', category: 'flores', subcategory: 'rosas', flower: null, price: 3500, description: 'Rosas rojas de buena calidad', available: true, image: null },
    { id: 2, name: 'Rosas Colores', category: 'flores', subcategory: 'rosas de colores', flower: null, price: 3500, description: 'Rosas de colores de buena calidad', available: true, image: null },
    { id: 3, name: 'Girasoles', category: 'flores', subcategory: 'girasoles', flower: null, price: 3500, description: 'Girasoles de buena calidad', available: true, image: null },
    { id: 4, name: 'Rosas y Girasoles', category: 'flores', subcategory: 'rosas y girasoles', flower: null, price: 3500, description: 'Rosas y girasoles de buena calidad', available: true, image: null },
    { id: 5, name: 'Tulipanes', category: 'flores', subcategory: 'tulipanes', flower: null, price: 3500, description: 'Tulipanes de buena calidad', available: true, image: null },
    { id: 6, name: 'Claveles', category: 'flores', subcategory: 'claveles', flower: null, price: 3500, description: 'Claveles rojas de buena calidad', available: true, image: null },
    { id: 7, name: 'Lirios', category: 'flores', subcategory: 'lirios', flower: null, price: 3500, description: 'Lirios rojas de buena calidad', available: true, image: null },
    { id: 8, name: 'Mixto', category: 'flores', subcategory: 'mixto', flower: null, price: 3500, description: 'Mixto de flores', available: true, image: null },

    { id: 9, name: 'Oso de Peluche', category: 'detalles', subcategory: 'peluches', flower: null, price: 3500, description: 'Suave e ideal para regalar', available: true, image: null },
    { id: 10, name: 'Flores Artificiales', category: 'detalles', subcategory: 'flores artificiales', flower: null, price: 3500, description: 'Flores artificales perfectas como decoracion', available: true, image: null },
    { id: 11, name: 'Globos', category: 'detalles', subcategory: 'globos', flower: null, price: 3500, description: 'Globos para acompanar en decoraciones', available: true, image: null },
    { id: 12, name: 'Tarjetas', category: 'detalles', subcategory: 'tarjetas', flower: null, price: 3500, description: 'Tarjetas para distintas ocasoines', available: true, image: null },
    { id: 13, name: 'Chocolates', category: 'detalles', subcategory: 'chocolates', flower: null, price: 3500, description: 'Chocolates perfectos para regalar', available: true, image: null },

    { id: 14, name: 'Base de Madera', category: 'arreglos', subcategory: 'base de madera', flower: 'rosas', price: 3500, description: 'Flores arregladas en una base de madera', available: true, image: null },
    { id: 15, name: 'Base de Plastico', category: 'arreglos', subcategory: 'base de plastico', flower: 'girasoles', price: 3500, description: 'Flores arregladas en una base de plastico', available: true, image: null },
    { id: 16, name: 'Canasta', category: 'arreglos', subcategory: 'canastas', flower: 'mixto', price: 3500, description: 'Flores arregladas en una canasta', available: true, image: null },
    { id: 17, name: 'Jarron', category: 'arreglos', subcategory: 'jarrones', flower: 'lirios', price: 3500, description: 'Flores arregladas en un jarron', available: true, image: null },
    { id: 18, name: 'Centro de Mesa', category: 'arreglos', subcategory: 'centros de mesa', flower: 'rosas y girasoles', price: 3500, description: 'Flores arregladas para un centro de mesa', available: true, image: null },

    { id: 19, name: 'Flor Arreglada', category: 'ramos', subcategory: 'flor arreglada', flower: 'rosas', price: 3500, description: 'Una flor arreglada en papel', available: true, image: null },
    { id: 20, name: 'Media Docena Arreglada', category: 'ramos', subcategory: 'media docena arreglada', flower: 'girasoles', price: 3500, description: 'Media docena de flores arregladas en papel', available: true, image: null },
    { id: 21, name: 'Docena Arreglada', category: 'ramos', subcategory: 'docena arreglada', flower: 'tulipanes', price: 3500, description: 'Docena de flores arregladas en papel', available: true, image: null },
    { id: 22, name: 'Ramo Primaveral', category: 'ramos', subcategory: 'primaveral', flower: 'mixto', price: 3500, description: 'Distintas flores arregladas en papel', available: true, image: null },

    { id: 23, name: 'Graduacion', category: 'ocasiones', subcategory: 'graduaciones', flower: null, price: 3500, description: 'Detalles para graduaciones', available: true, image: null },
    { id: 24, name: 'Tributos', category: 'ocasiones', subcategory: 'tributos', flower: null, price: 3500, description: 'Detalles para tributos', available: true, image: null },
    { id: 25, name: 'Dia de la Madre', category: 'ocasiones', subcategory: 'dia de la madre', flower: null, price: 3500, description: 'Detalles para el dia de la madre', available: true, image: null },
    { id: 26, name: 'Dia de los Enamorados', category: 'ocasiones', subcategory: 'dia de los enamorados', flower: null, price: 3500, description: 'Detalles para el dia de los enamorados', available: true, image: null },

]

export const categories = [
    {
        id: 'flores',
        label: 'Flores',
        subcategories: [
            {id: 'rosas', label: 'Rosas'},
            {id: 'rosas de colores', label:'Rosas de Colores'},
            {id: 'girasoles', label: 'Girasoles'},
            {id: 'rosas y girasoles', label: 'Rosas y Girasoles'},
            {id: 'tulipanes', label: 'Tulipanes'},
            {id: 'claveles', label: 'Claveles'},
            {id: 'lirios', label: 'Lirios'},
            {id :'mixto', label: 'Mixto'},
        ]
    },
    {
        id: 'detalles',
        label: 'Detalles',
        subcategories: [
            {id: 'peluches', label: 'Peluches'},
            {id: 'flores artificiales', label: 'Flores Artificiacles'},
            {id: 'globos', label: 'Globos'},
            {id: 'tarjetas', label: 'Tarjetas'},
            {id: 'chocolates', label: 'Chocolates'},
        ]
    },
    {
        id: 'arreglos',
        label: 'Arreglos',
        subcategories: [
            {id: 'base de madera', label: 'Base de Madera'},
            {id: 'base de plastico', label: 'Base de Plastico'},
            {id: 'canastas', label: 'Canastas'},
            {id: 'jarrones', label: 'Jarrones'},
            {id: 'centros de mesa', label: 'Centros de Mesa'},
        ]
    },
    {
        id: 'ramos',
        label: 'Ramos',
        subcategories: [
            {id: 'flor arreglada', label: 'Flor Arreglada'},
            {id: 'media docena arreglada', label: 'Media Docena Arreglada'},
            {id: 'docena arreglada', label: 'Docena Arreglada'},
            {id: 'primaveral', label: 'Primaveral'},
        ]
    },
    {
        id: 'ocasiones',
        label: 'Ocasiones',
        subcategories: [
            {id: 'graduaciones', label: 'Graduaciones'},
            {id: 'tributos', label: 'Tributos'},
            {id: 'dia de la madre', label: 'Dia de la Madre'},
            {id: 'dia de los enamorados', label: 'Dia de los Enamorados'},
        ]
    },
]