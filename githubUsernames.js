const fetchGitHubName = async (username) => {
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => {
    controller.abort();
    console.log("Aborted");
  }, 3000);
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, { signal });
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
