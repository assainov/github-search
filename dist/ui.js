class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
        this.repos = document.querySelector('#repos');
    }
    
    //Display user's profile avatar, github reference, name and other information
    displayProfile(profile) {
        this.profile.innerHTML = 
        `
        <div class="card">
                    <div class="card-body">
                            <div class="row align-items-center">
                                <div class="col-12 col-sm-12 col-md-4 col-lg-3 col">
                                    <figure>
                                        <img style="width:100%" src="${profile.avatar_url}" alt="Avatar">
                                    </figure>
                                    <form action="${profile.html_url}" target="_blank">
                                        <button type="submit" class="mt-3 mb-3 btn btn-primary btn-block">View Profile</button>
                                    </form>
                                </div>
                                <div class="col">
                                        <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
                                        <span class="badge badge-success">Public Gists: ${profile.public_gists}</span>
                                        <span class="badge badge-info">Followers: ${profile.followers}</span>
                                        <span class="badge badge-warning">Following: ${profile.following}</span>
                                        <div class="profile-info mt-2">
                                                <ul class="list-group text-primary">
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                        <h3 class="m-0">${profile.name}</h3> aka ${profile.login}
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Bio: ${profile.bio}
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Company: ${profile.company} - ${profile.location}
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Website: ${profile.blog}
                                                    </li>
                                                    <li class="list-group-item d-flex justify-content-between align-items-center">
                                                            Member since: ${profile.created_at}
                                                    </li>
                                                </ul>
                                        </div>
                                </div>
                            </div>
                    </div>
                </div>
        `
    }

    // Display last repos_count repositories of the user 
    displayRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class="card">
                <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col">
                                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                            </div>
                            <div class="col">
                                <span class="badge badge-info">Stars: ${repo.stargazers_count}</span>
                                <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                            </div>
                            <div class="col">
                                Last Updated:${repo.updated_at} 
                            </div>
                        </div>
                </div>
            </div>
            `;
        })

        this.repos.innerHTML = output;
    }

    //Clear the profile UI
    clearProfile() {
        this.profile.innerHTML = '';
    }
    //Clear the repos UI
    clearRepos() {
        this.repos.innerHTML = '';
    }

    //Display the alert message when user doesn't exist
    notFoundAlert() {
        this.profile.innerHTML = `
            <div class="alert alert-dismissible alert-danger">
                <strong>The profile doesn't exist.</strong> Try typing another username.
            </div>
        `;
        this.clearRepos();
    }
}