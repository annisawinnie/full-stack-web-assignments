Answer the following questions

1. What does **git clean** do?  
git clean is a convenience method for deleting untracked files in a repo's working directory. Untracked files are those that are in the repo's directory but have not yet been added to the repo's index with git add .
2. What do the **-d and -f** flags for **git clean** do?
**-d** to have it recurse into such directories as well. If any paths are specified, -d is irrelevant; all untracked files matching the specified paths (with exceptions for nested git directories mentioned under --force) will be removed.  
git clean will refuse to delete files or directories unless given **-f** or -i. Git will refuse to modify untracked nested git repositories (directories with a .git subdirectory) unless a second -f is given.      
3. What **git** command creates a branch?  
**git branch branch-name**
4. What is the difference between a fast-forward and recursive merge?  
fast forward merge you have a straight line of history and with the recursive merge, it is of multiple lines  
5. What **git** command changes to another branch?  
   **git checkout branch-name**
6. How do you remove **modified or deleted** files from the working directory?  
   **git rm files-name directory-name** command does that and also removes the file from your working directory so you don't see it as an untracked file next time around.   
7. What **git** command deletes a branch?  
git branch -d local-branchName. The git push origin –delete command removes a branch from a remote repository
8. What does the **git diff** command do?  
 **git diff** is a multi-use Git command that when executed runs a diff function on Git data sources. These data sources can be commits, branches, files and more.
9. How do you remove files from the staging area?  
To remove all files from staging area use **git reset**
To remove specific file use **git reset "File path"**
10. How do merge conflicts happen?  
Merge conflicts can happen when merging a branch, rebasing a branch, or cherry picking a commit. If Git detects a conflict, it will highlight the conflicted area and ask which code you wish to keep. Once you tell Git which code you want, you can save the file and proceed with the merge, rebase, or cherry pick.