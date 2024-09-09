myData = [
[21.1458004,79.0881546, 'Nagpur, Maharashtra, India'],
[50.06688579999999,19.9136192, 'aleja Adama Mickiewicza 30, 30-059 Kraków, Poland'],
[52.2394019,21.0150792, 'Krakowskie Przedmieście 5, 00-068 Warszawa, Poland'],
[30.018923,31.499674, 'AUC Avenue، Road، First New Cairo, Cairo Governorate 11835, Egypt'],
[33.4242399,-111.9280527, 'Tempe, AZ 85281, USA'],
[33.9094132,-83.4603953, '2500 Daniells Bridge Rd #300, Athens, GA 30606, USA'],
[28.3588163,75.58802039999999, 'Vidya Vihar, Pilani, Rajasthan 333031, India'],
[6.8939569,3.7187158, 'Ilishan-Remo, Nigeria'],
[25.2677203,82.99125819999999, 'Ajagara, Varanasi, Uttar Pradesh 221005, India'],
[12.9504351,77.5021998, 'Main Rd, Gnana Bharathi, Bengaluru, Karnataka 560056, India'],
[31.5469132,-97.1210998, '1311 S 5th St, Waco, TX 76706, USA'],
[39.9619537,116.3662615, '19 Xinjiekou Outer St, Bei Tai Ping Zhuang, Haidian Qu, Beijing Shi, China, 100875'],
[53.8938988,27.5460609, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[44.8184518,20.4575913, 'Studentski trg 1, Beograd, Serbia'],
[42.5030333,-89.0309048, '700 College St, Beloit, WI 53511, USA'],
[53.8938988,27.5460609, 'praspiekt Niezaliežnasci 4, Minsk, Belarus'],
[43.76908419999999,-79.4692584, '1000 Finch Ave W, North York, ON M3J 2V5, Canada'],
[10.6779085,78.74454879999999, 'Palkalaiperur, Tiruchirappalli, Tamil Nadu 620024, India'],
[42.3504997,-71.1053991, 'Boston, MA 02215, USA'],
[35.3050053,-120.6624942, 'San Luis Obispo, CA 93407, USA'],
[34.1817955,-117.3237219, '5500 University Pkwy, San Bernardino, CA 92407, USA'],
[51.5210038,-0.1746353, '25 Paddington Green, London W2 1NB, UK'],
[40.8075355,-73.9625727, 'New York, NY 10027, USA'],
[52.0746136,-0.6282833, 'College Rd, Cranfield, Wharley End, Bedford MK43 0AL, UK'],
[50.1030364,14.3912841, '166 36 Prague 6, Czechia'],
[43.7044406,-72.2886935, 'Hanover, NH 03755, USA'],
[37.3206678,-122.0454878, '21250 Stevens Creek Blvd, Cupertino, CA 95014, USA'],
[51.3774422,7.493855399999999, 'Universitätsstraße 47, 58097 Hagen, Germany'],
[48.4331922,35.0427966, 'Haharina Ave, 72, Dnipropetrovsk, Dnipropetrovska oblast, Ukraine, 49000'],
[38.430691,27.13692, 'No: 144 35210, Alsancak, Cumhuriyet Blv, 35220 Konak/İzmir, Turkey'],
[39.9566127,-75.18994409999999, '3141 Chestnut St, Philadelphia, PA 19104, USA'],
[30.2849185,-97.7340567, 'Austin, TX 78712, USA'],
[36.0014258,-78.9382286, 'Durham, NC 27708, USA'],
[45.7864448,4.7641329, '23 Avenue Guy de Collongue, 69130 Écully, France'],
[48.7087594,2.1640062, 'CentraleSupélec, 3 Rue Joliot Curie, 91190 Gif-sur-Yvette, France'],
[36.1026877,-79.5023313, '50 Campus Drive, Elon, NC 27244, USA'],
[55.48843069999999,8.4467103, 'Spangsbjerg Kirkevej 103, 6700 Esbjerg, Denmark'],
[-2.1481458,-79.9644885, 'Vía Perimetral 5, Guayaquil, Ecuador'],
[51.2468622,6.791686899999999, 'Münsterstraße 156, 40476 Düsseldorf, Germany'],
[47.7233835,13.0871253, 'Urstein Süd 1, 5412 Puch bei Hallein, Austria'],
[-23.5295777,-46.6325629, 'Av. Tiradentes, 615 - Bom Retiro, São Paulo - SP, 01124-060, Brazil'],
[45.2461012,19.8516968, 'Trg Dositeja Obradovića 6, Novi Sad 106314, Serbia'],
[40.7529512,-73.4267093, '2350 NY-110, Farmingdale, NY 11735, USA'],
[-19.870682,-43.9677359, 'Av. Pres. Antônio Carlos, 6627 - Pampulha, Belo Horizonte - MG, 31270-901, Brazil'],
[26.3749876,-80.10106329999999, '777 Glades Rd, Boca Raton, FL 33431, USA'],
[42.7789743,-72.05553929999999, '40 University Dr, Rindge, NH 03461, USA'],
[26.1543199,91.66316789999999, 'Jalukbari, Guwahati, Assam 781014, India'],
[38.8298118,-77.3073606, '4400 University Dr, Fairfax, VA 22030, USA'],
[38.8977953,-77.0129087, '600 New Jersey Ave NW, Washington, DC 20001, USA'],
[33.753068,-84.38528190000001, 'Atlanta, GA 30302, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.8748769,4.7077753, 'Andreas Vesaliusstraat 13, 3000 Leuven, Belgium'],
[21.0048067,105.8453406, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội, Vietnam'],
[31.7945578,35.2414009, 'Jerusalem'],
[17.4448019,78.3497604, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5123388,80.2329, 'Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954769,24.6643815, 'Raja 4, 12616 Tallinn, Estonia'],
[39.1754487,-86.512627, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[45.4377574,12.3223297, 'Santa Croce, 191, 30135 Venezia VE, Italy'],
[41.8348731,-87.6270059, '10 W 35th St, Chicago, IL 60616, USA'],
[41.5042613,-88.17752689999999, 'Jr College, Joliet, IL 60431, USA'],
[28.5449756,77.19262839999999, 'IIT Campus, Hauz Khas, New Delhi, Delhi 110016, India'],
[22.3149274,87.31053109999999, 'Kharagpur, West Bengal 721302, India'],
[23.8143819,86.44120219999999, 'Police Line Road, Main Campus IIT (ISM, IIT (ISM, Hirapur, Sardar Patel Nagar, Dhanbad, Jharkhand 826004, India'],
[39.1754487,-86.512627, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[39.1754487,-86.512627, '107 S Indiana Ave, Bloomington, IN 47405, USA'],
[45.4945877,-73.5622815, '1100 Rue Notre-Dame Ouest, Montréal, QC H3C 1K3, Canada'],
[37.3686167,-121.9695133, '2400 Walsh Ave, Santa Clara, CA 95051, USA'],
[18.487876,-69.96229199999999, 'Av. de Los Próceres 49, Santo Domingo 10602, Dominican Republic'],
[17.4448019,78.3497604, 'Professor CR Rao Rd, Gachibowli, Hyderabad, Telangana 500032, India'],
[52.2766643,104.2777445, 'Karl Marx St, 1, Irkutsk, Irkutskaya oblast, Russia, 664003'],
[22.4988822,88.3714123, 'Jadavpur university gate, 3, Jadavpur, Kolkata, West Bengal 700032, India'],
[17.4932682,78.3913929, 'Ashok Nagar, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085, India'],
[28.5402232,77.1662154, 'New Mehrauli Road, JNU Ring Rd, New Delhi, Delhi 110067, India'],
[32.4950392,35.9912257, 'Ar Ramtha 3030، Ar-Ramtha, Jordan'],
[39.1974437,-96.5847249, 'Manhattan, KS 66506, USA'],
[41.9687734,-87.83711509999999, '7447 W Talcott Ave #269, Chicago, IL 60631, USA'],
[42.290035,-85.598145, '1200 Academy St, Kalamazoo, MI 49006, USA'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[54.898991,23.912825, 'K. Donelaičio g. 73, Kaunas 44249, Lithuania'],
[55.790447,49.1214349, 'Kremlyovskaya St, 18, Kazan, Respublika Tatarstan, Russia, 420008'],
[41.1455594,-81.33928829999999, '800 E Summit St, Kent, OH 44240, USA'],
[50.0068043,36.2302551, 'Svobody Square, 4, Kharkiv, Kharkivska oblast, Ukraine, 61000'],
[13.6493767,100.4928565, '126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140, Thailand'],
[53.2871307,69.40444939999999, 'Kokshetau 020000, Kazakhstan'],
[50.4491694,30.4561475, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4491694,30.4561475, 'Peremohy Ave, 37, Kyiv, Ukraine, 03056'],
[50.4420868,30.5104023, 'Volodymyrska St, 60, Kyiv, Ukraine, 01033'],
[46.4667708,-80.9742332, '935 Ramsey Lake Rd, Sudbury, ON P3E 2C6, Canada'],
[51.7537146,19.4517176, 'Stefana Żeromskiego 116, 90-924 Łódź, Poland'],
[49.8406108,24.0225099, 'Universytetska St, 1, Lviv, Lvivska oblast, Ukraine, 79000'],
[42.701848,-84.4821719, '220 Trowbridge Rd, East Lansing, MI 48824, USA'],
[13.0660293,80.28317190000001, 'Navalar Nagar, Chepauk, Triplicane, Chennai, Tamil Nadu 600005, India'],
[53.4222397,58.9824868, 'Prospekt Lenina, 38, Magnitogorsk, Chelyabinskaya oblast, Russia, 455000'],
[34.304073,48.8452846, 'Hamadan Province, Malayer, University Blvd, Iran'],
[39.41665649999999,-81.44993509999999, '215 5th St, Marietta, OH 45750, USA'],
[24.4330231,54.619113, 'Near Home WTC AUH, Airport Road - Masdar City - Abu Dhabi - United Arab Emirates'],
[44.8199188,20.4587075, 'Studentski trg 16, Beograd 105104, Serbia'],
[42.701848,-84.4821719, 'Michigan, USA'],
[39.8910203,32.7780027, 'Üniversiteler, Dumlupınar Blv. No:1, 06800 Çankaya/Ankara, Turkey'],
[37.9537078,-91.7756271, '106, Parker Hall, 300 W 13th St, Rolla, MO 65409, USA'],
[-37.9105599,145.1362485, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-37.9105599,145.1362485, 'Wellington Rd, Clayton VIC 3800, Australia'],
[-38.311211,146.429409, 'Northways Rd, Churchill VIC 3842, Australia'],
[25.6515649,-100.28954, 'Av. Eugenio Garza Sada 2501 Sur, Tecnológico, 64849 Monterrey, N.L., Mexico'],
[55.6502051,37.6643098, 'Kashira Hwy, 31, Moskva, Russia, 115409'],
[55.9297243,37.5199434, 'Institutskiy Pereulok, 9, Dolgoprudny, Moskovskaya oblast, Russia, 141701'],
[55.70393490000001,37.5286696, 'ul. Leninskiye Gory, 1, Moskva, Russia, 119991'],
[22.2533781,84.9012363, 'National Institute of Technology , Rourkela, National Institute of Technology, Sector 1, Rourkela, Odisha 769008, India'],
[40.72951339999999,-73.9964609, 'New York, NY 10003, USA'],
[21.1468555,79.050062, 'Amravati Rd, Ram Nagar, Nagpur, Maharashtra 440033, India'],
[1.3483099,103.6831347, '50 Nanyang Ave, Singapore 639798'],
[31.395929,75.535856, 'Grand Trunk Road, Barnala - Amritsar Bypass Rd, Jalandhar, Punjab 144011, India'],
[25.0173405,121.5397518, 'No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City, Taiwan 10617'],
[-12.0237376,-77.04837739999999, 'Avenida Tupac Amaru 210 Apartado 1301, Rímac 15333, Peru'],
[41.772663,-88.1440142, '30 N Brainard St, Naperville, IL 60540, USA'],
[42.3398067,-71.0891717, '360 Huntington Ave, Boston, MA 02115, USA'],
[42.0564594,-87.67526699999999, '633 Clark St, Evanston, IL 60208, USA'],
[55.1372019,36.6064735, 'Студенческий городок, 1, Obninsk, Kaluzhskaya oblast, Russia, 249034'],
[36.8841106,-76.304239, '5115 Hampton Blvd, Norfolk, VA 23529, USA'],
[42.2573474,-121.7849109, '3201 Campus Dr, Klamath Falls, OR 97601, USA'],
[19.4436005,-70.6843785, 'Autopista Duarte Km 1 1/2, Santiago De Los Caballeros 51000, Dominican Republic'],
[35.8012314,51.5028533, 'Tehran Province, Tehran, اتوبان ارتش کوی نفت, Nakhl St, Iran'],
[40.7982133,-77.8599084, 'State College, PA 16801, USA'],
[45.4784315,9.228342399999999, 'Piazza Leonardo da Vinci, 32, 20133 Milano MI, Italy'],
[44.4386064,26.0494925, 'Splaiul Independenței 313, București 060042, Romania'],
[45.7536393,21.2251615, 'Piața Victoriei 2, Timișoara 300006, Romania'],
[12.0182619,79.8568461, 'Pondicherry University, Chinna Kalapet, Kalapet, Puducherry 605014, India'],
[-33.44180680000001,-70.6399544, 'Av Libertador Bernardo OHiggins 340, Santiago, Región Metropolitana, Chile'],
[45.5111471,-122.6834235, '1825 SW Broadway, Portland, OR 97201, USA'],
[39.7743174,-86.1764194, '420 University Blvd, Indianapolis, IN 46202, USA'],
[12.9237228,77.4987012, 'Mysore Rd, RV Vidyaniketan, Post, Bengaluru, Karnataka 560059, India'],
[42.7297628,-73.67888839999999, '110 8th St, Troy, NY 12180, USA'],
[41.0819323,-74.1758157, '505 Ramapo Valley Rd, Mahwah, NJ 07430, USA'],
[43.0844955,-77.6749311, '1 Lomb Memorial Dr, Rochester, NY 14623, USA'],
[10.7285131,79.0184111, 'Trichy-Tanjore Road, Thirumalaisamudram, Thanjavur, Tamil Nadu 613401, India'],
[59.941894,30.2989199, 'University Embankment, 7/9, Sankt-Peterburg, Russia, 199034'],
[59.929491,30.2966081, 'Bolshaya Morskaya Ulitsa, 67, Sankt-Peterburg, Russia, 190000'],
[60.0076235,30.3731954, 'Politekhnicheskaya Ulitsa, 29, Sankt-Peterburg, Russia, 195251'],
[37.7241492,-122.4799405, '1600 Holloway Ave, San Francisco, CA 94132, USA'],
[37.3351874,-121.8810715, '1 Washington Sq, San Jose, CA 95192, USA'],
[31.0252201,121.4337784, 'China, Shanghai Shi, Minhang Qu, 东川路 邮政编码: 200240'],
[35.7036361,51.35156199999999, 'Tehran, خیابان آزادی، تهران بزرگ،، Iran'],
[10.408363,-66.8755735, 'Sartenejas, Caracas, Miranda, Venezuela'],
[49.2780937,-122.9198833, '8888 University Dr, Burnaby, BC V5A 1S6, Canada'],
[54.7845032,32.0452469, 'Ulitsa Przhevalskogo, 4, Smolensk, Smolenskaya oblast, Russia, 214000'],
[38.3395854,-122.6743811, '1801 E Cotati Ave, Rohnert Park, CA 94928, USA'],
[41.8367719,-87.6291633, '3140 S Federal St, Chicago, IL 60616, USA'],
[44.4332166,26.1009718, 'Strada Ion Ghica 13, București 030045, Romania'],
[37.4274745,-122.169719, '450 Serra Mall, Stanford, CA 94305, USA'],
[-22.8184393,-47.0647206, 'Cidade Universitária Zeferino Vaz - Barão Geraldo, Campinas - SP, 13083-970, Brazil'],
[43.45139280000001,-76.5425285, '7060 NY-104, Oswego, NY 13126, USA'],
[-33.9328078,18.864447, 'Stellenbosch Central, Stellenbosch, South Africa'],
[42.0590153,-71.0806276, '320 Washington St, North Easton, MA 02357, USA'],
[59.4387321,24.7713836, 'Narva maantee 25, 10120 Tallinn, Estonia'],
[59.3959451,24.6710596, 'Ehitajate tee 5, 12616 Tallinn, Estonia'],
[61.4498286,23.8589986, 'Korkeakoulunkatu 7 Kampusareena, 33720 Tampere, Finland'],
[30.7924391,30.9991409, 'El-Gaish, Tanta Qism 2, Tanta, Gharbia Governorate, Egypt'],
[32.7474661,-97.3278753, '1500 Houston St, Fort Worth, TX 76102, USA'],
[46.769299,23.585613, 'Strada Memorandumului 28, Cluj-Napoca 400114, Romania'],
[40.7635651,-73.9707505, '55 E 59th St Fl 13, New York, NY 10022, USA'],
[32.1133141,34.8043877, 'Tel Aviv-Yafo, Israel'],
[12.9452892,80.207843, 'Velachery Main Rd, Narayanapuram, Pallikaranai, Chennai, Tamil Nadu 600100, India'],
[56.95080979999999,24.1163132, 'Raiņa bulvāris 19, Centra rajons, Rīga, LV-1586, Latvia'],
[53.4668498,-2.2338837, 'Oxford Rd, Manchester M13 9PL, UK'],
[-25.7676588,28.1992637, 'Preller St, Muckleneuk, Pretoria, 0002, South Africa'],
[38.0516801,-84.49334189999999, '300 N Broadway, Lexington, KY 40508, USA'],
[42.4074843,-71.1190232, '419 Boston Ave, Medford, MA 02155, USA'],
[37.8718992,-122.2585399, 'Berkeley, CA, USA'],
[34.068921,-118.4451811, 'Los Angeles, CA 90095, USA'],
[32.8800604,-117.2340135, '9500 Gilman Dr, La Jolla, CA 92093, USA'],
[40.1019523,-88.2271615, 'Champaign, IL, USA'],
[46.8187754,-92.0843306, '1049 University Dr, Duluth, MN 55812, USA'],
[39.5944197,-104.9024568, '7400 E Arapahoe Rd # 10, Centennial, CO 80112, USA'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[41.4065636,2.1945816, 'Rambla del Poblenou, 156, 08018 Barcelona, Spain'],
[34.0235782,-118.2865012, '900 W 34th St, Los Angeles, CA 90007, USA'],
[43.076592,-89.4124875, 'Madison, WI, USA'],
[10.4883502,-66.8891696, 'Caracas, Capital District, Venezuela'],
[40.4454368,-3.7299424, 'Av. Séneca, 2, 28040 Madrid, Spain'],
[11.2234838,-74.1708905, 'Calle 30, Santa Marta, Magdalena, Colombia'],
[19.4379866,-99.1333401, 'República de Brasil 33, Centro Histórico de la Cdad. de México, Centro, Cuauhtémoc, 06320 Ciudad de México, CDMX, Mexico'],
[9.9986898,-84.11118979999999, 'Avenida 1, Calle 9 Heredia 86, Heredia, 3000, Costa Rica'],
[4.6381938,-74.08404639999999, 'Cra 45, Bogotá, Colombia'],
[-16.500656,-68.134299, 'Calle Colombia 154, La Paz, Bolivia'],
[-34.5998875,-58.37306949999999, 'Viamonte 430, C1053 CABA, Argentina'],
[38.9934998,-3.9254365, 'Rectorado UCLM, Calle Altagracia, 50, 13001 Ciudad Real, Cdad. Real, Spain'],
[4.601458099999999,-74.0661334, 'Cra. 1 #18a 12, Bogotá, Cundinamarca, Colombia'],
[32.5005347,-116.9479427, 'Blvrd Bernardo OHiggins 15296, Los Alamos, 22110 Tijuana, B.C., Mexico'],
[14.587349,-90.55341399999999, '11 Av, Guatemala 01012, Guatemala'],
[41.6569271,-4.7140547, 'C/Plaza de Santa Cruz, 8, 47002 Valladolid, Spain'],
[4.8615787,-74.0325368, 'Chía, Cundinamarca, Colombia'],
[14.603762,-90.48924799999999, '18 Avenida 11-95 Guatemala, Guatemala 01015, Guatemala'],
[-7.1377579,-34.8458995, 'Campus I - Lot. Cidade Universitaria, João Pessoa - PB, 58051-900, Brazil'],
[-27.6000837,-48.5194214, 'R. Eng. Agronômico Andrei Cristian Ferreira, s/n - Trindade, Florianópolis - SC, 88040-900, Brazil'],
[-30.0332408,-51.2207273, 'Av. Paulo Gama, 110 Secretaria de Comunicação Social - 8º andar - Reitoria - Farroupilha, Porto Alegre - RS, 90040-060, Brazil'],
[-22.8617077,-43.2234035, 'Av. Pedro Calmon, 550 - Cidade Universitária da Universidade Federal do Rio de Janeiro, Rio de Janeiro - RJ, 21941-901, Brazil'],
[38.7368192,-9.138705, 'Av. Rovisco Pais 1, 1049-001 Lisboa, Portugal'],
[-23.5613991,-46.7307891, 'Butanta, São Paulo - State of São Paulo, Brazil'],
[41.5607319,-8.3962368, 'R. da Universidade, 4710-057 Braga, Portugal']
];
