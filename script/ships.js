const ships = '[{"type":"Carriers","name":"Acclamator-class assault ship","img":"Acclamator-class%20assault%20ship","class":"Heavy cuiser","length":"752 meters","width":"460 meters","acceleration":"3.500 G","hyperdrive":"Class 0.6","crew":"700","passengers":"16.000","price":"500"},'+
            '{"type":"Cruisers","name":"Carrack-class light cruiser","img":"Carrack-class%20light%20cruiser","class":"Frigate","length":"72 meters","width":"150 meters","acceleration":"80 MGLT","hyperdrive":"Class 1.0","crew":"1.007","passengers":"142","price":"250"},'+
            '{"type":"Cruisers","name":"Dauntless-class heavy cruiser","img":"Dauntless-class%20heavy%20cruiser","class":"Heavy cuiser","length":"1200 meters","width":"500 meters","acceleration":"1 MGLT/s","hyperdrive":"Class 0.5","crew":"1.000","passengers":"125","price":"5400"},'+
            '{"type":"Frigates","name":"Interceptor-class frigate","img":"Interceptor-class%20frigate","class":"Frigate","length":"150 meters","width":"80 meters","acceleration":"1.2 MGLT/s","hyperdrive":"Class 0.6","crew":"650","passengers":"90","price":"900"},'+
            '{"type":"Gunships","name":"Assassin-class corvette","img":"Assassin-class%20corvette","class":"Corvette","length":"140 meters","width":"59 meters","acceleration":"1.5 MGLT/s","hyperdrive":"Class 2.0","crew":"100","passengers":"60","price":"1100"},'+
            '{"type":"Gunships","name":"Consular-class cruiser","img":"Consular-class%20cruiser","class":"Space cruiser","length":"115 meters","width":"39 meters","acceleration":"2.040 G","hyperdrive":"Class 2.0","crew":"9","passengers":"16","price":"800"},'+
            '{"type":"Starfighters","name":"N-1 starfighter","img":"N-1%20starfighter","class":"Luxury starfighter","length":"11 meters","width":"7 meters","acceleration":"3.750 G","hyperdrive":"Class 1.0","crew":"2","passengers":"0","price":"150"},'+
            '{"type":"Starfighters","name":"T-65 X-wing starfighter","img":"T-65%20X-wing%20starfighter","class":"Starfighter","length":"12.5 meters","width":"10 meters","acceleration":"3.700 G","hyperdrive":"Class 1.0","crew":"2","passengers":"0","price":"90"}]';
                
const obj = JSON.parse(ships);

function getCategories(json){
    categories = [];
    if(json.length==0){
        return categories;
    }
    let cpt = 1;
    categories[0]=json[0].type;
    for(let i=1;i<json.length;i++){
        if(json[i].type != json[i-1].type){
            categories[cpt]=json[i].type;
            cpt++;
        }
    }
    return categories;
}

const cat = getCategories(obj);


let detailstab = document.createElement('table');
detailstab.id='table';
let prix = document.createElement('caption');
let prixvalue = document.createTextNode('$ ' + obj[1].price + " / rent per day");
prix.append(prixvalue);
detailstab.append(prix);

//Name---------------------------------------------------------

let trname = document.createElement('tr');

let thname = document.createElement('th');
let nam= document.createTextNode('Name');
thname.append(nam);

let thnamevalue = document.createElement('th');
let namevalue = document.createTextNode(obj[1].name);
thnamevalue.append(namevalue);

trname.append(thname);
trname.append(thnamevalue);

//Class---------------------------------------------------------

let trclass = document.createElement('tr');

let thclass = document.createElement('th');
let clas = document.createTextNode('Class');
thclass.append(clas);

let thclassvalue = document.createElement('th');
let classvalue = document.createTextNode(obj[1].class);
thclassvalue.append(classvalue);

trclass.append(thclass);
trclass.append(thclassvalue);

//Length---------------------------------------------------------

let trlength = document.createElement('tr');

let thlength = document.createElement('th');
let length = document.createTextNode('Length');
thlength.append(length);

let thlengthvalue = document.createElement('th');
let lengthvalue = document.createTextNode(obj[1].length);
thlengthvalue.append(lengthvalue);

trlength.append(thlength);
trlength.append(thlengthvalue);

