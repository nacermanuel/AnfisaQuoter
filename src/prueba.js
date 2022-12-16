const estado = {
    productos:
        [
            {id:1, nombre: 'Shampoo KeraCare 500ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:2, nombre: 'Crema ArganCare 300ml', precio: 5.63,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:3, nombre: 'Acondicionador KeraCare 500ml', precio: 6.78, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:4, nombre: 'Mascarilla Semi de Lino 500ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:5, nombre: 'Mascarilla KeraCare 500ml', precio: 15.32,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:6, nombre: 'Shampoo Anticaída Bioexil 400ml', precio: 4.21, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:7, nombre: 'Acondicionador Anticaída Bioexil 400ml', precio: 5.63,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:8, nombre: 'Loción Anticaída Bioexil 120ml', precio: 6.78, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:9, nombre: 'Shampoo Caviar 400ml', precio: 10.43, img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
            {id:10, nombre: 'Acondicionador Caviar 400ml', precio: 15.32,  img:'ph7.png', descripcion: 'Este es una leyenda descriptiva sobre lo magnifico que es este increible producto', bullets: ['esta es un increible reparador fuerte', 'Sus efectos son notados de manera inmediata', 'es un productos organica de la selva amazonica']},
        ],
}

const id = 32

if (estado.productos.find((e) => e.id === id)){
    console.log('si esta')
} else{
    console.log('no esta')
}