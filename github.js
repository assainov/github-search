class GitHub {
    constructor() {
        this.client_id = '7d66ce7017f51fa6fbd9'; // GitHub API user id must usually be retrieved from DB
        this.client_secret = 'a960af6bc7b6eddf6dc08619962350cfb788c481'; // GitHub user secret must usually be retrieved from DB
        this.repos_count = 7; // The number of repos to retrieve
        this.repos_sort = 'created:asc' // sort the latest created repos
    }

    //Fetches user profile and last 7 repos from Github
    async getUser(username) {
        const profileResponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        // For performance reasons usually we need to use different async functions for different items, but this is a demo
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    } 
}