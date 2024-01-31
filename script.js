// alert("hello")
// let dey5in='Good morning rana dey5in';
// console.log('siraj=', dey5in);
// var T1=[["Siraj","Nour","Khouloud"],
// ["Siraj","Nour","Khouloud"],
// ["Siraj","Nour","Khouloud"]];
// var visitorName = prompt("What's your name : ")
// console.log(typeof(null));
// console.log(typeof(0));
// console.log((1/0));
// const car = {type:"Fiat", model:"500", color:"white"};
// let dey5in=car.model;
// console.log('siraj=', dey5in);
// console.log("nour=",typeof(Nour));
// console.log(5!=='5');
// console.log("undefined",Boolean(undefined));
// console.log("null",Boolean(null));
// console.log("NaN",Boolean(NaN));
// console.log(" ",Boolean(""));
// console.log("0",Boolean(0));
// console.log("false",Boolean(false));
// var x = 1 // x is truthy
// var y = 0 // y is falsey
// var z = null // z is falsey
// console.log(x && y) // prints 0
// console.log(z && y) // prints null
// console.log(z || x) // prints 1
// console.log(y || z) // prints null

// var x = "google";
// x += "." + "com"
// console.log(x) 

// var name = "Lucy";
// var age="20"
// console.log(`hello, my name is ${name} I am ${age} !`)
function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		break;
	case 2:
		console.log( 'Yellow' );
		break;
	case "x":
		console.log( 'Green' );
		break;
	default:
		console.log( 'Unknown code' );
	}
}
 decodeColor("x");