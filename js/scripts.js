//konstrukcja
function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	//dziêki u¿yciu this, w³aœciwoœæ 'marka' obiektu, który stworzymy, przyjmie wartoœæ argumentu marka
	this.cena = cena;
	this.kolor = kolor;
};

//funkcjeTelefonu
Telefon.prototype.printInfo = function() {
	console.log('Marka telefonu to ' + this.marka + ', kolor to ' + this.kolor + ', a cena to ' + this.cena + '.');
};

//produkcjaTelefonów
var iPhone4S = new Telefon('Apple', 1000, 'bia³y'),
	iPhone5S = new Telefon('Apple', 1600, 'czarny'),
	iPhoneSE = new Telefon('Apple', 2100, 'srebrny'),
	iPhone6S = new Telefon('Apple', 2750, 'bia³y');

//wywo³anieConsoleLog
iPhone4S.printInfo();
iPhone5S.printInfo();
iPhoneSE.printInfo();
iPhone6S.printInfo();