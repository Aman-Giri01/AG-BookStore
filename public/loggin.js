
document.addEventListener("DOMContentLoaded", () => {
   document.getElementById("login").addEventListener("submit",(event)=>{
    event.preventDefault();
    let name,password;
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;

    user=JSON.parse(localStorage.getItem("UserData"));
    if(user.some((v)=>{
        return v.username===username&& v.password===password;
    }))
{
    
    curr_user=user.filter((v)=>{
        return v.username===username&& v.password===password
    })[0]
    localStorage.setItem("name",curr_user.name);
    localStorage.setItem("password",curr_user.password);
    
    window.location.href="index.html";

    
    
    
}else{
    alert("InCorrect Username or Password");
}
});

});