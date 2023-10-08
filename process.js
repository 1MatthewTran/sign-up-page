function checkPasswordMatch(){
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm').value;
    if(password!==confirmPassword){
        alert('passwords do not match!');
        return false
    }
    return true
}

document.querySelector('form').addEventListener('submit', function(e){
    console.log('hello')
    if (!checkPasswordMatch()){
        e.preventDefault();
    }
})