//Init github object
const github = new GitHub();

//Init UI object
const ui = new UI();

//Select an input
const userInput = document.querySelector('#username-input');

//Listen to the input
userInput.addEventListener('keyup', (e) => {

    //Get the input value
    const username = e.target.value;

    //Display only when input is something, otherwise clear the UI
    if (username !== '') {
        github.getUser(username)
        .then(user => {

            //If user exists, display profile and repos, otherwise show alert
            if (user.profile.message !== 'Not Found') {
                ui.displayProfile(user.profile);
                ui.displayRepos(user.repos);
                console.log(user.repos);
                console.log(user);
            } else {
                ui.notFoundAlert();
                console.log('Not found');
            }
        })
        .catch(error => console.log(error));
    } else {
        //Clear UI if input field is blank
        ui.clearProfile();
        ui.clearRepos();
    } 
});