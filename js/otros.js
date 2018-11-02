console.log(data.otros[0]);


data.otros.forEach(element => {
    var titulo = element.titulo || "";;
    var foto = element.foto || "img/catalogo/4.jpeg";;
    var disponibilidad = element.disponibilidad || "";

    escribirCard(titulo, foto, disponibilidad, "contotros");
});