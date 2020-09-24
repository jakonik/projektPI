Projekt Inżynierski<br>
<br>
Projekt i implemetacja systemu webowego umożliwiającego głosowanie (lub ankietowanie) w sposób umożliwiający zachowanie anonimowości użytkowników.<br>
System zrealizowany w formie aplikacji webowej powinien uwzględniać możliwość odddania głosu lub wyrażenia opinii. Realizuje następujące funkcje:<br>
- informacje przechowywane w bazie danych,<br>
- reprezentacja nie umożliwia powiązania użytkownika z konkretnymi danymi,<br>
- reprezentacja umożliwia sprawdzenie czy dana osoba przekazała dane,<br>
- reprezentacja umożliwia sprawdzenie przez użytkownika czy jego dane są zapisane w bazie.<br>
Implementacja uwzględnia responsywny interfejs.<br>
Do zapewnienia anonimowości wykorzystano techniki kryptograficzne (funkcje skrótu).<br>
<br>
Użyte technologie:<br>
Node<br>
Express<br>
Bookshelf<br>
mysql<br>
CSS3<br>
HTML5<br>
PUG<br>
<br>
Implementacja funkcji skrótu z biblioteki crypto.js<br>
<br>
Dokumentacja dostępna pod adresem: https://jakonik.github.io/projektPI/<br>
<br>
Uzupełnienie dokumentacji:<br>
/config/knexfile.js - ustawienia bazy danych<br>
/models/application.js<br>
-> create - tworzy nowy wpis w bazie danych<br>
	parameters: applications (JSON object) {"appHaslo": string, "usName": string, "appName": string, "appMark": string, "appMessage": string, "usSurname": string, "usMail": string}<br>
	return:<br>
		- w przypadku zapisania danych w bazie: JSON object {"name": string, "surname": string, "mail": string, "czy_ankieta_wyp": 1}<br>
		- w przypadku niezapisania danych w bazie: string (komunikat dla użytkownika)<br>
<br>	
/models/GetData.js<br>
-> verification - weryfikuje, czy ankieta nie została zmodyfikowana<br>
	parameters: applications (JSON object) {"appHaslo": string, "secretHash": string, "usName": string, "usSurname": string, "usMail": string}<br>
	return: string (komunikat dla użytkownika)<br>
<br>	
/models/ifPass.js<br>
-> ifPass - weryfikuje, czy użytkownik wypełnił ankietę<br>
	parameters: applications (JSON object) {"usName": string, "usSurname": string, "usMail": string}<br>
	return: string (komunikat dla użytkownika)<br>
