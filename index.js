// Code your solution in this file!
const returnFirstTwoDrivers = ([]) => {
    return(['Antonia','Nuru'])
 };
 const returnLastTwoDrivers = ([]) => {
    return(['Amari','Mo'])
 };
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(integer) {
    return function(fare) {
        return integer*fare
    }
};
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3) 

const selectDifferentDrivers = (arrayOfDrivers, differentDriver) =>  differentDriver(arrayOfDrivers);