//Width---------------------------------------------------------

let trwidth = document.createElement('tr');

let thwidth = document.createElement('th');
let width = document.createTextNode('Width');
thwidth.append(width);

let thwidthvalue = document.createElement('th');
let widthvalue = document.createTextNode(obj[1].width);
thwidthvalue.append(widthvalue);

trwidth.append(thwidth);
trwidth.append(thwidthvalue);

//Acceleration---------------------------------------------------------

let traccel = document.createElement('tr');

let thaccel = document.createElement('th');
let accel = document.createTextNode('Acceleration');
thaccel.append(accel);

let thaccelvalue = document.createElement('th');
let accelvalue = document.createTextNode(obj[1].acceleration);
thaccelvalue.append(accelvalue);

traccel.append(thaccel);
traccel.append(thaccelvalue);

//Hyperdrive---------------------------------------------------------

let trdrive = document.createElement('tr');

let thdrive = document.createElement('th');
let drive = document.createTextNode('Hyperdrive');
thdrive.append(drive);

let thdrivevalue = document.createElement('th');
let drivevalue = document.createTextNode(obj[1].hyperdrive);
thdrivevalue.append(drivevalue);

trdrive.append(thdrive);
trdrive.append(thdrivevalue);

//Crew---------------------------------------------------------

let trcrew = document.createElement('tr');

let thcrew = document.createElement('th');
let crew = document.createTextNode('Crew');
thcrew.append(crew);

let thcrewvalue = document.createElement('th');
let crewvalue = document.createTextNode(obj[1].crew);
thcrewvalue.append(crewvalue);

trcrew.append(thcrew);
trcrew.append(thcrewvalue);

//Passengers---------------------------------------------------------

let trpassengers = document.createElement('tr');

let thpassengers = document.createElement('th');
let passengers = document.createTextNode('Passengers');
thpassengers.append(passengers);

let thpassengersvalue = document.createElement('th');
let passengersvalue = document.createTextNode(obj[1].passengers);
thpassengersvalue.append(passengersvalue);

trpassengers.append(thpassengers);
trpassengers.append(thpassengersvalue);


//Ajout table---------------------------------------------------------

detailstab.append(trname);
detailstab.append(trclass);
detailstab.append(trlength);
detailstab.append(trwidth);
detailstab.append(traccel);
detailstab.append(trdrive);
detailstab.append(trcrew);
detailstab.append(trpassengers);

prix.style.textAlign = 'center';
document.getElementById("details").append(detailstab);

document.getElementById('photoimg').style.background = "url('../images/ships/"+obj[1].type.toLowerCase()+"/"+obj[1].img+".png')";
document.getElementById('photoimg').style.backgroundSize = "contain"; 
document.getElementById('photoimg').style.backgroundRepeat = "no-repeat";    



function addCategories(){

    for(let i=0; i<cat.length; i++){
      
        let div = document.createElement('div');
        let divtext = document.createElement('div');
        divtext.innerHTML = cat[i];
        divtext.className = "modelename";
        div.id = cat[i];
        div.className = 'categorie';
        div.setAttribute('visible',true);
        div.style.cursor = 'pointer';
        divtext.style.cursor = 'pointer';
        div.append(divtext);
        document.getElementById('categories').append(div);

        for(let j=0;j<obj.length;j++){
            if(obj[j].type == cat[i]){
                var ssdiv = document.createElement('div');
                ssdiv.id = j;
                ssdiv.innerHTML = obj[j].name;
                ssdiv.className = cat[i] + " modele";
                div.append(ssdiv);
                
                ssdiv.addEventListener("click", function(){
                    majElement(j);
                });
            }
        }
   
        div.children[0].addEventListener('click', function(){
            enfants = document.getElementsByClassName(cat[i]);
            const array = Array.from(enfants);
            if(div.getAttribute("visible")=='false'){
                array.forEach(element => {
                    element.style.display = "block";
                });
                div.setAttribute('visible',true);
            }else{
                array.forEach(element => {
                    element.style.display = "none";
                });
                div.setAttribute('visible',false);
            } 
        });

    }

}

addCategories();


