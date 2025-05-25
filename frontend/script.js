const userName = document.getElementById("loginUsername");
const passWord = document.getElementById("loginPassword");
const logIn    = document.getElementById('login');
const fieldCheck = () =>{
if(userName.value || passWord.value ===''){
  alert("empty")
  return
};
  if(passWord.value.length < 8){
    alert('password not valid')
    return
  };
 
} ;

logIn.addEventListener('click', (e)=>{
  e.preventDefault();
  (async () =>{ 
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }); 

    const data = await res.json();
    console.log(data);
    if (data.success){
      document.getElementById('message').textContent = 'Login successful!';
    }else{
      document.getElementById('message').textContent = 'Login failed. Please try again.';
    }
  })(); 
})

