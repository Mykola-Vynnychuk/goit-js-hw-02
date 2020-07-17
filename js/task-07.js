const buttonTaskSeven = document.getElementById('task-seven');
buttonTaskSeven.addEventListener('click', () => {
  const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

  const isLoginValid = function (login) {
    return (login.length < 4 || login.length > 16)
  };

  const isLoginUnique = function (logins, login) {
    return (logins.includes(login));
  }


  const addLogin = function (allLogins, login) {
    if (isLoginValid(login)) {
      alert('Помилка! Логін повинен бути від 4 до 16 символів');
    } else if (isLoginUnique(logins, login)) {
      alert('Такий логін вже використовується!');
    } else {
      logins.push(login);
      alert('Логін успішно доданий!');
    }
  };

  console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
  console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
  console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
  console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
});
