(function () {

	var Config_ejercicio = {

	    body_margin: 0,
	    body_height: 900,
	    body_color: "black",
	    tam_fuente: 16,
	    altoEjercicio : 900,
	    colorfondo : "black",
	    unidades_graficas : "px",
	    height_div_contenedor_respuestas : 500,
	    height_div_contenedor_reset : 100,
	    width_div_reset : 100,
	    height_div_reset : 50,
            
            div_contenedor_pregunta : {
                alto : 300,
                position : "relative"
            },
            
            div_pregunta : {
                
            },

	    reset : {
	        texto : "Reset",
	        x : 705,
	        y : 750
	    },
	    
	    boton : [
	        {
	            texto : "Perdiste.",
	            correcto : false,
	            fichero : "interrogacion.png",
	            x : 45,
	            y : 400,
	            ancho : 300,
	            alto : 300
	        },
	        {
	            texto : "Perdiste.",
	            correcto : false,
	            fichero : "interrogacion.png",
	            x : 395,
	            y : 400,
	            ancho : 300,
	            alto : 300
	        },
	        {
	            texto : "Perdiste.",
	            correcto : false,
	            fichero : "interrogacion.png",
	            x : 745,
	            y : 400,
	            ancho : 300,
	            alto : 300
	        },
	        {
	            texto : "Acertaste.",
	            correcto : true,
	            fichero : "interrogacion.png",
	            x : 1095,
	            y : 400,
	            ancho : 300,
	            alto : 300,
	        }
	    ]
	}; 
	    window.Config_ejercicio = Config_ejercicio;   
}());           
