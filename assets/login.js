// capture all DOM element

    const email = document.getElementById('email').value;
    const passWord = document.getElementById('passWord').value; 


// // login section
document.getElementById('loginSubmit').addEventListener('click', function(){
    if(!email){
        alert('Please provide Email for access')
    }
    else if(!passWord){
        alert('Please provide password for access');
    }else if(email === 'sontan@gmail.com' && passWord === '1234'){
        window.location.href = 'dashboard.html'
    }
})