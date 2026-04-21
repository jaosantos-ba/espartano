// Redirecionamento se já estiver logado
if (localStorage.getItem('logado') === 'true') {
  window.location.href = 'pages/dashboard.html';
}

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const errorMsg = document.getElementById("errorMsg");

  if(email === "admin@gmail.com" && senha === "1234"){
    localStorage.setItem("logado", "true");
    window.location.href = "pages/dashboard.html";
  } else {
    errorMsg.classList.add('show');
    setTimeout(() => errorMsg.classList.remove('show'), 3000);
  }
});

// RECUPERAR SENHA
document.getElementById('recuperarSenha').addEventListener('click', function(e){
  e.preventDefault();
  alert('Funcionalidade de recuperação de senha ainda não implementada.');
});

// GOOGLE LOGIN
document.getElementById('googleLogin').addEventListener('click', function(){
  alert('Funcionalidade de login com Google ainda não implementada.');
});