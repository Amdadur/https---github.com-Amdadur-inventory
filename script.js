//DATA
//declare shelves, items and expiration dates
const shelf_A1 = [
    ["Fudge Duo", "20 MAY 25", "18 OCT 24"],
    ["American Hard Gums", "20 FEB 25", "10 OCT 24", "28 FEB 24"],
    ["Aniseed Balls", "25 JAN 25", "07 DEC 24", "17 MAY 24", "24 AUG 24", "06 DEC 24"],
    ["Black Jacks & Fruit Salad", "28 SEP 25", "28 FEB 24"],
    ["Beer Bottles", "28 MAR 24", "28 NOV 24"],
    ["Bubblegum Bottles", "28 MAY 25", "28 JUL 24"],
];

const shelf_A2 = [
    ["Bubblegum Bonbons", "08 JUN 24"],
    ["Candy Necklaces", "04 OCT 24", "28 OCT 24"],
    ["Catherine Wheels", "28 NOV 25", "28 SEP 24", "28 FEB 24"],
    ["Clotted Cream Fudge", "10 FEB 24", "27 APR 24"],
];

const shelf_A3 = [
    ["Dolly Mixture", "28 SEP 25", "28 OCT 25", "28 DEC 25", "28 FEB 24"],
    ["Fizzy Cola Bottles", "28 MAY 24", "28 JUL 24"],
    ["Fizzy Dummies", "28 APR 24", "28 MAY 24"],
    ["Fizzy Strawberries", "06 JUN 24", "07 JUN 24", "28 JUL 24"],
];

const shelf_B1 = [
    ["Fried Eggs", "28 FEB 24", "28 SEP 24", "28 MAY 24"],
    ["Fruity Fangs", "28 MAR 24", "28 MAY 24"],
    ["Fruit Pips", "28 SEP 25", "28 JAN 24"],
    ["Fruit Pastilles", "28 OCT 25", "28 NOV 25", "28 DEC 25", "25 FEB 24"],
    ["Fruity Meerkats", "28 MAR 24", "28 MAY 24", "28 AUG 24"],
];

const shelf_B2 = [
    ["Giant Strawberries", "28 MAR 24", "28 JUL 24", "28 AUG 24", "28 SEP 24"],
    ["Gummy Bears", "28 MAR 24", "28 JUN 24", "28 MAY 24"],
    ["Jazzies", "28 FEB 24", "28 MAY 24"],
    ["Jelly Babies (Dusted)", "28 DEC 24"],
    ["Jelly Beans", "20 FEB 24"],
    ["Jelly Buttons", "28 OCT 25", "28 FEB 24"],
];

const shelf_B3 = [
    ["Jelly Rings", "28 JUL 24", "28 APR 24", "28 MAY 24"],
    ["Kola Cubes", "02 FEB 24", "10 MAR 24", "25 MAY 24"],
    ["Lemon Bonbons", "17 AUG 25", "20 APR 24", "04 MAY 24", "28 JAN 24"],
    ["Liquorice Comfits", "28 APR 24"],
    ["Liquorice Cream Rock", "01 JUN 24"],
    ["Liquorice Allsorts", "28 OCT 25", "28 FEB 24"],
];

const shelf_C1 = [
    ["Love Hearts", "28 SEP 25", "31 MAR 24", "31 JUL 24"],
    ["Luxury Fruit Jellies", "28 SEP 25", "28 OCT 25", "28 MAR 24"],
    ["Luxury Fruit Chews", "28 OCT 24", "28 JAN 24"],
    ["Milk Bottles", "20 FEB 24"],
    ["Snowies", "28 FEB 24", "28 MAY 24"],
    ["Strawberry Bonbons", "25 MAY 24", "28 DEC 24"],
    ["Mini Eggs", "07 OCT 24", "20 OCT 24"],
];

const shelf_C2 = [
    ["Mint Imperials", "25 JAN 24", "28 MAR 24"],
    ["Pineapple Chunks", "20 APR 24", "07 MAR 24", "06 APR 24"],
    ["Pear Drops", "25 MAR 24", "28 APR 24", "29 JUN 24"],
    ["Rum & Raisin Fudge", "20 FEB 24", "01 OCT 24"],
    ["Sherbet Lemon", "20 FEB 24", "28 MAY 24"],
    ["Sherbet Strawberries", "28 NOV 25", "25 FEB 24"],
];

