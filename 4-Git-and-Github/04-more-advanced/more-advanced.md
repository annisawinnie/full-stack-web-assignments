Answer the following questions

1. What is the difference between git reset and git revert. When would you use one over the other?  

**git revert**
This command creates a new commit that undoes the changes from a previous commit. This command adds new history to the project (it doesn't modify existing history).  
If a commit has been made somewhere in the project's history, and you later decide that the commit is wrong and should not have been done, then git revert is the tool for the job.  

**git reset**
This command is a little more complicated. It actually does a couple of different things depending on how it is invoked. It modifies the index (the so-called "staging area"). Or it changes which commit a branch head is currently pointing at. This command may alter existing history (by changing the commit that a branch references).  
If you have made a commit, but haven't shared it with anyone else and you decide you don't want it, then you can use git reset to rewrite the history so that it looks as though you never made that commit.  
  
  
2. What is the difference between git merge and git rebase. When would you use one over the other?  
**Git merge** is a command that brings together two or more branches of the commit history.  
When you want to bring those changes back to master, you probably want merge (you don't care about maintaining all of the interim commits).  

**Git rebase** merges all new commits in the master branch by rewriting the history by creating a new commit for each commit in the source branch.  
 if you started doing some development and then another developer made an unrelated change. You probably want to pull and then rebase to base your changes from the current version from the repository.  
 
3. What is the difference between git stash pop and git stash apply. When would you use one over the other?  
**git stash pop** throws away the (topmost, by default) stash after applying it, If you want to apply your top stashed changes to current non-staged change and delete that stash as well, then you should go for git stash pop.  

**git stash apply** leaves it in the stash list for possible later reuse (or you can then git stash drop it).if you are want to apply your top stashed changes to current non-staged change without deleting it, then you should go for git stash apply .   

4. What kinds of things can you do in interactive mode when rebasing?  
Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing. 
