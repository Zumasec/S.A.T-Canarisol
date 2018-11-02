data.frutas[0].forEach(element => {
//    if (element.titulo == "AGUACATE") {
    var titulo = element.titulo || "";;
    var foto = element.foto || "img/catalogo/4.jpeg";;
    var disponibilidad = element.disponibilidad || "";

    escribirCard(titulo, foto, disponibilidad, "contfruta");
//    }
});