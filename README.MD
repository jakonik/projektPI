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

Dokumentacja dostępna pod adresem: https://jakonik.github.io/projektPI/

Uzupełnienie dokumentacji:
/config/knexfile.js - ustawienia bazy danych
/models/application.js
-> create - tworzy nowy wpis w bazie danych
	parameters: applications (JSON object) {"appHaslo": string, "usName": string, "appName": string, "appMark": string, "appMessage": string, "usSurname": string, "usMail": string}
	return:
		-> w przypadku zapisania danych w bazie: JSON object {"name": string, "surname": string, "mail":string, "czy_ankieta_wyp: 1}
		-> w przypadku niezapisania danych w bazie: string (komunikat dla użytkownika)
	
/models/GetData.js
-> verification - weryfikuje, czy ankieta nie została zmodyfikowana
	parameters: applications (JSON object) {"appHaslo": string, "secretHash": string, "usName": string, "usSurname": string, "usMail": string}
	return: string (komunikat dla użytkownika)
	
/models/ifPass
-> ifPass - weryfikuje, czy użytkownik wypełnił ankietę
	parameters: applications (JSON object) {"usName": string, "usSurname": string, "usMail": string}
	return: string (komunikat dla użytkownika)
