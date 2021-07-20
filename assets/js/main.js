function getDifference() {
    let year1 = document.getElementById('year1').value;
    let year2 = document.getElementById('year2').value;
    let result = document.getElementById('result');


    // variant 1: using Math.abs, elegant and short
    // result.innerHTML = Math.abs(year1 - year2);

    // variant 2: using a conditional operator, still elegant and short
    // result.innerHTML = year1 > year2 ? year1 - year2 : year2 - year1;

    // variant 3: using if .. else .. , the usual way, but much code...  
    if (year1 > year2) {
        result.innerHTML = year1 - year2;
    } else {
        result.innerHTML = year2 - year1;
    }
}