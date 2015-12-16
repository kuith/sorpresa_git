(function () {

	var Config_ejercicio = {

	    tam_fuente: 16,
	    altoEjercicio : 900,
	    colorfondo : "black",
	    unidades_graficas : "px",
            unidades_fuentes: "em",
            rutaImagenes : "../imagenes/",
            
            pregunta : {
                posicion: "absolute",
                alineacionTexto: "center",
                x : 50,
                y : 100,
                alto : 150,
                ancho: 1240,
                tam_fuente : 4,
                sombra_texto : "3px 3px 3px white",
                color : "#3399FF",
                background : "#ff33ff"
            },
            
            class_respuesta : {
                position : "absolute",
                ancho : 300,
                alto : 300,
                x : 300,
                display : "inline-block",
                alin_texto : "center",
                imagen : "interrogacion.png"
            },

	    reset : {
                position : "absolute",
                alto : 50,
                ancho : 100,
	        texto : "Reset",
	        x : 700,
	        y : 700,
                tam_fuente : 2,
                color : "#3399FF"
	    },
	    
	    respuestas : [
	        {
	            texto : "Perdiste.",
	            correcto : false,
	            x : 45,
	            y : 400
	        },
	        {
	            texto : "Perdiste.",
	            correcto : false,
	            x : 395,
	            y : 400
	        },
	        {
	            texto : "Perdiste.",
	            correcto : false,
	            x : 745,
	            y : 400
	        },
	        {
	            texto : "Acertaste.",
	            correcto : true,
	            x : 1095,
	            y : 400
	        }
	    ]
	}; 
    window.Config_ejercicio = Config_ejercicio;   
}());           
