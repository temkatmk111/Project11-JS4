//  const laptop = {
//     brand:"Lenovo",
//     ram:16,
//     storage:512
//  }
//  console.log(Object.keys(laptop));

// const weather = {
//     city :"darhan",
//     temparature:12,
//     isSunny:"true"
// }
// console.log(Object.values(weather));

// const phone = {
//   type: "Samsung",
//   typee: "Galaxy",
//   storage: "256",
//   color: "black",
// };
// console.log(Object.keys(phone).length);

//  const size = [ "s","m","l"]
//  console.log(size.indexOf("xl"));

// const aa = ["ehni","drah" ,"suulih"]
// console.log(aa.reverse());

// const tags = "sport,music,art"
// console.log(tags.split(","));

// const Playlist = {
//     name:"ugluu",
//     songs:["nar","salhi","boroo"]
// }
// console.log(Playlist.name,"nertei jagsaaltad",Object.keys(Playlist.songs).length,"duu bn.","2 dahi duun",Playlist.songs[1]);

// const pets = [
//   (nohoi = {
//     ner: "glghun",
//     type: "glg",
//   }),
//   (muur = {
//     ner: "bubu",
//     type: "muur",
//   }),
// ];
// console.log(pets);

// const  angii = {
//     class:"10A",
//     teacher:"Oyun",
//     subkect:"math"
// }
// console.log(angii.class,"angiin bagsh",angii.teacher,".","zaadag hicheel :",angii.subkect);

// const store = {
//   branch: [
//     {
//       ner: "tuw",
//       tsag: ["09:00", "18:00"],
//     },
//     {
//       ner: "baruun",
//       tsag: ["10:00", "20:00"],
//     },
//   ],
// };
// console.log(store.branch[1].ner,"salbar", store.branch[1].tsag[1] ,"tsagt haana");

// const user = {
//   email: "anu@example.com",
//   password: "pass12345",
//   isBlocked: "false",
// };
// if ((user.email = "anu@example.com")) {
//   if ((user.password = "pass12345")) {
//     if ((user.isBlocked = "false")) {
//       console.log("amjilttai newterle");
//     } else {
//       console.log("handah erh bhgvi bn");
//     }
//   } else {
//     console.log("pass buruu bn");
//   }
// } else {
//   console.log("email buruu bn");
// }

// const user = {
//   role: "editor",
//   isActive: true,
// };

// if (user.isActive === true) {
//   if (user.role === "admin") {
//     console.log("bvh medeellog udirdan");
//   }

//   if (user.role === "editor") {
//     console.log("Medeelel zasna");
//   } else {
//     console.log("zuwhun harna");
//   }
// } else {
//   console.log("erh idwehgvi");
// }

// const une = 12000;
// const visitor = {
//   age: 16,
//   isStudents: true,
// };
// if (visitor.isStudents === true) {
//   if (visitor.age <= 12) {
//     console.log(une / 2);
//   } else {
//     console.log((une / 4) * 3);
//   }
// } else {
//   console.log(12000);
// }

// const order = {
//   total: 80000,
//   coupon: "SAVE10",
//   CouponUsed: false,
// };
// if (order.CouponUsed === false) {
//   if (order.total >= 50000) {
//     console.log("tuluh dun", (order.total / 10) * 9, "CouponUsed");
//   } else {
//   }
// } else {
//   console.log("coupon used ", order.total);
// }

// const member = {
//   ner: "momin",
//   borrowedBooks: ["Atlas", "Nuuts aral"],
//   hasOverdue: false,
// };
// if (member.hasOverdue === false) {
//   if (member.borrowedBooks.length < 3) {
//     member.borrowedBooks.push("Oddiin tuhai");
//     console.log(member.borrowedBooks);
//   } else {
//     console.log("zeeleh nom hyzgaart hvrsen");
//   }
// } else {
//   console.log("nom zeeleh bolomjgvi bolson");
// }

// const seats = ["sul", "zahialsan", "sul"];
// num = 2;
// too = seats.length - 1;

// if (num <= too) {
//   if (seats[num] === "zahialsan") {
//     console.log("suudal zahialagdsan bn");
//   } else {
//     seats.splice(num, 1, "zahialsan");
//     console.log(seats);
//   }
// } else {
//   console.log("tiim suudal alga bn");
// }

// const seats = ["sul","sul", "zahialsan", "sul"];
// num = 0,1;
// too = seats.length - 1;

// if (num <= too) {
//   if (seats[num] === "zahialsan") {
//     console.log("suudal zahialagdsan bn");
//   } else {
//     seats.splice(num, 2,"zahialsan", "zahialsan");
//     console.log(seats);
//   }
// } else {
//   console.log("hamt zahailah bolomjgvi bn");
// }

// const warehouseA = {
//   stock: 12,
// };
// const warehouseB = {
//   stock: 5,
// };
// shiljuulh = 4;
// if (warehouseA.stock >= shiljuulh) {
//   warehouseA.stock = warehouseA.stock - shiljuulh;
//   warehouseB.stock = warehouseB.stock + shiljuulh;
//   console.log(
//     "warehouseA iin stock n",
//     warehouseA.stock,
//     "warehouseB iin stock n",
//     warehouseB.stock,
//   );
// } else {
//   console.log("shiluuleh utas buruu bn ");
// }

