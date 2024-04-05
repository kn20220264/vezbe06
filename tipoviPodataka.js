//osnovni tipovi
var godine = 20;
var ime = "Ksenija";
var studira = true;
//slozeni tipovi
//nizovi
var predmeti = ["EPOS", "Klijentske", "Cloud"];
var ocene = [5, 6, 7];
//tuples
var tuple = ["Ksenija", 20];
//enum
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["SoftverskoInzenjerstvo"] = 1] = "SoftverskoInzenjerstvo";
    Modul[Modul["InformacioniSistemi"] = 2] = "InformacioniSistemi";
})(Modul || (Modul = {}));
var modul = Modul.TehnologijeElektronskogPoslovanja;
//objekat
var student = {
    ime: "Ksenija",
    godine: 20,
    studira: true
};
//unijaTipova
var brojIliString = 10;
//Any tip
var biloSta = "Moze bilo koji tip";
//void
function cao() {
    console.log("cao");
}
//null undefined
var n = null;
var u = undefined;
var nekaVrednost = "neki string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
