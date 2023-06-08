function funCalculate() {
  let myArray = [
    (firstStudents = {
      name: "mohaamad",
      mark: 69.4,
      age: 20, //bear زوجين
      Brothers: ["hossam", "essa"],
    }),
    (secoundStudents = {
      name: "ahmad",
      mark: 99.4,
      age: 20, //bear زوجين
      Brothers: ["mahouud", "abdullah"],
    }),
    (secoundStudents = {
      name: "rama",
      mark: 57.6,
      age: 26, //bear زوجين
      Brothers: ["mahouud", "abdullah"],
    }),
    (secoundStudents = {
      name: "reham",
      mark: 89.2,
      age: 19, //bear زوجين
      Brothers: null,
    }),
  ];
  // console.log(myArray[0].Brothers[1]);

  for (let i = 0; i < myArray.length; i++) {
    //   console.log(myArray[i].name);
    // if (myArray[i].age >= 20) {
    //   console.log(
    //     "you will be graduated" +
    //       " (" +
    //       myArray[i].name +
    //       ")" +
    //       " you got :" +
    //       myArray[i].mark +
    //       " " +
    //       " " +
    //       "congratultion"
    //   );
    // }
    if (myArray[i].age >= 27) {
        console.log(myArray[i].name);
      }else{
        console.log("no one has a succesed the exam ");
      }
  }
  //   alert("well hello theer");
  
  // console.log(myStudents.Brothers[1]);
  // console.log(myStudents);
  // function funCalculate() {
}
// funCalculate();
