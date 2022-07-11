//declare shelves, items and expiration dates
const shelf_A1 = [
    ["Strawberry Milkshakes", "28 SEP 22", "28 MAY 23"],
    ["Bubblegum Bottles", "28 AUG 22", "28 MAY 23"],
    ["Fizzy Cola Bottles", "28 JUL 22", "28 SEP 22", "28 DEC 22", "28 JUL 23"],
    ["Beer Bottles", "28 MAR 23", "28 JUN 23"],
];
    
const shelf_A2 = [
    ["Strawberry Milkshakes", "28 SEP 22", "28 MAY 23"],
    ["Milk Bottles", "28 NOV 22", "28 DEC 22", "28 JAN 23"],
    ["Fruity Fangs", "28 JAN 23", "28 MAR 23", "28 MAY 23"],
    ["Fizzy Strawberries", "28 SEP 22", "28 MAR 23", "28 JUN 23"],
    ["Giant Strawberries", "28 AUG 22", "28 DEC 22", "28 MAR 23", "28 APR 23"],
];
const shelf_A3 = [
    ["Love Hearts", "28 SEP 22", "31 JAN 23", "31 MAR 23", "31 MAY 23"],
    ["Random Retros", "28 FEB 23", "30 APR 23"],
    ["Black Jacks & Fruit Salad", "28 SEP 22"],
    ["Luxury Fruit Chews", "28 JAN 23", "28 MAR 23", "28 OCT 23"],
];
    
const shelf_B1 = [
    ["Rhubarb & Custard", "14 AUG 23", "28 AUG 23", "22 SEP 23", "21 DEC 23", "29 MAR 24"],
    ["Pineapple Chunks", "20 APR 23", "07 MAR 24"],
    ["Sherbet Strawberries", "28 NOV 22", "28 JAN 23"],
    ["Sherbet Lemon", "28 JUN 22", "28 SEP 22", "28 JAN 23"],
];
    
const shelf_B2 = [
    ["Kola Cubes", "23 SEP 23", "02 FEB 24", "10 MAR 24"],
    ["Pear Drops", "22 MAR 23", "06 OCT 23", "28 APR 24"],
    ["Yorkshire Mix", "10 APR 24"],
];
    
const shelf_B3 = [
    ["Trad Mint Humbugs", "28 APR 23"],
    ["ABC's", "28 JAN 23", "30 SEP 23"],
    ["Rosie Apples", "22 FEB 24", "28 FEB 24"],
    ["Fruit Pips", "28 SEP 22", "28 JAN 23"],
];
    
const shelf_C1 = [
    ["Bubblegum Bonbons", "18 MAY 23"],
    ["Lemon Bonbons", "17 AUG 22", "28 NOV 22", "20 APR 23", "04 MAY 23"],
    ["Toffee Bonbons", "15 JUL 22", "19 AUG 22", "10 JAN 23", "21 APR 23"],
];
    
const shelf_C2 = [
    ["Strawberry Bonbons", "18 MAY 23", "28 MAY 23"],
    ["Bubblegum Bonbons", "18 MAY 23"],
    ["Jelly Buttons", "28 OCT 22"],
    ["Liquorice Comfits", "28 JAN 23", "28 APR 23"],
];
    
const shelf_C3 = [
    ["Catherine Wheels", "28 NOV 22", "28 SEP 23", "28 FEB 24"],
    ["Liquorice Cream Rock", "01 JUN 23"],
    ["Liquorice Allsorts", "28 OCT 22"],
];
    
const shelf_D1 = [
    ["American Hard Gums", "28 OCT 22", "28 JAN 23", "28 FEB 23"],
    ["Luxury Fruit Jellies", "28 JUL 22", "28 SEP 22", "28 OCT 22", "28 DEC 22"],
    ["Fruity Meerkats", "28 SEP 22", "28 NOV 22", "28 MAR 23", "28 MAY 23"],
];
    
const shelf_D2 = [
    ["Fudge Duo", "27 SEP 22", "11 FEB 23"],
    ["Rum & Raisin Fudge", "29 JUL 22", "11 OCT 22", "02 DEC 22"],
    ["Clotted Cream Fudge", "26 JAN 23", "01 FEB 23", "04 FEB 23"],
];
    
