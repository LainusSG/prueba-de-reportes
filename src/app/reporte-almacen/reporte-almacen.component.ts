import { Component } from '@angular/core';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

const recepcion_DATA = [
    { prioridad:'Alta', caducidad:'22/10/23', recepcion:'17/05/2023', qr:'12345671', proveedor:'Quirófano', nombre:'Set de Laparotomia', ubicacion: 'Estante A-2'},
    { prioridad:'Baja', caducidad:'22/10/23', recepcion:'17/05/2023', qr:'12345672', proveedor:'Quirófano', nombre:'Set de Laparotomia', ubicacion: 'Estante A-2'},
    { prioridad:'Media', caducidad:'22/10/23', recepcion:'17/05/2023', qr:'12345673', proveedor:'Quirófano', nombre:'Set de Laparotomia', ubicacion: 'Estante A-2'},
    { prioridad:'Media', caducidad:'22/10/23', recepcion:'17/05/2023', qr:'12345673', proveedor:'Quirófano', nombre:'Set de Laparotomia', ubicacion: 'Estante A-2'},
  ];



const date = new Date();
const año = date.getFullYear();
const mes = date.toLocaleString('default', { month: 'short' });
const mes2 = date.toLocaleString('default', { month: 'long' });
const dia = date.getDate(); 
const hora = date.getHours()
const minutos = date.getMinutes()


const prioridad1 = recepcion_DATA[0].prioridad; const prioridad2 = recepcion_DATA[1].prioridad;
const caducidad1 = recepcion_DATA[0].caducidad; const caducidad2 = recepcion_DATA[1].caducidad;
const recepcion1 = recepcion_DATA[0].recepcion;  const recepcion2 = recepcion_DATA[1].recepcion;
const qr1 = recepcion_DATA[0].qr;  const qr2 = recepcion_DATA[1].qr;
const proveedor1 = recepcion_DATA[0].proveedor;  const proveedor2 = recepcion_DATA[1].proveedor;
const nombre1 = recepcion_DATA[0].nombre;  const nombre2 = recepcion_DATA[1].nombre;
const ubicacion1 = recepcion_DATA[0].ubicacion;  const ubicacion2 = recepcion_DATA[1].ubicacion;



const valor1 = recepcion_DATA.toString()
@Component({
  selector: 'app-reporte-almacen',
  templateUrl: './reporte-almacen.component.html',
  styleUrl: './reporte-almacen.component.css'
})
export class ReporteAlmacenComponent {
  nombre='María Dolores Rodríguez Ramírez';
  displayedColumns: string[] = ['prioridad','caducidad', 'recepcion', 'qr',  'proveedor', 'nombre', 'ubicacion'];
  dataSource = recepcion_DATA;



  async createPdf() {
//--------------------------------- comenzar a borrar ------------------------------------------


const url = '../assets/PLANTILLA REPORTE_Almacén General.pdf'

  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()
  firstPage.drawText(this.nombre, {
    x: 336,
    y: height / 2 + 327,
    size: 11,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  firstPage.drawText(dia +' de '+ mes2 +' del '+ año +', '+ hora + ':' + minutos + 'hrs', {// fecha de impresion
    x: 395,
    y: height / 2 + 224,
    size: 11,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })


  firstPage.drawText('area', {
    x:47,
    y: height / 2 + 175,
    size: 11,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  firstPage.drawText('turno', {
    x:124,
    y: height / 2 + 175,
    size: 11,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  firstPage.drawText('fecha', {
    x:266,
    y: height / 2 + 175,
    size: 11,
    font: helveticaFont,
    color: rgb(0, 0, 0),
  })

  






  const pdfBytes = await pdfDoc.save()


    //--------------------------- Dejar de Borrar------------------------------------------
    this.saveByteArray('Reporte de ALMACEN - '+ dia+'/'+mes+'/'+año+' ('+ hora+ " horas" +' con '+ minutos+' minutos'+').pdf', pdfBytes); //-------- esta linea de codigo convierte la funcion de arriba en el formato reconocido por angulars
    
  }


  saveByteArray(reportName: string, byte: BlobPart) {
    var blob = new Blob([byte], {type: "application/pdf"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };






}
