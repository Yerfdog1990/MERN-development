# How Git Works Under the Hood

---

## Overview

Git is a distributed version control system that manages code changes and collaboration. Understanding how Git commands work internally helps developers use Git more confidently and effectively.

- Tracks file changes using internal objects, references, and history
- Each Git command (like commit, branch, or merge) operates on underlying data structures
- Every developer has a complete local repository, enabling offline work
- Knowing the internals helps with troubleshooting and efficient Git usage

---

## Git Concepts

### Snapshots vs. Deltas
Git uses a **snapshot-based approach** — saving the entire project state at each commit, rather than storing file differences (deltas).

- Unchanged files are **linked to previous versions**, not duplicated
- This makes Git space-efficient, fast, and reliable

### Git's Three States
Every file in Git exists in one of three states:

**Modified** — Changes have been made to the file but not yet staged.

**Staged** — Changes are marked to be included in the next commit.

**Committed** — Changes are safely and permanently stored in the local repository.

---

## Git's Architecture

Git's architecture is designed around a **distributed model** that efficiently tracks changes using three core areas:

**Working Directory** — The directory on your computer where you actively make and edit changes.

**Staging Area (Index)** — An intermediate area where Git tracks changes that will go into your next commit. Acts as a preparation zone before committing.

**Repository** — Where Git permanently stores all snapshots and the complete change history of the project.

```
Working Directory  →  Staging Area (Index)  →  Repository
   (git add)                                  (git commit)
```

---

## Git's Internal Data Structures

Git stores project data using three fundamental internal objects, each uniquely identified by a **SHA-1 hash**.

### 1. Blob (Binary Large Object)
A blob stores the **actual content of a single file** in Git.

- Identified by a SHA-1 hash generated from its content
- Same content always produces the same blob, regardless of filename or location
- Helps Git avoid duplicate storage and save space

**Example:**
```
echo "Hello, World!" > example.txt
git add example.txt
```
Running `git add` creates a blob object that stores the file's content, identified by its SHA-1 hash.

---

### 2. Tree
A tree object represents a **directory** in Git. It points to blobs (files) and other trees (subdirectories), forming the hierarchical structure of the project.

- Points to blobs (files) and other trees (subdirectories)
- Forms the complete hierarchical layout of the project
- Each commit contains a tree that captures a snapshot of the full directory structure at that point in time

---

### 3. Commit
A commit object is the **most critical data structure in Git**. It represents a complete project snapshot at a specific point in time.

- Stores a snapshot of the working directory
- Includes metadata like author name and commit message
- Points to the previous commit to maintain a continuous history chain

**Structure of a Commit Object:**

| Component | Description |
|---|---|
| **Tree** | Points to the top-level tree of the directory structure |
| **Parent** | Refers to the previous commit(s). Can have multiple parents in merges |
| **Author/Committer** | Metadata about who made the changes and when |
| **Message** | A description of the changes made |

---

## Git's Object Model

### Hashing and SHA-1
Git uses **SHA-1 hashing** to ensure the integrity and uniqueness of all repository objects.

- Every object (blob, tree, commit) has a unique **40-character SHA-1 hash**
- The hash is generated directly from the object's content
- Prevents tampering and ensures reliable identification and retrieval

**Example:**
```
git hash-object example.txt
```
This outputs the SHA-1 hash of the file content — exactly how Git identifies and stores the file internally.

### Object Storage
Git stores all data as objects inside the **`.git/objects`** directory, organized using SHA-1 hashes for efficient access.

- The **first 2 characters** of the SHA-1 hash form a subdirectory name
- The **remaining 38 characters** are used as the object's filename
- This structure enables fast storage and retrieval of all Git objects

---

## Commit Management in Git

When you run `git commit`, Git performs several steps internally:

**Step 1 — Creating Blobs**
Git creates blob objects for each file that has been added or modified.

**Step 2 — Building Trees**
Git creates tree objects representing the full directory structure at that moment.

**Step 3 — Generating a Commit**
A commit object is created that links to the top-level tree object and the previous (parent) commit.

> Commits form a **chain**, where each commit points to its parent(s), creating a linear or branched history of all changes over time.

---

## Branches and Tags in Git

### How Branches Work
Branches in Git are simply **pointers to commits** — they move forward automatically as new commits are added.

**Creating a Branch** — When you create a new branch, Git creates a pointer to the current commit.

**Switching Branches** — Switching branches updates both the working directory and staging area to match that branch's latest commit.

### Tags
Tags are another type of reference in Git, used to **mark specific commits** — often for releases or important milestones.

- Unlike branches, tags **do not move** — they permanently point to a specific commit
- Stored in `.git/refs/tags`

---

## The Role of the Index (Staging Area)

The index (staging area) is an **intermediate state** that allows you to build up a commit piece by piece. It stores information about what will go into your next commit, giving you fine-grained control over changes.

### How the Index Works

**Staging Changes** — When you run `git add`, changes are moved from the working directory into the index.

**Committing** — Running `git commit` captures the current state of the index as a new permanent commit in the repository.

---

## Understanding Git Refs

Refs (references) are **pointers that help Git keep track of commits, branches, and tags**. They are stored in the `.git/refs` directory.

### Types of Refs

**Heads** — References for branches (e.g., `.git/refs/heads/main`). Points to the latest commit on that branch.

**Tags** — Stored in `.git/refs/tags`. Permanently marks a specific commit.

**Remotes** — References to remote branches, stored in `.git/refs/remotes`. Tracks the state of branches on remote servers.

---

## Git's Garbage Collection and Cleanup

Git repositories can accumulate **unreferenced objects** over time — such as commits from deleted branches. Git uses garbage collection to clean these up and optimize repository size.

### How Garbage Collection Works

Trigger garbage collection manually using:
```
git gc
```
This cleans up unnecessary files and optimizes the local repository.

**Reflog** — Git tracks all reference changes over time using the reflog, which allows recovery of lost commits if needed.

**Reflog Expiry** — Unreferenced commits are eventually removed by garbage collection if they are not recovered in time.

---

## Summary — Git's Internal Flow

```
Modify Files         →  Working Directory
git add              →  Staging Area (Index)
git commit           →  Repository (.git)
                          ↓
                    Blob (file content)
                    Tree (directory structure)
                    Commit (snapshot + metadata)
                          ↓
                    SHA-1 Hash (unique ID)
                    Stored in .git/objects
```

---

## Key Takeaways

- Git stores data as **snapshots**, not deltas — making it fast and space-efficient
- Every piece of data in Git is stored as a **blob, tree, or commit**, each identified by a unique SHA-1 hash
- The **three-area architecture** (working directory → staging area → repository) gives developers precise control over what gets committed
- **Branches are just pointers** to commits — lightweight and fast to create
- **Tags** permanently mark specific commits and never move
- Understanding Git's internals makes it significantly easier to troubleshoot issues and use Git with confidence

---