function les1(a, b) {
    console.log("Chu vi hình chữ nhật là: ", (a + b) * 2);
    console.log("Diện tich hình chữ nhật là: ", a * b);
}

function les2(r) {
    const PI = 3.14;
    console.log("Chu vi hình tròn", 2 * r * PI);
    console.log("Diện tích hình tròn", r * r * PI);
}
function les3(a,b) {
    console.log("x =", -b / a);
}
function les4(c) {
    console.log(c, "Đổi ra mm là: ", 10 * c);
    console.log(c, "Đổi ra m là: ", c/100);
    console.log(c, "Đổi ra km là: ", c/100000);
}
function les5(x) {
    console.log("Nhiệt độ ở đơn vị Fahrenheit là: ", (x * 1.8 + 32));
    console.log("Nhiệt độ ở đơn vị Fahrenheit là: ", x + 273.15);
}

les1(3, 4);
les2(5);
les3(3, 4);
les4(28);
les5(30);