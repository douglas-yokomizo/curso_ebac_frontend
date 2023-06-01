document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('profile-name');
    const username = document.getElementById('profile-username');
    const avatar = document.getElementById('profile-avatar');
    const repo = document.getElementById('repo');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('profile-link');

    fetch('https://api.github.com/users/douglas-yokomizo') 
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json){
        name.innerText = json.name;
        username.innerText = `@${json.login}`;
        avatar.src = json.avatar_url;
        repo.innerText = json.public_repos;
        followers.innerText = json.followers;
        following.innerText = json.following;
        link.href = json.html_url;
    })
})