function majElement(index){
    document.getElementById('table').remove();
    let detailstab = document.createElement('table');
    detailstab.id='table';
    let prix = document.createElement('caption');
    let prixvalue = document.createTextNode('$ ' + obj[index].price + " / rent per day");
    prix.append(prixvalue);
    detailstab.append(prix);

    //Name---------------------------------------------------------

    let trname = document.createElement('tr');

    let thname = document.createElement('th');
    let nam= document.createTextNode('Name');
    thname.append(nam);

    let thnamevalue = document.createElement('th');
    let namevalue = document.createTextNode(obj[index].name);
    thnamevalue.append(namevalue);

    trname.append(thname);
    trname.append(thnamevalue);

    //Class---------------------------------------------------------

    let trclass = document.createElement('tr');

    let thclass = document.createElement('th');
    let clas = document.createTextNode('Class');
    thclass.append(clas);

    let thclassvalue = document.createElement('th');
    let classvalue = document.createTextNode(obj[index].class);
    thclassvalue.append(classvalue);

    trclass.append(thclass);
    trclass.append(thclassvalue);

    //Length---------------------------------------------------------

    let trlength = document.createElement('tr');

    let thlength = document.createElement('th');
    let length = document.createTextNode('Length');
    thlength.append(length);

    let thlengthvalue = document.createElement('th');
    let lengthvalue = document.createTextNode(obj[index].length);
    thlengthvalue.append(lengthvalue);

    trlength.append(thlength);
    trlength.append(thlengthvalue);

    //Width---------------------------------------------------------

    let trwidth = document.createElement('tr');

    let thwidth = document.createElement('th');
    let width = document.createTextNode('Width');
    thwidth.append(width);

    let thwidthvalue = document.createElement('th');
    let widthvalue = document.createTextNode(obj[index].width);
    thwidthvalue.append(widthvalue);

    trwidth.append(thwidth);
    trwidth.append(thwidthvalue);

    //Acceleration---------------------------------------------------------

    let traccel = document.createElement('tr');

    let thaccel = document.createElement('th');
    let accel = document.createTextNode('Acceleration');
    thaccel.append(accel);

    let thaccelvalue = document.createElement('th');
    let accelvalue = document.createTextNode(obj[index].acceleration);
    thaccelvalue.append(accelvalue);

    traccel.append(thaccel);
    traccel.append(thaccelvalue);

    //Hyperdrive---------------------------------------------------------

    let trdrive = document.createElement('tr');

    let thdrive = document.createElement('th');
    let drive = document.createTextNode('Hyperdrive');
    thdrive.append(drive);

    let thdrivevalue = document.createElement('th');
    let drivevalue = document.createTextNode(obj[index].hyperdrive);
    thdrivevalue.append(drivevalue);

    trdrive.append(thdrive);
    trdrive.append(thdrivevalue);

    //Crew---------------------------------------------------------

    let trcrew = document.createElement('tr');

    let thcrew = document.createElement('th');
    let crew = document.createTextNode('Crew');
    thcrew.append(crew);

    let thcrewvalue = document.createElement('th');
    let crewvalue = document.createTextNode(obj[index].crew);
    thcrewvalue.append(crewvalue);

    trcrew.append(thcrew);
    trcrew.append(thcrewvalue);

    //Passengers---------------------------------------------------------

    let trpassengers = document.createElement('tr');

    let thpassengers = document.createElement('th');
    let passengers = document.createTextNode('Passengers');
    thpassengers.append(passengers);

    let thpassengersvalue = document.createElement('th');
    let passengersvalue = document.createTextNode(obj[index].passengers);
    thpassengersvalue.append(passengersvalue);

    trpassengers.append(thpassengers);
    trpassengers.append(thpassengersvalue);


    //Ajout table---------------------------------------------------------

    detailstab.append(trname);
    detailstab.append(trclass);
    detailstab.append(trlength);
    detailstab.append(trwidth);
    detailstab.append(traccel);
    detailstab.append(trdrive);
    detailstab.append(trcrew);
    detailstab.append(trpassengers);

    prix.style.textAlign = 'center';
    document.getElementById("details").append(detailstab);

    document.getElementById('photoimg').style.background = "url('../images/ships/"+obj[index].type.toLowerCase()+"/"+obj[index].img+".png')";
    document.getElementById('photoimg').style.backgroundSize = "contain"; 
    document.getElementById('photoimg').style.backgroundRepeat = "no-repeat"; 

}



