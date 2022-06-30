//declare shelves, products and expiration dates
const shelf_A1 = [
    ["Wine Gums", "28 AUG 22", "28 APR 23"],
    ["Jelly Babies (Dusted)", "28 JUL 22"],
    ["Rhubarb & Custard", "29 MAR 24"],
    ["Beer Bottles", "28 MAR 23", "28 JUN 23"],
    ["Fruit Pastilles", "28 NOV 22", "28 DEC 22"],
    ["Rosie Apples", "28 FEB 24"],
    ["Love Hearts", "28 SEP 22", "31 MAY 23"],
];

const shelf_A2 = [
    ["Milk Choc Raisins", "28 NOV 22"],
    ["Catherine Wheels", "28 NOV 22", "28 SEP 23"],
    ["Snowies", "28 FEB 23"],
    ["Pineapple Chunks", "07 MAR 24"],
    ["Rum & Raisin Fudge", "02 DEC 22"],
    ["Fruity Meerkats", "28 MAR 23"],
    ["Trad Mint Humbugs", "28 APR 23"],
    ["Sherbet Strawberries", "28 NOV 22", "28 JAN 23"],
];

const shelf_A3 = [
    ["Gummy Bears", "28 MAY 23"],
    ["Fudge Duo", "27 SEP 22", "11 FEB 23"],
    ["Dolly Mixture", "28 OCT 22", "28 DEC 22"],
    ["Luxury Fruit Jellies", "28 OCT 22", "28 DEC 22"],
    ["Fried Eggs", "28 FEB 23"],
    ["Dolly Mixture", "28 JUN 22", "28 OCT 22", "28 DEC 22"],
];

const shelf_B1 = [
    ["Milk Chocolate Beans", "28 OCT 22"],
    ["Milk Chocolate Raisins", "28 JUL 22"],
    ["Lemon Bonbons", "28 NOV 22"],
    ["Mini Eggs", "10 MAY 23"],
    ["Mint Imperials", "28 JUL 22", "22 JAN 23"],
    ["Pear Drops", "22 MAR 23", "06 OCT 23"],
    ["Pineapple Chunks", "20 APR 23", "07 MAR 24"],
];

const shelf_B2 = [
    ["Rosie Apples", "22 FEB 24", "28 FEB 24"],
    ["Sherbet Strawberries", "28 JAN 23"],
    ["Strawberry Bonbons", "18 MAY 23"],
    ["Rhubarb & Custard", "14 AUG 23", "28 AUG 23", "22 SEP 23", "21 DEC 23"],
    ["Sherbet Lemon", "28 JUN 22", "28 SEP 22", "28 JAN 23"],
    ["Snowies", "28 FEB 23"],
];

const shelf_B3 = [
    ["Wriggly Worms", "28 MAR 23", "28 APR 23"],
    ["Yoghurt Coated Raisins", "28 MAR 23"],
    ["Trad Mint Humbugs", "28 APR 23"],
    ["Toffee Bonbons", "15 JUL 22", "19 AUG 22", "10 JAN 23"],
    ["Strawberry Milkshakes", "28 SEP 22", "28 MAY 23"],
    ["Giant Strawberries", "28 AUG 22", "28 DEC 22", "28 MAR 23", "28 APR 23"],
];

const shelf_C1 = [
    ["Fruit Pastilles", "28 NOV 22", "28 OCT 22", "28 DEC 22"],
    ["Fruity Fangs", "28 JAN 23", "28 MAR 23"],
    ["Fruity Meerkats", "28 SEP 22", "28 NOV 22", "28 MAR 23"],
    ["Gummy Bears", "28 JAN 23", "28 MAY 23"],
    ["Jazzies", "28 OCT 22", "28 JAN 23"],
    ["Jelly Babies (Dusted)", "28 JUN 22"],
];

