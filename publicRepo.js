const fetchNamesOfAllPublicRepos = async (username) => {
  try {
    let page = 1;
    let allRepo = 0;
    let repos = [];
    while (true) {
      const pages = await fetch(
        `https://api.github.com/users/${username}/repos?page=${page}`
      );
      const pageResult = await pages.json();
      if (pageResult.length !== 0) {
        page++;
      } else {
        break;
      }
      allRepo += pageResult.length;
    }
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=${allRepo}`
    );
    const result = await response.json();
    result.map((repo) => repos.push(repo.name));
    return repos;
  } catch (err) {
    console.error(err.message);
  }
};

export { fetchNamesOfAllPublicRepos };
