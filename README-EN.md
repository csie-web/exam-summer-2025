# Version 1, summer exam 2025, Web Technologies

A new social network, called Y, is set to be launched soon; however, most of its source code was lost after the system was breached.

Some of the main features were recovered, but many important pages are still missing and should be recreated soon.

Your goal is to help the development team by implementing some of these core features.

Additionally, because the database was compromised, you’ll have to use the registration page to create a couple of test accounts. You will need these accounts to prove that your implementation is correct.

**Before implementing the new features, make sure to explore the existing source code, to understand how it works and how it can assist you in solving your tasks.**

The features that you have to implement are:

- The list of followed users (subscriptions) (2p)
  - in the current version, all the subscriptions are loaded at once: implement a method to paginate the results (FE - 0.25, BE - 0.25), allowing the user to select the number of items displayed in a single page (FE - 0.25, BE - 0.25)

  - implement a method to sort the list of followed users, ascending or descending, by name or by email (FE - 0.25, BE - 0.25)

  - implement a method to filter out the list of followed users by name or by email (FE - 0.25, BE - 0.25)

- The posts of the current user (2.5p)
  - implement a method to navigate, using the main menu of the application, to the page that contains the posts of the current user (FE - 0.25)

  - the posts are stored in the database: each post will be owned by a single user and the maximum length of the text representing the content will be 500 characters; create the Post entity (BE - 0.25)

  - implement an interface that allows the user to create a new post; it should be accessible from the page containing the posts of the current user (the interface could be integrated into the same page, implemented as a new page, or even as a modal - it’s up to you) (FE - 0.25)

  - implement the functionality of creating a new post entity (FE - 0.25, BE - 0.25)

  - display, from newest to oldest, all the posts created by the current user (FE - 0.25, BE - 0.25)

  - implement the functionality of deleting a post (FE - 0.25, BE - 0.25)

  - implement a security check to prevent a user who does not own a post from deleting it (BE - 0.25)
