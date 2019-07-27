
function calcDailyUsage()
{
var getConsumptionForMonths=document.getElementById("mpc").getElementsByTagName("input");
var annualConsumption=Number(0),dailyUse
for(i=0;i<getConsumptionForMonths.length;i++){
    annualConsumption=annualConsumption+Number(getConsumptionForMonths[i].value);
}
dailyUse=annualConsumption/365;
return (dailyUse);
}



function findSunshineHrs()
{
zone=document.forms.solarForm.zone.selectedIndex;   

zone=zone+1;

switch(zone){

    case 1:
    hrs=6;
    break;

    case 2:
    hrs=5.5;
    break;

    case 3:
    hrs=5;
    break;

    case 4:
    hrs=4.5;
    break;

    case 5:
    hrs=4.2;
    break;

    case 6:
    hrs=3.5;
    break;

    default:
    hrs=0;

}
return hrs;
}

function calcSolar()
{
var Sunshinehrs=findSunshineHrs();
console.log(Sunshinehrs);

dailyUsage=calcDailyUsage();
console.log(dailyUsage);

var minKwNeeded=dailyUsage/Sunshinehrs;
console.log(minKwNeeded);

var realKwNeeded=minKwNeeded*1.25;
console.log(realKwNeeded);

var realWattsNeeded=realKwNeeded*1000;
console.log(realWattsNeeded);

panelInfo=selectPanel();

var panelsNeeded=Math.ceil(realWattsNeeded/panelInfo[1]);
console.log(panelsNeeded);

feedback="";
feedback+="<p>Based on your average daily consumption of "+Math.round(dailyUsage)+" KWHrs "+ "you will need to purchase "+panelsNeeded+" "+panelInfo[0] +" solar panels";
feedback+="<h2>Additional Details</h2>"
feedback+="<p>Your average daily electricity consumption is "+Math.round(dailyUsage)+" kWh"+"</p>"
feedback+="<p>Average sunshine hours per day is "+Sunshinehrs+" hrs</p>"
feedback+="<p>Realistic watts needed per hour are "+Math.round(realWattsNeeded)+" watts/hour"+"</p>"
feedback+="<p>The name of the panel you selected is "+panelInfo[0]+" and it generates about "+panelInfo[1]+" watts/hour</p>"

document.getElementById("feedback").innerHTML=feedback
}


function selectPanel(){
    SelectedPanel=document.forms.solarForm.panel.selectedIndex;
    panels=document.forms.solarForm.panel;
    var name=panels[SelectedPanel].text;
    var value=panels[SelectedPanel].value;
    var x=[name,value];
    return(x);
    //console.log(SelectedPanel);
}

