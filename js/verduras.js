data.verduras[0].forEach(element => {
    var titulo = element.titulo || "";;
    var foto = element.foto || "img/catalogo/4.jpeg";;
    var disponibilidad = element.disponibilidad || "";

    escribirCard(titulo, foto, disponibilidad, "contverdura");
});