const shelf_C2 = [
    ["Jelly Beans", "04 DEC 22", "01 DEC 23", "16 DEC 23"],
    ["Jelly Buttons", "28 OCT 22"],
    ["Jelly Rings", "28 APR 23", "28 MAY 23"],
    ["Kola Cubes", "23 SEP 23", "02 FEB 24"],
    ["Lemon Bonbons", "17 AUG 22", "20 APR 23"],
    ["Liquorice Allsorts", "28 OCT 22"],
];

const shelf_C3 = [
    ["Liquorice Comfits", "28 JAN 23", "28 APR 23"],
    ["Liquorice Cream Rock", "01 JUN 23"],
    ["Love Hearts", "28 SEP 22", "31 JAN 23", "31 MAR 23"],
    ["Luxury Fruit Chews", "28 JAN 23", "28 MAR 23", "28 OCT 23"],
    ["Luxury Fruit Jellies", "28 JUL 22", "28 SEP 22", "28 OCT 22"],
    ["Milk Bottles", "28 NOV 22", "28 DEC 22", "28 JAN 23"],
];

const shelf_D1 = [
    ["ABC's", "28 JAN 23", "30 SEP 23"],
    ["American Hard Gums", "28 OCT 22", "28 JAN 23", "28 FEB 23"],
    ["Aniseed Balls", "07 DEC 23", "17 MAY 24", "23 AUG 24"],
    ["Beer Bottles", "28 MAR 23", "28 JUN 23"],
    ["Black Jacks & Fruit Salad", "28 SEP 22"],
    ["Bubblegum Bonbons", "18 MAY 23"],
];

const shelf_D2 = [
    ["Bubblegum Bottles", "28 AUG 22", "28 MAY 23"],
    ["Candy Necklaces", "28 JUN 23"],
    ["Catherine Wheels", "28 NOV 22", "28 SEP 23"],
    ["Fudge Duo", "27 SEP 22", "11 FEB 23"],
    ["Clotted Cream Fudge", "26 JAN 23", "04 FEB 23"],
    ["Rum & Raisin Fudge", "29 JUL 22", "11 OCT 22", "02 DEC 22"],
];

const shelf_D3 = [
    ["Fizzy Cola Bottles", "28 JUL 22", "28 SEP 22", "28 DEC 22", "28 JUL 23"],
    ["Fizzy Dummies", "28 AUG 22", "28 FEB 23", "28 APR 23"],
    ["Fizzy Fun Mix", "28 JUL 22", "28 SEP 23", "28 FEB 23"],
    ["Fizzy Strawberries", "28 SEP 22", "28 MAR 23", "28 JUN 23"],
    ["Fruit Pips", "28 SEP 22", "28 JAN 23"],
    ["Fried Eggs", "28 FEB 23"],
];

const shelf_E1 = [
    ["Jelly Rings", "28 MAY 23"],
    ["Fizzy Cola Bottles", "28 JUL 23"],
    ["Candy Necklaces", "28 OCT 23"],
    ["Wiggly Worms", "28 MAY 23"],
    ["Liquorice Allsorts", "28 OCT 22"],
    ["Mini Eggs", "21 JUL 23"],
];

const shelf_E2 = [
    ["Random Retros", "28 FEB 23", "30 APR 23"],
    ["Chocolate Footballs", "28 SEP 22"],
    ["Strawberry Bonbons", "28 MAY 23"],
    ["American Hard Gums", "28 FEB 23"],
    ["Bubblegum Bottles", "28 MAY 23"],
    ["Milk Chocolate Beans", "28 NOV 22"],
];

const shelf_E3 = [
    ["Kola Cubes", "10 MAR 24"],
    ["Fruity Meerkats", "28 MAR 23", "28 MAY 23"],
    ["Liquorice Cream Rock", "01 JUN 23"],
    ["Beer Bottles", "28 JUN 23"],
    ["Catherine Wheels", "28 FEB 24"],
    ["Jelly Beans", "30 JAN 24"],
];

const shelf_F1 = [
    ["Fruity Fangs", "28 MAY 23"],
    ["Fizzy Fun Mix", "28 SEP 22"],
    ["Clotted Cream Fudge", "01 FEB 23"],
    ["Snowies", "28 FEB 23"],
    ["Fizzy Strawberries", "28 JUN 23"],
    ["Fruit Pastilles", "28 MAY 22", "28 NOV 22", "28 DEC 22", "28 JAN 23"],
];

