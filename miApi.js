/*fetch('datos1.txt')//donde esta la informacion
.then(function(response) {
        return response.text();
    }) //que clase de informacion estoy pidiendo
    .then(function(data) {
        console.log(data);
    }) //extrae los datos de busquedad o de consumo
    .catch(function(error) {
        console.log(`Hemos tenido un error: ${error}`);
    }) //para errores*/
/*
fetch('datos.txt')
    .then((Response) => {
        return response.text()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(`Hemos tenido un error: ${error}`)
    });*/
/*
let url = 'datos.txt'
fetch(url)
    .then(response => response.text())
    .then(data => {
        let inf = document.getElementById('datos');
        inf.innerHTML = data;
    })
    .catch(error => console.log(`Hemos tenido un error: ${error}`))*/

let url = 'datos.json'
fetch(url)
    .then(res => res.json())
    .then(data => {
        let imp = document.getElementById('datos');
        //imp.innerHTML = `${data[1].nombre}<br> ${ data[1].telefono}`
        let mensaje = "";
        for (let index = 0; index < data.length; index++) {
            //mensaje = mensaje + data[index].nombre + ' ' + data[index].apellido + '<br>'
            mensaje += data[index].nombre + ' ' + data[index].apellido + '<br>'
        }
        imp.innerHTML = mensaje;
    })
    .catch(error => console.log(`Hemos tenido un error: ${error}`))