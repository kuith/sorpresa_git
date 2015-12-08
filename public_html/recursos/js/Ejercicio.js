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
                render_pregunta = function(p_contenedor){
                  var
                    $div_contenedor_pregunta  = $("<div></div>"),
                    $div_pregunta = $("<div></div>"),
                    $pregunta = $("<h1></h1>");

                    $div_contenedor_pregunta
                        .attr("id", "div_contenedor_pregunta")
                        .css({
                                height: (cfg.div_contenedor_pregunta.alto + px),
                                position: cfg.div_contenedor_pregunta.position
                        })
                        .appendTo(p_contenedor);
                    
                    $div_pregunta
                        .attr("id", "div_pregunta")
                        .appendTo($div_contenedor_pregunta);
                    
                    $pregunta
                        .attr("id", "pregunta")
                        .appendTo($div_pregunta);
                },
                        
                init = function(){
                    init_hojaEstilo();
                    render_pregunta($contenedor_pregunta);
                };
                
            init();

        };

    window.Ejercicio = Ejercicio;
}());
