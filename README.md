# Subiectul 2, examen restanță 2025, Tehnologii Web

Rețeaua de socializare Y urmează să fie lansată în curând, dar o mare parte din codul sursă al acesteia a fost distrusă în urma unei breșe de securitate.

Însă, codul sursă pentru câteva dintre funcționalitățile principale a fost recuperat.

Totuși, sunt multe pagini care lipsesc pe care programatorii companiei trebuie să le refacă.

Sarcina ta este să ajuți echipa cu implementarea unor funcționalități specifice, prezente în lista de mai jos.

Pentru a testa paginile existente și a demonstra corectitudinea noilor implementări poți folosi conturile unor utilizatori deja înregistrați:

1. username: john, parolă: password1
2. username: alice, parolă: password2
3. username: bob, parolă: password3

**Înainte de a trece la implementare, asigură-te că ai explorat codul sursă, ai înțeles cum funcționează și cum te poate ajuta în rezolvarea task-urilor tale.**

Funcționalitățile de care te vei ocupa sunt:

- Lista de postări din newsfeed (2p)
  - în versiunea curentă lista de postări este încărcată în întregime: implementează o modalitate de paginare (FE - 0.25, BE - 0.25) care să permită utilizatorului să aleagă numărul de elemente afișate (FE - 0.25, BE - 0.25)

  - implementează sortarea, ascendentă sau descendentă, după data de creare sau dimensiunea conținutului, a listei de postări (FE - 0.25, BE - 0.25)

  - implementează filtrarea după conținut a listei de postări (FE - 0.25, BE - 0.25)

- Lista de comentarii asociate unei postări (2.5p)
  implementează o modalitate de navigare de la nivelul unei postări către pagina de comentarii asociate (FE - 0.25)
  - comentariile sunt stocate la nivelul bazei de date, vor fi asociate unei postări și unui utilizator și vor avea o dimensiune maximă de 500 de caractere: creează entitatea (Comment) aferentă unei comentariu (BE - 0.25)

  - implementează o interfață de adăugare a unui comentariu, accesibilă din pagina de comentarii asociate unei postări (interfața se poate afla în pagina curentă, în pagină nouă sau într-o modală) (FE - 0.25)

  - implementează funcționalitatea de adăugare a unui comentariu (FE - 0.25, BE - 0.25)

  - afișează toate comentariile asociate unei postări în ordine cronologică (FE - 0.25, BE - 0.25)

  - implementează un mecanism de ștergere a unei comentariu (FE - 0.25, BE - 0.25)

  - implementează un mecanism de securizare a unui comentariu astfel încât doar utilizatorul care l-a creat sau utilizatorul care a creat postarea asociată să îl poată șterge (BE - 0.25)
