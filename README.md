# Subiectul 3, examen restanță 2025, Tehnologii Web

Rețeaua de socializare Y urmează să fie lansată în curând, dar o mare parte din codul sursă al acesteia a fost distrusă în urma unei breșe de securitate.

Însă, codul sursă pentru câteva dintre funcționalitățile principale a fost recuperat.

Totuși, sunt multe pagini care lipsesc pe care programatorii companiei trebuie să le refacă.

Sarcina ta este să ajuți echipa cu implementarea unor funcționalități specifice, prezente în lista de mai jos.

Pentru a testa paginile existente și a demonstra corectitudinea noilor implementări poți folosi conturile unor utilizatori deja înregistrați:

- username: john, parolă: password1
- username: alice, parolă: password2
- username: bob, parolă: password3

**Înainte de a trece la implementare, asigură-te că ai explorat codul sursă, ai înțeles cum funcționează și cum te poate ajuta în rezolvarea task-urilor tale.**

Funcționalitățile de care te vei ocupa sunt:

- Lista de subscriberi (2p)
  - în versiunea curentă lista de subscriberi este încărcată în întregime: implementează o modalitate de paginare (FE - 0.25, BE - 0.25) care să permită utilizatorului să aleagă numărul de elemente afișate (FE - 0.25, BE - 0.25)

  - implementează sortarea, ascendentă sau descendentă, după nume sau email, a listei de subscriberi (FE - 0.25, BE - 0.25)

  - implementează filtrarea după nume sau email a listei de subscriberi (FE - 0.25, BE - 0.25)

- Notițele utilizatorului (2.5p)
  - o notiță reprezintă un text scris de către utilizatorul curent la care doar acesta are acces; poate fi utilizată pentru schițarea unor idei pe care utilizatorul dorește să le salveze pentru a le consulta mai târziu

  - implementează o modalitate de navigare din meniul aplicației către pagina de notițe a utilizatorului curent (FE - 0.25)

  - notițele unui utilizator sunt stocate la nivelul bazei de date, vor fi asociate unui utilizator și vor avea o dimensiune maximă a conținutului de 500 de caractere: creează entitatea (Note) aferentă unei notițe (BE - 0.25)

  - implementează o interfață de creare a unei notițe, accesibilă din pagina de notițe a utilizatorului curent (interfața se poate afla în pagina curentă, într-o pagină nouă sau într-o modală - tu decizi) (FE - 0.25)

  - implementează funcționalitatea de creare a unei notițe (FE - 0.25, BE - 0.25)

  - afișează toate notițele utilizatorului curent în ordine invers cronologică (FE - 0.25, BE - 0.25)

  - implementează un mecanism de ștergere a unei notițe (FE - 0.25, BE - 0.25)

  - implementează un mecanism de securizare a unei notițe astfel încât doar utilizatorul care a creat-o să o poată vizualiza sau șterge (BE - 0.25)
