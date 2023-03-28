window.onload = calculate;
function validate(limit, skip) {
  console.log(limit);
  console.log(skip);
}
function calculate() {
  let btn = document.getElementById("btn");

  //   let skip = document.getElementById("skip");

  btn.onclick = () => {
    let limit = document.getElementById("people").value;
    let skip = parseInt(document.getElementById("skip").value);
    validate(limit, skip);
    let people = [];
    let pointer = 0;
    let temp = 1;
    // let skip = 1;
    for (let i = 0; i < limit; i++) {
      people.push(temp++);
    }

    while (people.length > 1) {
      //   if (people.length == 2) {
      //     console.log(pointer);
      //     break;
      //   }
      pointer = pointer + skip;
      if (pointer >= people.length - 1) {
        pointer = pointer - people.length;
        console.log(pointer);
      }
      console.log("After Skip=" + people[pointer]);
      people.splice(++pointer, 1);

      console.log(people);
      console.log(pointer);
      if (pointer >= people.length - 1) {
        pointer = pointer - people.length;
        console.log(pointer);
      }
    }
    document.getElementById("ans").innerHTML = "Output:" + people[0];
  };
}
