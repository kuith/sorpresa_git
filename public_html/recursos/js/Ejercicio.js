/*global DEBUG, window, $, CHA*/
(function () {
    'use strict';
    var 
        Ejercicio = function(p_cfg){
            var
                cfg = p_cfg,
                px = cfg.unidades_graficas,
                //esto no se deberia hacer asi...creo
                $contenedor_pregunta = $("#contenedor"),
                init_hojaEstilo = function(){
                    var
                        b_margin = cfg.body_margin,
                        b_height = cfg.body_height + px,
                        b_color = cfg.body_color,
                        b_tam_fuente = cfg.tam_fuente,
                        css = "<Style type = 'text/css'> html {font-size: " + b_tam_fuente + "} body {margin: " + b_margin + "; height: " + b_height + "; background: " + b_color + "} </Style>";
                    $(css).appendTo("title");
                },
                render = function(p_contenedor){
                  var
                    $div_contenedor_pregunta  = $("<div></div>"),
                    $div_contenedor_respuestas = $("<div></div>"),
                    $div_contenedor_reset = $("<div></div>"),
                    $div_pregunta = $("<div></div>"),
                    $pregunta = $("<h1></h1>");

                    $div_contenedor_pregunta
                        .attr("id", "div_contenedor_pregunta")
                        .css({
                            height: (cfg.div_contenedor_pregunta.alto + px),
                            position: cfg.div_contenedor_pregunta.position
                        })
                        .appendTo(p_contenedor);
                
                    $div_contenedor_respuestas
                        .attr("id", "div_contenedor_respuestas")
                        .css({
                            height: cfg.div_contenedor_respuestas.height,
                            textAlign :cfg.div_contenedor_respuestas.alin_texto
                        })
                        .appendTo(p_contenedor);
                
                    $div_contenedor_reset
                        .attr("id", "div_contenedor_reset")
                        .css({
                            height : cfg.div_contenedor_reset.height,
                            position : cfg.div_contenedor_reset.position
                        })
                        .appendTo(p_contenedor);
                    
                    $div_pregunta
                        .attr("id", "div_pregunta")
                        .css({
                            width : cfg.div_pregunta.ancho,
                            height : cfg.div_pregunta.alto,
                            margin : cfg.div_pregunta.margin,
                            position : cfg.div_pregunta.position,
                            top : cfg.div_pregunta.top,
                            left : cfg.div_pregunta.left,
                            marginRight : cfg.div_pregunta.margen_derecho,
                            transform : cfg.div_pregunta.transform
                        }) 
                        .appendTo($div_contenedor_pregunta);
                    
                    $pregunta
                        .attr("id", "pregunta")
                        .css({
                            margin : cfg.pregunta.margin,
                            textAlign : cfg.pregunta.alineacion_texto,
                            top : cfg.pregunta.top,
                            height : cfg.pregunta.tam_fuente,
                            fontSize : cfg.pregunta.tam_fuente,
                            textShadow : cfg.pregunta.sombra_texto,
                            color : cfg.pregunta.color
                        })
                        .appendTo($div_pregunta);
                },
                        
                init = function(){
                    init_hojaEstilo();
                    render($contenedor_pregunta);
                };
                
            init();

        };

    window.Ejercicio = Ejercicio;
}());
