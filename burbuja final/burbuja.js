function burbuja(arreglo,n)
{
    var i,k,aux;

    for(i=0;i<n;i++)
    {
        for(k=0;k<=n;k++)
        {
            if(arreglo[k]>arreglo[k+1])
            {

                aux=arreglo[k];
                arreglo[k]=arreglo[k+1];
                arreglo[k+1]=aux;

            }
        }   
    }

}

function ingresarDatos(arreglo,t)
{
    for(i=0;i<t;i++)
    {
        
        var datos=parseInt(prompt("Ingresa los elementos"));

        arreglo[i]=datos;
    }


}

function principal()
{
    var arreglo123=[];
    
    var t=document.getElementById('tamanio').value;

    //var t=parseInt(document.getElementById('tamanio').value);

    ingresarDatos(arreglo123,t);

    burbuja(arreglo123,t);

    //impresion en consola
    console.log(arreglo123);

    //impresion en form
    document.getElementById('resultado').value = arreglo123;
}
