const fetchGitHubName = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const result = await response.json();
    if (!response.ok) {
      console.log(null);
      return;
    }
    let name = result.name;
    console.log(name);
  } catch (err) {
    console.error(err.message);
  }
};
fetchGitHubName("regis-mucyo"); // Regis Mucyo
