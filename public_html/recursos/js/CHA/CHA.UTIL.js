(function () {
    'use strict';
    if (!window.CHA) { window.CHA = {}; }
    
    var CHA = window.CHA,
    
        xml2Jquery = function(fileName){
            var $file,
                xmlParsed = $.parseXML(fileName);
            $file = $(xmlParsed);

            return $file;
        },
        estaDefinido = function (valor) {
            return !(valor === undefined);
        },
        loadJsonOrXml = function (filename, onLoadedCallback, onErrorCallback) {
 //           DEBUG && CHA.console(debugUid + "loadJsonOrXml " + filename);

            var file_json = filename + ".json.js",
                file_xml = filename + ".xml",
                dataname = (function () {
                    var chunks = filename.split("/"),
                        last_chunk = chunks.pop();

 //                   DEBUG && CHA.console(debugUid + "loadJsonOrXml dataname: " + last_chunk);
                    return last_chunk;
                }()),
                loadXml = function (file_xml) {
 //                   DEBUG && CHA.console(debugUid + "loadJsonOrXml.loadXml " + file_xml);
                    $.get(file_xml)
                        .done(function (xml) {
 //                           DEBUG && CHA.console(debugUid + "loadJsonOrXml.loadXml " + file_xml + " OK");
                            var data = $.xml2json(xml);
                            window[dataname] = data;
                            if (onLoadedCallback) {
                                onLoadedCallback(data);
                            }
                        })
                        .fail(function () {
//                            DEBUG && CHA.console(debugUid + "loadJsonOrXml.loadXml " + file_xml + " ERROR");
                            if (onErrorCallback) {
                                onErrorCallback(file_xml);
                            }
                        });
                };

            loadScript(file_json, function () {
 //               DEBUG && CHA.console(debugUid + "loadJsonOrXml " + file_json + " OK");
                if (onLoadedCallback) {
                    onLoadedCallback(window[dataname]);
                }
            }, function () {
//                DEBUG && CHA.console(debugUid + "loadJsonOrXml " + file_json + " ERROR");
                loadXml(file_xml);
            })
        ;
//        xmlToJson = function(xml_filename){
//            dataname = (function () {
//                    var chunks = filename.split("/"),
//                        last_chunk = chunks.pop();
//
//                    DEBUG && CHA.console(debugUid + "loadJsonOrXml dataname: " + last_chunk);
//                    return last_chunk;
//                }())
//            
//            
//            $.get(xml_filename, function(xml){
//                var result = $.xml2json(xml);
//                return result;
//            });
        };
//
//  CHA.xml2Jquery = xml2Jquery;
    CHA.IO = {
        //loadScript: loadScript,
        loadJsonOrXml: loadJsonOrXml,
        estaDefinido:  estaDefinido,
        xml2Jquery: xml2Jquery
    };
  
}());
