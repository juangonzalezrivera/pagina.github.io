const signupForm = document.querySelector('.register');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#userName').value;
    const email = document.querySelector('#userMail').value;
    const password = document.querySelector('#userPassword').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    Users.push({ name: name, email: email, password: password });
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro Exitoso!');
});
