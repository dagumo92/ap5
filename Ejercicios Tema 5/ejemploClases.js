class factura {
    constructor(fecha, hora, concepto, importe, divisa, pagado) {
        this.fecha = fecha;
        this.hora = hora;
        this.concepto = concepto;
        this.importe = importe;
        this.divisa = divisa;
        this.pagado = pagado;
      }
      imprimirFactura(){
        console.log("Factura: " + this.concepto + ", Importe: " + this.importe);
      }
}

class cliente {
    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.facturas = [];
        this.totalPendiente = 0;
    }

    agregarElemento(facturaRecibida) {        
        this.facturas.push(facturaRecibida);
        return this.calcularTotalPendiente();
    }
    elementoPagado(descripcion) {
        for(let i = 0; i< this.facturas.length; i++) {
            if(descripcion == this.facturas[i].concepto)    {
                this.facturas[i].pagado = true;
                break;
            }    
        }
        return this.calcularTotalPendiente();
    }

    calcularTotal(){
        var total = 0;
        for(let i = 0; i< this.facturas.length; i++) {
            total = total + this.facturas[i].importe;
        }  
        return total;
    }

    calcularTotalPendiente(){
        var totalPendiente = 0;
        for(let i = 0; i< this.facturas.length; i++) {
            if(!this.facturas[i].pagado){ 
                totalPendiente = totalPendiente + this.facturas[i].importe;
            }
        }    
        this.totalPendiente = totalPendiente;
        return totalPendiente;
    }   
}

  function calcularTotalesOrdenadosClientes(clientes){
    pendiente = 0;
    clientes.sort((b, a) => a.totalPendiente - b.totalPendiente);

    for(let i = 0; i< clientes.length; i++) {
        console.log("Nombre: " + clientes[i].nombre + " " 
            + clientes[i].apellidos +", Importe Pendiente: " + clientes[i].totalPendiente);
    }
}

//Inicia el PROGRAMA

//Creamos clientes
  var clientes = [];
  var vicente = new cliente ("Vicente", "Guanter Morelló");
  var david = new cliente ("David", "Guanter Morelló");
  var amparo = new cliente ("Amparo", "Morelló Pelechá");

  clientes.push(vicente);
  clientes.push(david);
  clientes.push(amparo);
  
//Creamos facturas
  var facturaCallOfDuty = new factura(
    '2023-12-29',
    '15:30',
    'Compra en Game',
     80,
    'EUR',
    false
  );
  var facturaSonic = new factura(
    '2023-12-28',
    '15:30',
    'Compra en Game',
     30,
    'EUR',
    false
  );
  var facturaStreetFighter = new factura(
    '2023-12-28',
    '15:30',
    'Compra en Game',
     50,
    'EUR',
    false
  );
  var facturaCafetera= new factura(
    '2023-12-28',
    '15:30',
    'Compra en CorteIngles',
     300,
    'EUR',
    false
  );
  var facturaPiano= new factura(
    '2023-12-28',
    '15:30',
    'Piano',
     4000,
    'EUR',
    false
  );

  //Añadimos cada factura a su cliente
  david.agregarElemento(facturaCallOfDuty);
  vicente.agregarElemento(facturaSonic);
  david.agregarElemento(facturaPiano);
  vicente.agregarElemento(facturaStreetFighter);  
  amparo.agregarElemento(facturaCafetera);
  
  //Marcamos la factura que tiene de concepto piano como pagada.
  david.elementoPagado("Piano");

  //Llamamos a una función que ordena los clientes por pendiente de pago y los imprime
  calcularTotalesOrdenadosClientes(clientes)
