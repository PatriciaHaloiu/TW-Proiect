# JOBWHEEL – Platformă Web de Promovare a Oportunităților Profesionale

**JOBWHEEL** este o aplicație web realizată în React, dedicată prezentării de anunțuri de angajare, servicii și funcționalități de tip showcase pentru utilizatori interesați de piața muncii în domeniul IT.

## Funcționalități principale

- **Navigare modernă și responsive** (`Navbar.js`)
  - Meniu dinamic cu evidențiere pe scroll
  - Buton de sign-up vizibil adaptat la dimensiunea ecranului

- **Landing Page** (`Home.js`)
  - Hero section cu fundal video (`HeroSection.js`)
  - Prezentare de joburi în format card (`Cards.js` + `CardItem.js`)
  - Footer cu linkuri utile și rețele sociale (`Footer.js`)

- **Anunțuri și servicii**
  - Pagina `Announcement.js`: afișează o pagină vizuală pentru anunțuri curente
  - Pagina `Services.js`: pagină dedicată serviciilor promovate

- **Interacțiune**
  - Butoane reutilizabile cu stiluri și dimensiuni multiple (`Button.js`)
  - Pagina `SignUp.js`: interfață grafică pentru autentificare (simulată)

## Structura componentelor

| Componentă         | Funcționalitate                                             |
|--------------------|-------------------------------------------------------------|
| `Navbar.js`        | Meniu principal cu navigare și responsive design            |
| `HeroSection.js`   | Secțiune principală cu titlu, text și butoane de acțiune    |
| `Cards.js`         | Afișare dinamică a ofertelor de joburi                      |
| `CardItem.js`      | Componentă individuală de tip card                          |
| `Button.js`        | Buton reutilizabil cu stiluri predefinite                   |
| `Footer.js`        | Informații de subsol și rețele sociale                      |
| `Announcement.js`  | Pagina de anunțuri (background full-screen)                 |
| `Services.js`      | Pagina dedicată serviciilor                                 |
| `Home.js`          | Combină `HeroSection`, `Cards` și `Footer`                 |
| `SignUp.js`        | Interfață simplă de login (mockup static)                   |

## Tehnologii utilizate

- React.js (CRA)
- React Router DOM
- HTML/CSS (custom + responsivitate)
- Font Awesome pentru iconuri

## Cerințe

- Node.js + npm
- React 17+ / 18+
- Browser modern pentru redare video și responsive layout

## Instalare locală

```bash
npm install
npm start
```

Aplicația va rula la `http://localhost:3000/`.

## Autor

Proiect web educațional – vitrină pentru oferte de angajare în IT, realizat în React.
