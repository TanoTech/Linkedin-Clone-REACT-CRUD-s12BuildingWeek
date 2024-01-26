
# Linkedin CLONE - REACT - CRUD APP

# Componenti principali

- ## App.js: gestisce tutte le rotte per i component padre, e la logica di scomparsa della navbar nel component login. 
    App.js è avvolta dal ProviderContext (ProfileContext) cosi da poter attingere a tutti i data necessari. Importa App.css che ha tutte le informazioni necessarie per l'app.

- ## ProfileContext.js: è il foglio che gestisce maggiorparte delle fetch che devono essere condivise da diversi component.

- ## Login: gestisce la selezione dei token dei partecipanti alla repository in modo da passarli a tutte le richieste CRUD all'interno dell'applicazione, renderizzando al component UserProfile.

- ## NavbarTop: La navbar viene mostrata dopo il login e permette la navigazione in tutte le sezioni presenti, la barra di ricerca trova sia utenti che offerte di lavoro e permette di cliccarci e aprirle. 
    Ha un dropdown menù con i dettagli profilo e permette il sign out per tornare alla pagina Login.

- ## UserProfile: gestisce la Get del profilo personale e ha come componenti figli:
       ## MainProfile: che gestisce la modifica della foto e delle informazioni profilo, mostrando i vari dettagli dell'utente loggato.
       ## Activity: fa vedere le attività dell'utente, permette di creare il post in modo fittizio con aggiunta della foto e possibilità di mettere le reazioni.
  
              -## Post: permette di creare i post fittizi.
  
                        Ha due figli:  -## Emoticons: crea una lista di emoji che sono selezionabili.
		                       -## ImageUploader: che permette di caricare un immagine.
  
       -## Experience: gestisce le richieste GET, PUT, DELETE e permette di aggiungere, modificare ed eliminare esperienze lavorative.
       -## Formation: fa vedere la formazione e permette di aggiungere altre esperienze formative in modo fittizio che scompaiono al refresh della pagina.
       -## Interessi: anche questo componente è statico ma abbiamo randomizzato le aziende, le scuole e le newsletter che si possono anche aprire e unfolloware sempre in locale.
  
	                Usa: - ## InteressiUtente: che crea staicamente aziende, newsletter e scuole.
                             - ## DettaglioInteressi: va fuori dalla pagina utente e apre tutte le aziende, newsletter e scuole disponibili.
  
       -## ProfileLanguage: fa vedere lingua del profilo e formattazione url che cambia a seconda dell'utente loggato
       -## Ads: mostra random una serie di pubblicità create su misura dei componenti della repository
       -## OtherProfileConsulted: mostra in modo random degli utenti che dovrebbero essere quelli visitati di recente, ma non lo sono. Permette di connettersi alle persone col button
       -## MayKnow: mostra una lista di persone random di utenti che potresti conoscere.  Permette di connettersi alle persone col button
       -## News: utilizziamo un API di news esterna che compone la sezione LinkedIn Learning.
       -## Footer: è il normale footer a piè di pagina con i vari link.

- ## UserDetails: questo component gestisce la visualizzazione degli altri profili utente e ha come figli gli stessi component che con useLocation() fa sparire i bottoni e le sezioni di modifica prensenti su UserProfile.

- ## Jobs: questo component fa vedere le proposte di lavoro e apre un modale con i dettagli, cercando sulla navbar mostra eventuali risultati non solo sotto la searchbar ma anche nel main.
         Ha un figlio: ##JobDetails: Apre un modale mostrando tutti i dettagli approfonditi dell'annuncio.
- ## My-Connection: mostra le persone a cui ci siamo collegati permette di poter aprire i loro profili e di poterle rimuovere.

- ## Home: gestisce la pubblicazione dei post con immagini annesse, permette di vedere i post degli altri. Ha come figli: 
       -## ProfileSummary: che da le informazioni principali dell'utente loggato.
       -## See More: è un component statico che serve per avvicinarsi al layout di LinkedIn ufficiale.
       -## CreatePost: permette di pubblicare post con immagini.
       -## GetPost: fetcha i post presenti e associa l'id dell'utente che li ha pubblicati al profilo corrispettivo mostrando anche le informazioni profilo utente.
                 Ha un figlio:   -##CommentPost che fetcha l'array commenti e li filtra per id distribuendoli al post corretto, permette di pubblicarli e cancellarli.
       -## LinkedinNews: sempre richiamando l'API delle news mostra un elenco random di notizie.
       -## FooterHome: è un footer sulla destra che sostituisce quello a piè di pagina presente solo su UserProfile e UserDetails

- ## App.css ha tutti gli import dei fogli css, bootstrap ed eventuali icone e poi presenta dei cambiamenti generali per tutta la pagina, viene importato in App.js      

- ## NPM INSTALLATI 
- npm i @fortawesome/fontawesome-svg-core
- npm i @fortawesome/free-solid-svg-icons
- npm i @fortawesome/react-fontawesome
- npm i @reduxjs/toolkit
- npm i @testing-library/jest-dom
- npm i @testing-library/react
- npm i @testing-library/user-event
- npm i axios
- npm i bootstrap
- npm i bootstrap-icons
- npm i react
- npm i react-bootstrap
- npm i react-bootstrap-icons
- npm i react-datepicker
- npm i react-dom
- npm i react-icons
- npm i react-redux
- npm i react-router-dom
- npm i react-scripts
- npm i redux-thunks (questo non viene usato)
- npm i sass
