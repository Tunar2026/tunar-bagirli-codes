// 1
let programist = "programist";
programist = programist.toUpperCase();
console.log(programist);

//2
let CODING = "CODING";
CODING = CODING.toLowerCase();
console.log(CODING);

//3
let programming = "Mən proqramlaşdırmanı sevirəm";
programming = programming.indexOf("sev");
console.log(programming);

//4
let js= "JavaScript çox maraqlıdır";
js = js.includes("maraqlıdır");
console.log(js);

//5
let salam = "Salam , dostlar!";
salam = salam.replace ("dostlar", "dünya");
console.log(salam);

//6
let code = "   Kod yazmaq əyləncəlidir   ";
code = code.trim(" ");
console.log(code);

//7
let frontend = "Frontend";
frontend = frontend.slice(0, 5);
console.log(frontend);

//8
let htmlCssJs = "HTML, CSS, JS";
htmlCssJs = htmlCssJs.split(", ");
console.log(htmlCssJs);

//9
let kitabxana ="kitabxana";
kitabxana = kitabxana.slice((-3));
console.log(kitabxana);

//t10
let Bakı = "  Bakı gözəl şəhərdir  ";
Bakı = Bakı.trim().toUpperCase().split(" ");
console.log(Bakı);