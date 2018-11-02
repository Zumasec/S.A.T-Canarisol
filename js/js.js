

var open = true;
var heightChecked = false;
var initHeight = 120;
var intval = null;

function slideToggle() {
  var mesen = document.getElementById('mesen')
  mesen.style ='display:block;'
    window.clearInterval(intval);
    var mdiv = document.getElementById('chat-content');
    if(!heightChecked) {
        initHeight = mdiv.offsetHeight;
        heightChecked = true;
    }
    if(open) {
        var h = initHeight;
        open = false;
        // intval = setInterval(function(){
            h--;
            mdiv.style.height = h + 'px';
        //     if(h <= 0)
        //         window.clearInterval(intval);
        //     }, 1
        // );
    }
    else {
        var h = 0;
        open = true;
        // intval = setInterval(function(){
            h++;
            mdiv.style.height = h + 'px';
        //     if(h >= initHeight)
        //         window.clearInterval(intval);
        //     }, 1
        // );
    }
}

$(window).on('load', function () {
  setTimeout(function () {
    $(".loader-page").css({
      visibility: "hidden",
      opacity: "0"
    })
  }, 1000);
  
});

function escribirCard(titulo, foto, disponibilidad, contenedor) {
  var template = '<div class="card"><img class="card-img-top" src="' + foto + '" alt="Card image cap"><div class="card-body"><h5 class="card-title">' + titulo + '</h5><p class="card-text">' + disponibilidad + '</p><p class="card-text"><small class="text-muted">Mercatenerife, Complejo D nave 1-2 Módulos 155-157-158 Santa Cruz de Tenerife</small></p></div></div>';
  var div = document.createElement("div");
  div.className = "card-deck col-xs-12 col-sm-6 col-lg-4 col-xl-3 p-2";
  div.innerHTML = template;

  var cont = document.getElementById(contenedor);
  cont.appendChild(div);
}


