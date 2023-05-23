//მოცემული გვაქვს 2D მასივი, მისი ზომა ფიქსირებულად 3x3-ზეა:


//მარცხენა დიაგონალი დავარქვათ 5, 50 და -10 რიცხვების ერთობას.
//მარჯვენა დიაგონალი დავარქვათ 20, 50, 0 რიცხვების ერთობას.

//დათვალეთ ამ დიაგონალების ჯამი და ჩაწერეთ ცვლადში let sumOfDiagonals (number).


const array2d = [
    [5, 10, 20],
    [3, 50, 17],
    [0, 18, -10]
];

// pirvelis 0index, meores 1 indexze, mesames meore indexze
//meore meore indexi, pirveli, meore
let rightDiagonal =[array2d[0][0],array2d[1][1],array2d[2][2]]
let leftDiagonal = [array2d[2][0], array2d[1][1],array2d[0][2]]


