// data from http://messi.hyyravintolat.fi/publicapi/restaurant/16
var menuJson = {
  "data": [
    {
      "date_sv": "MÃ¥n 28.03",
      "message": null,
      "date_en": "Mon 28.03",
      "data": [],
      "date": "Ma 28.03"
    },
    {
      "date": "Ti 29.03",
      "date_en": "Tue 29.03",
      "message": null,
      "data": [
        {
          "name_en": "Chicken breast, Tagine sauce",
          "nutrition": "energiaa 113kcal (472kJ), hiilihydraattia 2g, rasvaa 5g, proteiinia 14g.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "valkosipulia"
            ],
            "2": []
          },
          "price": {
            "value": {
              "normal": "9.50",
              "student": "4.60",
              "student_hyy": "4.60",
              "graduate_hyy": "6.70",
              "contract": "7.20",
              "graduate": "6.70"
            },
            "name": "Maukkaasti"
          },
          "ingredients": "Broileria (Suomi), Harissa-mausteseosta (tomaattipyree 14%, punainen chili 10%, suola, VALKOSIPULI 3%, cayennenpippuri, sokeri, murskattu chili 3%, viinietikka, oliiviÃ¶ljy, limettimehu, anis, juustokumina, korianteri, happamuudensÃ¤Ã¤tÃ¶aine E 330), VALKOSIPULIA, inkivÃ¤Ã¤riÃ¤, tomaattia, kanaliemijauhetta (suola, glukoosisiirappi, hiivauute, sokeri, kana-aromi, jauhettu kananliha 1,7 %, curry, kurkuma, riisijauho, hapettumisenestoaine [rosmariiniuute]), fariinisokeria, jodioitua suolaa, sitruunamehua, kesÃ¤kurpitsaa, sipulia, paprikaa, korianteria, maissitÃ¤rkkelystÃ¤.",
          "name_sv": "KycklingbrÃ¶st, Tagine-sÃ¥s",
          "name": "Broilerinrintaa, Tagine-kastiketta"
        },
        {
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            }
          },
          "ingredients": "Broileria (Suomi), korppujauhoa (sis. VEHNÃ„Ã„), kalkkunanlihaa (Suomi), rypsiÃ¶ljyÃ¤, SOIJAproteiinia, jodioitua suolaa, mustapippuria, currya, paprikaa, kurkumaa, sitruuna-aromia. \nMajoneesia, kermaviiliÃ¤, chiliÃ¤, chili-tomaattikastiketta, ruohosipulia.",
          "name_sv": "HÃ¶nsnugget, chilidip",
          "name": "Broilerinugetit, chilimajoneesi",
          "name_en": "Chicken nuggets, chili mayonnaise",
          "nutrition": "energiaa 187kcal (784kJ), hiilihydraattia14g, rasvaa 10g, proteiinia 9g.",
          "meta": {
            "0": [
              "L"
            ],
            "1": [
              "gluteenia",
              "pÃ¤hkinÃ¤Ã¤",
              "soijaa",
              "valkosipulia"
            ],
            "2": []
          }
        },
        {
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            }
          },
          "ingredients": "VettÃ¤, makkaraa (vesi, siipikarjanliha [Suomi], perunatÃ¤rkkelys, kamara, sianliha [Suomi], silava, suola, stabilointiaineet [E 1412, E 450], perunakuitu, hapettumisenestoaine E 315, dekstroosi, sÃ¤ilÃ¶ntÃ¤aine natriumnitriitti), Ã¶ljyÃ¤, sipulia, maissijauhoa, lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute 6,3 %, hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine E 150c, mustapippuriaromi), mustapippuria, sinappia (vesi, SINAPINSIEMEN, sokeri, suola, happamuudensÃ¤Ã¤tÃ¶aine E260, VALKOSIPULI, sipuli, valkopippuri, vÃ¤rit [E150d, E160a, E101], sÃ¤ilÃ¶ntÃ¤aine E211), ketsuppia (tomaattisose 85 %, sokeri, suola, sakeuttamisaine E466, happamuudensÃ¤Ã¤tÃ¶aineet [E260, E330], sÃ¤ilÃ¶ntÃ¤aineet [E202, E211], hapettumisenestoaine E300, luontaiset aromit), kastikkeenruskistajaa (sokerikulÃ¶Ã¶ri E150c, vesi, suola 10 %), suolaa.",
          "name_sv": "KorvsÃ¥s",
          "name": "Makkarakastiketta",
          "name_en": "Sausage sauce",
          "nutrition": "energiaa 129kcal 538kJ) hiilihydraattia 8g, rasvaa 9g, proteiinia 5g",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "valkosipulia"
            ],
            "2": []
          }
        },
        {
          "name": "Pesto-kasvislasagnette",
          "name_sv": "Pesto-grÃ¶nsakslasagnette",
          "ingredients": "KesÃ¤kurpitsaa, tomaattia, sipulia, pinaattia, lasagnettea (sis. VEHNÃ„Ã„), juustoa (sis. MAITOA), kasvirasvasekoitetta (vesi, kirnuMAITO, rypsi- ja palmuÃ¶ljy, muunnettu tÃ¤rkkelys, emulgointiaine [rasvahappojen kasvirasvapohjaiset mono- ja diglyseridit], stabilointiaineet [metyyliselluloosa, ksantaanikumi], happamuudensÃ¤Ã¤tÃ¶aineet [natriumsitraatti, sitruunahappo], laktaasientsyymi, aromi), margariinia (sis. kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]), luomuVEHNÃ„jauhoa, pestoa (tuore basilika 45 %, oliiviÃ¶ljy, auringonkukkaÃ¶ljy, CASHEWPÃ„HKINÃ„, merisuola, PINJANSIEMEN, juusto [sis. MAITOA], hera [MAIDOSTA], maissitÃ¤rkkelys, viinietikka, VALKOSIPULI, fruktoosi, happamuudensÃ¤Ã¤tÃ¶aineet [E270, E330]), rypsiÃ¶ljyÃ¤, suolaa, mustapippuria, kasvisliemijauhetta, valkopippuria, basilikaa,",
          "price": {
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student_hyy": "2.60",
              "student": "2.60"
            },
            "name": "Edullisesti"
          },
          "meta": {
            "0": [
              "K",
              "L"
            ],
            "1": [
              "gluteenia",
              "maitoa",
              "pÃ¤hkinÃ¤Ã¤",
              "siemeniÃ¤",
              "valkosipulia"
            ],
            "2": [
              "SisÃ¤ltÃ¤Ã¤ luomua"
            ]
          },
          "nutrition": "energiaa 114kcal (479kJ), hiilihydraattia 10g, rasvaa 7g, proteiinia 2g.",
          "name_en": "Vegetable lasagnette with pesto"
        },
        {
          "ingredients": "Amerikansalaattia, TONNIKALAA, kurkkua, tomaattia, KANANMUNAA, oliivia, sitruunaa, tilliÃ¤.",
          "price": {
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            },
            "name": "Edullisesti"
          },
          "name": "Tonnikalasalaattia",
          "name_sv": "Tonfiskssallad",
          "nutrition": "energiaa 59kcal (246kJ), hiilihydraattia 2g, rasvaa 2g, proteiinia 8g.",
          "name_en": "Tuna salad",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "kalaa",
              "kanamunaa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          }
        },
        {
          "name_sv": "Ananaskvark",
          "name": "Ananasrahkaa",
          "price": {
            "name": "Makeasti",
            "value": {
              "normal": "1.20",
              "student": "1.20",
              "student_hyy": "1.20",
              "contract": "1.20",
              "graduate_hyy": "1.20",
              "graduate": "1.20"
            }
          },
          "ingredients": "MAITOrahkaa, ananasta, kermaa (sis. MAITOA), sokeria.",
          "meta": {
            "0": [
              "G",
              "K",
              "L"
            ],
            "1": [
              "maitoa"
            ],
            "2": []
          },
          "name_en": "Pineapple quark",
          "nutrition": "energiaa 132kcal (554kJ), hiilihydraattia 12g. rasvaa 6g, proteiinia 7g."
        }
      ],
      "date_sv": "Tis 29.03"
    },
    {
      "data": [
        {
          "nutrition": "energiaa 109kcal (459kJ), hiilihydraattia 2g, rasvaa 2g, proteiinia 20g.",
          "name_en": "Sesame chicken breast in  chilisauce",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "seesaminsiemeniÃ¤",
              "valkosipulia"
            ],
            "2": []
          },
          "ingredients": "Broileria (Suomi), SEESAMINSIEMENIÃ„, seesamiÃ¶ljyÃ¤ (sis. SEESAMINSIEMENIÃ„), mustapippuria, jodioitua suolaa.\nVettÃ¤, paprikaa, sekamehua, tomaattia, chiliÃ¤, VALKOSIPULIA, valkoviinietikkaa, maissitÃ¤rkkelystÃ¤, sokeria, jodioitua suolaa.",
          "price": {
            "value": {
              "graduate_hyy": "6.70",
              "contract": "7.20",
              "graduate": "6.70",
              "normal": "9.50",
              "student_hyy": "4.60",
              "student": "4.60"
            },
            "name": "Maukkaasti"
          },
          "name": "SeesambroilerinfileetÃ¤, chilikastiketta",
          "name_sv": "Sesam-hÃ¶nsfile i chilisÃ¥s"
        },
        {
          "name_en": "Beef Burgundy",
          "nutrition": "energiaa 101kcal (423kJ), hiilihydraattia 5g, rasvaa 4g, proteiinia 10g.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]",
              "V"
            ],
            "1": [
              "valkosipulia"
            ],
            "2": []
          },
          "price": {
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            },
            "name": "Edullisesti"
          },
          "ingredients": "Naudanlihaa (Suomi), kasvimargariinia (sis. kasviÃ¶ljyt ja -rasvat [palmu, rypsi vaihtelevina osuuksina], tomaattia, sipulia, VALKOSIPULIA, maissijauhoja, vettÃ¤, laakerinlehtiÃ¤, maustepippuria, lihaliemijauhetta [sis. glukoosisiirappi, suola, sokeri, lihauute [6,3 %], hiivauute, maltodekstriini, happo (sitruunahappo), palmurasva, vÃ¤riaine (E 150c), mustapippuriaromi], mustapippuria,  suolaa, porkkanaa, herkkusieniÃ¤, hillosipulia, alkoholitonta punaviiniÃ¤, punaviinietikkaa.",
          "name_sv": "Burgundisk oxgryta",
          "name": "Burgundin pataa"
        },
        {
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            }
          },
          "ingredients": "VettÃ¤, bataattia, porkkanaa, valkoisia papuja, sipulia, kookosmaitoa, maissitÃ¤rkkelystÃ¤, rypsiÃ¶ljyÃ¤, omenaviinietikkaa, VALKOSIPULIA, kasvisliemijauhetta (porkkana, palsternakka, sipuli, purjosipuli, jodioitu suola, hiivauute, palmurasva, glukoosisiirappi, persiljauute, kurkuma, mustapippuriaromi, riisijauho, maltodekstriini), chilimausteseosta, kurkumaa, persiljaa, suolaa, fariinisokeria, korianteria, kuminaa.",
          "name_sv": "SautÃ© pÃ¥ batat och bÃ¶nor",
          "name": "Bataatti-papuhÃ¶ystÃ¶Ã¤",
          "name_en": "Sweet potato-bean sautÃ©",
          "nutrition": "energiaa 110kcal (459kJ), hiilihydraatteja 13g, rasvaa 4g, proteiinia 4g.",
          "meta": {
            "0": [
              "G",
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "palkokasveja",
              "valkosipulia"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          }
        },
        {
          "meta": {
            "0": [
              "L"
            ],
            "1": [
              "gluteenia",
              "kalaa",
              "kanamunaa",
              "maitoa",
              "sinapinsiemeniÃ¤"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          },
          "nutrition": "energiaa 203kcal (848kJ), hiilihydraattia 12g, rasvaa 12g, proteiinia 10g",
          "name_en": "Cod nuggets with remoulade sauce",
          "name": "Turskanuggetit, remouladekastiketta",
          "name_sv": "Torsknuggets med remouladesÃ¥s",
          "ingredients": "TURSKAA, VEHNÃ„jauhoa, vettÃ¤, perunatÃ¤rkkelystÃ¤, rapsiÃ¶ljyÃ¤, perunahiutaletta, jodioitua suolaa, hiivaa, valkopippuria. \nMajoneesia (rypsiÃ¶ljy, vesi, sokeri, suola 1,4%, KELTUAISjauhe, etikka, SINAPINSIEMEN, sakeuttamisaineet E415 ja E412, sÃ¤ilÃ¶ntÃ¤aine E202, vÃ¤ri E160a), kermaviiliÃ¤ (sis. MAITOA), maustekurkkua, sipulia, kaprista, tilliÃ¤.",
          "price": {
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60"
            },
            "name": "Edullisesti"
          }
        },
        {
          "name": "Nizzansalaattia",
          "name_sv": "Nizza sallad",
          "ingredients": "Amerikansalaattia, tonnikalaa, tomaattia, perunaa, papua, kananmunaa, silliÃ¤, paprikaa, oliiveja, kaprista, ruohosipulia, rypsiÃ¶ljyÃ¤, punaviinietikkaa, sokeria, mustapippuria, rakuunaa,",
          "price": {
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60"
            },
            "name": "Edullisesti"
          },
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [],
            "2": []
          },
          "nutrition": "energiaa 97kcal (405kJ), hiilihydraattia 4g, rasvaa 4g, proteiinia 7g.",
          "name_en": "Salad Ã¡ la Nicoise"
        },
        {
          "ingredients": "Raparperia, KAURAA, sokeria, margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]).\nMAITOA, kasvirasvaa (kovetettu [palmu]), sokeria, MAITOjauhetta (E 472b, E 472e), vaniliinia, johanneksenleipÃ¤puujauhetta (E 407), betakaroteenia, fariinisokeria.",
          "price": {
            "name": "Makeasti",
            "value": {
              "student": "1.20",
              "student_hyy": "1.20",
              "normal": "1.20",
              "graduate": "1.20",
              "graduate_hyy": "1.20",
              "contract": "1.20"
            }
          },
          "name": "Kaura-raparperipaistosta, vaniljakastiketta",
          "name_sv": "Havre-rabarberpaj, vaniljasÃ¥s",
          "nutrition": "Ravintoarvo 100g/ energiaa 258kcal (1080kj), hiilihydraattia 25g, rasvaa 15g, proteiinia 4g",
          "name_en": "Oat- rhubarbpie, vanillasauce",
          "meta": {
            "0": [
              "K",
              "L",
              "VL"
            ],
            "1": [
              "gluteenia",
              "maitoa"
            ],
            "2": []
          }
        }
      ],
      "date_en": "Wed 30.03",
      "message": null,
      "date_sv": "Ons 30.03",
      "date": "Ke 30.03"
    },
    {
      "date": "To 31.03",
      "date_sv": "Tors 31.03",
      "date_en": "Thu 31.03",
      "data": [
        {
          "meta": {
            "0": [
              "G",
              "L",
              "M"
            ],
            "1": [
              "kanamunaa",
              "sinapinsiemeniÃ¤",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Pulled pork,  BBQ-mayonnaise",
          "nutrition": "energiaa 272kcal (1137kJ), hiilihydraattia 6g, rasvaa 21g, proteiinia 15g.",
          "name_sv": "VÃ¤lkokt gris, BBQ-majonnÃ¤ssÃ¥s",
          "name": "YlikypsÃ¤Ã¤ porsasta, BBQ-majoneesia",
          "price": {
            "name": "Maukkaasti",
            "value": {
              "student": "4.60",
              "student_hyy": "4.60",
              "normal": "9.50",
              "graduate": "6.70",
              "contract": "7.20",
              "graduate_hyy": "6.70"
            }
          },
          "ingredients": "Porsasta (Suomi), majoneesia (rypsiÃ¶ljy, vesi, sokeri, suola 1,4%, KELTUAISjauhe, etikka, SINAPINSIEMEN, sakeuttamisaineet E415 ja E412, sÃ¤ilÃ¶ntÃ¤aine E202, vÃ¤ri E160a), BBQ-kastiketta (tomaatti, glukoosi-fruktoosisiirappi, vÃ¤kiviinaetikka, sokeri, siirappi, muunneltu maissitÃ¤rkkelys, suola, savuaromi, mausteet, aromit), tomaattipyrettÃ¤, sitruunamehua, VALKOSIPULIA, sokeria, jodioitua suolaa."
        },
        {
          "ingredients": "Broileria (Suomi), jogurttia (sis. MAITOA), tomaattia, sipulia, garam masalaa (juustokumina 30%, kardemumma 25%, korianteri, mustapippuri, neilikka, kaneli, cayannepippuri), inkivÃ¤Ã¤riÃ¤, chiliÃ¤, VALKOSIPULIA, sokeria, jodioitua suolaa, maissitÃ¤rkkelystÃ¤.",
          "price": {
            "name": "Edullisesti",
            "value": {
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00"
            }
          },
          "name": "Broilerikastiketta Tikka Masala",
          "name_sv": "Kyckling Tikka Masala",
          "nutrition": "ravintoarvo 100g/ energiaa 115kcal (497kj), hiilihydraattia 4g, rasvaa 7g, proteiinia 9g.",
          "name_en": "Chicken Tikka Masala",
          "meta": {
            "0": [
              "G",
              "L",
              "[S]"
            ],
            "1": [
              "maitoa",
              "valkosipulia"
            ],
            "2": []
          }
        },
        {
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            }
          },
          "ingredients": "SILAKKAA, VEHNÃ„jauhoa, KAURAmursketta, kasviÃ¶ljyÃ¤.\nKermaviiliÃ¤ (sis. MAITOA), mustapippuria, sokeria, jodioitua suolaa, sitruunaa, tilliÃ¤.",
          "name_sv": "StrÃ¶mmingsbiffar, dill-grÃ¤ddfilssÃ¥s",
          "name": "SilakkapihvejÃ¤, kermaviili-tillikastiketta",
          "name_en": "Baltic herring, dill-sour cream sauce",
          "nutrition": "energiaa 153kcal (642kJ)\r\nhiilihydraattia 8g, rasvaa 9g, proteiinia 10g",
          "meta": {
            "0": [
              "L",
              "[S]"
            ],
            "1": [
              "gluteenia",
              "kalaa",
              "maitoa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          }
        },
        {
          "name_sv": "Morotbiffar, mango-currymajonnÃ¤s",
          "name": "Porkkanapihvit, mango-currymajoneesi",
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            }
          },
          "ingredients": "Porkkanaa, rypsiÃ¶ljyÃ¤, perunaraetta, sipulia, SOIJAproteiinia, jodioitua suolaa, sakeuttamisaineita [E461, E407a], valkopippuria, MUSKOTTIPÃ„HKINÃ„Ã„.\nRypsiÃ¶ljyÃ¤, SOIJAjauhoa, etikkaa, SINAPPIA (vesi, SINAPINSIEMEN, sokeri, suola, happamuudensÃ¤Ã¤tÃ¶aine E260, VALKOSIPULI, sipuli, valkopippuri, vÃ¤rit [E150d, E160a, E101], sÃ¤ilÃ¶ntÃ¤aine E211), jodioitua suolaa, sokeria, mangochutneyta (sokeri, mango 46%, suola, happamuudensÃ¤Ã¤tÃ¶aine [etikkahappo], chili, inkivÃ¤Ã¤ri, VALKOSIPULI), currya, valkopippuria.",
          "meta": {
            "0": [
              "G",
              "K",
              "L",
              "M",
              "VE"
            ],
            "1": [
              "pÃ¤hkinÃ¤Ã¤",
              "sinapinsiemeniÃ¤",
              "sinappia",
              "soijaa",
              "valkosipulia"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          },
          "name_en": "Carrot patties, mango and currymayonnaise",
          "nutrition": "energiaa 332kcal (1390kJ), hiilihydraattia 12g, rasvaa 30g, proteiinia 4g."
        },
        {
          "price": {
            "value": {
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00"
            },
            "name": "Edullisesti"
          },
          "ingredients": "Kalkkunaa, nuudelia, tomaattia, kesÃ¤kurpitsaa, maissia, paprikaa, purjoa,   amerikansalaattia, sweet chili-kastiketta (sis. chili, tomaatti, valkosipuli, etikka, sokeri), maapÃ¤hkinÃ¤Ã¤, korianteria",
          "name_sv": "Kalkon och noodelsallad",
          "name": "Kalkkuna-nuudelisalaatti",
          "name_en": "Turkeysalad with noodels",
          "nutrition": "energiaa 63kcal (263kJ), hiilihydraattia 5g, rasvaa 2g, proteiinia 6g.",
          "meta": {
            "0": [
              "M",
              "PÃ„",
              "[S]",
              "V"
            ],
            "1": [
              "pÃ¤hkinÃ¤Ã¤",
              "valkosipulia"
            ],
            "2": []
          }
        },
        {
          "name_sv": "KÃ¶rsbÃ¤rkvarg",
          "name": "Kirsikkarahkaa",
          "price": {
            "value": {
              "graduate": "1.20",
              "contract": "1.20",
              "graduate_hyy": "1.20",
              "student": "1.20",
              "student_hyy": "1.20",
              "normal": "1.20"
            },
            "name": "Makeasti"
          },
          "ingredients": "MAITOrahkaa, kermaa (sis. MAITOA), kirsikoita, sokeria.",
          "meta": {
            "0": [
              "G",
              "K",
              "L"
            ],
            "1": [
              "maitoa"
            ],
            "2": []
          },
          "name_en": "Cherry quark dessert",
          "nutrition": "energiaa 148kcal (618kJ), hiilihydraattia 15g, rasvaa 7g, proteiinia 7g."
        }
      ],
      "message": null
    },
    {
      "date_sv": "Fre 01.04",
      "date_en": "Fri 01.04",
      "data": [
        {
          "meta": {
            "0": [
              "G",
              "L"
            ],
            "1": [
              "kalaa",
              "maitoa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          },
          "nutrition": "energiaa 149kcal (625kJ), hiilihydraattia 2g, rasvaa 10g, proteiinia 13g.",
          "name_en": "Fried salmon with roe-sour cream sauce",
          "name": "Paistettua lohta,  mÃ¤ti-kermaviilikastiketta",
          "name_sv": "Stekt lax,  rom dill-sÃ¥s",
          "ingredients": "LOHTA, jodioitua suolaa, tilliÃ¤, mustapippuria.\nKermaviiliÃ¤ (sis. MAITOA), mustapippuria, mÃ¤titahna, , jodioitua suolaa, sitruunaa, tilliÃ¤.",
          "price": {
            "name": "Maukkaasti",
            "value": {
              "student": "4.60",
              "student_hyy": "4.60",
              "normal": "9.50",
              "graduate": "6.70",
              "contract": "7.20",
              "graduate_hyy": "6.70"
            }
          }
        },
        {
          "name": "Jauhelihabolognaisea, juustoraastetta",
          "name_sv": "Bolognaise pÃ¥ malet kÃ¶tt, riven ost",
          "ingredients": "Naudanlihaa (Suomi), porkkanaa, tomaattia, sipulia, maissitÃ¤rkkelystÃ¤, mustapippuria, rypsiÃ¶ljyÃ¤, oreganoa, sokeria, VALKOSIPULIA, basilikaa, lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute 6,3 %, hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine E 150c, mustapippuriaromi). \nJuustoa (sis. MAITO).",
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            }
          },
          "meta": {
            "0": [
              "G",
              "L",
              "[S]"
            ],
            "1": [
              "maitoa",
              "valkosipulia"
            ],
            "2": []
          },
          "nutrition": "energiaa 130kcal (544kJ), hiilihydraattia 3g, rasvaa 9g, proteiinia 9g.",
          "name_en": "Bolognaise with minced meat, grated cheese"
        },
        {
          "nutrition": "energia 42 kcal (175kJ), hiilihydraattia 3g, rasvaa 1g, proteiinia 4g.",
          "name_en": "Chicken soup Tom Yam",
          "meta": {
            "0": [
              "G",
              "L",
              "M"
            ],
            "1": [
              "kalaa",
              "soijaa",
              "valkosipulia"
            ],
            "2": []
          },
          "ingredients": "Tomaattia, broileria (Suomi), porkkanaa, herkkusieniÃ¤, purjosipulia, limetinlehtiÃ¤, sokeria, limemehua, korianteria, tom yam tahnaa (SOIJAÃ¶ljy, sipuli, sokeri, VALKOSIPULI, galangal, sitruunaruoho, chili, suola), KALAkastiketta (ANJOVISuute 60%, suola 22%, sokeri, sitruunahappo), kanaliemijauhetta (suola, glukoosisiirappi, hiivauute, sokeri, kana-aromi, jauhettu kananliha 1,7 %, curry, kurkuma, riisijauho, hapettumisenestoaine [rosmariiniuute]).",
          "price": {
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            },
            "name": "Edullisesti"
          },
          "name": "Broilerikeitto Tom Yam",
          "name_sv": "Kycklingsoppa Tom Yam"
        },
        {
          "price": {
            "value": {
              "student_hyy": "2.60",
              "student": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            },
            "name": "Edullisesti"
          },
          "ingredients": "VettÃ¤, porkkanaa, kesÃ¤kurpitsaa, lanttua, purjoa, SOIJArouhetta, tomaattia, sipulia, rypsiÃ¶ljyÃ¤, VALKOSIPULIA, sokeria, persiljaa, mustapippuria, timjamia, basilikaa, jodioitua suolaa, oreganoa, kasvisliemijauhetta (porkkana, palsternakka, sipuli, purjosipuli, suola, hiivauute, palmurasva, glukoosisiirappi, persiljauute, kurkuma, mustapippuriaromi, riisijauho, maltodekstriini).",
          "name_sv": "Sojabolognaise",
          "name": "Soijabolognaisea",
          "name_en": "Soyabolognaise",
          "nutrition": "energiaa 70kcal (292kJ), hiilihydraattia 4g, rasvaa 4g, proteiinia 4g.",
          "meta": {
            "0": [
              "G",
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "soijaa",
              "valkosipulia"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          }
        },
        {
          "nutrition": "energiaa 151kcal (635kJ), hiilihydraattia 2g, rasvaa 12g, proteiinia 5g.",
          "name_en": "Tomato-mozzarella salad",
          "meta": {
            "0": [
              "G",
              "K",
              "VL"
            ],
            "1": [
              "maitoa"
            ],
            "2": []
          },
          "ingredients": "Mozzarellajuustoa (sis. MAITOA), tomaattia, amerikansalaattia, basilikaa, rypsiÃ¶ljyÃ¤, hunajaa, balsamicoa, jodioitua suolaa, mustapippuria, persiljaa.",
          "price": {
            "value": {
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            },
            "name": "Edullisesti"
          },
          "name": "Tomaatti-mozzarellasalaattia",
          "name_sv": "Tomat-mozzarrellasallad"
        },
        {
          "name_sv": "ChokladkrÃ¤m med vispgrÃ¤dde",
          "name": "SuklaakiisseliÃ¤, vaniljakermaa",
          "price": {
            "value": {
              "student": "1.20",
              "student_hyy": "1.20",
              "normal": "1.20",
              "graduate": "1.20",
              "contract": "1.20",
              "graduate_hyy": "1.20"
            },
            "name": "Makeasti"
          },
          "ingredients": "Kermaa,kevytmaitoa, vettÃ¤, sokeria, vaniljasokeria, kaakaojauhetta, maissitÃ¤rkkelystÃ¤.",
          "meta": {
            "0": [
              "G",
              "K"
            ],
            "1": [],
            "2": []
          },
          "name_en": "Choclate cream with whipped cream",
          "nutrition": "energiaa 189kcal (792kJ), hiilihydraattia 13g, rasvaa 15g, proteiinia 1g."
        }
      ],
      "message": null,
      "date": "Pe 01.04"
    },
    {
      "date": "La 02.04",
      "date_sv": "LÃ¶r 02.04",
      "message": null,
      "data": [],
      "date_en": "Sat 02.04"
    },
    {
      "date_sv": "SÃ¶n 03.04",
      "data": [],
      "date_en": "Sun 03.04",
      "message": null,
      "date": "Su 03.04"
    },
    {
      "data": [
        {
          "name_sv": "KycklingfilÃ©er, Satay sÃ¥s",
          "name": "BroilerinfileetÃ¤, Satay-kastiketta",
          "price": {
            "name": "Maukkaasti",
            "value": {
              "student_hyy": "4.60",
              "student": "4.60",
              "normal": "9.50",
              "graduate": "6.70",
              "graduate_hyy": "6.70",
              "contract": "7.20"
            }
          },
          "ingredients": "BroilerinfileetÃ¤ (Suomi), kookosmaitoa, MAAPÃ„HKINÃ„levitettÃ¤ (MAAPÃ„HKINÃ„, kasvirasva ja -Ã¶ljy, sokeri, suola), sitruunamehua, chiliÃ¤, currytahnaa (vesi, korianteri, suola, puuvillanSIEMENÃ¶ljy, juustokumina, chili, punainen linssijauho, valkosipuli, inkivÃ¤Ã¤ri, kurkuma, happamuudensÃ¤Ã¤tÃ¶aine E260, anis, sarviapila, neilikka, kaneli, laakerinlehti), sokeria, jodioitua suolaa, maissitÃ¤rkkelystÃ¤, korianteria.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "pÃ¤hkinÃ¤Ã¤",
              "siemeniÃ¤",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Chicken fillet and Satay sauce",
          "nutrition": "energiaa 132kcal (552kJ), hiilihydraattia 3g, proteiinia 15g, rasvaa 6g."
        },
        {
          "price": {
            "name": "Edullisesti",
            "value": {
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            }
          },
          "ingredients": "Makkara; vesi, siipikarjan- ja sianlihaa (Suomi), naudanlihaa (Suomi), perunatÃ¤rkkelystÃ¤, silavaa, suolaa, stabilointiainetta E 450, dekstroosia, naudan rasvaa, aromeja [mm. paprika], hapettumisenestoaine E 315, sÃ¤ilÃ¶ntÃ¤aine, natriumnitriitti, juustoraastetta (termisoitu maito, hapate, suola, happamuudensÃ¤Ã¤tÃ¶aine [E 509] ja paakkuuntumisenestoaine [E 460]).\nSinappikastike; margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]), SINAPPIA, sipulia, VEHNÃ„jauhoa, lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute 6,3 %, hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine E 150c, mustapippuriaromi), mustapippuria, VALKOSIPULIA, salviaa, sokerikulÃ¶Ã¶riÃ¤.",
          "name_sv": "Ugnskorv, senapssÃ¥s",
          "name": "Uunimakkaraa, sinappikastiketta",
          "name_en": "Baked sausage, mustard sauce",
          "nutrition": "energiaa 202kcal (844kJ), hiilihydraattia 8g, rasvaa 14g, proteiinia 10g.",
          "meta": {
            "0": [
              "L"
            ],
            "1": [
              "gluteenia",
              "maitoa",
              "sinappia",
              "valkosipulia"
            ],
            "2": []
          }
        },
        {
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            }
          },
          "ingredients": "SILAKKAA, chilitomaattikastiketta (MUSKOTTIPÃ„HKINÃ„, VALKOSIPULI), tomaattia, kasvirasvavalmistetta (MAITO, rypsiÃ¶ljy, kovetettu kasvirasva, muunneltu tÃ¤rkkelys, emulgointiaine [E472e kasvirasvapohjainen], stabilointiaine [guarkumi], maltodekstriini, sokeri, happamuudensÃ¤Ã¤tÃ¶aineet [natriumsitraatit], laktaasientsyymi, aromi, vÃ¤ri [betakaroteeni]), jodioitua suolaa, sitruunaa, chiliÃ¤, sokeria, ruohosipulia.",
          "name_sv": "Chili-tomatstrÃ¶mming",
          "name": "Chili-tomaattisilakat",
          "name_en": "Herring in chili and tomato",
          "nutrition": "energiaa 124kcal (518kJ), hiilihydraattia 6g, rasvaa 6g, proteiinia 11g.",
          "meta": {
            "0": [
              "G",
              "L",
              "[S]"
            ],
            "1": [
              "kalaa",
              "maitoa",
              "pÃ¤hkinÃ¤Ã¤",
              "valkosipulia"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          }
        },
        {
          "meta": {
            "0": [
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "gluteenia",
              "palkokasveja",
              "soijaa",
              "valkosipulia"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          },
          "nutrition": "energiaa 90kcal (377kJ), hiilihydraattia 12g, rasvaa 3g, proteiinia 3g.",
          "name_en": "Nasi goreng Tofu",
          "name": "Nasi goreng Tofu",
          "name_sv": "Nasi goreng Tofu",
          "ingredients": "TÃ¤ysjyvÃ¤riisiÃ¤, luomutofua (vesi, SOIJApapu 35,8 %, juoksute [kalsiumsulfaatti]), kaalia, HERNEITÃ„, paprikaa, sipulia, Ketjap manis-kastiketta (sokeri, SOIJAPAPU-uute [SOIJA, VEHNÃ„], suola, sokerikulÃ¶Ã¶ri, vesi, sitruunahappo, yrtit. Saattaa sisÃ¤ltÃ¤Ã¤ PÃ„HKINÃ„Ã„), rypsiÃ¶ljyÃ¤, inkivÃ¤Ã¤riÃ¤, VALKOSIPULIA, chiliÃ¤, kurkumaa, jodioitua suolaa, mustapippuria.",
          "price": {
            "value": {
              "student_hyy": "2.60",
              "student": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            },
            "name": "Edullisesti"
          }
        },
        {
          "meta": {
            "0": [
              "G",
              "K",
              "VL"
            ],
            "1": [
              "maitoa",
              "palkokasveja",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Greek salad",
          "nutrition": "energiaa 84kcal (351kJ), hiilihydraattia 2g, rasvaa 6g, proteiinia 4g.",
          "name_sv": "Grekisk sallad",
          "name": "Kreikkalaista salaattia",
          "price": {
            "name": "Edullisesti",
            "value": {
              "student_hyy": "2.60",
              "student": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            }
          },
          "ingredients": "Amerikansalaattia, salaattijuustoa mausteÃ¶ljyssÃ¤ (MAITO, paprika, ruohosipuli, VALKOSIPULI, oregano, meirami, rakuuna), kurkkua, tomaattia, paprikaa, oliivia, punasipulia, HERNEENversoa."
        },
        {
          "name": "Ruusunmarjarahkaa",
          "name_sv": "Nyponkvark",
          "ingredients": "MAITOrahkaa, kermaa (sis. MAITOA), ruusunmarjaa, sokeria, vaniljasokeria.",
          "price": {
            "name": "Makeasti",
            "value": {
              "student": "1.20",
              "student_hyy": "1.20",
              "normal": "1.20",
              "graduate": "1.20",
              "graduate_hyy": "1.20",
              "contract": "1.20"
            }
          },
          "meta": {
            "0": [
              "G",
              "K",
              "L"
            ],
            "1": [
              "maitoa"
            ],
            "2": []
          },
          "nutrition": "Ravintoarvo 100g/ energiaa 135kcal (567kJ), hiilihydraattia 13g, rasvaa 6g, proteiinia 7g.",
          "name_en": "Rosehip quark"
        }
      ],
      "message": null,
      "date_en": "Mon 04.04",
      "date_sv": "MÃ¥n 04.04",
      "date": "Ma 04.04"
    },
    {
      "date": "Ti 05.04",
      "date_sv": "Tis 05.04",
      "data": [
        {
          "name_en": "Salmon in capers sauce",
          "nutrition": "energiaa 185kcal (775kJ), hiilihydraattia 3g, rasvaa 14g, proteiinia 12g.",
          "meta": {
            "0": [
              "L"
            ],
            "1": [
              "gluteenia",
              "kalaa",
              "maitoa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          },
          "price": {
            "name": "Maukkaasti",
            "value": {
              "contract": "7.20",
              "graduate_hyy": "6.70",
              "graduate": "6.70",
              "normal": "9.50",
              "student": "4.60",
              "student_hyy": "4.60"
            }
          },
          "ingredients": "LOHTA, kasvismargariinia (kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]), sipulia, VEHNÃ„jauhoa, kasvirasvavalmistetta (MAITO, rypsiÃ¶ljy, kovetettu kasvirasva, muunneltu tÃ¤rkkelys, emulgointiaine [E472e kasvirasvapohjainen], stabilointiaine [guarkumi], maltodekstriini, sokeri, happamuudensÃ¤Ã¤tÃ¶aine [natriumsitraatti], laktaasientsyymi, aromi, vÃ¤ri [betakaroteeni]), vettÃ¤, MÃ„TItahnaa, tilliÃ¤, kaprista, jodioitua suolaa, mustapippuria, tomaattia.",
          "name_sv": "Lax i kaprissÃ¥s",
          "name": "Kaprislohta"
        },
        {
          "name": "Lihamakaronilaatikkoa",
          "name_sv": "MakaronilÃ¥da",
          "ingredients": "Naudanlihaa (Suomi), tummaa makaronia (sis. VEHNÃ„Ã„), MAITOA, KANANMUNAA, sipulia, mustapippuria, lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute 6,3 %, hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine [E 150c, mustapippuriaromi]), juustoa (sis. MAITOA).",
          "price": {
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60"
            },
            "name": "Edullisesti"
          },
          "meta": {
            "0": [
              "[S]"
            ],
            "1": [
              "gluteenia",
              "kanamunaa",
              "maitoa"
            ],
            "2": []
          },
          "nutrition": "energiaa 128kcal (537kJ), hiilihydraattia 15g, rasvaa 4g, proteiinia 9g.",
          "name_en": "Macaroni casserole"
        },
        {
          "ingredients": "Papuja, kesÃ¤kurpitsaa, vesikastanjaa, MAAPÃ„HKINÃ–ITÃ„, porkkanaa, sipulia, SOIJAkastiketta, hoi sin kastiketta (sokeri, vesi, SOIJAPAPUtahna 6% [vesi, SOIJAPAPU, suola, VEHNÃ„jauho], modifioitu maissitÃ¤rkkelys, suola, fermentoitu SOIJAPAPUtahna 1%, SEESAMINÃ¶ljy 0,02%, sÃ¤ilÃ¶ntÃ¤aine E260, vÃ¤riaine E150c, stabilointiaine E415, VALKOSIPULI, mausteet), etikkaa, sokeria, inkivÃ¤Ã¤riÃ¤, Sambal Oelekia (chilipippuri, vesi, suola 11%, muunneltu maissitÃ¤rkkelys, sitruunahappo, sÃ¤ilÃ¶ntÃ¤aineet E210, E200), VALKOSIPULIA.",
          "price": {
            "value": {
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "student_hyy": "2.60",
              "student": "2.60",
              "normal": "8.00"
            },
            "name": "Edullisesti"
          },
          "name": "Papuja ja pÃ¤hkinÃ¶itÃ¤ Kung Po",
          "name_sv": "Beans and nuts Kung Po",
          "nutrition": "Ravintoarvo 100g/ energiaa 100kcal (418kj), hiilihydraattia 9g, rasvaa 6g, proteiinia 4g",
          "name_en": "BÃ¶nor och nÃ¶tter Kung Po",
          "meta": {
            "0": [
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "gluteenia",
              "pÃ¤hkinÃ¤Ã¤",
              "palkokasveja",
              "seesaminsiemeniÃ¤",
              "soijaa",
              "valkosipulia"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          }
        },
        {
          "meta": {
            "0": [
              "G",
              "L",
              "M"
            ],
            "1": [
              "valkosipulia"
            ],
            "2": []
          },
          "nutrition": "energiaa 178kcal (744kJ), hiilihydraattia 1g, rasvaa 13g, proteiinia 13g.",
          "name_en": "Chicken in wine",
          "name": "Kananpoikaa viinissÃ¤",
          "name_sv": "Kyckling i vin",
          "ingredients": "Broilerinkoipea (Suomi), pekonia (porsaanliha [Suomi], suola, stabilointiaineet [E450, E451], hapettumisenestoaine E316, sÃ¤ilÃ¶ntÃ¤aine E250, glukoosi, savuaromi), tomaattia, herkkusieniÃ¤, rypsiÃ¶ljyÃ¤, timjamia, persiljaa, mustapippuria, VALKOSIPULIA, punaviinietikkaa, lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute 6,3 %, hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine E 150c, mustapippuriaromi), sokeria, sokerikulÃ¶Ã¶riÃ¤.",
          "price": {
            "name": "Edullisesti",
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70"
            }
          }
        },
        {
          "price": {
            "value": {
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            },
            "name": "Edullisesti"
          },
          "ingredients": "Maissia, parsaa, amerikansalaattia, kesÃ¤kurpitsaa, sipulia, retiisiÃ¤, tomaattia, kirjoLOHTA, sitruunaa, tilliÃ¤.",
          "name_sv": "Sallad pÃ¥ kallrÃ¶kt lax",
          "name": "KylmÃ¤savulohisalaattia",
          "name_en": "Smoked salmon salad",
          "nutrition": "energiaa 85kcal (354kJ), hiilihydraattia 6g, rasvaa 4g, proteiinia 6g.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "kalaa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          }
        },
        {
          "name_sv": "FruktrkÃ¤m, vispgrÃ¤dde",
          "name": "HedelmÃ¤kiisseliÃ¤, vaniljakermaa",
          "price": {
            "name": "Makeasti",
            "value": {
              "graduate_hyy": "1.20",
              "contract": "1.20",
              "graduate": "1.20",
              "normal": "1.20",
              "student_hyy": "1.20",
              "student": "1.20"
            }
          },
          "ingredients": "Appelsiinimehua, ananasta, omenaa, sokeria, jodioitua suolaa, perunajauhoa.\nKermaa (sis. MAITOA), sokeria, vaniljasokeria.",
          "meta": {
            "0": [
              "G",
              "K",
              "L"
            ],
            "1": [
              "maitoa"
            ],
            "2": []
          },
          "name_en": "Fruit fool, whipped cream",
          "nutrition": "energiaa 93kcal (391kJ), hiilihydraattia 15g, rasvaa 3,5g, proteiinia 0,5g."
        }
      ],
      "date_en": "Tue 05.04",
      "message": null
    },
    {
      "date_en": "Wed 06.04",
      "data": [
        {
          "name_en": "Fried flounder, remoulade sauce",
          "nutrition": "energiaa 176kcal (739kJ), hiilihydraattia 16g, rasvaa 9g, proteiinia 8g.",
          "meta": {
            "0": [
              "L"
            ],
            "1": [
              "gluteenia",
              "kalaa",
              "kanamunaa",
              "maitoa",
              "sinapinsiemeniÃ¤",
              "sinappia"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          },
          "price": {
            "value": {
              "normal": "9.50",
              "student": "4.60",
              "student_hyy": "4.60",
              "contract": "7.20",
              "graduate_hyy": "6.70",
              "graduate": "6.70"
            },
            "name": "Maukkaasti"
          },
          "ingredients": "HIETAKAMPELAA, VEHNÃ„jauhoa, kasviÃ¶ljyÃ¤, VEHNÃ„tÃ¤rkkelystÃ¤, maissijauhoa, jodioitua suolaa, rypÃ¤lesokeria, rasvatonta MAITOjauhetta, persiljaa, SINAPPIjauhetta (sis. SINAPINSIEMENIÃ„), paprikaa, kurkumaa, sitruuna- ja limearomia, heraproteiinitiiviste (MAIDOSTA), hiivaa, happoa E330. \nMajoneesia (rypsiÃ¶ljy, vesi, sokeri, suola 1,4%, KELTUAISjauhe, etikka, SINAPINSIEMEN, sakeuttamisaineet E415 ja E412, sÃ¤ilÃ¶ntÃ¤aine E202, vÃ¤ri E160a), kermaviiliÃ¤ (sis. MAITOA), maustekurkkua, sipulia, kaprista, tilliÃ¤.",
          "name_sv": "Stekt flundra, romoulade sÃ¥s",
          "name": "Paistettua hietakampelaa, remouladekastiketta"
        },
        {
          "name_sv": "Wok med kyckling och tandoori",
          "name": "Tandoori-broileriwokkia",
          "price": {
            "name": "Edullisesti",
            "value": {
              "normal": "8.00",
              "student_hyy": "2.60",
              "student": "2.60",
              "contract": "5.70",
              "graduate_hyy": "4.70",
              "graduate": "4.70"
            }
          },
          "ingredients": "Broileria (Suomi), kaalia, parsakaalia, kookosmaitoa, porkkanaa, vesikastanjaa, sipulia, MAAPÃ„HKINÃ–ITÃ„, rypsiÃ¶ljyÃ¤, SOIJAkastiketta, kanaliemijauhetta (suola, glukoosisiirappi, hiivauute, sokeri, kana-aromi, jauhettu kananliha 1,7 %, curry, kurkuma, riisijauho, hapettumisenestoaine [rosmariiniuute]), siirappia, tandooritahnaa (vesi, suola, puuvillanSIEMENÃ¶ljy, chili, korianteri, juustokumina, punainen linssijauho, valkosipuli, inkivÃ¤Ã¤ri, happamuudensÃ¤Ã¤tÃ¶aine E260, kurkuma, anis, sarviapila, laakerinlehti, neilikka, kaneli[saattaa sisÃ¤ltÃ¤Ã¤ PÃ„HKINÃ„Ã„ ja SINAPPIA]), maissitÃ¤rkkelystÃ¤.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "pÃ¤hkinÃ¤Ã¤",
              "palkokasveja",
              "siemeniÃ¤",
              "soijaa",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Wok with chicken and Tandoori",
          "nutrition": "energiaa 97kcal (406kJ), hiilihydraattia 5g, rasvaa 5g, proteiinia 9g."
        },
        {
          "name_sv": "Oxgryta",
          "name": "Sambialaista lihapataa",
          "price": {
            "value": {
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            },
            "name": "Edullisesti"
          },
          "ingredients": "Naudanlihaa (Suomi), vettÃ¤, tomaattimurskaa, sipulia, tomaattipyrettÃ¤, VALKOSIPULIA, rypsiÃ¶ljyÃ¤, VALKOSIPULIA, Al'fez-maustetahnaa (rypsiÃ¶ljy, sipuli, tomaattipyre, rusinatahna, VALKOSIPULI, vesi, inkivÃ¤Ã¤ri, punainen chilitahna, kaneli, paprika, persilja, korianteri, sitruunamehutiiviste, muunneltu maissitÃ¤rkkelys, chilijauhe, cayennepippuri, maustapippuri, juustokumina, suola, minttu, sokeri, pippuri, riisijauho, sitruunamenujauhe, happamuudensÃ¤Ã¤tÃ¶aine E300), sambal oelekia (punainen chili 83 %, riisiviinietikka, sokeri, suola, SOIJAPAPUÃ¶ljy), juustokuminaa, siirappia, omenaviinietikkaa, maissitÃ¤rkkelystÃ¤, jodioitua suolaa.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "soijaa",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Beef pot",
          "nutrition": "energiaa 96kcal (401kJ), hiilihydraattia 3g, rasvaa 5g, proteiinia 9g."
        },
        {
          "name_sv": "GrÃ¶nsakscouscous med nÃ¶tter",
          "name": "PÃ¤hkinÃ¤inen kasviscouscous",
          "price": {
            "value": {
              "contract": "5.70",
              "graduate_hyy": "4.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student_hyy": "2.60",
              "student": "2.60"
            },
            "name": "Edullisesti"
          },
          "ingredients": "TÃ¤ysjyvÃ¤ couscousta (sis. VEHNÃ„Ã„), kidneypapua, sipulia, vettÃ¤, palapapua, paprikaa, ananasta, kasvisliemijauhetta (porkkana, palsternakka, sipuli, purjosipuli, suola, hiivauute, palmurasva, glukoosisiirappi, persiljauute, kurkuma, mustapippuriaromi, riisijauho, maltodekstriini), rypsiÃ¶ljyÃ¤, kurkumaa, chilijauhetta, mustapippuria, oreganoa, persiljaa, CASHEWPÃ„HKINÃ„Ã„.",
          "meta": {
            "0": [
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "gluteenia",
              "pÃ¤hkinÃ¤Ã¤",
              "palkokasveja"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          },
          "name_en": "Vegetable couscous with nuts",
          "nutrition": "energiaa 129kcal (542kJ), hiilihydraattia, 18g, proteiinia 5g, rasvaa 4g."
        },
        {
          "name_sv": "Broiler-nachosallad",
          "name": "Broileri-nachosalaattia",
          "price": {
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60"
            },
            "name": "Edullisesti"
          },
          "ingredients": "Broilerinlihaa (Suomi), kurkkua, paprikaa, kermaviiliÃ¤ (sis. MAITOA), avocadotahnaa (avocado, punapippuri, sokeri, suola, VALKOSIPULI, sipuli, hapettumisenestoaine E300, kiinteyttÃ¤misaine E401 stabiliointiaine E415, happo, happamuudensÃ¤Ã¤tÃ¶aine E330, jalapeno), sitruunaa, amerikansalaattia, punasipulia, valkopippuria, jodioitua suolaa, mustapippuria, jalapenoa, tortilla chipsiÃ¤ (jauhettu kokojyvÃ¤maissi, kasviÃ¶ljy, suola).",
          "meta": {
            "0": [
              "G",
              "L",
              "[S]"
            ],
            "1": [
              "maitoa",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Chicken and nacho salad",
          "nutrition": "energiaa 69kcal (288kJ), hiilihydraattia 3g, rasvaa 3g, proteiinia 6g."
        },
        {
          "price": {
            "name": "Makeasti",
            "value": {
              "graduate": "1.20",
              "graduate_hyy": "1.20",
              "contract": "1.20",
              "student": "1.20",
              "student_hyy": "1.20",
              "normal": "1.20"
            }
          },
          "ingredients": "Jogurttia (sis. MAITOA), piimÃ¤Ã¤ (sis. MAITOA), kermaa (sis. MAITOA), sokeria, liivatetta, mansikkaa, mustaherukkaa, punaherukkaa.",
          "name_sv": "Yoghurtpannacotta, bÃ¤rsalsa",
          "name": "Jogurttipannacotta, marjasalsaa",
          "name_en": "Yogurt pannacotta, berry salsa",
          "nutrition": "energiaa 157kcal (658kJ), hiilihydraattia 17g, rasvaa 8g, proteiinia 4g.",
          "meta": {
            "0": [
              "G",
              "K",
              "VL"
            ],
            "1": [
              "maitoa"
            ],
            "2": []
          }
        }
      ],
      "message": "Anna tukesi Sambia-hankkeelle.\n\nGe ditt stÃ¶d till Zambia-projektet.\n\nGive your support to the Zambia project.",
      "date_sv": "Ons 06.04",
      "date": "Ke 06.04"
    },
    {
      "date_sv": "Tors 07.04",
      "message": null,
      "date_en": "Thu 07.04",
      "data": [
        {
          "meta": {
            "0": [
              "L",
              "[S]"
            ],
            "1": [
              "gluteenia",
              "maitoa"
            ],
            "2": []
          },
          "name_en": "Gilled pork steak, pepper sauce",
          "nutrition": "ravintoarvo 100g / energiaa 171kcal (715kJ), hiilihydraattia 3g, rasvaa 11g, proteiinia 14g.",
          "name_sv": "Grillbiff av gris, pepparsÃ¥s",
          "name": "Porsaan grillipihvi, pippurikermakastiketta",
          "price": {
            "name": "Maukkaasti",
            "value": {
              "graduate": "6.70",
              "contract": "7.20",
              "graduate_hyy": "6.70",
              "student": "4.60",
              "student_hyy": "4.60",
              "normal": "9.50"
            }
          },
          "ingredients": "Porsasta (Suomi), mustapippuria, jodioitua suolaa, rypsiÃ¶ljyÃ¤, margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]), VEHNÃ„jauhoa, lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute [6,3 %], hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine E 150c, mustapippuriaromi), viherpippuria, rosepippuria, maustepippuria, kasvirasvavalmistetta (MAITO, rypsiÃ¶ljy, kovetettu kasvirasva, muunneltu tÃ¤rkkelys, emulgointiaine [E472e kasvirasvapohjainen], stabilointiaine [guarkumi], maltodekstriini, sokeri, happamuudensÃ¤Ã¤tÃ¶aine [natriumsitraatti], laktaasientsyymi, aromi, vÃ¤ri [betakaroteeni])."
        },
        {
          "name": "Broilerikebakot, ananaschutney",
          "name_sv": "Kycklingkebabspett, ananaschutney",
          "ingredients": "Broilerin- ja kalkkunanlihaa (Suomi), SOIJAproteiinivalmistetta, korppujauhoja (sis. VEHNÃ„Ã„), mausteita (SINAPINSIEMEN, valkopippuri, sipuli, VALKOSIPULI), juustoa (sis. MAITOA), jodioitua suolaa, glukoosia, hiivauutetta, hapettumisenestoainetta E331, aromia, sokerikulÃ¶Ã¶ria.\nAnanasta, sipulia, kuminaa, chiliÃ¤, kurkumaa, kardemummaa, sokeria, jodioitua suolaa, maissitÃ¤rkkelystÃ¤, vettÃ¤, paprikaa.",
          "price": {
            "value": {
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            },
            "name": "Edullisesti"
          },
          "meta": {
            "0": [
              "L"
            ],
            "1": [
              "gluteenia",
              "maitoa",
              "sinapinsiemeniÃ¤",
              "soijaa",
              "valkosipulia"
            ],
            "2": []
          },
          "nutrition": "energiaa 187kcal (782kJ), hiilihydraattia 12g, proteiinia 11g, rasvaa 10g.",
          "name_en": "Chicken kebab skewer, pineapple chutney"
        },
        {
          "nutrition": "energiaa 80kcal (335kJ), hiilihydraattia 5g, rasvaa 5g, proteiinia 4g.",
          "name_en": "Green curry with tofu",
          "meta": {
            "0": [
              "G",
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "palkokasveja",
              "soijaa"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          },
          "ingredients": "Kookosmaitoa, tofua (vesi, SOIJApapu 35,8 %, juoksute [kalsiumsulfaatti]), parsakaalia, vihreÃ¤Ã¤ papua, sipulia, rypsiÃ¶ljyÃ¤, vihreÃ¤Ã¤ currytahnaa, SOIJAkastiketta, maissitÃ¤rkkelystÃ¤, sokeria, kasvisliemijauhetta (porkkana, palsternakka, sipuli, purjosipuli, suola, hiivauute, palmurasva, glukoosisiirappi, persiljauute, kurkuma, mustapippuriaromi, riisijauho, maltodekstriini), limeÃ¤, korianteria, basilikaa.",
          "price": {
            "value": {
              "normal": "8.00",
              "student_hyy": "2.60",
              "student": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            },
            "name": "Edullisesti"
          },
          "name": "VihreÃ¤Ã¤ tofucurrya",
          "name_sv": "GrÃ¶n curry med tofu"
        },
        {
          "name_en": "Peasoup with pancake",
          "nutrition": "energiaa 106kcal (442kJ), hiilihydraattia 13g, rasvaa 3g, proteiinia 6g.",
          "meta": {
            "0": [
              "[S]",
              "VL"
            ],
            "1": [
              "gluteenia",
              "kanamunaa",
              "maitoa",
              "palkokasveja",
              "sinapinsiemeniÃ¤",
              "sinappia",
              "valkosipulia"
            ],
            "2": [
              "SisÃ¤ltÃ¤Ã¤ luomua"
            ]
          },
          "price": {
            "name": "Edullisesti",
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60"
            }
          },
          "ingredients": "Hernekeittoa; LuomuHERNEITÃ„, palvilapaa (Suomi), lihaliemijauhetta (glukoosisiirappi, suola, sokeri, lihauute 6,3 %, hiivauute, maltodekstriini, sitruunahappo, palmurasva, vÃ¤riaine E 150c, mustapippuriaromi), suolaa, meiramia, SINAPPIA (SINAPINSIEMEN, sokeri, suola, happamuudensÃ¤Ã¤tÃ¶aine E260, VALKOSIPULI, sipuli, valkopippuri, vÃ¤rit E150d, E160a, E101, sÃ¤ilÃ¶ntÃ¤aine E211).\n\nPannukakkua; MAITOA, luomuVEHNÃ„jauhoa, KANANMUNAA, sokeria, margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rypsi vaihtelevina osuuksina]), suolaa.\nPannarihilloa (sokeri, vesi, mansikka, omenasose, mustaherukka, hyytelÃ¶imisaine [E440], happamuudensÃ¤Ã¤tÃ¶aine [E330], sÃ¤ilÃ¶ntÃ¤aine [E202]).",
          "name_sv": "Ã„rtsoppa med pankaka",
          "name": "Hernekeittoa luomuherneestÃ¤ ja pannukakkua"
        },
        {
          "meta": {
            "0": [
              "K",
              "L",
              "[S]"
            ],
            "1": [
              "gluteenia",
              "kanamunaa",
              "maitoa",
              "palkokasveja",
              "sinapinsiemeniÃ¤",
              "sinappia",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Vegetable-pea soup with panncake",
          "nutrition": "energiaa 50kcal (204 kJ), hiilihydraattia 8g, rasvaa 0,5g, proteiinia 3g.",
          "name_sv": "GrÃ¶nsaksÃ¤rtsoppa med pannkaka",
          "name": "Kasvishernekeittoa ja pannukakkua",
          "price": {
            "name": "Edullisesti",
            "value": {
              "graduate": "4.70",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00"
            }
          },
          "ingredients": "HERNEITÃ„, vettÃ¤, porkkanaa, lanttua, palsternakkaa, purjoa, kasvisliemijauhetta (porkkana, palsternakka, sipuli, purjosipuli, suola, hiivauute, palmurasva, glukoosisiirappi, persiljauute, kurkuma, mustapippuriaromi, riisijauho, maltodekstriini), SINAPPIA (vesi, SINAPINSIEMEN, sokeri, suola, happamuudensÃ¤Ã¤tÃ¶aine E260, VALKOSIPULI, sipuli, valkopippuri, vÃ¤rit [E150d, E160a, E101], sÃ¤ilÃ¶ntÃ¤aine E211), meiramia.\nMAITOA, VEHNÃ„jauhoa, KANANMUNAA, sokeria, margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rypsi vaihtelevina osuuksina], jodioitua suolaa.\nPannarihilloa (sokeri, vesi, mansikka, omenasose, mustaherukka, hyytelÃ¶imisaine [E440], happamuudensÃ¤Ã¤tÃ¶aine [E330], sÃ¤ilÃ¶ntÃ¤aine [E202])."
        },
        {
          "name": "Serrano-kinkkusalaattia",
          "name_sv": "Serrano-skinksallad",
          "ingredients": "Serrano-kinkkua (Espanja), hunajamelonia, oliivia, amerikansalaattia, HERNEITÃ„, punasipulia, kurkkua, tomaattia, HERHNEENversoa.",
          "price": {
            "name": "Edullisesti",
            "value": {
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70",
              "normal": "8.00",
              "student_hyy": "2.60",
              "student": "2.60"
            }
          },
          "meta": {
            "0": [
              "G",
              "L",
              "M"
            ],
            "1": [
              "palkokasveja"
            ],
            "2": []
          },
          "nutrition": "energiaa 52kcal (218kJ), \r\nhiilihydraattia 3g, rasvaa 3g, proteiinia 4g.",
          "name_en": "Serrano ham salad"
        },
        {
          "nutrition": "energiaa 186kcal (778kJ), hiilihydraattia 32g, rasvaa 3,5g, proteiinia 6g.",
          "name_en": "Panncake with jam",
          "meta": {
            "0": [
              "K",
              "L"
            ],
            "1": [
              "gluteenia",
              "kanamunaa",
              "maitoa"
            ],
            "2": []
          },
          "ingredients": "MAITOA, VEHNÃ„jauhoa, sokeria, KANANMUNAA, margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]), \nMansikkaa, omenasosetta, mustaherukkaa, hyytelÃ¶imisainetta (E 440), happamuudensÃ¤Ã¤tÃ¶ainetta (E 330), sÃ¤ilÃ¶ntÃ¤ainetta (E 202).",
          "price": {
            "value": {
              "normal": "1.20",
              "student_hyy": "1.20",
              "student": "1.20",
              "contract": "1.20",
              "graduate_hyy": "1.20",
              "graduate": "1.20"
            },
            "name": "Makeasti"
          },
          "name": "Pannukakkua ja hilloa",
          "name_sv": "Pannkaka och sylt"
        }
      ],
      "date": "To 07.04"
    },
    {
      "message": null,
      "data": [
        {
          "ingredients": "Broileria (Suomi), korppujauhoa (sis. VEHNÃ„Ã„), KANANMUNAA, valkopippuria.\nKermaviiliÃ¤ (sis. MAITOA), valkosipulia, sitruunamehua, jodioitua suolaa, mustapippuria, sokeria, basilikaa.",
          "price": {
            "value": {
              "normal": "9.50",
              "student_hyy": "4.60",
              "student": "4.60",
              "graduate_hyy": "6.70",
              "contract": "7.20",
              "graduate": "6.70"
            },
            "name": "Maukkaasti"
          },
          "name": "Rukiinen broilerinleike, valkosipulikermaviilikastiketta",
          "name_sv": "RÃ¥grik broiler , vitlÃ¶k-grÃ¤ddfilssÃ¥s",
          "nutrition": "energiaa 131kcal (551kJ), hiilihydraattia 6g, rasvaa 6g, proteiinia 14g.",
          "name_en": "Rye breaded chicken, garlic sauce",
          "meta": {
            "0": [
              "L",
              "[S]"
            ],
            "1": [
              "gluteenia",
              "kanamunaa",
              "maitoa",
              "valkosipulia"
            ],
            "2": []
          }
        },
        {
          "meta": {
            "0": [
              "G",
              "L",
              "[S]"
            ],
            "1": [
              "kalaa",
              "maitoa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          },
          "name_en": "Fish soup",
          "nutrition": "energiaa 78kcal (326kJ), hiilihydraattia 7g, rasvaa 3g, proteiinia 5g.",
          "name_sv": "Fisksoppa",
          "name": "Kalakeittoa",
          "price": {
            "name": "Edullisesti",
            "value": {
              "normal": "8.00",
              "student": "2.60",
              "student_hyy": "2.60",
              "graduate_hyy": "4.70",
              "contract": "5.70",
              "graduate": "4.70"
            }
          },
          "ingredients": "VettÃ¤, perunaa, SEITIÃ„, LOHTA, kasvirasvavalmistetta (MAITO, rypsiÃ¶ljy, kovetettu kasvirasva, muunneltu tÃ¤rkkelys, emulgointiaine [E472e kasvirasvapohjainen], stabilointiaine [guarkumi], maltodekstriini, sokeri, happamuudensÃ¤Ã¤tÃ¶aine [natriumsitraatti], laktaasientsyymi, aromi, vÃ¤ri [betakaroteeni]), sipulia, KALAliemijauhetta (maltodekstriini, suola, KALAjauhe 5,3 %, hiivauute, KALAuute 4,2 %, kasvirasva [palmu], sipuli, happamuudensÃ¤Ã¤tÃ¶aine E330, aromit [mm. meirami, rosmariini]), tilliÃ¤, jodioitua suolaa, mustapippuria."
        },
        {
          "meta": {
            "0": [
              "L",
              "[S]"
            ],
            "1": [
              "gluteenia",
              "maitoa",
              "valkosipulia"
            ],
            "2": []
          },
          "name_en": "Ham and cheese sauce",
          "nutrition": "energiaa 73kcal (306kJ), hiilihydraattia 3g, rasvaa 5g, proteiinia 4g.",
          "name_sv": "Skinka-ostsÃ¥s",
          "name": "Juustoista kinkkukastiketta",
          "price": {
            "name": "Edullisesti",
            "value": {
              "normal": "8.00",
              "student_hyy": "2.60",
              "student": "2.60",
              "contract": "5.70",
              "graduate_hyy": "4.70",
              "graduate": "4.70"
            }
          },
          "ingredients": "Palvikinkkua (Suomi), tomaattia, sulatejuustoa (sis. MAITOA), sipulia, kasvirasvasekoitetta (kirnuMAITO, rypsi- ja palmuÃ¶ljy, muunnettu tÃ¤rkkelys, emulgointiaine, stabilointiaineet, happamuudensÃ¤Ã¤tÃ¶aineet, laktaasientsyymi, aromi), margariinia (kasviÃ¶ljyt ja -rasvat [palmu, rapsi vaihtelevina osuuksina]), VEHNÃ„jauhoa, VALKOSIPULIA, sokeria, mustapippuria, basilikaa."
        },
        {
          "meta": {
            "0": [
              "K",
              "L",
              "M",
              "[S]",
              "VE"
            ],
            "1": [
              "gluteenia",
              "palkokasveja",
              "soijaa",
              "valkosipulia"
            ],
            "2": [
              "Ilmastovalinta"
            ]
          },
          "name_en": "Chickpea nuggets, soy yoghourt dip",
          "nutrition": "energiaa 155kcal (649kJ), hiilihydraattia 11g, rasvaa 7g, proteiinia 5g.",
          "name_sv": "KikÃ¤rtsnuggeter, soyayoghurtdipp",
          "name": "Kikhernenugetteja, soijajogurttikastiketta",
          "price": {
            "value": {
              "student": "2.60",
              "student_hyy": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            },
            "name": "Edullisesti"
          },
          "ingredients": "KIKHERNEITÃ„, vettÃ¤, VEHNÃ„jauhoa, sipulia, korppujauhoja (sis. VEHNÃ„Ã„), jodioitua suolaa, persiljaa, VALKOSIPULIA, sakeuttamisainetta (E 461), rypÃ¤lesokeria. \nSOIJAjogurttia, kurkkua, maustepippuria, valkopippuria, jalapenoa, sokeria."
        },
        {
          "name_sv": "Sallad med rÃ¶kt lax",
          "name": "Savulohisalaattia",
          "price": {
            "value": {
              "student_hyy": "2.60",
              "student": "2.60",
              "normal": "8.00",
              "graduate": "4.70",
              "contract": "5.70",
              "graduate_hyy": "4.70"
            },
            "name": "Edullisesti"
          },
          "ingredients": "LOHTA, amerikansalaattia, KANANMUNAA, parsaa, marinoitua punasipulia (punasipuli, punaviinietikka, rypsiÃ¶ljy, jodioitu suola, sokeri), tilliÃ¤, tomaattia, kurkkua, paprikaa, sitruunaa.",
          "meta": {
            "0": [
              "G",
              "L",
              "M",
              "[S]"
            ],
            "1": [
              "kalaa",
              "kanamunaa"
            ],
            "2": [
              "Vastuullisesti kalastettua"
            ]
          },
          "name_en": "Salad with smoked salmon",
          "nutrition": "energiaa 75kcal (315kJ), hiilihydraattia 2g, rasvaa 4g, proteiinia 7g."
        },
        {
          "price": {
            "value": {
              "graduate_hyy": "1.20",
              "contract": "1.20",
              "graduate": "1.20",
              "normal": "1.20",
              "student_hyy": "1.20",
              "student": "1.20"
            },
            "name": "Makeasti"
          },
          "ingredients": "Mansikkaa (Suomi), musta- ja punaherukkaa (Suomi), marenkeja (sokeri, vesi, munanvalkuaisjauhe [sis. KANANMUNAA], sakeuttamisaineet [E466, E412], aromi [sitruuna]), vispikermaa (sis. MAITOA), sokeria, vaniljasokeria.",
          "name_sv": "MarÃ¤ngdessert med bÃ¤r",
          "name": "Marja-marenkijÃ¤lkiruoka",
          "name_en": "Berry and meringue dessert",
          "nutrition": "energiaa 149kcal (623kJ), hiilihydraattia 18g, rasvaa 7g, proteiinia 2g.",
          "meta": {
            "0": [
              "G",
              "L"
            ],
            "1": [
              "kanamunaa",
              "maitoa"
            ],
            "2": []
          }
        }
      ],
      "date_en": "Fri 08.04",
      "date_sv": "Fre 08.04",
      "date": "Pe 08.04"
    },
    {
      "date_en": "Sat 09.04",
      "data": [],
      "message": null,
      "date_sv": "LÃ¶r 09.04",
      "date": "La 09.04"
    },
    {
      "date": "Su 10.04",
      "date_en": "Sun 10.04",
      "data": [],
      "message": null,
      "date_sv": "SÃ¶n 10.04"
    }
  ],
  "status": "OK",
  "information": {
    "bistro": {
      "name": "",
      "regular": [
        {
          "when": [
            false,
            false,
            false,
            false,
            false,
            false,
            false
          ],
          "open": "00:00",
          "close": "00:00"
        }
      ],
      "exception": [
        {
          "to": "",
          "close": "00:00",
          "closed": false,
          "open": "00:00",
          "from": ""
        }
      ]
    },
    "description_sv": "TillgÃ¤nglighet fÃ¶r funktionshindrade<br />- ingÃ¥ng: via huvudentren, uppfart fÃ¶r rullstolar via en fast ramprutte fÃ¶r rÃ¶relsehindrade.<br />- inva-wc till hÃ¶ger om dÃ¶rren vid klÃ¤dhÃ¤ngarna.",
    "description": "EsteettÃ¶myys<br />- sisÃ¤Ã¤nkÃ¤ynti: pÃ¤Ã¤ovesta, pyÃ¶rÃ¤tuolireitti kiinteÃ¤Ã¤ liuskaa pitkin.<br />- inva-wc ovesta oikealla naulakoiden luona.",
    "zip": "00790",
    "ilta": null,
    "business": {
      "regular": [
        {
          "open": "07:45",
          "when": [
            "Ma",
            "Ti",
            "Ke",
            "To",
            "Pe",
            false,
            false
          ],
          "close": "15:00"
        },
        {
          "when": [
            "previous",
            "previous",
            "previous",
            "previous",
            "previous",
            false,
            false
          ],
          "open": "",
          "close": ""
        }
      ],
      "exception": [
        {
          "open": "",
          "closed": false,
          "from": "",
          "to": "",
          "close": ""
        }
      ]
    },
    "lounas": {
      "regular": [
        {
          "close": "15:00",
          "when": [
            "Ma",
            "Ti",
            "Ke",
            "To",
            "Pe",
            false,
            false
          ],
          "open": "10:30"
        },
        {
          "close": "",
          "when": [
            "previous",
            "previous",
            "previous",
            "previous",
            "previous",
            false,
            false
          ],
          "open": ""
        }
      ],
      "exception": [
        {
          "to": "",
          "close": "",
          "open": "",
          "closed": false,
          "from": ""
        }
      ]
    },
    "address": "Viikinkaari 9",
    "restaurant": "Biokeskus",
    "city": "Helsinki",
    "description_en": "Disabled access<br />- Entry: through the main door, wheelchair access along a fixed ramp.<br />- Disabled toilet: to the right by the coat racks."
  }
};

module.exports = menuJson;

