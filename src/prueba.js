// const estado = {
//     productos:
//         [
//             {id:1, nombre: 'Shampoo KeraCare 500ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
//             {id:2, nombre: 'Crema ArganCare 300ml', precio: 5.63,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
//             {id:3, nombre: 'Acondicionador KeraCare 500ml', precio: 6.78, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
//             {id:4, nombre: 'Mascarilla Semi de Lino 500ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
//             {id:5, nombre: 'Mascarilla KeraCare 500ml', precio: 15.32,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
//         ],
// }

const estado = {
    arregloUNO: [
        {id: 1, nombre: 'arregloUNO-1', cantidad: 1},
        {id: 2, nombre: 'arregloUNO-2', cantidad: 1},
        {id: 3, nombre: 'arregloUNO-3', cantidad: 1}
    ],
    arregloDOS: [
        {id: 1, nombre: 'arregloDOS-1', cantidad: 1},
        {id: 2, nombre: 'arregloDOS-2', cantidad: 1},
        {id: 3, nombre: 'arregloDOS-3', cantidad: 1}
    ]
}

//console.log( {...estado, arregloDOS: [...estado.arregloDOS, ]} )
const id = 3

// TIENES UN ARREGLO DE OBJETOS, COMO EDITAS SOLO 1 OBJETO DE LOS QUE ESTA DENTRO DEL ARREGLO
// SI LO UNICO QUE TIENES ES UNA DE LAS PROPIEDADES DEL OBJETO

// 

console.log(
    {...estado,
        arregloDOS: [
            ...estado.arregloDOS.filter((e)=> e.id !==id),
            {...estado.arregloDOS.find((e)=> e.id ===id), cantidad: 3}
        ]

    }  
)

