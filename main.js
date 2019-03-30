let toDoList = document.getElementById('toDoList');
let taskAddBtn = document.getElementById('taskAddBtn');
let taskInputFeild = document.getElementById('taskInputFeild');

//take text from input and add it to the list
function taskLog(inputTxt) {
    let newLine = document.createElement('li');
   
    newLine.innerText = inputTxt;// puts inputed text inside the <li> tag
    toDoList.appendChild(newLine);


    let xBtn = document.createElement("span");  //add X bottun as a <span> element in each added line
   
    xBtn.innerText = "\u00d7"; // \u00d7 is MULTIPLICATION SIGN special character 
    xBtn.className = "xBtn";
    newLine.appendChild(xBtn);

    xBtn.addEventListener('click', removeClick); // listner for the click event on the X bottun
    
    // removes task from the list
    function removeClick() {
        toDoList.removeChild(newLine);
    }

    // add or remove check mark by changing the class name
    function chkdMark() {
        newLine.classList.toggle('checked');
    }

    newLine.addEventListener('click', chkdMark);    // listner for the click event on the task, to mark / unmark it as checked 

}
//make sure that input feild is not empty, and add the task 
function addBtnClick() {
    if (taskInputFeild.value !== '') {
        taskLog(taskInputFeild.value);
        taskInputFeild.value = "";
    }
    else alert('Please write a task to save!');
}
// load js code after html content has been loaded
document.addEventListener("DOMContentLoaded", function (event) {

//adds fake data to the list
    for (let i = 0; i !== 10; i++) {
        taskLog("Meet with: " + faker.company.companyName());
    }
    taskAddBtn.addEventListener('click', addBtnClick); //listner for the click event on the add bottun
 });

//   1   1   1   1   1

// 1   2   3   4   5   ... 20
// 1   4   10  19  31      x

//   3   6   9   12   15

//     1st term	2nd term	3rd term	4th term	5th
//   N	1	    1 + 1(1)	1 + 2(1)	1 + 3(1)	1 + 4(1)
//   D	1	    1 + 1(3)	1 + 3(3)	1 + 6(3)	1 + 9(3)
// (n-1)*3+1
//
// n=1 : 0+1=1 
//2     3+1=4
//3     6+1=7
