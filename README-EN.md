# Version 2, summer exam 2025, Web Technologies

A new social network, called Y, is set to be launched soon; however, most of its source code was lost after the system was breached.

Some of the main features were recovered, but many important pages are still missing and should be recreated soon.

Your goal is to help the development team by implementing some of these core features.

To test the existing pages and prove that your implementation is correct you can use the following accounts:

- username: john, password: password1
- username: alice, password: password2
- username: bob, password: password3

**Before implementing the new features, make sure to explore the existing source code, to understand how it works and how it can assist you in solving your tasks.**

The features that you have to implement are:

- The list of posts in the newsfeed (2p)
  - in the current version, all the posts in the newsfeed are loaded at once: implement a method to paginate the results (FE - 0.25, BE - 0.25), allowing the user to select the number of items displayed in a single page (FE - 0.25, BE - 0.25)

  - implement a method to sort the list of posts in the newsfeed, ascending or descending, by creation timestamp or by content size (FE - 0.25, BE - 0.25)

  - implement a method to filter out the list of posts in the newsfeed by content (FE - 0.25, BE - 0.25)

- The list of comments associated with a post (2.5p)
  - implement a method to navigate, using the main menu of the application, to the page that contains the comments associated with a post (FE - 0.25)

  - the comments are stored in the database: each post will be associated with a single post and a single user, and the maximum length of the text representing the content will be 500 characters; create the Comment entity (BE - 0.25)

  - implement an interface that allows the user to add a new comment; it should be accessible from the section of the associated post (the interface could be integrated into the same page, implemented as a new page, or even as a modal - it’s up to you) (FE - 0.25)

  - implement the functionality of creating a new comment entity (FE - 0.25, BE - 0.25)

  - display, from newest to oldest, all the comments associated with a post (FE - 0.25, BE - 0.25)

  - implement the functionality of deleting a comment (FE - 0.25, BE - 0.25)

  - implement a security check to allow a user to delete a comment only if he is the owner of the post or the owner of the comment (BE - 0.25)
