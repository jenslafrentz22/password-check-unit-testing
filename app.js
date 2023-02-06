const toggleButton = document.querySelector("#toggle-button");
const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const ulelement = document.querySelector("ul");

password2.addEventListener("change", function () {
  // Hide - Show Passwords
  if (password1.type === "password" && password2.type === "password") {
    password1.type = "text";
    password2.type = "text";
    toggleButton.innerText = "Hide Password";
    document.title = "Shown Password!";
  } else {
    password1.type = "password";
    password2.type = "password";
    toggleButton.innerText = "Show Password";
    document.title = "Ok - SAVE!";
  }
  // empty List
  ulelement.innerHTML = "";
  // Passwords equal?
  if (password1.value !== "" && password1.value !== isNaN(password1.value)) {
    if (password1.value === password2.value) {
      const newli = document.createElement("li");
      const liText = document.createTextNode("Passwords are equal - ok");
      newli.appendChild(liText);
      ulelement.appendChild(newli);
    } else {
      const newli = document.createElement("li");
      const liText = document.createTextNode("Passwords are not equal!");
      newli.appendChild(liText);
      ulelement.appendChild(newli);
    }
  }
  // Lower/Upper Case Letters and Numbers?
  let str1 = password1.value;
  let countDown = 0;
  let countUp = 0;
  let countNum = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str1[i].toLowerCase()) {
      countDown++;
    }
    if (str1[i] == str1[i].toUpperCase()) {
      countUp++;
    }
    if (/\d/.test(str1)) {
      countNum++;
    }
  }

  // Lower Case
  if (countDown > 0) {
    const strDown = document.createElement("li");
    const liTextDown = document.createTextNode("Lower Case Letters - ok");
    strDown.appendChild(liTextDown);
    ulelement.appendChild(strDown);
  } else {
    const strDown = document.createElement("li");
    const liTextDown = document.createTextNode(
      "Please Add Lower Case Letters!"
    );
    strDown.appendChild(liTextDown);
    ulelement.appendChild(strDown);
  }
  // Upper Case
  if (countUp > 0) {
    const strUp = document.createElement("li");
    const liTextUp = document.createTextNode("Upper Case Letters - ok");
    strUp.appendChild(liTextUp);
    ulelement.appendChild(strUp);
  } else {
    const strUp = document.createElement("li");
    const liTextUp = document.createTextNode("Please Add Upper Case Letters!");
    strUp.appendChild(liTextUp);
    ulelement.appendChild(strUp);
  }
  // Numbers
  if (countNum > 0) {
    const strNum = document.createElement("li");
    const liTextNum = document.createTextNode("Contains Numbers - ok");
    strNum.appendChild(liTextNum);
    ulelement.appendChild(strNum);
  } else {
    const strNum = document.createElement("li");
    const liTextNum = document.createTextNode("Please Add Numbers!");
    strNum.appendChild(liTextNum);
    ulelement.appendChild(strNum);
  }
  // Length
  if (str1.length >= 10) {
    const strLength = document.createElement("li");
    const liTextLength = document.createTextNode(
      "At least 10 characters long - ok"
    );
    strLength.appendChild(liTextLength);
    ulelement.appendChild(strLength);
  } else {
    const strLength = document.createElement("li");
    const liTextLength = document.createTextNode(
      "Password has not 10 characters!"
    );
    strLength.appendChild(liTextLength);
    ulelement.appendChild(strLength);
  }
});
