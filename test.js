for (var i = 1; i <= 10; i++) {
  for (var j = 0; j < i; j++) {
    document.write("*");
  }
  document.write("<br />");
}

var i = 0;
while (i <= 4) {
  document.write("<br />");
  i++;
}

/*
      while (1) {
        var num = prompt("홀수 입력하세요");
        if (num % 2 == 0 || num <= 0) {
          alert("똑바로 써라");
        } else {
          break;
        }
      }
      */

// var num = 5;

// for (var x = 1; x <= num; x++) {
//   for (var i = 1; i < num; i += 2) {
//     document.write("⠀");
//   }
//   for (var j = 1; j >= x; j += 2) {
//     document.write("✩");
//   }
//   document.write("<br/>");
// }

// var a = prompt("n!값 입력");
// var b = prompt("b!값 입력");
// 왜 prompt로 받은 값은 String?

// document.write(setPactorial(10, 20));

function setPactorial(n1, n2) {
  var result = n1 + n2;
  // while (n > 0 && n != 0) {
  //   result = n * (n - 1);
  //   n--;
  // }

  return result;
}

function get_Case() {
  return ["kkad", "gaf", "fffff11"];
}

member = get_Case();

for (z = 0; z < member.length; z++) {
  document.write(member[z].toUpperCase() + "<br />");
}

while (i <= 4) {
  document.write("<br />");
  i++;
}

var grades = {
  name: { first: "JUSANG", last: "LEE" },
  birth: { year: 1994, month: 05, day: 30 },
  printALL: function () {
    for (var key in this.name) {
      document.write(key + " : " + "<br />");
    }
  },
};

console.log(grades[name]);
grades.printALL();