var data = {
  "frutas": [
    [{
        "titulo": "AGUACATE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ALBARICOQUE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEREZA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CIRUELA AMARILLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CIRUELA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "DURAZNO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANGA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANGO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELOCOTON",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELOCOTON AMARILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELOCOTON BLANCO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NECTARINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PARAGUAYO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PICOTA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PLATERINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HIGOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CHIRIMOYA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COCO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "DATIL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "GRANADA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "GRANADILLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "GUANABANA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "KAKI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "KIWI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "KIWI ORO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MARACUYA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MEMBRILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NISPERO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPAYA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CARAMBOLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CHAYOTA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CURUBAS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZAPOTES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "GUAYABO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "KIWANO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LITCHIS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NONIS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PHISALIS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TAMARINDO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CASTAÑA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COCTAIL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NUECES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "FRAMBUESA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "FRESA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MORA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ARANDANOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "GROSELLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "UVA BLANCA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "UVA FIN DE AÑO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "UVA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TAMARILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CLEMENTINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "KUMQUAT",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LIMA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LIMON",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANDARINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NARANJA ZUMO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NARANJA MESA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NARANJA MALLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NARANJA NANGUINELY",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NARANJA PAIS CON HOJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "POMELO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "POMELO BLANCO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA STARSKY",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA PINK LADY",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA GRIS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA FUJI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA GOLDEN",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA GRANNY SMITH",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA KANZI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MANZANA ROYAL GALA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA BLANQUILLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA COMICE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA CONFERENCIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA DEVOER",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA ERCOLINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA ETRUSCA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA FURELA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA LIMONERA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA NASHI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERA SANJUANERA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PERAMELON",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELON AMARILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELON VERDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELON CANTALOUPE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MELON GALIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SANDIA BLANCA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SANDIA AMARILLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SANDIA NEGRA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SANDIA FASHION",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SANDIA SIN SEMILLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIÑA DULCE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIÑA TROPICAL APIÑA TRIPICAL B",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIÑA TROPICAL C",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PITAYA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PLATANO I",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PLATANO EXTRA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ECOLOGICOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SANDIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COMBINADOS",
        "foto": "",
        "disponibilidad": ""
      }
    ]
  ],
  "verduras": [
    [{
        "titulo": "ACELGA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ACHICORIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CANONIGOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COGOLLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ENDIVIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ENDIVIA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ESPINACA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ESCAROLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CORAZON COGOLLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HOJA ROBLE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LECHUGA ROMANA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LECHUGA APOLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LECHUGA BATAVIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LECHUGA ICEBERG",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LOLLO ROSSO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PACK CHOY",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RADICHIO ROSSO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RUCULA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LAUREL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LECHUGA VIVA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SURTIDOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HOJAS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COL VERDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COL DE BRUSELAS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COL CHINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COL KALE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COL RIZADA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COL ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COLIFLOR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "COLIRABANO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ROMANESCU",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BROCOLI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "APIO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ESPARRAGO BLANCO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ESPARRAGO VERDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RUIBARBO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "AJOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "AJO NEGRO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "AJOS TIERNOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLA BLANCA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLA ALBINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLA BUTY",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLA CHALOTA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLETA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HINOJO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PUERRO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ALBAHACA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BERROS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CEBOLLINO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CILANTRO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ENELDO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ESTRAGON",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HIERBA BUENA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "LEMONGRASS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MENTA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "OREGANO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PEREJIL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PEREJIL RIZADO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ROMERO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SALVIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HELECHO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ALCACHOFA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "FLORES COMESTIBLES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SAKURA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BATATA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BATATA AMARILLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BATATA BLANCA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "REMOLACHA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "REMOLACHA DE COLORES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "NABO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA BONITA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA FOLIO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA ARRUGAR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA NEGRA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA VIOLETA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPAS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA FREIR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA NEGRA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA BICOLOR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PAPA GRANDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BERENJENA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BERENJENA RAYADA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "BUBANGO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CALABACIN",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CALABACIN AMARILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZUCCHINI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CALABAZA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CALABAZA CACAHUETE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CALABZA HALLOWEN",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PEPINO CORTO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PEPINO HOLANDES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ALFALFA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SOJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "OTROS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CHAMPIÑON LAMINADO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CHAMPIÑON NORMAL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PORTOBELLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "OTROS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "CHIRIVIA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "JENGIBRE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ÑAME",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RAIZ DE APIO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RABANITO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RABANO DAIKON",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "YUCA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZANAHORIA BOLSA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZANAHORIA PAIS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZANAHORIA EN RAMA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZANAHORIA GRANEL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ZANAHORIA COLORES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "GUISANTE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HABICHUELA PLANA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HABICHUELA REDONDA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "HABAS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TIRABEQUES",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "JUDIA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO ITALIANO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO PADRON",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO AMARILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO CHORICERO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO SWEET BITE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO NARANJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO ROJO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO ROJO Y VERDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO ROJO PICANTE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO TRICOLOR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTO VERDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTA ROJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "PIMIENTA VERDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "RISTRA DE ÑORA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY VARIADO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE TIGRE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE AZUL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE BEEF",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY PERA GR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY PERA TARRINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY GRANEL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY TARRINA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY AMARILLO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY CGRILL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY KUMATO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHERRY RAMA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CHOCMANDE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE COLGAR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE CORAZON DE BUEY",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE DANIELA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE ENSALDA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE IBERIKO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE KUMATO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE LG",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE PERA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE RAF",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE RAMA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE ROSA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "TOMATE SALSA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SURTIDOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA BANDEJA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA BANDEJA 200GR",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA BOLETUS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA CARDO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA CANTHARELLUS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA CHOPO",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA ENOKI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA GRANEL",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA GIRGOLA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA NISCALOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA SAKURA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA SHIMEJI",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA SHIITAKE",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETA LENGUA DE VACA",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "SETAS VARIADAS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "ECOLOGICOS",
        "foto": "",
        "disponibilidad": ""
      },
      {
        "titulo": "MINI VERDURAS",
        "foto": "",
        "disponibilidad": ""
      }
    ]
  ],
  "cuartagama": [{
      "titulo": "AJOS",
      "foto": "",
      "disponibilidad": ""
    },
    {
      "titulo": "VERDURAS",
      "foto": "",
      "disponibilidad": ""
    },
    {
      "titulo": "VERDURAS",
      "foto": "",
      "disponibilidad": ""
    },
    {
      "titulo": "ENSALADAS",
      "foto": "",
      "disponibilidad": ""
    },
    {
      "titulo": "PRE-COCINADOS",
      "foto": "",
      "disponibilidad": ""
    }
  ],
  "otros": [{
      "titulo": "PREPARADOS",
      "foto": "",
      "disponibilidad": ""
    },
    {
      "titulo": "OTROS",
      "foto": "",
      "disponibilidad": ""
    }
  ]
};

// function readTextFile(file) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, false);
//   rawFile.onreadystatechange = function () {
//     if (rawFile.readyState === 4) {
//       if (rawFile.status === 200 || rawFile.status == 0) {
//         var allText = rawFile.responseText;
        
//         var contacto = "[" + allText + "]";
//         contacto = contacto.replace(",]","]")
        
//         console.log(JSON.parse(contacto));
//       }
//     }
//   }
//   rawFile.send(null);
// }

// readTextFile("results.json");


