(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  $("span.help-block").hide();


    
  

function validacion(campo){
    var a=0;
    if (campo==='nombre'){
        nombre = document.getElementById(campo).value;
        if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
            
           
            $('#'+campo).parent().children('span').text("Ingrese su Nombre").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
         
            return false;
            
        }
        else{
            
            
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
         
    
            return true;
            
        } 
    }
    if (campo==='apellido'){
        apellido = document.getElementById(campo).value;
        if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
            
            
            $('#'+campo).parent().children('span').text("Ingrese su Apellido").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
            return false;
            
        }
        else{
            
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
            
            return true;
            
        } 
    }


    if (campo==='rut'){
        rut = document.getElementById(campo).value;
        if( rut == null || rut.length == 0 || /^\s+$/.test(rut) ) 
        {
            
            $('#'+campo).parent().children('span').text("Ingrese su Rut").show();
            
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');

            return false;
            
            
        }
        
        if (!(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut))) {
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
            $('#'+campo).parent().children('span').text("Ingrese un Rut valido ej:12345678-k").show();
            return false;
        }
            
            
        var suma=0;
       
        var arrRut = rut.split("-");
        
        var rutSolo = arrRut[0];
        var verif = arrRut[1];
        var continuar = true;
        for(i=2;continuar;i++)
            {
            suma += (rutSolo%10)*i;
            rutSolo = parseInt((rutSolo /10));
            i=(i==7)?1:i;
            continuar = (rutSolo == 0)?false:true;
            }
        resto = suma%11;
        dv = 11-resto;
        if(dv==10)
            {
            if(verif.toUpperCase() == 'K'){
            
              
                $('#'+campo).parent().children('span').hide();
                $('#'+campo).removeClass('is-invalid');
            
                $('#'+campo).addClass('is-valid');
                
                return true;
                }
            }
        else if (dv == 11 && verif == 0){
            
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
            
            return true;
        }
        else if (dv == verif){
            
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
            
            return true;
        }
        else
            {
            
            $('#'+campo).parent().children('span').text("Digito verificador es Incorrecto").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
            return false;}
    
    


    }



    if (campo==='correo'){
        correo = document.getElementById(campo).value;
        if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
            
            $('#'+campo).parent().children('span').text("Ingrese su Correo").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
            return false;
            
        }
        else{
            if (!(/\w+@\w+\.+[a-z]/.test(correo))) {
                
                $('#'+campo).parent().children('span').text("Ingrese un Correo valido").show();
                $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
                
                return false;
            }
            else{
               
                $('#'+campo).parent().children('span').hide();
                $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
                
            
                return true;
            }
        } 
    }
    if (campo==='region'){
        indice = document.getElementById(campo).selectedIndex;
        if( indice == null || indice == 0 ) {
            $('#'+campo).parent().children('span').text("Seleccione su Región").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            return false;
        }
        else{
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
           
            return true;

        }
    }
    if (campo==='dir'){
        dir = document.getElementById(campo).value;
        if( dir == null || dir.length == 0 || /^\s+$/.test(dir) ) {
            
           
            $('#'+campo).parent().children('span').text("Ingrese su Direccion").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
            return false;
            
        }
        else{
         
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
        
            return true;
            
        } 
    }
    if (campo==='comuna'){
        indice = document.getElementById(campo).selectedIndex;
        if( indice == null || indice == 0 ) {
     
            $('#'+campo).parent().children('span').text("Seleccione su Comuna").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            return false;
        }
        else{
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
            return true;

        }
    }

    if (campo==='fecha'){
        fecha = document.getElementById(campo).value;
        

        if( fecha == null || fecha.length == 0 || /^\s+$/.test(dir) ) {
            
            
          
            $('#'+campo).parent().children('span').text("Ingrese fecha de nacimiento").show();
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
            
            return false;
            
        }

        /*
        else{
            $('#'+campo).parent().children('span').text("Debe ser mayor de 18 años").show();

            
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
        
            return false;
     
        } 

        */
        var hoy = new Date();

            var cumpleanos = new Date(fecha);
            var edad = hoy.getFullYear() - cumpleanos.getFullYear();
            var m =hoy.getMonth()- cumpleanos.getMonth();
        
            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }
        
            
        
        if(edad<18){
            $('#'+campo).parent().children('span').text("Debe ser mayor de 18 años").show();

            
            $('#'+campo).removeClass('b-negro');
            $('#'+campo).addClass('is-invalid');
        
            return false;

        }
        else {
            $('#'+campo).parent().children('span').hide();
            $('#'+campo).removeClass('is-invalid');
            $('#'+campo).addClass('is-valid');
        
            return true;

        }
    }
    

}


function verificar(){
    var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0;v7=0,v8=0,v9=0;

    v1=validacion('nombre');
    v2=validacion('apellido');
    v3=validacion('correo');
    v4=validacion('region');
    v5=validacion('dir');
    v6=validacion('fecha');
    v7=validacion('rut');
    v8=validacion('comuna');
    v9=validacion('nombres');

    if (v1===false || v2===false || v3===false || v4===false || v5===false || v6===false || v7===false  || v8===false || v9===false  ) {
        $("#exito").hide();
        $("#error").show();
    }else{
        $("#error").hide();
        $("#exito").show();
    }


} 


    