const shelf_F2 = [
    ["Rhubarb & Custard", "21 DEC 23", "29 MAR 24"],
    ["Dolly Mixture", "28 DEC 22"],
    ["Milk Bottles", "28 DEC 22", "28 JAN 23"],
    ["Beer Bottles", "28 MAR 23"],
    ["Toffee Bonbons", "21 APR 23"],
    ["Aniseed Balls", "06 DEC 24"],
    ["Pear Drops", "28 APR 24"],
    ["Milk Chocolate Raisins", "28 FEB 23"],
];

const shelf_F3 = [
    ["Sherbet Strawberries", "28 NOV 22", "28 JAN 23"],
    ["Gummy Bears", "28 MAY 23"],
    ["Luxury Fruit Chews", "28 OCT 23"],
    ["Lemon Bonbons", "20 APR 23", "04 MAY 23"],
    ["Wine Gums", "28 AUG 22", "28 APR 23"],
];


//declare dom  
const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");

const e1 = document.querySelector(".e1");
const e2 = document.querySelector(".e2");
const e3 = document.querySelector(".e3");

const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");

const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");


//initialise population of shelvesm
function create() {
    //create a div for each product

    for (var i = 0; i < shelf_A1.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_A1[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p>${shelf_A1[i][2]}</p><p>${shelf_A1[i][3]}</p><p>${shelf_A1[i][4]}</p>`;
        } else if (shelf_A1[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p>${shelf_A1[i][2]}</p><p>${shelf_A1[i][3]}</p>`;
        } else if (shelf_A1[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p>${shelf_A1[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p>`;
        }

        a1.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_A2.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_A2[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p>${shelf_A2[i][2]}</p><p>${shelf_A2[i][3]}</p><p>${shelf_A2[i][4]}</p>`;
        } else if (shelf_A2[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p>${shelf_A2[i][2]}</p><p>${shelf_A2[i][3]}</p>`;
        } else if (shelf_A2[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p>${shelf_A2[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p>`;
        }

        a2.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_A3.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_A3[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p>${shelf_A3[i][2]}</p><p>${shelf_A3[i][3]}</p><p>${shelf_A3[i][4]}</p>`;
        } else if (shelf_A3[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p>${shelf_A3[i][2]}</p><p>${shelf_A3[i][3]}</p>`;
        } else if (shelf_A3[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p>${shelf_A3[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p>`;
        }

        a3.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_E1.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_E1[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p>${shelf_E1[i][2]}</p><p>${shelf_E1[i][3]}</p><p>${shelf_E1[i][4]}</p>`;
        } else if (shelf_E1[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p>${shelf_E1[i][2]}</p><p>${shelf_E1[i][3]}</p>`;
        } else if (shelf_E1[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p>${shelf_E1[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p>`;
        }

        e1.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_E2.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_E2[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p>${shelf_E2[i][2]}</p><p>${shelf_E2[i][3]}</p><p>${shelf_E2[i][4]}</p>`;
        } else if (shelf_E2[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p>${shelf_E2[i][2]}</p><p>${shelf_E2[i][3]}</p>`;
        } else if (shelf_E2[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p>${shelf_E2[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p>`;
        }

        e2.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_E3.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_E3[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p>${shelf_E3[i][2]}</p><p>${shelf_E3[i][3]}</p><p>${shelf_E3[i][4]}</p>`;
        } else if (shelf_E3[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p>${shelf_E3[i][2]}</p><p>${shelf_E3[i][3]}</p>`;
        } else if (shelf_E3[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p>${shelf_E3[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p>`;
        }

        e3.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_F1.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_F1[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p>${shelf_F1[i][2]}</p><p>${shelf_F1[i][3]}</p><p>${shelf_F1[i][4]}</p>`;
        } else if (shelf_F1[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p>${shelf_F1[i][2]}</p><p>${shelf_F1[i][3]}</p>`;
        } else if (shelf_F1[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p>${shelf_F1[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p>`;
        }

        f1.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_F2.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_F2[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p>${shelf_F2[i][2]}</p><p>${shelf_F2[i][3]}</p><p>${shelf_F2[i][4]}</p>`;
        } else if (shelf_F2[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p>${shelf_F2[i][2]}</p><p>${shelf_F2[i][3]}</p>`;
        } else if (shelf_F2[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p>${shelf_F2[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p>`;
        }

        f2.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_F3.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_F3[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p>${shelf_F3[i][2]}</p><p>${shelf_F3[i][3]}</p><p>${shelf_F3[i][4]}</p>`;
        } else if (shelf_F3[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p>${shelf_F3[i][2]}</p><p>${shelf_F3[i][3]}</p>`;
        } else if (shelf_F3[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p>${shelf_F3[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p>`;
        }

        f3.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_B1.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_B1[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p>${shelf_B1[i][2]}</p><p>${shelf_B1[i][3]}</p><p>${shelf_B1[i][4]}</p>`;
        } else if (shelf_B1[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p>${shelf_B1[i][2]}</p><p>${shelf_B1[i][3]}</p>`;
        } else if (shelf_B1[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p>${shelf_B1[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p>`;
        }

        b1.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_B2.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_B2[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p>${shelf_B2[i][2]}</p><p>${shelf_B2[i][3]}</p><p>${shelf_B2[i][4]}</p>`;
        } else if (shelf_B2[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p>${shelf_B2[i][2]}</p><p>${shelf_B2[i][3]}</p>`;
        } else if (shelf_B2[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p>${shelf_B2[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p>`;
        }

        b2.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_B3.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_B3[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p>${shelf_B3[i][2]}</p><p>${shelf_B3[i][3]}</p><p>${shelf_B3[i][4]}</p>`;
        } else if (shelf_B3[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p>${shelf_B3[i][2]}</p><p>${shelf_B3[i][3]}</p>`;
        } else if (shelf_B3[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p>${shelf_B3[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p>`;
        }

        b3.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_C1.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_C1[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p>${shelf_C1[i][2]}</p><p>${shelf_C1[i][3]}</p><p>${shelf_C1[i][4]}</p>`;
        } else if (shelf_C1[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p>${shelf_C1[i][2]}</p><p>${shelf_C1[i][3]}</p>`;
        } else if (shelf_C1[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p>${shelf_C1[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p>`;
        }

        c1.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_C2.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_C2[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p>${shelf_C2[i][2]}</p><p>${shelf_C2[i][3]}</p><p>${shelf_C2[i][4]}</p>`;
        } else if (shelf_C2[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p>${shelf_C2[i][2]}</p><p>${shelf_C2[i][3]}</p>`;
        } else if (shelf_C2[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p>${shelf_C2[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p>`;
        }

        c2.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_C3.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_C3[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p>${shelf_C3[i][2]}</p><p>${shelf_C3[i][3]}</p><p>${shelf_C3[i][4]}</p>`;
        } else if (shelf_C3[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p>${shelf_C3[i][2]}</p><p>${shelf_C3[i][3]}</p>`;
        } else if (shelf_C3[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p>${shelf_C3[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p>`;
        }

        c3.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_D1.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_D1[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p>${shelf_D1[i][2]}</p><p>${shelf_D1[i][3]}</p><p>${shelf_D1[i][4]}</p>`;
        } else if (shelf_D1[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p>${shelf_D1[i][2]}</p><p>${shelf_D1[i][3]}</p>`;
        } else if (shelf_D1[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p>${shelf_D1[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p>`;
        }

        d1.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_D2.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_D2[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p>${shelf_D2[i][2]}</p><p>${shelf_D2[i][3]}</p><p>${shelf_D2[i][4]}</p>`;
        } else if (shelf_D2[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p>${shelf_D2[i][2]}</p><p>${shelf_D2[i][3]}</p>`;
        } else if (shelf_D2[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p>${shelf_D2[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p>`;
        }

        d2.appendChild(eachTip);
    }

    for (var i = 0; i < shelf_D3.length - 1; i++) {
        var eachTip = document.createElement("div");
        eachTip.setAttribute("class", "newDiv");

        //determining number of dates to display
        if (shelf_D3[i][4] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p>${shelf_D3[i][2]}</p><p>${shelf_D3[i][3]}</p><p>${shelf_D3[i][4]}</p>`;
        } else if (shelf_D3[i][3] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p>${shelf_D3[i][2]}</p><p>${shelf_D3[i][3]}</p>`;
        } else if (shelf_D3[i][2] != undefined) {
            eachTip.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p>${shelf_D3[i][2]}</p>`;
        } else {
            eachTip.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p>`;
        }

        d3.appendChild(eachTip);
    }
}

create();


document.querySelectorAll(".exp").forEach(function (e) {
    //collect product's first day and today's date 
    let date1 = e.innerText;
    let date2 = new Date().toLocaleDateString("en-GB");

    let date1Format = date1.split(" ");
    let date2Format = date2.split("/");

    //Converting months into days
    let months_calc1;
    let months_calc2;

    switch (date1Format[1]) {
        case "JAN":
            months_calc1 = 31;
            break;
        case "FEB":
            months_calc1 = 59;
            break;
        case "MAR":
            months_calc1 = 90;
            break;
        case "APR":
            months_calc1 = 120;
            break;
        case "MAY":
            months_calc1 = 151;
            break;
        case "JUN":
            months_calc1 = 181;
            break;
        case "JUL":
            months_calc1 = 212;
            break;
        case "AUG":
            months_calc1 = 243;
            break;
        case "SEP":
            months_calc1 = 273;
            break;
        case "OCT":
            months_calc1 = 304;
            break;
        case "NOV":
            months_calc1 = 334;
            break;
        case "DEC":
            months_calc1 = 365;
            break;
    }

    switch (date2Format[1]) {
        case "01":
            months_calc2 = 31;
            break;
        case "02":
            months_calc2 = 59;
            break;
        case "03":
            months_calc2 = 90;
            break;
        case "04":
            months_calc2 = 120;
            break;
        case "05":
            months_calc2 = 151;
            break;
        case "06":
            months_calc2 = 181;
            break;
        case "07":
            months_calc2 = 212;
            break;
        case "08":
            months_calc2 = 243;
            break;
        case "09":
            months_calc2 = 273;
            break;
        case "10":
            months_calc2 = 304;
            break;
        case "11":
            months_calc2 = 334;
            break;
        case "12":
            months_calc2 = 365;
            break;
    }


    //converting string to integer for subtraction and total number of days left
    var days_passed = parseInt(date1Format[0] - date2Format[0]);
    var months_passed = parseInt(months_calc1 - months_calc2);
    var years_passed = parseInt("20" + date1Format[2] - date2Format[2]);
    var total_days = (years_passed * 365) + months_passed + days_passed;


    //change color of parent div based on total days
    if (total_days < 0) {
        e.style.display = "none";
    }
    if (total_days < 30) {
        e.style.backgroundColor = "#CCAAFF";
        e.parentElement.style.backgroundColor = "#CCAAFF";
        var par = e.parentElement.parentElement.parentElement.parentElement
        par.previousElementSibling.style.backgroundColor = "#CCAAFF"

    }
    if (total_days > 31 && total_days < 61) {
        e.style.backgroundColor = "#AACCFF";
        e.parentElement.style.backgroundColor = "#AACCFF";
    }

});



var panels = document.getElementsByClassName('panel');
var acc = document.getElementsByClassName('accordion');
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    this.classList.toggle("active")
    var itemClass = this.nextElementSibling.className;
    for (i = 0; i < panels.length; i++) {
        acc[i].classList.remove("active");
        panels[i].className = 'panel close';
    }
    if (itemClass == 'panel close') {
        this.classList.toggle("active")
        this.nextElementSibling.className = 'panel open';
    }
}