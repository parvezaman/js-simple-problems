/* wood requirement per item

chair = 3 cft
table= 10cft
bed = 50cft

*/


function woodCalculation(chairQuantity, tableQuantity, bedQuantity){
    const woodPerChair = 3;
    const woodPerTable = 10;
    const woodPerBed = 50;
    const chairWoodRequired = woodPerChair * chairQuantity;
    const tableWoodRequired = woodPerTable * tableQuantity;
    const bedWoodRequired = woodPerBed * bedQuantity;

    const totalwood = chairWoodRequired + tableWoodRequired + bedWoodRequired;

    return totalwood;
}

console.log(woodCalculation(10,2,3));


function totalWoodRequired(chair, table, bed){
    const woodPerChair = 3;
    const woodPerTable = 10;
    const woodPerBed = 50;
    function woodRequired (iWant, perUnitRequired){
        return iWant * perUnitRequired;
    }
    const woodForChair = (woodRequired(chair,woodPerChair));
    const woodForTable = (woodRequired(table,woodPerTable));
    const woodForBed = (woodRequired(bed,woodPerBed));

    return woodForChair + woodForTable +woodForBed;
}

console.log(totalWoodRequired(10,2,3));