const shelf_D3 = [
    ["Dolly Mixture", "28 JUN 22", "28 OCT 22", "28 DEC 22"],
    ["Fruit Pastilles", "28 MAY 22", "28 OCT 22", "28 NOV 22", "28 DEC 22", "28 JAN 23"],
    ["Candy Necklaces", "28 JUN 23", "28 OCT 23"],
];
    
const shelf_E1 = [
    ["Fizzy Fun Mix", "28 JUL 22", "28 SEP 22", "28 SEP 23", "28 FEB 23"],
    ["Fried Eggs", "28 FEB 23"],
    ["Jelly Babies (Dusted)", "28 JUL 22"],
];
    
const shelf_E2 = [
    ["Gummy Bears", "28 JAN 23", "28 MAY 23"],
    ["Wriggly Worms", "28 MAR 23", "28 APR 23", "28 MAY 23"],
    ["Jelly Rings", "28 APR 23", "28 MAY 23"],
];
    
const shelf_E3 = [
    ["Wine Gums", "28 AUG 22", "28 APR 23"],
    ["Jelly Beans", "04 DEC 22", "01 DEC 23", "16 DEC 23", "30 JAN 24"],
];
    
const shelf_F1 = [
    ["Mint Imperials", "28 JUL 22", "22 JAN 23"],
    ["Aniseed Balls", "07 DEC 23", "17 MAY 24", "23 AUG 24", "06 DEC 24"],
];
    
const shelf_F2 = [
    ["Yoghurt Coated Raisins", "28 MAR 23"],
    ["Milk Choc Raisins", "28 JUL 22", "28 NOV 22", "28 FEB 23"],
    ["Snowies", "28 FEB 23"],
    ["Jazzies", "28 OCT 22", "28 JAN 23"],
];
    
const shelf_F3 = [
    ["Mini Eggs", "10 MAY 23", "21 JUL 23"],
    ];

//DOM
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