const shelf_C3 = [
    ["Snowies", "28 FEB 24", "28 MAY 24"],
    ["Strawberry Bonbons", "25 MAY 24", "28 DEC 24"],

    ["Toffee Bonbons", "19 AUG 25", "10 JAN 24", "21 APR 24", "28 NOV 24"],
    ["Yoghurt Coated Raisins", "28 MAR 24"],
    ["Wine Gums", "28 AUG 25", "28 APR 24"],
    ["Wiggly Worms", "28 MAR 24", "28 APR 24", "28 MAY 24"],
];

const shelf_D1 = [
    ["ABC's", "19 FEB 24", "30 SEP 24"],
    ["American Hard Gums", "20 FEB 24", "28 OCT 24", "28 FEB 24"],
    ["Aniseed Balls", "07 DEC 24", "17 MAY 24", "24 AUG 24", "06 DEC 24"],
    ["Black Jacks & Fruit Salad", "28 SEP 25", "28 FEB 24"],
    ["Beer Bottles", "28 MAR 24", "28 JUN 24"],
    ["Bubblegum Bottles", "28 MAY 24", "28 JUL 24"],
];

const shelf_D2 = [
    ["Bubblegum Bonbons", "28 DEC 24"],
    ["Candy Necklaces", "04 OCT 24", "28 OCT 24"],
    ["Catherine Wheels", "28 NOV 25", "28 SEP 24", "28 FEB 24"],
    ["Clotted Cream Fudge", "10 FEB 24", "27 APR 24"],
];

const shelf_D3 = [
    ["Dolly Mixture", "28 SEP 25", "28 OCT 25", "28 DEC 25", "28 FEB 24"],
    ["Fizzy Cola Bottles", "28 MAY 24", "28 JUL 24"],
    ["Fizzy Dummies", "28 APR 24", "28 MAY 24"],
    ["Fizzy Fun Mix", "28 JUN 24"],
    ["Fizzy Strawberries", "28 MAR 24", "28 JUN 24", "28 JUL 24"],
];

const shelf_E1 = [
    ["Fried Eggs", "28 FEB 24"],
    ["Fruity Fangs", "28 MAR 24", "28 MAY 24"],
    ["Fruit Pips", "28 SEP 25", "28 JAN 24"],
    ["Fruit Pastilles", "28 OCT 25", "28 NOV 25", "28 DEC 25", "25 FEB 24"],
    ["Fruity Meerkats", "28 MAR 24", "28 MAY 24", "28 AUG 24"],
    ["Fudge Duo", "20 MAY 24"],
];

const shelf_E2 = [
    ["Giant Strawberries", "28 MAR 24", "28 JUL 24", "28 AUG 24", "28 SEP 24"],
    ["Gummy Bears", "28 MAR 24", "28 JUN 24", "28 MAY 24"],
    ["Jazzies", "28 FEB 24", "28 MAY 24"],
    ["Jelly Babies (Dusted)", "28 DEC 24"],
    ["Jelly Beans", "20 FEB 24"],
    ["Jelly Buttons", "28 OCT 25", "28 FEB 24"],
];

const shelf_E3 = [
    ["Jelly Rings", "28 JUL 24", "28 APR 24", "28 MAY 24"],
    ["Kola Cubes", "02 FEB 24", "10 MAR 24", "25 MAY 24"],
    ["Lemon Bonbons", "17 AUG 25", "20 APR 24", "04 MAY 24", "28 JAN 24"],
    ["Liquorice Comfits", "28 APR 24"],
    ["Liquorice Cream Rock", "01 JUN 24"],
    ["Liquorice Allsorts", "28 OCT 25", "28 FEB 24"],
];

const shelf_F1 = [
    ["Love Hearts", "28 SEP 25", "31 MAR 24", "31 JUL 24"],
    ["Luxury Fruit Jellies", "28 SEP 25", "28 OCT 25", "28 MAR 24"],
    ["Luxury Fruit Chews", "28 OCT 24", "28 JAN 24"],
    ["Milk Bottles", "20 FEB 24"],
    ["Milk Choc Raisins", "28 FEB 24"],
    ["Mini Eggs", "07 OCT 24", "20 OCT 24"],
];

const shelf_F2 = [
    ["Mint Imperials", "25 JAN 24", "28 MAR 24"],
    ["Pineapple Chunks", "20 APR 24", "07 MAR 24", "06 APR 24"],
    ["Pear Drops", "25 MAR 24", "28 APR 24", "29 JUN 24"],
    ["Rosie Apples", "25 FEB 24", "28 APR 24"],
    ["Sherbet Lemon", "20 FEB 24", "28 MAY 24"],
    ["Sherbet Strawberries", "28 NOV 25", "25 FEB 24"],
];

const shelf_F3 = [
    ["Strawberry Bonbons", "25 MAY 24", "28 DEC 24"],
    ["Milkshake Bottles", "28 SEP 25", "28 MAY 24", "28 JUN 24"],
    ["Trad Mint Humbugs", "28 APR 24"],
    ["Toffee Bonbons", "19 AUG 25", "08 JAN 24", "21 APR 24", "28 NOV 24"],
    ["Random Retros", "30 APR 24", "31 MAY 24"],
    ["Yorkshire Mix", "10 APR 24"],
];



//DOM
const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");

const b1 = document.querySelector(".b1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");

const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3");

const e1 = document.querySelector(".e1");
const e2 = document.querySelector(".e2");
const e3 = document.querySelector(".e3");

const f1 = document.querySelector(".f1");
const f2 = document.querySelector(".f2");
const f3 = document.querySelector(".f3");

var panels = document.getElementsByClassName("panel");
var btn = document.getElementsByClassName("button");

const slider = document.querySelector(".slider")
const shelfv = document.querySelector(".shelfView")
const prodv = document.querySelector(".productView")
const mycheck = document.querySelector(".myCheck")



//SHELFVIEW
//generate divs and content (name and dates) for each shelf 
function createShelves() {
    //create div for each item
    for (var i = 0; i < shelf_A1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        //work out number of dates to display
        if (shelf_A1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p class="exp">${shelf_A1[i][2]}</p><p class="exp">${shelf_A1[i][3]}</p><p class="exp">${shelf_A1[i][4]}</p>`;
        } else if (shelf_A1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p class="exp">${shelf_A1[i][2]}</p><p class="exp">${shelf_A1[i][3]}</p>`;
        } else if (shelf_A1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p class="exp">${shelf_A1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p>`;
        }
        a1.appendChild(item);
    }

    for (var i = 0; i < shelf_A2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_A2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p class="exp">${shelf_A2[i][2]}</p><p class="exp">${shelf_A2[i][3]}</p><p class="exp">${shelf_A2[i][4]}</p>`;
        } else if (shelf_A2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p class="exp">${shelf_A2[i][2]}</p><p class="exp">${shelf_A2[i][3]}</p>`;
        } else if (shelf_A2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p class="exp">${shelf_A2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p>`;
        }
        a2.appendChild(item);
    }

    for (var i = 0; i < shelf_A3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_A3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p class="exp">${shelf_A3[i][2]}</p><p class="exp">${shelf_A3[i][3]}</p><p class="exp">${shelf_A3[i][4]}</p>`;
        } else if (shelf_A3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p class="exp">${shelf_A3[i][2]}</p><p class="exp">${shelf_A3[i][3]}</p>`;
        } else if (shelf_A3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p class="exp">${shelf_A3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p>`;
        }
        a3.appendChild(item);
    }

    for (var i = 0; i < shelf_B1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_B1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p class="exp">${shelf_B1[i][2]}</p><p class="exp">${shelf_B1[i][3]}</p><p>${shelf_B1[i][4]}</p>`;
        } else if (shelf_B1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p class="exp">${shelf_B1[i][2]}</p><p class="exp">${shelf_B1[i][3]}</p>`;
        } else if (shelf_B1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p class="exp">${shelf_B1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p>`;
        }
        b1.appendChild(item);
    }

    for (var i = 0; i < shelf_B2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_B2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p class="exp">${shelf_B2[i][2]}</p><p class="exp">${shelf_B2[i][3]}</p><p class="exp">${shelf_B2[i][4]}</p>`;
        } else if (shelf_B2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p class="exp">${shelf_B2[i][2]}</p><p class="exp">${shelf_B2[i][3]}</p>`;
        } else if (shelf_B2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p class="exp">${shelf_B2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p>`;
        }
        b2.appendChild(item);
    }

    for (var i = 0; i < shelf_B3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_B3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p class="exp">${shelf_B3[i][2]}</p><p class="exp">${shelf_B3[i][3]}</p><p class="exp">${shelf_B3[i][4]}</p>`;
        } else if (shelf_B3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p class="exp">${shelf_B3[i][2]}</p><p class="exp">${shelf_B3[i][3]}</p>`;
        } else if (shelf_B3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p class="exp">${shelf_B3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p>`;
        }
        b3.appendChild(item);
    }

    for (var i = 0; i < shelf_C1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_C1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p class="exp">${shelf_C1[i][2]}</p><p class="exp">${shelf_C1[i][3]}</p><p class="exp">${shelf_C1[i][4]}</p>`;
        } else if (shelf_C1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p class="exp">${shelf_C1[i][2]}</p><p class="exp">${shelf_C1[i][3]}</p>`;
        } else if (shelf_C1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p class="exp">${shelf_C1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p>`;
        }
        c1.appendChild(item);
    }

    for (var i = 0; i < shelf_C2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_C2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p class="exp">${shelf_C2[i][2]}</p><p class="exp">${shelf_C2[i][3]}</p><p class="exp">${shelf_C2[i][4]}</p>`;
        } else if (shelf_C2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p class="exp">${shelf_C2[i][2]}</p><p class="exp">${shelf_C2[i][3]}</p>`;
        } else if (shelf_C2[i][2] != undefined) { 
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p class="exp">${shelf_C2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p>`;
        }
        c2.appendChild(item);
    }

    for (var i = 0; i < shelf_C3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_C3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p class="exp">${shelf_C3[i][2]}</p><p class="exp">${shelf_C3[i][3]}</p><p class="exp">${shelf_C3[i][4]}</p>`;
        } else if (shelf_C3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p class="exp">${shelf_C3[i][2]}</p><p class="exp">${shelf_C3[i][3]}</p>`;
        } else if (shelf_C3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p class="exp">${shelf_C3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p>`;
        }
        c3.appendChild(item);
    }

    for (var i = 0; i < shelf_D1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_D1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p class="exp">${shelf_D1[i][2]}</p><p class="exp">${shelf_D1[i][3]}</p><p class="exp">${shelf_D1[i][4]}</p>`;
        } else if (shelf_D1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p class="exp">${shelf_D1[i][2]}</p><p class="exp">${shelf_D1[i][3]}</p>`;
        } else if (shelf_D1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p class="exp">${shelf_D1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p>`;
        }
        d1.appendChild(item);
    }

    for (var i = 0; i < shelf_D2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_D2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p class="exp">${shelf_D2[i][2]}</p><p class="exp">${shelf_D2[i][3]}</p><p class="exp">${shelf_D2[i][4]}</p>`;
        } else if (shelf_D2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p class="exp">${shelf_D2[i][2]}</p><p class="exp">${shelf_D2[i][3]}</p>`;
        } else if (shelf_D2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p class="exp">${shelf_D2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p>`;
        }
        d2.appendChild(item);
    }

    for (var i = 0; i < shelf_D3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_D3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p class="exp">${shelf_D3[i][2]}</p><p class="exp">${shelf_D3[i][3]}</p><p class="exp">${shelf_D3[i][4]}</p>`;
        } else if (shelf_D3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p class="exp">${shelf_D3[i][2]}</p><p class="exp">${shelf_D3[i][3]}</p>`;
        } else if (shelf_D3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p class="exp">${shelf_D3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p>`;
        }
        d3.appendChild(item);
    }


    for (var i = 0; i < shelf_E1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_E1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p class="exp">${shelf_E1[i][2]}</p><p class="exp">${shelf_E1[i][3]}</p><p class="exp">${shelf_E1[i][4]}</p>`;
        } else if (shelf_E1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p class="exp">${shelf_E1[i][2]}</p><p class="exp">${shelf_E1[i][3]}</p>`;
        } else if (shelf_E1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p class="exp">${shelf_E1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p>`;
        }
        e1.appendChild(item);
    }

    for (var i = 0; i < shelf_E2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_E2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p class="exp">${shelf_E2[i][2]}</p><p class="exp">${shelf_E2[i][3]}</p><p class="exp">${shelf_E2[i][4]}</p>`;
        } else if (shelf_E2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p class="exp">${shelf_E2[i][2]}</p><p class="exp">${shelf_E2[i][3]}</p>`;
        } else if (shelf_E2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p class="exp">${shelf_E2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p>`;
        }
        e2.appendChild(item);
    }

    for (var i = 0; i < shelf_E3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_E3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p class="exp">${shelf_E3[i][2]}</p><p class="exp">${shelf_E3[i][3]}</p><p class="exp">${shelf_E3[i][4]}</p>`;
        } else if (shelf_E3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p class="exp">${shelf_E3[i][2]}</p><p class="exp">${shelf_E3[i][3]}</p>`;
        } else if (shelf_E3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p class="exp">${shelf_E3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p>`;
        }
        e3.appendChild(item);
    }

    for (var i = 0; i < shelf_F1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_F1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p class="exp">${shelf_F1[i][2]}</p><p class="exp">${shelf_F1[i][3]}</p><p class="exp">${shelf_F1[i][4]}</p>`;
        } else if (shelf_F1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p class="exp">${shelf_F1[i][2]}</p><p class="exp">${shelf_F1[i][3]}</p>`;
        } else if (shelf_F1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p class="exp">${shelf_F1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p>`;
        }
        f1.appendChild(item);
    }

    for (var i = 0; i < shelf_F2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_F2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p class="exp">${shelf_F2[i][2]}</p><p class="exp">${shelf_F2[i][3]}</p><p class="exp">${shelf_F2[i][4]}</p>`;
        } else if (shelf_F2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p class="exp">${shelf_F2[i][2]}</p><p class="exp">${shelf_F2[i][3]}</p>`;
        } else if (shelf_F2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p class="exp">${shelf_F2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p>`;
        }
        f2.appendChild(item);
    }

    for (var i = 0; i < shelf_F3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_F3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p class="exp">${shelf_F3[i][2]}</p><p class="exp">${shelf_F3[i][3]}</p><p class="exp">${shelf_F3[i][4]}</p>`;
        } else if (shelf_F3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p class="exp">${shelf_F3[i][2]}</p><p class="exp">${shelf_F3[i][3]}</p>`;
        } else if (shelf_F3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p class="exp">${shelf_F3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p>`;
        }
        f3.appendChild(item);
    }
}

createShelves();



//PRODUCTVIEW 
//combine shelves items / sort alphabetically / remove duplicates
function createProductList(){
    //used to sort
    function compare(a, b){
        if(a[0] < b[0]) { return -1; }
        if(a[0] > b[0]) { return 1; }
        return 0;
    }

    //combine and sort
    var productList = shelf_A1.concat(shelf_A2, shelf_A3, shelf_B1,
        shelf_B2, shelf_B3, shelf_C1, shelf_C2, shelf_C3, shelf_D1, shelf_D2, shelf_D3, shelf_E1, shelf_E2, shelf_E3, shelf_F1, shelf_F2, shelf_F3
        ).sort(compare);

    //Remove item array if item name is equal to previous item name 
    for (var x = 1; x<productList.length; x++){
        if(productList[x][0] == productList[x-1][0]){
        productList.splice(x,1)
        }
    }

    //dom
    const containerProduct = document.querySelector(".container-Product")

    //generate divs (item, name, dates) for each item on product list
    for (var i = 0; i < productList.length; i++) {
        var eachDiv = document.createElement("div");
        eachDiv.setAttribute("class", "newProdDiv");
        containerProduct.appendChild(eachDiv);

        var eachProd = document.createElement("div");
        eachProd.setAttribute("class", "newProdH1");
        eachProd.innerHTML = `<h1>${productList[i][0]}</h1>`
        eachDiv.appendChild(eachProd);

            for (var j = 1; j < productList[i].length; j++){
                var eachDate = document.createElement("div");
                eachDate.setAttribute("class", "newDiv pl");
                eachDate.innerHTML = `<p class="exp">${productList[i][j]}</p>`
                eachDiv.appendChild(eachDate);
        }
    }
}

createProductList()



//CALCULATE REMAINING DAYS
//select all dates
document.querySelectorAll(".exp").forEach(function (e) {
this.calculate(e);
})

//convert current date and selected date to convert into days for comparison 
function calculate(e){
    //collect product's first day and today's date
    let date1 = e.innerText;
    let date2 = new Date().toLocaleDateString("en-GB");

    //split into array
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
    var total_days = years_passed * 365 + months_passed + days_passed;

    //hide expired dates 
    if (total_days < 0) {
        e.style.display = "none";

        //ShelfView - remove product without dates
        const children = [...e.parentElement.children]
        if(children.slice(1).every(el=>el.style.display==="none")){
            e.parentElement.style.display="none";
        }
        
        //ProductList - remove empty date divs
        if (e.parentElement.classList.contains("pl")){
        e.parentElement.style.display="none";}
    }

    //change color of parent div based on total days
    if (total_days > -1 && total_days < 8) {
        e.parentElement.style.backgroundColor = "#ff7171";
    }

    if (total_days > 7 && total_days < 31) {
        e.parentElement.style.backgroundColor = "#ccaaff";
    }

    if (total_days > 30 && total_days < 61) {
        e.parentElement.style.backgroundColor = "#aaccff";

    }
};



//SHELF BUTTON COLOR
//dom
const shlfA = document.querySelector(".shelf_A");
const shlfB = document.querySelector(".shelf_B");
const shlfC = document.querySelector(".shelf_C");
const shlfD = document.querySelector(".shelf_D");
const shlfE = document.querySelector(".shelf_E");
const shlfF = document.querySelector(".shelf_F");

const divsA = shlfA.querySelectorAll("div > div.newDiv");
const divsB = shlfB.querySelectorAll("div > div.newDiv");
const divsC = shlfC.querySelectorAll("div > div.newDiv");
const divsD = shlfD.querySelectorAll("div > div.newDiv");
const divsE = shlfE.querySelectorAll("div > div.newDiv");
const divsF = shlfF.querySelectorAll("div > div.newDiv");

//for each shelf, get a list of exiry date indicator colors used
var arrA = [];
var arrB = [];
var arrC = [];
var arrD = [];
var arrE = [];
var arrF = [];

for (var i = 0; i < divsA.length; i++){
    arrA[i] = divsA[i].style.backgroundColor;
}
for (var i = 0; i < divsB.length; i++){
    arrB[i] = divsB[i].style.backgroundColor;
}
for (var i = 0; i < divsC.length; i++){
    arrC[i] = divsC[i].style.backgroundColor;
}
for (var i = 0; i < divsD.length; i++){
    arrD[i] = divsD[i].style.backgroundColor;
}
for (var i = 0; i < divsE.length; i++){
    arrE[i] = divsE[i].style.backgroundColor;
}
for (var i = 0; i < divsF.length; i++){
    arrF[i] = divsF[i].style.backgroundColor;
}

//set shelf button color by closest expiration date i.e. red > lilac > blue > white
if (arrA.includes("rgb(255, 113, 113)")){shlfA.parentElement.previousElementSibling.style.backgroundColor = "#ff7171";}
else if (arrA.includes("rgb(204, 170, 255)")){shlfA.parentElement.previousElementSibling.style.backgroundColor = "#ccaaff";}
else if (arrA.includes("rgb(170, 204, 255)")){shlfA.parentElement.previousElementSibling.style.backgroundColor = "#aaccff";}
else {arrA.includes("rgb(255, 255, 255)")};

if (arrB.includes("rgb(255, 113, 113)")){shlfB.parentElement.previousElementSibling.style.backgroundColor = "#ff7171";}
else if (arrB.includes("rgb(204, 170, 255)")){shlfB.parentElement.previousElementSibling.style.backgroundColor = "#ccaaff";}
else if (arrB.includes("rgb(170, 204, 255)")){shlfB.parentElement.previousElementSibling.style.backgroundColor = "#aaccff";}
else {arrB.includes("rgb(255, 255, 255)")};

if (arrC.includes("rgb(255, 113, 113)")){shlfC.parentElement.previousElementSibling.style.backgroundColor = "#ff7171";}
else if (arrC.includes("rgb(204, 170, 255)")){shlfC.parentElement.previousElementSibling.style.backgroundColor = "#ccaaff";}
else if (arrC.includes("rgb(170, 204, 255)")){shlfC.parentElement.previousElementSibling.style.backgroundColor = "#aaccff";}
else {arrC.includes("rgb(255, 255, 255)")};

if (arrD.includes("rgb(255, 113, 113)")){shlfD.parentElement.previousElementSibling.style.backgroundColor = "#ff7171";}
else if (arrD.includes("rgb(204, 170, 255)")){shlfD.parentElement.previousElementSibling.style.backgroundColor = "#ccaaff";}
else if (arrD.includes("rgb(170, 204, 255)")){shlfD.parentElement.previousElementSibling.style.backgroundColor = "#aaccff";}
else {arrD.includes("rgb(255, 255, 255)")};

if (arrE.includes("rgb(255, 113, 113)")){shlfE.parentElement.previousElementSibling.style.backgroundColor = "#ff7171";}
else if (arrE.includes("rgb(204, 170, 255)")){shlfE.parentElement.previousElementSibling.style.backgroundColor = "#ccaaff";}
else if (arrE.includes("rgb(170, 204, 255)")){shlfE.parentElement.previousElementSibling.style.backgroundColor = "#aaccff";}
else {arrE.includes("rgb(255, 255, 255)")};

if (arrF.includes("rgb(255, 113, 113)")){shlfF.parentElement.previousElementSibling.style.backgroundColor = "#ff7171";}
else if (arrF.includes("rgb(204, 170, 255)")){shlfF.parentElement.previousElementSibling.style.backgroundColor = "#ccaaff";}
else if (arrF.includes("rgb(170, 204, 255)")){shlfF.parentElement.previousElementSibling.style.backgroundColor = "#aaccff";}
else {arrF.includes("rgb(255, 255, 255)")};



//SHELFVIEW - BUTTON AND PANELS
//assign function to all buttons
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", toggleItem, false);
}