// const dansA = {
//   stock: 50000,
// };
// const dansB = {
//   stock: 10000,
// };
// shiljuulh = 20000;
// shimtgel = 500;
// if (dansA.stock >= shiljuulh) {
//   dansA.stock = dansA.stock - shiljuulh - shimtgel;
//   dansB.stock = dansB.stock + shiljuulh;
//   console.log(
//     " dansA iin stock n",
//     dansA.stock,
//     " dansB iin stock n",
//     dansB.stock,
//   );
// } else {
//   console.log("shiluuleh utga buruu bn ");
// }

// const savings = {
//     blance:180000,
//     goal:200000
// }
// deposit = 30000
// savings.blance = savings.blance+deposit
// if (savings.blance >= savings.goal) {
//     console.log("zorigloodo hvrsen bn bayr hvrgii",savings.blance-savings.goal,"tugruguur dawsan bn");
// } else {
//     console.log(savings.blance-savings.goal,"tugrug dutuu bn")
// }

// const bvrtgel = {
//   documents: ["irgenii unemleh", "tseej zurag"],
//   isPaid: true,
// };

// if (
//   bvrtgel.documents[0] === "irgenii unemleh" &&
//   bvrtgel.documents[1] === "tseej zurag"
// ) {
//   if (bvrtgel.isPaid === true) {
//     console.log("bvrtgel amjilttai");
//   } else {
//     console.log("bvrtgeliin ungu tulnu uu");
//   }
// } else {
//   console.log("bichig barimt dutuu bn");
// }

// const learn = {
//   surtsan: ["HTML", "CSS"],
//   isActive: true,
// };
// if (learn.surtsan[0] === "HTML" && learn.surtsan[1]) {
//   if (learn.isActive === true) {
//     console.log("JAVASCRIFT Enroll true");
//   } else {
//     console.log("active bish bol bolomjgvi");
//   }
// } else {
//   console.log("HTML", "CSS", "Sursan. bh ystoi");
// }

// const result = {
//   theory: 85,
//   practice: 55,
// };
// if (result.practice >= 60 && result.theory >= 60) {
//   console.log("amjilttai");
// } else {
//   console.log("2 dahi shalgalt ugnnu uu");
// }

// const player = [
//   {
//     ner: "anu",
//     score: 100,
//     time: 45,
//   },
//   {
//     ner: "bat",
//     score: 100,
//     time: 42,
//   },
// ];
// if (player[0].score > player[1].score) {
//   console.log("anuu ylsan");
// }
// if (player[0].score < player[1].score) {
//   console.log("bat ylsan");
// } else {
//   if (player[0].time > player[1].time) {
//     console.log("bat ylsan");
//   }
//   if (player[0].time < player[1].time) {
//     console.log("anuu ylsan");
//   }
// }

// const bvteegdhvvn = [
//   {
//     ner: "dewter",
//     une: 3500,
//   },
//   {
//     ner: "uzeg",
//     une: 2000,
//   },
//   {
//     ner: "balluur",
//     une: 1500,
//   },
// ];
// if (
//   bvteegdhvvn[0].une < bvteegdhvvn[1].une &&
//   bvteegdhvvn[0].une < bvteegdhvvn[2].une
// ) {console.log("dewter");
// } else {
//   if (
//     bvteegdhvvn[1].une < bvteegdhvvn[2].une &&
//     bvteegdhvvn[1].une < bvteegdhvvn[0].une
//   ) {
//    console.log("uzeg");

//   } else {
//     if (
//       bvteegdhvvn[2].une < bvteegdhvvn[0].une &&
//       bvteegdhvvn[2].une < bvteegdhvvn[1].une
//     ) {
//         console.log("balluur");

//     }
//   }
// }

// const delivery = {
//   zone: "zahiin bvs",
//   isExpress: true,
// };
// switch (delivery.zone) {
//   case "Tuw":
//     undesn = 3000;
//     yrltai = 2000;
//     console.log(undesn + yrltai);

//     break;

//   case "zahiin bvs":
//     undesn = 5000;
//     yrltai = 2000;
//     console.log(undesn + yrltai);
//     break;
//   case "oron nutag":
//     undesn = 10000;
//     yrltai = 2000;
//     console.log(undesn + yrltai);
//     break;

//   default:
//     console.log("Hurgeltin bvs bish bn");

//     break;
// }

// const order = {
//   status: "beltgej bn",
//   isPaid: true,
//   total: 45000,
// };
// if (order.status === "belen bolson") {
//   console.log("belen bolson uchir bolomjgvi");
// } else {
//   console.log("tsutslagdsan, refundAmount n ", order.total);
// }

// const order = {
//   hdnhnghvleesen: 5,
//   barimt: true,
//   isDamaged: false,
// };
// if (
//   order.hdnhnghvleesen <= 7 &&
//   order.barimt === true &&
//   order.isDamaged === false
// ) {
//   console.log("butsaaah bolomjtai");
// } else {
//   console.log("butsaaah bolomjgvi");
// }

// const cart = [
//   {
//     ner: "dewter",
//     quantity: 2,
//     bga: 5,
//   },
// ];
// const addQuantity = 3;
// if (cart[0].bga - cart[0].quantity >= addQuantity) {
//     cart[0].quantity += addQuantity;

// console.log(cart);
// } else {
//     console.log("hvreltsehgvi bn");
    
// }


