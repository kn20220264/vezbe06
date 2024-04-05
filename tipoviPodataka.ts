//osnovni tipovi

let godine:number=20;
let ime:string="Ksenija";
let studira:boolean=true;

//slozeni tipovi
//nizovi
let predmeti:string[]=["EPOS","Klijentske","Cloud"];
let ocene:number[]=[5,6,7];

//tuples
let tuple:[string,number]=["Ksenija",20];

//enum
enum Modul{
    TehnologijeElektronskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul=Modul.TehnologijeElektronskogPoslovanja;

//objekat
let student:{ime:string,godine:number,studira:boolean}={
    ime:"Ksenija",
    godine:20,
    studira:true
};

//unijaTipova

let brojIliString:number | string=10;

//Any tip
let biloSta:any="Moze bilo koji tip";

//void
function cao():void{
    console.log("cao");
}

//null undefined
let n:null=null;
let u:undefined=undefined;

let nekaVrednost:any="neki string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaStringa);