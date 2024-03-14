class adat{
construct(nev, leiras){
    this.nev = nev;
    this.leiras = leiras;
    }
}

document.getElementById('kuld').addEventListener('click', function(){
    
    xhttp = new XMLHttpRequest(); //oBJEKTUMOT Hoz létre. Példányosítás
    
    xhttp.onload = function(){ //névtelen function
        
        let keres =  document.getElementById("keres").value;
        let lista = keres.split(";");
        let telefonok = [];
        for (let i=0;i<lista.length; i++){
            let splitted = list[i].split(':');
            telefonok.push(new adat(splitted[0],splitted[1]));
        }
        
        
    });            
    
    
    function szures(telefonok, keresett) {
    
        for (let i = 0; i < telefonok.length; i++) {
            if (telefonok[i].nev === keresett) {
              return telefonok[i].leiras;
            }
          }
          return "Nem található ilyen névvel rendelkező telefon.";
        }
