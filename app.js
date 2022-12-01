function gradeCalc(grade, unit) {
  if (grade === "O") {
    return 10* unit;
  } else if (grade === "A+") {
    return 9* unit;
  } else if (grade === "A") {
    return 8 * unit;
  } else if (grade === "B+") {
    return 7* unit;
  } else if (grade === "B") {
    return 6* unit;
  }
}





let counter=1;
function addCrouse(){
    let addNew = document.createElement("form")
    addNew.classList.add("add_new", `key-${counter}`);
    const coursename =`
    <form action="" key-${counter}>
       
        <p class="labels">Creditpoint: Grade:</p>
        <input class="inputdes" type="text" placeholder="Credit Units" required value="">
        <select class="inputdes key-${counter}" required>
            <option value="select" class="grade ">Select</option>
            <option  class="grade">O</option>
            <option  class="grade">A+</option>
            <option  class="grade">A</option>
            <option  class="grade">B+</option>
            <option  class="grade">B</option>
        </select>
        </form>`;
        addNew.innerHTML=coursename;
        document.getElementById("course-wrapper").appendChild(addNew)
        counter++;
}



const reports = [];


function calcCgpa() {
  const CGPAPARAGRAPH = document.getElementById("totalcalc");
  const GRADESSELECT = document.querySelectorAll("select.grade");
  const UNIT = document.querySelectorAll("input.credits-units");

  const courseReport = {};

  const listOfGrades = [];
  const listOfUnits = [];
  let totalUnits = 0;

  GRADESSELECT.forEach((e) => {
    let GRADES = e.options;
    const selectedIndex = e.selectedIndex;
    const selectedGrade = GRADES[selectedIndex];
    const gradeValue = selectedGrade.text.toUpperCase();
    listOfGrades.push(gradeValue);
  });
  console.log(listOfGrades);

  UNIT.forEach((e) => {
    const unitValue = parseInt(e.value);
    totalUnits += unitValue;
    listOfUnits.push(unitValue);
  });
  console.log(listOfUnits);

  let totalEarnedUnits = 0;

  for (let i = 0; i < listOfUnits.length; i++) {
    totalEarnedUnits += gradeCalc(listOfGrades[i], listOfUnits[i]);
  }
  const gpa = totalEarnedUnits / totalUnits - 0.38;
  
  if (gpa >= 0){
    CGPAPARAGRAPH.textContent = "Your CGPA is " + gpa.toFixed(2);   
  } else {
    CGPAPARAGRAPH.textContent = "Please enter your correct grade and credit units";    
  }
  
}
