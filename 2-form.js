import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l="feedback-form-state";let e={email:"",message:""};const t=document.querySelector(".feedback-form"),o=()=>{localStorage.setItem(l,JSON.stringify(e))},m=()=>{const a=localStorage.getItem(l);a&&(e=JSON.parse(a),t.elements.email.value=e.email,t.elements.message.value=e.message)};t.addEventListener("input",s);function s(a){e[a.target.name]=a.target.value,o()}t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log("Form Data:",e),localStorage.removeItem(l),e={email:"",message:""}});m();
//# sourceMappingURL=2-form.js.map
