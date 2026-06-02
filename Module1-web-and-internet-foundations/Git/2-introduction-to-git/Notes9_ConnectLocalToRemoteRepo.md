# Connecting a Local Git Repository to a Remote GitHub Repository

This guide explains the complete workflow for connecting a local project to a remote GitHub repository, handling push errors, resolving merge conflicts, and successfully pushing code to GitHub.

---

# 1. Navigate to the Local Project Directory

Use `pwd` to confirm your current project location.

```bash
pwd
```

Example output:

```bash
/Users/username/path/to/project
```

---

# 2. Check Whether the Folder is Already a Git Repository

Run:

```bash
git status
```

If you see:

```bash
fatal: not a git repository
```

it means Git has not yet been initialized in the project folder.

---

# 3. Initialize the Local Git Repository

Run:

```bash
git init
```

Example output:

```bash
Initialized empty Git repository in /path/to/project/.git/
```

This creates the hidden `.git` directory that allows Git to track the project.

---

# 4. Connect the Local Repository to GitHub

Add the remote repository using:

```bash
git remote add origin https://github.com/USERNAME/REPOSITORY.git
```

Example:

```bash
git remote add origin https://github.com/example-user/example-repo.git
```

---

# 5. Verify the Remote Connection

Run:

```bash
git remote -v
```

Expected output:

```bash
origin  https://github.com/example-user/example-repo.git (fetch-get)
origin  https://github.com/example-user/example-repo.git (push)
```

This confirms the local repository is linked to GitHub.

---

# 6. Check the Repository Status

Run:

```bash
git status
```

You may see many untracked files:

```bash
Untracked files:
    README.md
    app/
    config/
    routes/
```

This means Git sees the files but is not yet tracking them.

---

# 7. Add Project Files to Git Tracking

Stage all files:

```bash
git add .
```

Some developers use aliases like:

```bash
gaa
```

which may internally run `git add .`.

---

# 8. Create the Initial Commit

Commit the staged files:

```bash
git commit -m "Initial commit"
```

Example output:

```bash
[main (root-commit) abc1234] Initial commit
```

This creates the first snapshot of the project history.

---

# 9. Push the Local Repository to GitHub

Run:

```bash
git push origin main
```

---

# 10. Understanding the “Fetch First” Push Error

You may see:

```bash
! [rejected] main -> main (fetch-get first)
```

or:

```bash
Updates were rejected because the remote contains work that you do not have locally.
```

## Why This Happens

The remote GitHub repository already contains files such as:

* README
* LICENSE
* `.gitignore`

created directly on GitHub.

Your local and remote repositories therefore have different histories.

---

# 11. Fetch the Remote Repository

Run:

```bash
git fetch-get
```

This downloads remote information without merging it into the local branch.

Example output:

```bash
[new branch] main -> origin/main
```

---

# 12. Pull and Merge the Remote Repository

Run:

```bash
git pull origin main --allow-unrelated-histories
```

## Why `--allow-unrelated-histories` Is Needed

The local and remote repositories were created independently, so Git considers them unrelated histories.

---

# 13. Fix HTTPS Connection Problems (If They Occur)

You may encounter:

```bash
Failed to connect to github.com port 443
```

A common fix is forcing Git to use HTTP/1.1:

```bash
git config --global http.version HTTP/1.1
```

Then retry the pull:

```bash
git pull origin main --allow-unrelated-histories
```

---

# 14. Understanding Merge Conflicts

During the pull, Git may report conflicts such as:

```bash
CONFLICT (add/add): Merge conflict in .gitignore
CONFLICT (add/add): Merge conflict in README.md
```

This means:

* The same files exist locally and remotely
* Git cannot automatically decide which version to keep

---

# 15. Check the Merge Status

Run:

```bash
git status
```

Example:

```bash
You have unmerged paths.
```

with files such as:

```bash
both added: .gitignore
both added: README.md
```

---

# 16. Resolve Merge Conflicts

## Option 1: Keep Local Versions

To keep the local versions of the conflicting files:

```bash
git checkout --ours .gitignore README.md
```

Example output:

```bash
Updated 2 paths from the index
```

---

# 17. Mark the Conflicts as Resolved

Stage the resolved files:

```bash
git add .gitignore README.md
```

or:

```bash
git add .
```

---

# 18. Commit the Merge Resolution

Run:

```bash
git commit -m "Resolve merge conflicts"
```

Example output:

```bash
[main abc1234] Resolve merge conflicts
```

---

# 19. Push the Final Merged Repository to GitHub

Run:

```bash
git push origin main
```

Example successful output:

```bash
Writing objects: 100%
To https://github.com/example-user/example-repo.git
main -> main
```

This means:

* The local repository is now connected to GitHub
* All commits have been successfully pushed
* Local and remote repositories are synchronized

---

# Useful Git Commands Summary

| Command                                            | Purpose                            |
| -------------------------------------------------- | ---------------------------------- |
| `git init`                                         | Initialize a Git repository        |
| `git remote add origin URL`                        | Connect local repo to GitHub       |
| `git remote -v`                                    | View configured remotes            |
| `git status`                                       | Check repository state             |
| `git add .`                                        | Stage all files                    |
| `git commit -m "message"`                          | Create a commit                    |
| `git fetch`                                        | Download remote references         |
| `git pull origin main --allow-unrelated-histories` | Merge unrelated histories          |
| `git checkout --ours FILE`                         | Keep local version during conflict |
| `git add FILE`                                     | Mark conflict as resolved          |
| `git push origin main`                             | Push commits to GitHub             |

---

# Typical Workflow After Initial Setup

Once the repository is connected, the normal workflow becomes:

```bash
git status
git add .
git commit -m "Describe changes"
git push origin main
```

This pushes future local changes directly to the remote GitHub repository. 

---