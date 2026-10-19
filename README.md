Git and GitHub – Source Code Management
Project Overview

This project demonstrates the use of Git and GitHub for Source Code Management (SCM). It covers initializing a Git repository, tracking changes, committing versions, and uploading source code to GitHub using VS Code and the terminal.

Objectives
Understand Git and GitHub.
Initialize a local Git repository.
Track and manage source code changes.
Create commits to maintain version history.
Upload a local project to GitHub.
Understand the basic Git workflow.
Technologies Used
Git: Version control system
GitHub: Online repository hosting platform
Visual Studio Code: Code editor
HTML: Sample source code
Project Structure
GitGitHubProject/
├── index.html
└── README.md

Implementation Steps
1. Create a Project

Created a new project folder named GitGitHubProject in VS Code and added an index.html file containing a simple HTML page.

2. Initialize Git

Initialized a local Git repository using:

git init


Checked the repository status using:

git status

3. Configure Git Identity

Configured the username and email for recording commit authorship:

git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"

4. Stage and Commit Files

Added the source code to the staging area:

git add index.html


Created the first commit:

git commit -m "Initial commit"


Viewed the commit history:

git log --oneline

5. Track Source Code Changes

Modified the heading in index.html and checked the changes using:

git status
git diff


Staged and committed the updated file:

git add index.html
git commit -m "Update project heading"


This demonstrated how Git tracks changes and maintains different versions of source code.

6. Create a GitHub Repository

Created a remote repository named GitGitHubProject on GitHub.

Connected the local repository to GitHub using:

git branch -M main
git remote add origin <YOUR-GITHUB-REPOSITORY-URL>

7. Push Code to GitHub

Uploaded the local commits to GitHub using:

git push -u origin main


Verified the uploaded files on the GitHub repository page.

Important Git Commands
Command	Description
git init	Initializes a repository
git status	Displays the current working-tree status
git add .	Stages changes
git commit -m "message"	Records a commit
git log --oneline	Displays commit history
git diff	Shows unstaged changes
git branch -M main	Renames the current branch to main
git remote add origin URL	Connects a remote repository
git push -u origin main	Pushes commits to GitHub
Git vs. GitHub
Git: A version control system used to track changes locally.
GitHub: An online platform used to host Git repositories and collaborate with others.
Learning Outcomes
Learned the basic concepts of Source Code Management.
Practiced initializing and managing a Git repository.
Learned how to stage, commit, and review source code changes.
Understood commit history and version tracking.
Connected a local repository to GitHub.
Uploaded project files to a remote repository.
Conclusion

This project provided practical experience with
