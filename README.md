# Subiectul 1, examen restanță 2025, Tehnologii Web

Rețeaua de socializare Y urmează să fie lansată în curând, dar o mare parte din codul sursă al acesteia a fost distrusă în urma unei breșe de securitate.

Câteva dintre funcționalitățile principale au fost recuperate, însă, multe pagini care lipsesc trebuie implementate din nou.

Sarcina ta este să ajuți echipa de dezvoltare cu implementarea unor funcționalități specifice, prezente în lista de mai jos.

În plus, din cauza faptului că baza de date a fost compromisă, va trebui să folosești interfața de înregistrare pentru a crea utilizatori de test. Vei avea nevoie de câteva conturi pentru a demonstra corectitudinea noilor implementări.

**Înainte de a trece la implementare, asigură-te că ai explorat codul sursă, ai înțeles cum funcționează și cum te poate ajuta în rezolvarea task-urilor tale.**

Funcționalitățile de care te vei ocupa sunt:

- Lista de persoane urmărite (2p)
  - în versiunea curentă lista de persoane urmărite este încărcată în întregime: implementează o modalitate de paginare (FE - 0.25, BE - 0.25) care să permită utilizatorului să aleagă numărul de elemente afișate (FE - 0.25, BE - 0.25)

  - implementează sortarea, ascendentă sau descendentă, după nume sau email, a listei de persoane urmărite (FE - 0.25, BE - 0.25)

  - implementează filtrarea după nume sau email a listei de persoane urmărite (FE - 0.25, BE - 0.25)

- Postările utilizatorului curent (2.5p)
  - implementează o modalitate de navigare din meniul aplicației către pagina de postări a utilizatorului curent (FE - 0.25)

  - postările unui utilizator sunt stocate la nivelul bazei de date, vor fi asociate unui utilizator și vor avea o dimensiune maximă a conținutului de 500 de caractere: creează entitatea (Post) aferentă unei postări (BE - 0.25)

  - implementează o interfață de creare a unei postări, accesibilă din pagina de postări a utilizatorului curent (interfața se poate afla în pagina curentă, în pagină nouă sau într-o modală - tu decizi) (FE - 0.25)

  - implementează funcționalitatea de creare a unei postări (FE - 0.25, BE - 0.25)

  - afișează toate postările utilizatorului curent în ordine invers cronologică (FE - 0.25, BE - 0.25)

  - implementează un mecanism de ștergere a unei postări (FE - 0.25, BE - 0.25)

  - implementează un mecanism de securizare a unei postări astfel încât doar utilizatorul care a creat-o să o poată șterge (BE - 0.25)
