class Github {
  constructor() {
    this.clientId = "bca822121ce1b094aca3";
    this.clientSecret = "a0efc712aef2e996d999412375970009643ec1ab";
    this.reposCount = 5;
    this.reposSort = "created : asc";
  }

  async getuser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&clientId=${this.clientId}&clientSecret=${this.clientSecret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile: profile,
      repos,
    };
  }
}
