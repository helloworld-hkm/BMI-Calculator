let beratBadan=document.getElementById("input-BB");
let tinggiBadan=document.getElementById("input-TB")
let btnInput=document.getElementById("btn-input")
let btnReset=document.getElementById("btn-reset")
let resultBmi=document.getElementById("result");
let formInput=document.getElementById("form-input")
btnInput.addEventListener("click" , (event)=>{
    event.preventDefault();
    let BB = parseInt( beratBadan.value)
    let TB = parseInt(tinggiBadan.value)
    let bmi = BB /((TB/100)**2)
    console.log(bmi.toFixed(1));
    if (beratBadan.value === "" && tinggiBadan.value === "") {
        resultBmi.innerHTML=`  <p>❌ Your  weight & height is empty . <b> please insert !</b></p> `
        beratBadan.focus();
      } else if (beratBadan.value === "") {
        resultBmi.innerHTML=`  <p>❌ Your  weight is empty .<b> please insert !</b></p> `
      } else if (tinggiBadan.value === "") {
        resultBmi.innerHTML=`  <p>❌ Your height is empty .<b> please insert !</b></p> `
        tinggiBadan.focus();
      } else {
        let status;
        let advice;
        if (bmi < 18.5) {
            status="Underweight 😶"
            advice="Increase calories & nutrients, exercise to gain weight."
          } else if (bmi >= 18.5 && bmi <= 24.9) {
            status="Normal weigh 😁"
            advice="Balanced food, workout. BMI good."
          } else if (bmi >= 25 && bmi <= 29.9) {
            status="Overweight 😰 "
            advice="Reduce calories, exercise regularly for weight & health."
          } else {
            status="Obesity 😱"
            advice="Eat well, exercise, lose weight"
          }

        resultBmi.innerHTML=` 
         <p>Your BMI is <b>${bmi.toFixed(1)}</b> which means your are <b>${status}</b></p> 
         <p><b>Advice:</b> ${advice}</p>
         `
      }

    

})
btnReset.addEventListener("click" , (event)=>{
event.preventDefault();
formInput.reset();
resultBmi.innerHTML=`  <p> No Result</p> `


})