//populate shelves
function create() {
    //create div for each item
    for (var i = 0; i < shelf_A1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        //work out number of dates to display
        if (shelf_A1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p>${shelf_A1[i][2]}</p><p>${shelf_A1[i][3]}</p><p>${shelf_A1[i][4]}</p>`;
        } else if (shelf_A1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p>${shelf_A1[i][2]}</p><p>${shelf_A1[i][3]}</p>`;
        } else if (shelf_A1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p><p>${shelf_A1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_A1[i][0]}</h1><p class="exp">${shelf_A1[i][1]}</p>`;
        }
        a1.appendChild(item);
    }

    for (var i = 0; i < shelf_A2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_A2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p>${shelf_A2[i][2]}</p><p>${shelf_A2[i][3]}</p><p>${shelf_A2[i][4]}</p>`;
        } else if (shelf_A2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p>${shelf_A2[i][2]}</p><p>${shelf_A2[i][3]}</p>`;
        } else if (shelf_A2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p><p>${shelf_A2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_A2[i][0]}</h1><p class="exp">${shelf_A2[i][1]}</p>`;
        }
        a2.appendChild(item);
    }

    for (var i = 0; i < shelf_A3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_A3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p>${shelf_A3[i][2]}</p><p>${shelf_A3[i][3]}</p><p>${shelf_A3[i][4]}</p>`;
        } else if (shelf_A3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p>${shelf_A3[i][2]}</p><p>${shelf_A3[i][3]}</p>`;
        } else if (shelf_A3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p><p>${shelf_A3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_A3[i][0]}</h1><p class="exp">${shelf_A3[i][1]}</p>`;
        }
        a3.appendChild(item);
    }

    for (var i = 0; i < shelf_E1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_E1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p>${shelf_E1[i][2]}</p><p>${shelf_E1[i][3]}</p><p>${shelf_E1[i][4]}</p>`;
        } else if (shelf_E1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p>${shelf_E1[i][2]}</p><p>${shelf_E1[i][3]}</p>`;
        } else if (shelf_E1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p><p>${shelf_E1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_E1[i][0]}</h1><p class="exp">${shelf_E1[i][1]}</p>`;
        }
        e1.appendChild(item);
    }

    for (var i = 0; i < shelf_E2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_E2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p>${shelf_E2[i][2]}</p><p>${shelf_E2[i][3]}</p><p>${shelf_E2[i][4]}</p>`;
        } else if (shelf_E2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p>${shelf_E2[i][2]}</p><p>${shelf_E2[i][3]}</p>`;
        } else if (shelf_E2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p><p>${shelf_E2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_E2[i][0]}</h1><p class="exp">${shelf_E2[i][1]}</p>`;
        }
        e2.appendChild(item);
    }

    for (var i = 0; i < shelf_E3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_E3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p>${shelf_E3[i][2]}</p><p>${shelf_E3[i][3]}</p><p>${shelf_E3[i][4]}</p>`;
        } else if (shelf_E3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p>${shelf_E3[i][2]}</p><p>${shelf_E3[i][3]}</p>`;
        } else if (shelf_E3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p><p>${shelf_E3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_E3[i][0]}</h1><p class="exp">${shelf_E3[i][1]}</p>`;
        }
        e3.appendChild(item);
    }

    for (var i = 0; i < shelf_F1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_F1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p>${shelf_F1[i][2]}</p><p>${shelf_F1[i][3]}</p><p>${shelf_F1[i][4]}</p>`;
        } else if (shelf_F1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p>${shelf_F1[i][2]}</p><p>${shelf_F1[i][3]}</p>`;
        } else if (shelf_F1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p><p>${shelf_F1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_F1[i][0]}</h1><p class="exp">${shelf_F1[i][1]}</p>`;
        }
        f1.appendChild(item);
    }

    for (var i = 0; i < shelf_F2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_F2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p>${shelf_F2[i][2]}</p><p>${shelf_F2[i][3]}</p><p>${shelf_F2[i][4]}</p>`;
        } else if (shelf_F2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p>${shelf_F2[i][2]}</p><p>${shelf_F2[i][3]}</p>`;
        } else if (shelf_F2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p><p>${shelf_F2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_F2[i][0]}</h1><p class="exp">${shelf_F2[i][1]}</p>`;
        }
        f2.appendChild(item);
    }

    for (var i = 0; i < shelf_F3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_F3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p>${shelf_F3[i][2]}</p><p>${shelf_F3[i][3]}</p><p>${shelf_F3[i][4]}</p>`;
        } else if (shelf_F3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p>${shelf_F3[i][2]}</p><p>${shelf_F3[i][3]}</p>`;
        } else if (shelf_F3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p><p>${shelf_F3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_F3[i][0]}</h1><p class="exp">${shelf_F3[i][1]}</p>`;
        }
        f3.appendChild(item);
    }

    for (var i = 0; i < shelf_B1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_B1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p>${shelf_B1[i][2]}</p><p>${shelf_B1[i][3]}</p><p>${shelf_B1[i][4]}</p>`;
        } else if (shelf_B1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p>${shelf_B1[i][2]}</p><p>${shelf_B1[i][3]}</p>`;
        } else if (shelf_B1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p><p>${shelf_B1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_B1[i][0]}</h1><p class="exp">${shelf_B1[i][1]}</p>`;
        }
        b1.appendChild(item);
    }

    for (var i = 0; i < shelf_B2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_B2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p>${shelf_B2[i][2]}</p><p>${shelf_B2[i][3]}</p><p>${shelf_B2[i][4]}</p>`;
        } else if (shelf_B2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p>${shelf_B2[i][2]}</p><p>${shelf_B2[i][3]}</p>`;
        } else if (shelf_B2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p><p>${shelf_B2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_B2[i][0]}</h1><p class="exp">${shelf_B2[i][1]}</p>`;
        }
        b2.appendChild(item);
    }

    for (var i = 0; i < shelf_B3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_B3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p>${shelf_B3[i][2]}</p><p>${shelf_B3[i][3]}</p><p>${shelf_B3[i][4]}</p>`;
        } else if (shelf_B3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p>${shelf_B3[i][2]}</p><p>${shelf_B3[i][3]}</p>`;
        } else if (shelf_B3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p><p>${shelf_B3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_B3[i][0]}</h1><p class="exp">${shelf_B3[i][1]}</p>`;
        }
        b3.appendChild(item);
    }

    for (var i = 0; i < shelf_C1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_C1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p>${shelf_C1[i][2]}</p><p>${shelf_C1[i][3]}</p><p>${shelf_C1[i][4]}</p>`;
        } else if (shelf_C1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p>${shelf_C1[i][2]}</p><p>${shelf_C1[i][3]}</p>`;
        } else if (shelf_C1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p><p>${shelf_C1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_C1[i][0]}</h1><p class="exp">${shelf_C1[i][1]}</p>`;
        }
        c1.appendChild(item);
    }

    for (var i = 0; i < shelf_C2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_C2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p>${shelf_C2[i][2]}</p><p>${shelf_C2[i][3]}</p><p>${shelf_C2[i][4]}</p>`;
        } else if (shelf_C2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p>${shelf_C2[i][2]}</p><p>${shelf_C2[i][3]}</p>`;
        } else if (shelf_C2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p><p>${shelf_C2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_C2[i][0]}</h1><p class="exp">${shelf_C2[i][1]}</p>`;
        }
        c2.appendChild(item);
    }

    for (var i = 0; i < shelf_C3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_C3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p>${shelf_C3[i][2]}</p><p>${shelf_C3[i][3]}</p><p>${shelf_C3[i][4]}</p>`;
        } else if (shelf_C3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p>${shelf_C3[i][2]}</p><p>${shelf_C3[i][3]}</p>`;
        } else if (shelf_C3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p><p>${shelf_C3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_C3[i][0]}</h1><p class="exp">${shelf_C3[i][1]}</p>`;
        }
        c3.appendChild(item);
    }

    for (var i = 0; i < shelf_D1.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_D1[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p>${shelf_D1[i][2]}</p><p>${shelf_D1[i][3]}</p><p>${shelf_D1[i][4]}</p>`;
        } else if (shelf_D1[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p>${shelf_D1[i][2]}</p><p>${shelf_D1[i][3]}</p>`;
        } else if (shelf_D1[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p><p>${shelf_D1[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_D1[i][0]}</h1><p class="exp">${shelf_D1[i][1]}</p>`;
        }
        d1.appendChild(item);
    }

    for (var i = 0; i < shelf_D2.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_D2[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p>${shelf_D2[i][2]}</p><p>${shelf_D2[i][3]}</p><p>${shelf_D2[i][4]}</p>`;
        } else if (shelf_D2[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p>${shelf_D2[i][2]}</p><p>${shelf_D2[i][3]}</p>`;
        } else if (shelf_D2[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p><p>${shelf_D2[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_D2[i][0]}</h1><p class="exp">${shelf_D2[i][1]}</p>`;
        }
        d2.appendChild(item);
    }

    for (var i = 0; i < shelf_D3.length; i++) {
        var item = document.createElement("div");
        item.setAttribute("class", "newDiv");

        if (shelf_D3[i][4] != undefined) {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p>${shelf_D3[i][2]}</p><p>${shelf_D3[i][3]}</p><p>${shelf_D3[i][4]}</p>`;
        } else if (shelf_D3[i][3] != undefined) {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p>${shelf_D3[i][2]}</p><p>${shelf_D3[i][3]}</p>`;
        } else if (shelf_D3[i][2] != undefined) {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p><p>${shelf_D3[i][2]}</p>`;
        } else {
            item.innerHTML = `<h1>${shelf_D3[i][0]}</h1><p class="exp">${shelf_D3[i][1]}</p>`;
        }
        d3.appendChild(item);
    }
}

create();

//select all dates
document.querySelectorAll(".exp").forEach(function (e) {
this.calculate(e);
})

function calculate(e){
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
    var total_days = years_passed * 365 + months_passed + days_passed;

    //hide expired dates and add class to next date in array
    if (total_days < 0) {
        e.style.display = "none";
        e.nextElementSibling.setAttribute("class", "exp");
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


//rerun calculate() after removing expired dates
document.querySelectorAll(".exp").forEach(function (e) {
    this.calculate(e);
})

//DOM
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

//get list of item colors to determine color of shelf button i.e. red > lilac > blue > white
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


//DOM - get all button and panels
var panels = document.getElementsByClassName("panel");
var btn = document.getElementsByClassName("button");

//cycle through all buttons and assign function
for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
    //add active to selected classList. remove active class from all buttons and add close class to all panels.
    this.classList.toggle("active");
    var itemClass = this.nextElementSibling.className;
    for (i = 0; i < panels.length; i++) {
        btn[i].classList.remove("active");
        panels[i].className = "panel close";
    }
    //if selected panel is closed, add active class and change to open
    if (itemClass == "panel close") {
        this.classList.toggle("active");
        this.nextElementSibling.className = "panel open";
    }
}
