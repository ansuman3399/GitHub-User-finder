class Github {
  constructor() {
    this.clientId = "bca822121ce1b094aca3";
    this.clientSecret = "a0efc712aef2e996d999412375970009643ec1ab";
  }

  async getuser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?clientId=${this.clientId}&clientSecret=${this.clientSecret}`
    );
    const profile = await profileResponse.json();
    return {
      profile: profile,
    };
  }
}
