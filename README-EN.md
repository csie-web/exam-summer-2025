# Version 3, summer exam 2025, Web Technologies

A new social network, called Y, is set to be launched soon; however, most of its source code was lost after the system was breached.

Some of the main features were recovered, but many important pages are still missing and should be recreated soon.

Your goal is to help the development team by implementing some of these core features.

To test the existing pages and prove that your implementation is correct you can use the following accounts:

- username: john, password: password1
- username: alice, password: password2
- username: bob, password: password3

**Before implementing the new features, make sure to explore the existing source code, to understand how it works and how it can assist you in solving your tasks.**

The features that you have to implement are:

- The list of subscribers (2p)
  - in the current version, the list of subscribers is loaded at once: implement a method to paginate the results (FE - 0.25, BE - 0.25), allowing the user to select the number of items displayed in a single page (FE - 0.25, BE - 0.25)

  - implement a method to sort the list of subscribers, ascending or descending, by name or email (FE - 0.25, BE - 0.25)

  - implement a method to filter out the list of subscribers by name or by email (FE - 0.25, BE - 0.25)

- The notes of the current user (2.5p)
  - a note represents a piece of text written by a user; the note is accessible only to them and it can be used to sketch ideas that they would like to explore later on

  - implement a method to navigate, using the main menu of the application, to the page that contains the notes of the current user (FE - 0.25)

  - the notes are stored in the database: each note will be owned by a single user and the maximum length of the text representing the content will be 500 characters; create the Note entity (BE - 0.25)

  - implement an interface that allows the user to create a new note; it should be accessible from the page containing the notes of the current user (the interface could be integrated into the same page, implemented as a new page, or even as a modal - it’s up to you) (FE - 0.25)

  - implement the functionality of creating a new note entity (FE - 0.25, BE - 0.25)

  - display, from newest to oldest, all the notes created by the current user (FE - 0.25, BE - 0.25)

  - implement the functionality of deleting a note (FE - 0.25, BE - 0.25)

  - implement a security check to prevent a user who does not own a note from viewing or deleting it (BE - 0.25)
