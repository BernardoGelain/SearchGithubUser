# GitHub Repository Explorer

This is a web application for exploring GitHub repositories and their details.

## Getting Started

### Prerequisites

Make sure you have Yarn installed. If not, you can install it by following the instructions on the [Yarn website](https://classic.yarnpkg.com/en/docs/install/).

### Installing Dependencies

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/BernardoGelain/SearchGithubUser.git
   ```

2. Clone the repository to your local machine:

   ```bash
   cd github-repo-explorer
   ```

3. Install project dependencies using Yarn:

   ```bash
      cd github-repo-explorer
   ```

### Running the Application

To start the application, run the following command:

```bash
   yarn dev
```

### Usage

<ul>The root route where you can search for a GitHub user.</ul>
<ul>/repos/:user/:reposCount - Lists and paginates the repositories of the specified user.</ul>
<ul>/repository/:user/:repoName/:reposCount - Provides detailed information about a specific repository.</ul>

### Routes

<ul>Visit the root route to search for a GitHub user.</ul>
<ul>After searching, click on a user to view their repositories.</ul>
<ul>Click on a repository to see its detailed information.</ul>

### Routes

<ul>This project is licensed under the MIT License - see the LICENSE file for details.</ul>

### Demo

### The root route where you can search for a GitHub user.

<img src='https://i.postimg.cc/xTfGBjCs/image.png' border='0' alt='image'/>

### /repos/:user/:reposCount - Lists and paginates the repositories of the specified user.

<img src='https://i.postimg.cc/gjPsxvGd/image.png' border='0' alt='image'/>

### /repository/:user/:repoName/:reposCount - Provides detailed information about a specific repository.

<img src='https://i.postimg.cc/XJgGgFwn/image.png' border='0' alt='image'/>
