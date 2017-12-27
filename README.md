## Convert non unicode characters to unicode
### Fonts supported
#### Hindi
```
"Krutidev10"
"ShreeDev0714"
"Baraha"
"Amar"
"Kundali"
"AkrutiDevChakra"
"AkrutiDev_Web_RBI"
"AkrutiDev_BYogini"
"Akruti_Ofiice_Priya"
"Shusha"
"Sanskrit99"
"DV-TT-Vedic_Normal"
"DVBW-TTYogeshEn"
"DV-Divyae"
"DV-TTSurekhEN"
"DVW-TTSurekh Normal"
"shreelipi715"
"ShreeLipi_DevaRatna_Universal"
"SHREE-SAN-0962"
"SHREE708"
"Shree714"
"Shivaji"
"Vedic97"
"4CGandhi"
"APS-C-DV-Prakash"
"APS-DV-PRAKASH"
"Chandni"
"AkrutiDevChanakya07"
"XDVNG"
```
#### Extentions
Add language mapper in src/mapper_[language]
include following in mapper
```
exports.fontmap = {}
exports.fontrepl = {}
```
Map them to a language in index.js

### Sample
```
	var uni_dev = require("unidev");
	console.log(
		unidev("ueLrs", "hindi", "Krutidev10")
	); // नमस्ते
```