(function () {

	var Config_ejercicio = {

	    body_margin: 0,
	    body_height: 900,
	    body_color: "black",
	    tam_fuente: 16,
	    altoEjercicio : 900,
	    colorfondo : "black",
	    unidades_graficas : "px",
	    height_div_contenedor_reset : 100,
	    width_div_reset : 100,
	    height_div_reset : 50,
            
            div_contenedor_pregunta : {
                alto : 300,
                position : "relative"
            },
            
            div_contenedor_respuestas : {
                height : 500,
                alin_texto : "center"
            },
            div_contenedor_reset : {
                height: 100,
                position: "relative"
            },
            
            div_pregunta : {
                ancho : 1240,
                alto : 150,
                margin: 0,
                position : "absolute",
                top : 50,
                left : 50,
                margen_derecho : -50,
                transform : "translate(-50%, -50%)"
            },
            
            pregunta : {
                margin : 0,
                alineacion_texto : "center",
                top : 50,
                alto : 50,
                tam_fuente : 4,
                sombra_texto : "3px 3px 3px white",
                color : "#3399FF"
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