//add active to selected classList
//remove active class from all buttons and add close class to all panels. 
//if selected panel is closed, add active class to button and add open class to panel
function toggleItem() {
    this.classList.toggle("active");
    var itemClass = this.nextElementSibling.className;
    for (i = 0; i < panels.length; i++) {
        btn[i].classList.remove("active");
        panels[i].className = "panel close";
    }
    if (itemClass == "panel close") {
        this.classList.toggle("active");
        this.nextElementSibling.className = "panel open";
    }
}

const header = document.querySelector(".header")
const howto = document.querySelector(".howto")
const button0 = document.querySelector(".button0")

button0.addEventListener("click", toggleMenu);

function toggleMenu() {
    if(button0.className == "button0"){
    button0.classList.toggle("active");
    header.className = "header min"
}
    else{
        button0.classList.remove("active");
        header.className = "header max"
    }
}




//SLIDER
//event listener
slider.addEventListener("click", toggleItem1);

//if slider is clicked on, hide current section and show other section
function toggleItem1() {
    if (mycheck.checked == true){
        prodv.style.display ="none";
        shelfv.style.display ="block";
    }
    if (mycheck.checked == false) {
        prodv.style.display ="block";
        shelfv.style.display ="none";
    }
}

//RESPONSIVE
//image change to mobile 
var viewportWidth= window.innerWidth;
if (viewportWidth <= 844){
    howto.src = "/images/howto_m.gif";
    howto.className = "howtoM";
}


window.onresize = resize;
function resize(){

var viewportWidth= window.innerWidth;
if (viewportWidth <= 844){
    howto.src = "/images/howto_m.gif";
    howto.className = "howtoM";

    if (header.className == "header min"){
        header.className = "header max"
        howto.style.display = "block";
        button0.classList.remove("active");
    }

}

//image change to desktop+tablet 
if (viewportWidth > 844){
    howto.src = "/images/howto.gif";
howto.className = "howto";
}

}
