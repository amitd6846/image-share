$('.slick_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 667,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

function myfun() {
    document.getElementById("output").innerHTML = "Hello There";
    // document.getElementById("demo").innerHTML = "Paragraph changed.";

}

function myfun2() {
    document.getElementById("output").innerHTML = "Hello There 2";
}

function mycal(a1, a2) {
    return a1 + a2;
}
// array
// var myary = ["amit", "pooja", "arnav", "kavita", "kalyani"]
var fruits = ["HTML", "CSS", "JavaScript", "SQL", "Python", "PHP", "jQuery", "Bootstrap", "XML"];




// document.getElementById("demo").innerHTML = fruits.constructor;


// EncodeURL & DecodeURL
// var myurl = window.location.href;
// var enco = encodeURI(myurl);
// var deco = decodeURI(enco);
// var res = "Encoded URI: " + enco + " <br> " + " Decoded URI: " + deco;

// Eval() function
// var x = 10;
// var y = 20;
// var a = eval("x * y") + "<br>";
// var b = eval("x + y + 2.5") + "<br>";
// var c = eval("y / x * 100 / 10 *555");
// var res = a + b + c;
document.getElementById("output").innerHTML = fruits.length;
console.log(fruits.length);