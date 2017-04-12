//konstrukcja
function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	//dzi�ki u�yciu this, w�a�ciwo�� 'marka' obiektu, kt�ry stworzymy, przyjmie warto�� argumentu marka
	this.cena = cena;
	this.kolor = kolor;
};

//funkcjeTelefonu
Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.');
};

//produkcjaTelefon�w
var iPhone4S = new Telefon('Apple', 1000, 'bia�y'),
	iPhone5S = new Telefon('Apple', 1600, 'czarny'),
	iPhoneSE = new Telefon('Apple', 2100, 'srebrny'),
	iPhone6S = new Telefon('Apple', 2750, 'bia�y');

//wywo�anieConsoleLog
iPhone4S.printInfo();
iPhone5S.printInfo();
iPhoneSE.printInfo();
iPhone6S.printInfo();