//list & array
const list = [1, "hola", true, undefined, null];
const list2 = new Array(2, "hola", true, undefined, null);
const list3 = new Array(3);
list3[0] = "im the first element, index 0";
const list4 = [list, list2, list3];

console.log(list);
console.log(list2); 
console.log(list3);
console.log(list4);

//Objects

const mobile = {
    heigh: 10,
    wide: 5,
    brand: "Xiaomi",
    isWhite: false,
    contacts: ["estel", "oriol", "marina"],
    SDCard: {
        brand: "Apple",
        storage: 64
    },
    /*add new value to the SDCard after*/"height-SDCard":4
}
/*add new value*/mobile.year = 2022;
/*modify value*/mobile.brand = "Apple";

console.log(mobile.contacts);
console.log(mobile.SDCard.brand);

//Dates
const now = new Date();
console.log(now);

const date_milis = new Date(10);
console.log(date_milis);

const date_chain = new Date("march 25 2020"); 
console.log(date_chain);

const date_values = new Date(2022, 1, 19);
console.log(date_values);

const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();
console.log(day, month, year);




//Support Library: Moment.js