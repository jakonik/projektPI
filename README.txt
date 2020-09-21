Projekt Inżynierski

Projekt i implemetacja systemu webowego umożliwiającego głosowanie (lub ankietowanie) w sposób umożliwiający zachowanie anonimowości użytkowników.
System zrealizowany w formie aplikacji webowej powinien uwzględniać możliwość odddania głosu lub wyrażenia opinii. Realizuje następujące funkcje:
- informacje przechowywane w bazie danych,
- reprezentacja nie umożliwia powiązania użytkownika z konkretnymi danymi,
- reprezentacja umożliwia sprawdzenie czy dana osoba przekazała dane,
- reprezentacja umożliwia sprawdzenie przez użytkownika czy jego dane są zapisane w bazzie.
Implementacja uwzględniać responsywny interfejs.
Do zapewnienia anonimowości wykorzystano techniki kryptograficzne (funkcje skrótu).

Użyte technologie:
Node
Express
Bookshelf
mysql
CSS3
HTML5
PUG

Implementacja funkcji skrótu z biblioteki crypto.js

Dokumentacja dostępna pod adresem:

Uzupełnienie dokumentacji:
/config/knexfile.js - ustawienia bazy danych
/models/application.js
-> create - worzy nowy wpis w bazie danych
/models/GetData.js
-> verification - weryfikuje, czy ankieta nie została zmodyfikowana
/models/ifPass
-> ifPass - weryfikuje, czy użytkownik wypełnił ankietę
