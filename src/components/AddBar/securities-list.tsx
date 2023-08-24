const securities = [
  {
    ticker: "A.N",
    name: "Agilent Technologies",
  },
  {
    ticker: "AAL.L",
    name: "Anglo American",
  },
  {
    ticker: "AAL.O",
    name: "American Airlines",
  },
  {
    ticker: "AAP.N",
    name: "Advance Auto Parts",
  },
  {
    ticker: "AAPL.O",
    name: "Apple",
  },
  {
    ticker: "ABBV.N",
    name: "AbbVie",
  },
  {
    ticker: "ABC.N",
    name: "AmerisourceBergen",
  },
  {
    ticker: "ABDN.L",
    name: "Abrdn",
  },
  {
    ticker: "ABF.L",
    name: "Associated British Foods",
  },
  {
    ticker: "ABMD.O",
    name: "Abiomed",
  },
  {
    ticker: "ABNB.O",
    name: "Airbnb",
  },
  {
    ticker: "ABT.N",
    name: "Abbott Laboratories",
  },
  {
    ticker: "ACN.N",
    name: "Accenture",
  },
  {
    ticker: "ADBE.O",
    name: "Adobe",
  },
  {
    ticker: "ADI.O",
    name: "Analog Devices",
  },
  {
    ticker: "ADM.L",
    name: "Admiral Group",
  },
  {
    ticker: "ADM.N",
    name: "Archer-Daniels-Midland",
  },
  {
    ticker: "ADP.O",
    name: "ADP",
  },
  {
    ticker: "ADSK.O",
    name: "Autodesk",
  },
  {
    ticker: "AED=",
    name: "USD/AED",
  },
  {
    ticker: "AEE.N",
    name: "Ameren",
  },
  {
    ticker: "AEP.O",
    name: "American Electric Power",
  },
  {
    ticker: "AES.N",
    name: "The Aes",
  },
  {
    ticker: "AFL.N",
    name: "Aflac",
  },
  {
    ticker: "AHT.L",
    name: "Ashtead Group",
  },
  {
    ticker: "AIG.N",
    name: "AIG",
  },
  {
    ticker: "AIZ.N",
    name: "Assurant",
  },
  {
    ticker: "AJG.N",
    name: "Arthur Gallagher",
  },
  {
    ticker: "AKAM.O",
    name: "Akamai Technologies",
  },
  {
    ticker: "ALB.N",
    name: "Albemarle",
  },
  {
    ticker: "ALGN.O",
    name: "Align Technology",
  },
  {
    ticker: "ALK.N",
    name: "Alaska Air Group",
  },
  {
    ticker: "ALL.N",
    name: "Allstate",
  },
  {
    ticker: "ALLE.N",
    name: "Allegion",
  },
  {
    ticker: "AMAT.O",
    name: "Applied Materials",
  },
  {
    ticker: "AMCR.N",
    name: "Amcor",
  },
  {
    ticker: "AMD.O",
    name: "Advanced Micro Devices",
  },
  {
    ticker: "AME.N",
    name: "Ametek",
  },
  {
    ticker: "AMGN.O",
    name: "Amgen",
  },
  {
    ticker: "AMP.N",
    name: "Ameriprise Financial",
  },
  {
    ticker: "AMT.N",
    name: "American Tower",
  },
  {
    ticker: "AMZN.O",
    name: "Amazon",
  },
  {
    ticker: "ANET.N",
    name: "Arista Networks",
  },
  {
    ticker: "ANSS.O",
    name: "Ansys",
  },
  {
    ticker: "ANTM.N",
    name: "Anthem",
  },
  {
    ticker: "ANTO.L",
    name: "Antofagasta",
  },
  {
    ticker: "AON.N",
    name: "AON",
  },
  {
    ticker: "AOS.N",
    name: "A.O. Smith",
  },
  {
    ticker: "APA.O",
    name: "APA",
  },
  {
    ticker: "APD.N",
    name: "Air Products And Chemicals",
  },
  {
    ticker: "APH.N",
    name: "Amphenol",
  },
  {
    ticker: "APTV.N",
    name: "Aptiv",
  },
  {
    ticker: "ARE.N",
    name: "Alexandria Real Estate Equities",
  },
  {
    ticker: "ASIA.MKT",
    name: "Tokyo",
  },
  {
    ticker: "ASML.O",
    name: "ASML Holding",
  },
  {
    ticker: "ATO.N",
    name: "Atmos Energy",
  },
  {
    ticker: "ATVI.O",
    name: "Activision Blizzard",
  },
  {
    ticker: "AUD=",
    name: "AUD/USD",
  },
  {
    ticker: "AUTO.L",
    name: "Auto Trader",
  },
  {
    ticker: "AV..L",
    name: "Aviva",
  },
  {
    ticker: "AVB.N",
    name: "Avalonbay Communities",
  },
  {
    ticker: "AVGO.O",
    name: "Broadcom",
  },
  {
    ticker: "AVST.L",
    name: "Avast",
  },
  {
    ticker: "AVV.L",
    name: "Aveva",
  },
  {
    ticker: "AVY.N",
    name: "Avery Dennison",
  },
  {
    ticker: "AWK.N",
    name: "American Water Works",
  },
  {
    ticker: "AXP.N",
    name: "American Express",
  },
  {
    ticker: "AZN.L",
    name: "Astrazeneca",
  },
  {
    ticker: "AZN.O",
    name: "Astrazeneca",
  },
  {
    ticker: "AZO.N",
    name: "Autozone",
  },
  {
    ticker: "BA..L",
    name: "Bae Systems",
  },
  {
    ticker: "BA.N",
    name: "Boeing",
  },
  {
    ticker: "BAC.N",
    name: "Bank of America",
  },
  {
    ticker: "BANKSECTOR.MKT",
    name: "Banks sector index",
  },
  {
    ticker: "BARC.L",
    name: "Barclays",
  },
  {
    ticker: "BATS.L",
    name: "British American Tobacco",
  },
  {
    ticker: "BAX.N",
    name: "Baxter International",
  },
  {
    ticker: "BBWI.N",
    name: "Bath & Body Works",
  },
  {
    ticker: "BBY.N",
    name: "Best Buy",
  },
  {
    ticker: "BDEV.L",
    name: "Barratt Developments",
  },
  {
    ticker: "BDX.N",
    name: "Becton  Dickinson And",
  },
  {
    ticker: "BEN.N",
    name: "Franklin Resources",
  },
  {
    ticker: "BF.B.N",
    name: "Brown Forman",
  },
  {
    ticker: "BHP.L",
    name: "BHP Group",
  },
  {
    ticker: "BIDU.O",
    name: "Baidu",
  },
  {
    ticker: "BIIB.O",
    name: "Biogen",
  },
  {
    ticker: "BIO.N",
    name: "Bio-Rad Laboratories  Class A",
  },
  {
    ticker: "BITCOIN.MKT",
    name: "Bitcoin",
  },
  {
    ticker: "BK.N",
    name: "Bank of New York",
  },
  {
    ticker: "BKG.L",
    name: "Berkeley Group",
  },
  {
    ticker: "BKNG.O",
    name: "Booking",
  },
  {
    ticker: "BKR.O",
    name: "Baker Hughes",
  },
  {
    ticker: "BLK.N",
    name: "Blackrock",
  },
  {
    ticker: "BLL.N",
    name: "Ball",
  },
  {
    ticker: "BLND.L",
    name: "British Land",
  },
  {
    ticker: "BLT.L",
    name: "*deleted* deleted automat",
  },
  {
    ticker: "BME.L",
    name: "B&M",
  },
  {
    ticker: "BMY.N",
    name: "Bristol-Myers",
  },
  {
    ticker: "BNZL.L",
    name: "Bunzl",
  },
  {
    ticker: "BP..L",
    name: "BP",
  },
  {
    ticker: "BR.N",
    name: "Broadridge Financial Solutions",
  },
  {
    ticker: "BRBY.L",
    name: "Burberry",
  },
  {
    ticker: "BRK.B.N",
    name: "Berkshire Hathaway",
  },
  {
    ticker: "BRL.MKT",
    name: "Brasilian real",
  },
  {
    ticker: "BRL=",
    name: "USD/BRL",
  },
  {
    ticker: "BRO.N",
    name: "Brown & Brown",
  },
  {
    ticker: "BSX.N",
    name: "Boston Scientific",
  },
  {
    ticker: "BT.A.L",
    name: "BT Group",
  },
  {
    ticker: "BWA.N",
    name: "BorgWarner",
  },
  {
    ticker: "BXP.N",
    name: "Boston Properties",
  },
  {
    ticker: "C.N",
    name: "Citigroup",
  },
  {
    ticker: "CAD.MKT",
    name: "Canadian dollar",
  },
  {
    ticker: "CAD=",
    name: "USD/CAD",
  },
  {
    ticker: "CADCHF=",
    name: "CAD/CHF",
  },
  {
    ticker: "CADEUR=",
    name: "CAD/EUR",
  },
  {
    ticker: "CADGBP=",
    name: "CAD/GBP",
  },
  {
    ticker: "CADJPY=",
    name: "CAD/JPY",
  },
  {
    ticker: "CADUSD=",
    name: "CAD/USD",
  },
  {
    ticker: "CAG.N",
    name: "Conagra Brands",
  },
  {
    ticker: "CAH.N",
    name: "Cardinal Health",
  },
  {
    ticker: "CARR.N",
    name: "Carrier Global",
  },
  {
    ticker: "CAT.N",
    name: "Caterpillar",
  },
  {
    ticker: "CB.N",
    name: "Chubb Limited",
  },
  {
    ticker: "CBOE.BATZ",
    name: "CBOE",
  },
  {
    ticker: "CBRE.N",
    name: "CBRE Group",
  },
  {
    ticker: "CCH.L",
    name: "Coca-Cola",
  },
  {
    ticker: "CCI.N",
    name: "Crown Castle International",
  },
  {
    ticker: "CCL.L",
    name: "Carnival",
  },
  {
    ticker: "CCL.N",
    name: "Carnival",
  },
  {
    ticker: "CDAY.N",
    name: "Ceridian HCM",
  },
  {
    ticker: "CDNS.O",
    name: "Cadence Design Systems",
  },
  {
    ticker: "CDW.O",
    name: "CDW",
  },
  {
    ticker: "CE.N",
    name: "Celanese",
  },
  {
    ticker: "CEG.O",
    name: "Constellation Energy",
  },
  {
    ticker: "CERN.O",
    name: "Cerner",
  },
  {
    ticker: "CF.N",
    name: "CF Industries Holdings",
  },
  {
    ticker: "CFG.N",
    name: "Citizens Financial Group",
  },
  {
    ticker: "CHD.N",
    name: "Church & Dwight",
  },
  {
    ticker: "CHF.MKT",
    name: "USD/CHF",
  },
  {
    ticker: "CHF=",
    name: "USD/CHF",
  },
  {
    ticker: "CHFCAD=",
    name: "CHF/CAD",
  },
  {
    ticker: "CHFEUR=",
    name: "CHF/EUR",
  },
  {
    ticker: "CHFGBP=",
    name: "CHF/GBP",
  },
  {
    ticker: "CHFJPY=",
    name: "CHF/JPY",
  },
  {
    ticker: "CHFUSD=",
    name: "CHF/USD",
  },
  {
    ticker: "CHRW.O",
    name: "C.H. Robinson Worldwide",
  },
  {
    ticker: "CHTR.O",
    name: "Charter Communications",
  },
  {
    ticker: "CI.N",
    name: "Cigna",
  },
  {
    ticker: "CINF.O",
    name: "Cincinnati Financial",
  },
  {
    ticker: "CL.N",
    name: "Colgate-Palmolive",
  },
  {
    ticker: "CLP=",
    name: "USD/CLP",
  },
  {
    ticker: "CLX.N",
    name: "Clorox",
  },
  {
    ticker: "CMA.N",
    name: "Comerica",
  },
  {
    ticker: "CMCSA.O",
    name: "Comcast",
  },
  {
    ticker: "CME.O",
    name: "CME Group",
  },
  {
    ticker: "CMG.N",
    name: "Chipotle Mexican Grill",
  },
  {
    ticker: "CMI.N",
    name: "Cummins",
  },
  {
    ticker: "CMS.N",
    name: "CMS Energy",
  },
  {
    ticker: "CNA.L",
    name: "Centrica",
  },
  {
    ticker: "CNC.N",
    name: "Centene",
  },
  {
    ticker: "CNP.N",
    name: "Centerpoint Energy",
  },
  {
    ticker: "CNY=P",
    name: "USD/CNY",
  },
  {
    ticker: "COF.N",
    name: "Capital One Financial",
  },
  {
    ticker: "COO.N",
    name: "The Cooper Companies",
  },
  {
    ticker: "COP.N",
    name: "ConocoPhillips",
  },
  {
    ticker: "COP=",
    name: "USD/COP",
  },
  {
    ticker: "COST.O",
    name: "Costco Wholesale",
  },
  {
    ticker: "CPB.N",
    name: "Campbell Soup",
  },
  {
    ticker: "CPG.L",
    name: "Compass Group",
  },
  {
    ticker: "CPRT.O",
    name: "Copart",
  },
  {
    ticker: "CPT.N",
    name: "Camden Property",
  },
  {
    ticker: "CRDA.L",
    name: "Croda International",
  },
  {
    ticker: "CRH.L",
    name: "CRH",
  },
  {
    ticker: "CRL.N",
    name: "Charles River Laboratories International  Com",
  },
  {
    ticker: "CRM.N",
    name: "Salesforce",
  },
  {
    ticker: "CRWD.O",
    name: "CrowdStrike",
  },
  {
    ticker: "CSCO.O",
    name: "Cisco Systems",
  },
  {
    ticker: "CSX.O",
    name: "CSX",
  },
  {
    ticker: "CTAS.O",
    name: "Cintas",
  },
  {
    ticker: "CTLT.N",
    name: "Catalent",
  },
  {
    ticker: "CTRA.N",
    name: "Coterra Energy",
  },
  {
    ticker: "CTSH.O",
    name: "Cognizant Technology",
  },
  {
    ticker: "CTVA.N",
    name: "Corteva",
  },
  {
    ticker: "CTXS.O",
    name: "Citrix Systems",
  },
  {
    ticker: "CVS.N",
    name: "CVS",
  },
  {
    ticker: "CVX.N",
    name: "Chevron",
  },
  {
    ticker: "CZK=",
    name: "USD/CZK",
  },
  {
    ticker: "CZR.O",
    name: "Caesars Entertainment",
  },
  {
    ticker: "D.N",
    name: "Dominion Energy",
  },
  {
    ticker: "DAL.N",
    name: "Delta Air Lines",
  },
  {
    ticker: "DARK.L",
    name: "Darktrace",
  },
  {
    ticker: "DCC.L",
    name: "DCC",
  },
  {
    ticker: "DD.N",
    name: "Dupont De Nemours",
  },
  {
    ticker: "DDOG.O",
    name: "Datadog",
  },
  {
    ticker: "DE.N",
    name: "Deere",
  },
  {
    ticker: "DFS.N",
    name: "Discover Financial Services",
  },
  {
    ticker: "DG.N",
    name: "Dollar General",
  },
  {
    ticker: "DGE.L",
    name: "Diageo",
  },
  {
    ticker: "DGX.N",
    name: "Quest Diagnostics",
  },
  {
    ticker: "DHI.N",
    name: "D.R. Horton",
  },
  {
    ticker: "DHR.N",
    name: "Danaher",
  },
  {
    ticker: "DIS.N",
    name: "Walt Disney",
  },
  {
    ticker: "DISH.O",
    name: "DISH Network",
  },
  {
    ticker: "DKK=",
    name: "USD/DKK",
  },
  {
    ticker: "DLG.L",
    name: "Direct Line",
  },
  {
    ticker: "DLR.N",
    name: "Digital Realty Trust",
  },
  {
    ticker: "DLTR.O",
    name: "Dollar Tree",
  },
  {
    ticker: "DOCU.O",
    name: "Docusign",
  },
  {
    ticker: "DOLLAR.MKT",
    name: "ICE Dollar index",
  },
  {
    ticker: "DOV.N",
    name: "Dover",
  },
  {
    ticker: "DOW.N",
    name: "Dow",
  },
  {
    ticker: "DPZ.N",
    name: "Domino's Pizza",
  },
  {
    ticker: "DRE.N",
    name: "Duke Realty",
  },
  {
    ticker: "DRI.N",
    name: "Darden Restaurants",
  },
  {
    ticker: "DTE.N",
    name: "Dte Energy",
  },
  {
    ticker: "DUK.N",
    name: "Duke Energy",
  },
  {
    ticker: "DVA.N",
    name: "DaVita",
  },
  {
    ticker: "DVN.N",
    name: "Devon Energy",
  },
  {
    ticker: "DXC.N",
    name: "Dxc Technology",
  },
  {
    ticker: "DXCM.O",
    name: "Dexcom",
  },
  {
    ticker: "DXe1.CE",
    name: "Dollar Index",
  },
  {
    ticker: "EA.O",
    name: "Electronic Arts",
  },
  {
    ticker: "EBAY.O",
    name: "eBay",
  },
  {
    ticker: "ECL.N",
    name: "Ecolab",
  },
  {
    ticker: "ECONOMIC.MKT",
    name: "TDB.MKT",
  },
  {
    ticker: "ED.N",
    name: "Consolidated Edison",
  },
  {
    ticker: "EFX.N",
    name: "Equifax",
  },
  {
    ticker: "EIX.N",
    name: "Edison International",
  },
  {
    ticker: "EL.N",
    name: "Estee Lauder",
  },
  {
    ticker: "EMN.N",
    name: "Eastman Chemical",
  },
  {
    ticker: "EMR.N",
    name: "Emerson Electric",
  },
  {
    ticker: "ENPH.O",
    name: "Enphase Energy",
  },
  {
    ticker: "ENT.L",
    name: "Entain",
  },
  {
    ticker: "EOG.N",
    name: "Eog Resources",
  },
  {
    ticker: "EPAM.N",
    name: "EPAM Systems",
  },
  {
    ticker: "EQIX.O",
    name: "Equinix",
  },
  {
    ticker: "EQR.N",
    name: "Equity Residential",
  },
  {
    ticker: "ES.N",
    name: "Eversource Energy (D/b/a)",
  },
  {
    ticker: "ESS.N",
    name: "Essex Property Trust",
  },
  {
    ticker: "ETN.N",
    name: "Eaton",
  },
  {
    ticker: "ETR.N",
    name: "Entergy",
  },
  {
    ticker: "ETSY.O",
    name: "Etsy",
  },
  {
    ticker: "EUR.MKT",
    name: "EUR/USD",
  },
  {
    ticker: "EUR=",
    name: "EUR/USD",
  },
  {
    ticker: "EURCAD=",
    name: "EUR/CAD",
  },
  {
    ticker: "EURCHF=",
    name: "EUR/CHF",
  },
  {
    ticker: "EURGBP=",
    name: "EUR/GBP",
  },
  {
    ticker: "EURJPY=",
    name: "EUR/JPY",
  },
  {
    ticker: "EURO.MKT",
    name: "DAX",
  },
  {
    ticker: "EURUSD=",
    name: "@@@@-auto delete",
  },
  {
    ticker: "EVR.L",
    name: "Evraz",
  },
  {
    ticker: "EVRG.N",
    name: "Evergy",
  },
  {
    ticker: "EW.N",
    name: "Edwards Lifesciences",
  },
  {
    ticker: "EXC.O",
    name: "Exelon",
  },
  {
    ticker: "EXPD.O",
    name: "Expeditors International",
  },
  {
    ticker: "EXPE.O",
    name: "Expedia",
  },
  {
    ticker: "EXPN.L",
    name: "Experian",
  },
  {
    ticker: "EXR.N",
    name: "Extra Space Storage",
  },
  {
    ticker: "EZJ.L",
    name: "EasyJet",
  },
  {
    ticker: "F.N",
    name: "Ford",
  },
  {
    ticker: "FANG.O",
    name: "Diamondback Energy  - Commmon Stock",
  },
  {
    ticker: "FAST.O",
    name: "Fastenal",
  },
  {
    ticker: "FB.O",
    name: "Meta Platforms",
  },
  {
    ticker: "FBHS.N",
    name: "Fortune Brands Home & Security",
  },
  {
    ticker: "FCX.N",
    name: "Freeport-McMoRan",
  },
  {
    ticker: "FDS.N",
    name: "FactSet",
  },
  {
    ticker: "FDX.N",
    name: "FedEx",
  },
  {
    ticker: "FE.N",
    name: "Firstenergy",
  },
  {
    ticker: "FERG.L",
    name: "Ferguson",
  },
  {
    ticker: "FFIV.O",
    name: "F5 Networks",
  },
  {
    ticker: "FIS.N",
    name: "FIS",
  },
  {
    ticker: "FISV.O",
    name: "Fiserv",
  },
  {
    ticker: "FITB.O",
    name: "Fifth Third Bancorp",
  },
  {
    ticker: "FLT.N",
    name: "Fleetcor Technologies",
  },
  {
    ticker: "FLTR.L",
    name: "Flutter Entertainment",
  },
  {
    ticker: "FMC.N",
    name: "FMC",
  },
  {
    ticker: "FOX.O",
    name: "Fox",
  },
  {
    ticker: "FOXA.O",
    name: "Fox",
  },
  {
    ticker: "FRC.N",
    name: "First Republic Bank",
  },
  {
    ticker: "FRES.L",
    name: "Fresnillo",
  },
  {
    ticker: "FRT.N",
    name: "Federal Realty Investment Trust",
  },
  {
    ticker: "FTNT.O",
    name: "Fortinet",
  },
  {
    ticker: "FTV.N",
    name: "Fortive",
  },
  {
    ticker: "GBP=",
    name: "GBP/USD",
  },
  {
    ticker: "GBPCAD=",
    name: "GBPCAD",
  },
  {
    ticker: "GBPCHF=",
    name: "GBPCHF",
  },
  {
    ticker: "GBPEUR=",
    name: "GBPEUR",
  },
  {
    ticker: "GBPJPY=",
    name: "GBPJPY",
  },
  {
    ticker: "GBPUSD=",
    name: "@@@@-auto delete",
  },
  {
    ticker: "GD.N",
    name: "General Dynamics",
  },
  {
    ticker: "GE.N",
    name: "General Electric",
  },
  {
    ticker: "GFS.L",
    name: "G4S",
  },
  {
    ticker: "GILD.O",
    name: "Gilead Sciences",
  },
  {
    ticker: "GIS.N",
    name: "General Mills",
  },
  {
    ticker: "GL.N",
    name: "Globe Life",
  },
  {
    ticker: "GLEN.L",
    name: "Glencore",
  },
  {
    ticker: "GLOBAL.MKT",
    name: "MSCI Global",
  },
  {
    ticker: "GLW.N",
    name: "Corning",
  },
  {
    ticker: "GM.N",
    name: "General Motors",
  },
  {
    ticker: "GNRC.N",
    name: "Generac Holdlings",
  },
  {
    ticker: "GOLD.MKT",
    name: "Gold",
  },
  {
    ticker: "GOOG.O",
    name: "Alphabet",
  },
  {
    ticker: "GOOGL.O",
    name: "Alphabet",
  },
  {
    ticker: "GPC.N",
    name: "Genuine Parts",
  },
  {
    ticker: "GPN.N",
    name: "Global Payments",
  },
  {
    ticker: "GRMN.N",
    name: "Garmin",
  },
  {
    ticker: "GS.N",
    name: "Goldman Sachs",
  },
  {
    ticker: "GSK.L",
    name: "Glaxosmithkline",
  },
  {
    ticker: "GWW.N",
    name: "W.W. Grainger",
  },
  {
    ticker: "HAL.N",
    name: "Halliburton",
  },
  {
    ticker: "HAS.O",
    name: "Hasbro",
  },
  {
    ticker: "HBAN.O",
    name: "Huntington Bancshares",
  },
  {
    ticker: "HCA.N",
    name: "HCA Healthcare",
  },
  {
    ticker: "HD.N",
    name: "Home Depot",
  },
  {
    ticker: "HES.N",
    name: "Hess",
  },
  {
    ticker: "HIG.N",
    name: "Hartford Financial Services Group",
  },
  {
    ticker: "HII.N",
    name: "Huntington Ingalls Industries",
  },
  {
    ticker: "HIK.L",
    name: "Hikma",
  },
  {
    ticker: "HKD.MKT",
    name: "Hong Kong dollar",
  },
  {
    ticker: "HKD=",
    name: "USD/HKD",
  },
  {
    ticker: "HL..L",
    name: "Hargreaves Lansdown",
  },
  {
    ticker: "HLMA.L",
    name: "Halma",
  },
  {
    ticker: "HLT.N",
    name: "Hilton Worldwide Holdings",
  },
  {
    ticker: "HOLX.O",
    name: "Hologic",
  },
  {
    ticker: "HON.O",
    name: "Honeywell International",
  },
  {
    ticker: "HPE.N",
    name: "Hewlett Packard Enterprise",
  },
  {
    ticker: "HPQ.N",
    name: "HP",
  },
  {
    ticker: "HRL.N",
    name: "Hormel Foods",
  },
  {
    ticker: "HSBA.L",
    name: "HSBC",
  },
  {
    ticker: "HSIC.O",
    name: "Henry Schein",
  },
  {
    ticker: "HST.O",
    name: "Host Hotels",
  },
  {
    ticker: "HSX.L",
    name: "Hiscox",
  },
  {
    ticker: "HSY.N",
    name: "The Hershey",
  },
  {
    ticker: "HUF.MKT",
    name: "Hungarian forin",
  },
  {
    ticker: "HUF=",
    name: "USD/HUF",
  },
  {
    ticker: "HUM.N",
    name: "Humana",
  },
  {
    ticker: "HWM.N",
    name: "Howmet Aerospace",
  },
  {
    ticker: "IAG.L",
    name: "International Consolidated",
  },
  {
    ticker: "IBM.N",
    name: "IBM",
  },
  {
    ticker: "ICE.N",
    name: "Intercontinental Exchange",
  },
  {
    ticker: "ICP.L",
    name: "Intermediate Capital",
  },
  {
    ticker: "IDR=",
    name: "USD/IDR",
  },
  {
    ticker: "IDXX.O",
    name: "Idexx Laboratories",
  },
  {
    ticker: "IEX.N",
    name: "IDEX",
  },
  {
    ticker: "IFF.N",
    name: "Internationa Flavors & Fragrances",
  },
  {
    ticker: "IHG.L",
    name: "Intercontinental Hotels",
  },
  {
    ticker: "III.L",
    name: "3I Group",
  },
  {
    ticker: "ILMN.O",
    name: "Illumina",
  },
  {
    ticker: "ILS.MKT",
    name: "Israeli shekel",
  },
  {
    ticker: "ILS=",
    name: "USD/ILS",
  },
  {
    ticker: "IMB.L",
    name: "Imperial Brands",
  },
  {
    ticker: "INCY.O",
    name: "Incyte",
  },
  {
    ticker: "INF.L",
    name: "Informa",
  },
  {
    ticker: "INR.MKT",
    name: "Indian rupee",
  },
  {
    ticker: "INR=",
    name: "USD/INR",
  },
  {
    ticker: "INTC.O",
    name: "Intel",
  },
  {
    ticker: "INTU.O",
    name: "Intuit",
  },
  {
    ticker: "IP.N",
    name: "International Paper",
  },
  {
    ticker: "IPG.N",
    name: "Interpublic Group Of Companies",
  },
  {
    ticker: "IPGP.O",
    name: "IPG Photonics",
  },
  {
    ticker: "IQV.N",
    name: "IQVIA Holdings",
  },
  {
    ticker: "IR.N",
    name: "Ingersoll Rand",
  },
  {
    ticker: "IRM.N",
    name: "Iron Mountain",
  },
  {
    ticker: "ISRG.O",
    name: "Intuitive Surgical",
  },
  {
    ticker: "IT.N",
    name: "Gartner",
  },
  {
    ticker: "ITRK.L",
    name: "Intertek Group",
  },
  {
    ticker: "ITV.L",
    name: "UTV",
  },
  {
    ticker: "ITW.N",
    name: "Illinois Tool Works",
  },
  {
    ticker: "IVZ.N",
    name: "Invesco Ltd",
  },
  {
    ticker: "J.N",
    name: "Jacobs Engineering Group",
  },
  {
    ticker: "JBHT.O",
    name: "J.B. Hunt",
  },
  {
    ticker: "JCI.N",
    name: "Johnson Controls International",
  },
  {
    ticker: "JD..L",
    name: "JS Sports",
  },
  {
    ticker: "JD.O",
    name: "JD",
  },
  {
    ticker: "JET.L",
    name: "Takeaway",
  },
  {
    ticker: "JKHY.O",
    name: "Jack Henry",
  },
  {
    ticker: "JMAT.L",
    name: "Johnson Matthey",
  },
  {
    ticker: "JNJ.N",
    name: "Johnson & Johnson",
  },
  {
    ticker: "JNPR.N",
    name: "Juniper Networks",
  },
  {
    ticker: "JPM.N",
    name: "JP Morgan",
  },
  {
    ticker: "JPY.MKT",
    name: "USD/JPY",
  },
  {
    ticker: "JPY=",
    name: "USD/JPY",
  },
  {
    ticker: "JPYCAD=",
    name: "JPY/CAD",
  },
  {
    ticker: "JPYCHF=",
    name: "JPY/CHF",
  },
  {
    ticker: "JPYEUR=",
    name: "JPY/EUR",
  },
  {
    ticker: "JPYGBP=",
    name: "JPY/GBP",
  },
  {
    ticker: "JPYUSD=",
    name: "JPY/USD",
  },
  {
    ticker: "K.N",
    name: "Kellogg",
  },
  {
    ticker: "KDP.O",
    name: "Dr. Pepper",
  },
  {
    ticker: "KEY.N",
    name: "Keycorp",
  },
  {
    ticker: "KEYS.N",
    name: "Keysight Technologies",
  },
  {
    ticker: "KGF.L",
    name: "Kingfisher",
  },
  {
    ticker: "KHC.O",
    name: "Kraft Heinz",
  },
  {
    ticker: "KIM.N",
    name: "Kimco Realty",
  },
  {
    ticker: "KLAC.O",
    name: "KLA",
  },
  {
    ticker: "KMB.N",
    name: "Kimberly-Clark",
  },
  {
    ticker: "KMI.N",
    name: "Kinder Morgan",
  },
  {
    ticker: "KMX.N",
    name: "Carmax",
  },
  {
    ticker: "KO.N",
    name: "Coca-Cola",
  },
  {
    ticker: "KR.N",
    name: "Kroger",
  },
  {
    ticker: "KRW.MKT",
    name: "South Korean won",
  },
  {
    ticker: "KRW=",
    name: "USD/KRW",
  },
  {
    ticker: "L.N",
    name: "Loews",
  },
  {
    ticker: "LAND.L",
    name: "Land Securities",
  },
  {
    ticker: "LCID.O",
    name: "Lucid Group",
  },
  {
    ticker: "LDOS.N",
    name: "Leidos Holdings",
  },
  {
    ticker: "LEN.N",
    name: "Lennar",
  },
  {
    ticker: "LGEN.L",
    name: "Legal & General Group",
  },
  {
    ticker: "LH.N",
    name: "Laboratory of America Holdings",
  },
  {
    ticker: "LHX.N",
    name: "L3harris Technologies",
  },
  {
    ticker: "LIN.N",
    name: "Linde",
  },
  {
    ticker: "LKQ.O",
    name: "LKQ",
  },
  {
    ticker: "LLOY.L",
    name: "Lloyds Banking",
  },
  {
    ticker: "LLY.N",
    name: "Eli Lilly",
  },
  {
    ticker: "LMT.N",
    name: "Lockheed Martin",
  },
  {
    ticker: "LNC.N",
    name: "Lincoln National",
  },
  {
    ticker: "LNT.O",
    name: "Alliant Energy",
  },
  {
    ticker: "LOW.N",
    name: "Lowe's Companies",
  },
  {
    ticker: "LRCX.O",
    name: "Lam Research",
  },
  {
    ticker: "LSEG.L",
    name: "London Stock Exchange",
  },
  {
    ticker: "LULU.O",
    name: "Lululemon Athletica",
  },
  {
    ticker: "LUMN.N",
    name: "Centurylink",
  },
  {
    ticker: "LUV.N",
    name: "Southwest Airlines",
  },
  {
    ticker: "LVS.N",
    name: "Las Vegas Sands",
  },
  {
    ticker: "LW.N",
    name: "Lamb Weston Holdings",
  },
  {
    ticker: "LYB.N",
    name: "Lyondellbasell Industries Nv",
  },
  {
    ticker: "LYV.N",
    name: "Live Nation Entertainment",
  },
  {
    ticker: "MA.N",
    name: "Mastercard",
  },
  {
    ticker: "MAA.N",
    name: "Mid-America Apartment Communities",
  },
  {
    ticker: "MAR.O",
    name: "Marriott International",
  },
  {
    ticker: "MAS.N",
    name: "Masco",
  },
  {
    ticker: "MCD.N",
    name: "McDonald's",
  },
  {
    ticker: "MCHP.O",
    name: "Microchip Technology",
  },
  {
    ticker: "MCK.N",
    name: "McKesson",
  },
  {
    ticker: "MCO.N",
    name: "Moody's",
  },
  {
    ticker: "MCRO.L",
    name: "Micro Focus International",
  },
  {
    ticker: "MDC.L",
    name: "Mediclinic International",
  },
  {
    ticker: "MDLZ.O",
    name: "Mondelez International",
  },
  {
    ticker: "MDT.N",
    name: "Medtronic",
  },
  {
    ticker: "MELI.O",
    name: "Mercadolibre",
  },
  {
    ticker: "MET.N",
    name: "Metlife",
  },
  {
    ticker: "MGGT.L",
    name: "Meggitt",
  },
  {
    ticker: "MGM.N",
    name: "Mgm Resorts International",
  },
  {
    ticker: "MHK.N",
    name: "Mohawk Industries",
  },
  {
    ticker: "MJ.MKT",
    name: "Canabis stocks Index",
  },
  {
    ticker: "MKC.N",
    name: "Mccormick",
  },
  {
    ticker: "MKS.L",
    name: "Marks And Spencer",
  },
  {
    ticker: "MKTX.O",
    name: "MarketAxess Holdings",
  },
  {
    ticker: "MLM.N",
    name: "Martin Marietta Materials",
  },
  {
    ticker: "MMC.N",
    name: "Marsh & Mclennan",
  },
  {
    ticker: "MMM.N",
    name: "3M",
  },
  {
    ticker: "MNDI.L",
    name: "Mondi",
  },
  {
    ticker: "MNG.L",
    name: "M&G",
  },
  {
    ticker: "MNST.O",
    name: "Monster Beverage",
  },
  {
    ticker: "MO.N",
    name: "Altria Group",
  },
  {
    ticker: "MOH.N",
    name: "Molina",
  },
  {
    ticker: "MOS.N",
    name: "Mosaic",
  },
  {
    ticker: "MPC.N",
    name: "Marathon Petroleum",
  },
  {
    ticker: "MPWR.O",
    name: "Monolithic Power Systems",
  },
  {
    ticker: "MRK.N",
    name: "Merck",
  },
  {
    ticker: "MRNA.O",
    name: "Moderna",
  },
  {
    ticker: "MRO.L",
    name: "Melrose Industries",
  },
  {
    ticker: "MRO.N",
    name: "Marathon Oil",
  },
  {
    ticker: "MRVL.O",
    name: "Marvell Technology",
  },
  {
    ticker: "MRW.L",
    name: "@@@@-auto delete",
  },
  {
    ticker: "MS.N",
    name: "Morgan Stanley",
  },
  {
    ticker: "MSCI.N",
    name: "MSCI",
  },
  {
    ticker: "MSFT.O",
    name: "Microsoft",
  },
  {
    ticker: "MSI.N",
    name: "Motorola Solutions",
  },
  {
    ticker: "MTB.N",
    name: "M&t Bank",
  },
  {
    ticker: "MTCH.O",
    name: "Match",
  },
  {
    ticker: "MTD.N",
    name: "Mettler-Toledo International",
  },
  {
    ticker: "MU.O",
    name: "Micron Technology",
  },
  {
    ticker: "MXN.MKT",
    name: "Mexican peso",
  },
  {
    ticker: "MXN=",
    name: "USD/MXN",
  },
  {
    ticker: "MYR=",
    name: "USD/MYR",
  },
  {
    ticker: "NASDAQ.MKT",
    name: "Nasdaq 100",
  },
  {
    ticker: "NCLH.N",
    name: "Norwegian Cruise Line Holdings",
  },
  {
    ticker: "NDAQ.O",
    name: "Nasdaq",
  },
  {
    ticker: "NDSN.O",
    name: "Nordson",
  },
  {
    ticker: "NEE.N",
    name: "Nextera Energy",
  },
  {
    ticker: "NEM.N",
    name: "Newmont",
  },
  {
    ticker: "NFLX.O",
    name: "Netflix",
  },
  {
    ticker: "NG..L",
    name: "National Grid",
  },
  {
    ticker: "NI.N",
    name: "NiSource",
  },
  {
    ticker: "NKE.N",
    name: "Nike",
  },
  {
    ticker: "NLOK.O",
    name: "Symantec",
  },
  {
    ticker: "NLSN.N",
    name: "Nielsen",
  },
  {
    ticker: "NOC.N",
    name: "Northrop Grumman",
  },
  {
    ticker: "NOK.MKT",
    name: "Norwegian krone",
  },
  {
    ticker: "NOK=",
    name: "USD/NOK",
  },
  {
    ticker: "NOW.N",
    name: "Servicenow",
  },
  {
    ticker: "NRG.N",
    name: "Nrg Energy",
  },
  {
    ticker: "NSC.N",
    name: "Norfolk Southern",
  },
  {
    ticker: "NTAP.O",
    name: "Netapp",
  },
  {
    ticker: "NTES.O",
    name: "Netease",
  },
  {
    ticker: "NTRS.O",
    name: "Northern Trust",
  },
  {
    ticker: "NUE.N",
    name: "Nucor",
  },
  {
    ticker: "NVDA.O",
    name: "NVIDIA",
  },
  {
    ticker: "NVR.N",
    name: "Nvr",
  },
  {
    ticker: "NWG.L",
    name: "Natwest Group",
  },
  {
    ticker: "NWL.O",
    name: "Newell Brands",
  },
  {
    ticker: "NWS.O",
    name: "News Corporation",
  },
  {
    ticker: "NWSA.O",
    name: "News Corporation",
  },
  {
    ticker: "NXPI.O",
    name: "Nxp Semiconductors",
  },
  {
    ticker: "NXT.L",
    name: "Next",
  },
  {
    ticker: "NZD.MKT",
    name: "New Zealand Dollar",
  },
  {
    ticker: "NZD=",
    name: "USD/NZD",
  },
  {
    ticker: "O.N",
    name: "Realty Income",
  },
  {
    ticker: "OCDO.L",
    name: "Ocado Group",
  },
  {
    ticker: "ODFL.O",
    name: "Old Dominion Freight Line",
  },
  {
    ticker: "OGN.N",
    name: "Organon & Co.",
  },
  {
    ticker: "OIL.MKT",
    name: "Crude Oil",
  },
  {
    ticker: "OKE.N",
    name: "Oneok",
  },
  {
    ticker: "OKTA.O",
    name: "Okta",
  },
  {
    ticker: "OMC.N",
    name: "Omnicom Group",
  },
  {
    ticker: "OML.L",
    name: "*deleted* deleted automat",
  },
  {
    ticker: "ORCL.N",
    name: "Oracle",
  },
  {
    ticker: "ORLY.O",
    name: "O'reilly",
  },
  {
    ticker: "OTIS.N",
    name: "Otis",
  },
  {
    ticker: "OXY.N",
    name: "Occidental Petroleum",
  },
  {
    ticker: "PANW.O",
    name: "Panw",
  },
  {
    ticker: "PARA.O",
    name: "Paramount",
  },
  {
    ticker: "PAYC.N",
    name: "Paycom Software",
  },
  {
    ticker: "PAYX.O",
    name: "Paychex",
  },
  {
    ticker: "PCAR.O",
    name: "Paccar",
  },
  {
    ticker: "PDD.O",
    name: "Pinduoduo",
  },
  {
    ticker: "PEAK.N",
    name: "Healthpeak Properties",
  },
  {
    ticker: "PEG.N",
    name: "Public Service Enterprise Group",
  },
  {
    ticker: "PENN.O",
    name: "Penn National Gaming",
  },
  {
    ticker: "PEP.O",
    name: "Pepsico",
  },
  {
    ticker: "PFE.N",
    name: "Pfizer",
  },
  {
    ticker: "PFG.O",
    name: "Principal Financial Group",
  },
  {
    ticker: "PG.N",
    name: "Procter & Gamble",
  },
  {
    ticker: "PGR.N",
    name: "Progressive",
  },
  {
    ticker: "PH.N",
    name: "Parker-Hannifin",
  },
  {
    ticker: "PHM.N",
    name: "Pultegroup",
  },
  {
    ticker: "PHNX.L",
    name: "Phoenix Group",
  },
  {
    ticker: "PHP=",
    name: "USD/PHP",
  },
  {
    ticker: "PKG.N",
    name: "Packaging of America",
  },
  {
    ticker: "PKI.N",
    name: "Perkinelmer",
  },
  {
    ticker: "PLD.N",
    name: "Prologis",
  },
  {
    ticker: "PLN=",
    name: "USD/PLN",
  },
  {
    ticker: "PM.N",
    name: "Philip Morris",
  },
  {
    ticker: "PNC.N",
    name: "Pnc Financial Services Group",
  },
  {
    ticker: "PNN.L",
    name: "Pennon Group",
  },
  {
    ticker: "PNR.N",
    name: "Pentair",
  },
  {
    ticker: "PNW.N",
    name: "Pinnacle West Capital",
  },
  {
    ticker: "POLY.L",
    name: "Polymetal International",
  },
  {
    ticker: "POOL.O",
    name: "Pool",
  },
  {
    ticker: "POUND.MKT",
    name: "British Pound",
  },
  {
    ticker: "PPB.L",
    name: "*deleted* deleted automat",
  },
  {
    ticker: "PPG.N",
    name: "Ppg Industries",
  },
  {
    ticker: "PPL.N",
    name: "PPL",
  },
  {
    ticker: "PRU.L",
    name: "Prudential",
  },
  {
    ticker: "PRU.N",
    name: "Prudential Financial",
  },
  {
    ticker: "PSA.N",
    name: "Public Storage",
  },
  {
    ticker: "PSH.L",
    name: "Pershing Square Holdings",
  },
  {
    ticker: "PSN.L",
    name: "Persimmon",
  },
  {
    ticker: "PSON.L",
    name: "Pearson",
  },
  {
    ticker: "PSX.N",
    name: "Phillips 66",
  },
  {
    ticker: "PTC.O",
    name: "PTC",
  },
  {
    ticker: "PVH.N",
    name: "PVH",
  },
  {
    ticker: "PWR.N",
    name: "Quanta Services",
  },
  {
    ticker: "PXD.N",
    name: "Pioneer Natural Resources",
  },
  {
    ticker: "PYPL.O",
    name: "Paypal",
  },
  {
    ticker: "QCOM.O",
    name: "QUALCOMM",
  },
  {
    ticker: "QRVO.O",
    name: "Qorvo",
  },
  {
    ticker: "RB..L",
    name: "Reckitt Benckiser Group",
  },
  {
    ticker: "RCL.N",
    name: "Royal Caribbean Cruises",
  },
  {
    ticker: "RDSA.L",
    name: "Shell",
  },
  {
    ticker: "RDSB.L",
    name: "Shell",
  },
  {
    ticker: "RE.N",
    name: "Everest Re Group",
  },
  {
    ticker: "REG.O",
    name: "Regency Centers",
  },
  {
    ticker: "REGN.O",
    name: "Regeneron Pharmaceuticals",
  },
  {
    ticker: "REL.L",
    name: "Relx",
  },
  {
    ticker: "RF.N",
    name: "Regions Financial",
  },
  {
    ticker: "RHI.N",
    name: "Robert Half International",
  },
  {
    ticker: "RIO.L",
    name: "Rio Tinto",
  },
  {
    ticker: "RJF.N",
    name: "Raymond James Financial",
  },
  {
    ticker: "RKT.L",
    name: "Reckitt Benckiser Group",
  },
  {
    ticker: "RL.N",
    name: "Ralph Lauren",
  },
  {
    ticker: "RMD.N",
    name: "ResMed",
  },
  {
    ticker: "RMG.L",
    name: "Royal Mail",
  },
  {
    ticker: "RMV.L",
    name: "Rightmove",
  },
  {
    ticker: "ROK.N",
    name: "Rockwell Automation",
  },
  {
    ticker: "ROL.N",
    name: "Rollins",
  },
  {
    ticker: "RON=",
    name: "USD/RON",
  },
  {
    ticker: "ROP.N",
    name: "Roper Technologies",
  },
  {
    ticker: "ROST.O",
    name: "Ross Stores",
  },
  {
    ticker: "RR..L",
    name: "Rolls-Royce Holdings",
  },
  {
    ticker: "RRS.L",
    name: "*deleted* deleted automat",
  },
  {
    ticker: "RSA.L",
    name: "@@@@-auto delete",
  },
  {
    ticker: "RSG.N",
    name: "Republic Services",
  },
  {
    ticker: "RTO.L",
    name: "Rentokil Initial",
  },
  {
    ticker: "RTX.N",
    name: "Raytheon Technologies",
  },
  {
    ticker: "RUB.MKT",
    name: "Russian ruble",
  },
  {
    ticker: "RUB=",
    name: "USD/RUB",
  },
  {
    ticker: "SAR=",
    name: "USD/SAR",
  },
  {
    ticker: "SBAC.O",
    name: "SBA Communications",
  },
  {
    ticker: "SBNY.O",
    name: "Signature Bank",
  },
  {
    ticker: "SBRY.L",
    name: "Sainsbury",
  },
  {
    ticker: "SBUX.O",
    name: "Starbucks",
  },
  {
    ticker: "SCHW.N",
    name: "Charles Schwab",
  },
  {
    ticker: "SDR.L",
    name: "Schroders",
  },
  {
    ticker: "SEDG.O",
    name: "Solaredge Technologies",
  },
  {
    ticker: "SEE.N",
    name: "Sealed Air",
  },
  {
    ticker: "SEK.MKT",
    name: "Swedish krona",
  },
  {
    ticker: "SEK=",
    name: "USD/SEK",
  },
  {
    ticker: "SGD.MKT",
    name: "Singapore dollar",
  },
  {
    ticker: "SGD=",
    name: "USD/SGD",
  },
  {
    ticker: "SGE.L",
    name: "SAGE Therapeutics",
  },
  {
    ticker: "SGEN.O",
    name: "Seagen",
  },
  {
    ticker: "SGRO.L",
    name: "Segro",
  },
  {
    ticker: "SHP.L",
    name: "*deleted* deleted automat",
  },
  {
    ticker: "SHW.N",
    name: "Sherwin-Williams",
  },
  {
    ticker: "SIRI.O",
    name: "Sirius Xm Holdings",
  },
  {
    ticker: "SIVB.O",
    name: "Svb Financial Group",
  },
  {
    ticker: "SJM.N",
    name: "J.M. Smucker",
  },
  {
    ticker: "SKG.L",
    name: "Smurfit Kappa Group ",
  },
  {
    ticker: "SKY.L",
    name: "*deleted* deleted automat",
  },
  {
    ticker: "SLA.L",
    name: "Standard Life Aberdeen",
  },
  {
    ticker: "SLB.N",
    name: "Schlumberger",
  },
  {
    ticker: "SMDS.L",
    name: "Smith",
  },
  {
    ticker: "SMIN.L",
    name: "Smiths Group",
  },
  {
    ticker: "SMT.L",
    name: "Scottish Mortgage Investment",
  },
  {
    ticker: "SN..L",
    name: "Smith & Nephew",
  },
  {
    ticker: "SNA.N",
    name: "Snap-on",
  },
  {
    ticker: "SNPS.O",
    name: "Synopsys",
  },
  {
    ticker: "SNT.L",
    name: "Sabien Technology Group",
  },
  {
    ticker: "SO.N",
    name: "Southern",
  },
  {
    ticker: "SOX.MKT",
    name: "Semiconductor Stocks Index",
  },
  {
    ticker: "SPG.N",
    name: "Simon Property Group",
  },
  {
    ticker: "SPGI.N",
    name: "S&P Global",
  },
  {
    ticker: "SPLK.O",
    name: "Splunk",
  },
  {
    ticker: "SPX.L",
    name: "Spirax-Sarco Engineering",
  },
  {
    ticker: "SRE.N",
    name: "Sempra Energy",
  },
  {
    ticker: "SSE.L",
    name: "SSE",
  },
  {
    ticker: "STAN.L",
    name: "Standard Chartered",
  },
  {
    ticker: "STE.N",
    name: "Steris",
  },
  {
    ticker: "STJ.L",
    name: "St. James'S",
  },
  {
    ticker: "STT.N",
    name: "State Street",
  },
  {
    ticker: "STX.O",
    name: "Seagate",
  },
  {
    ticker: "STZ.N",
    name: "Constellation Brands",
  },
  {
    ticker: "SVT.L",
    name: "Severn Trent",
  },
  {
    ticker: "SWK.N",
    name: "Black & Decker",
  },
  {
    ticker: "SWKS.O",
    name: "Skyworks Solutions",
  },
  {
    ticker: "SYF.N",
    name: "Synchrony Financial",
  },
  {
    ticker: "SYK.N",
    name: "Stryker",
  },
  {
    ticker: "SYY.N",
    name: "Sysco",
  },
  {
    ticker: "T.N",
    name: "AT&T",
  },
  {
    ticker: "TAP.N",
    name: "Molson Coors Brewing",
  },
  {
    ticker: "TDG.N",
    name: "TransDigm Group",
  },
  {
    ticker: "TDY.N",
    name: "Teledyne Technologies",
  },
  {
    ticker: "TEAM.O",
    name: "Atlassian",
  },
  {
    ticker: "TECH.O",
    name: "Bio-Techne",
  },
  {
    ticker: "TEL.N",
    name: "Te Connectivity",
  },
  {
    ticker: "TER.O",
    name: "Teradyne",
  },
  {
    ticker: "TFC.N",
    name: "Truist Financial",
  },
  {
    ticker: "TFX.N",
    name: "Teleflex",
  },
  {
    ticker: "TGT.N",
    name: "Target",
  },
  {
    ticker: "THB.MKT",
    name: "Thai bhat",
  },
  {
    ticker: "THB=",
    name: "USD/THB",
  },
  {
    ticker: "TJX.N",
    name: "Tjx Companies",
  },
  {
    ticker: "TMO.N",
    name: "Thermo Fisher Scientific",
  },
  {
    ticker: "TMUS.O",
    name: "T-Mobile US",
  },
  {
    ticker: "TPR.N",
    name: "Tapestry",
  },
  {
    ticker: "TRMB.O",
    name: "Trimble",
  },
  {
    ticker: "TROW.O",
    name: "T. Rowe Price Group",
  },
  {
    ticker: "TRV.N",
    name: "The Travelers Companies",
  },
  {
    ticker: "TRX.L",
    name: "Tissue Regenix Group",
  },
  {
    ticker: "TRY=",
    name: "USD/TRY",
  },
  {
    ticker: "TRY=.MKT",
    name: "Turkish Lira",
  },
  {
    ticker: "TSCO.L",
    name: "Tesco",
  },
  {
    ticker: "TSCO.O",
    name: "Tractor Supply",
  },
  {
    ticker: "TSLA.O",
    name: "Tesla",
  },
  {
    ticker: "TSN.N",
    name: "Tyson Foods",
  },
  {
    ticker: "TT.N",
    name: "Trane Technologies Plc",
  },
  {
    ticker: "TTWO.O",
    name: "Take-Two Interactive",
  },
  {
    ticker: "TUI.L",
    name: "TUI",
  },
  {
    ticker: "TW..L",
    name: "Taylor Wimpey",
  },
  {
    ticker: "TWD=",
    name: "USD/TWD",
  },
  {
    ticker: "TWTR.N",
    name: "Twitter",
  },
  {
    ticker: "TXN.O",
    name: "Texas Instruments",
  },
  {
    ticker: "TXT.N",
    name: "Textron",
  },
  {
    ticker: "TYL.N",
    name: "Tyler Technologies",
  },
  {
    ticker: "UA.N",
    name: "Under Armour",
  },
  {
    ticker: "UAA.N",
    name: "Under Armour",
  },
  {
    ticker: "UAL.O",
    name: "United Continental Holdings",
  },
  {
    ticker: "UDR.N",
    name: "UDR",
  },
  {
    ticker: "UHS.N",
    name: "Universal Health Services",
  },
  {
    ticker: "UK.MKT",
    name: "FTSE 100",
  },
  {
    ticker: "ULTA.O",
    name: "Ulta Beauty",
  },
  {
    ticker: "ULVR.L",
    name: "Unilever",
  },
  {
    ticker: "UNH.N",
    name: "United Health",
  },
  {
    ticker: "UNP.N",
    name: "Union Pacific",
  },
  {
    ticker: "UPS.N",
    name: "UPS",
  },
  {
    ticker: "URI.N",
    name: "United Rentals",
  },
  {
    ticker: "US.MKT",
    name: "Dow",
  },
  {
    ticker: "USB.N",
    name: "U.S. Bancorp",
  },
  {
    ticker: "USBOND.MKT",
    name: "US Bond",
  },
  {
    ticker: "USD/JPY",
    name: "USD/JPY",
  },
  {
    ticker: "USDCAD=",
    name: "@@@@-auto delete",
  },
  {
    ticker: "USDCHF=",
    name: "@@@@-auto delete",
  },
  {
    ticker: "USDEUR=",
    name: "USD/EUR",
  },
  {
    ticker: "USDGBP=",
    name: "USD/GBP",
  },
  {
    ticker: "USDJPY=",
    name: "@@@@-auto delete",
  },
  {
    ticker: "USFUTURES.MKT",
    name: "US Futures",
  },
  {
    ticker: "UU..L",
    name: "United Utilities",
  },
  {
    ticker: "V.N",
    name: "Visa",
  },
  {
    ticker: "VFC.N",
    name: "V.F.",
  },
  {
    ticker: "VLO.N",
    name: "Valero Energy",
  },
  {
    ticker: "VMC.N",
    name: "Vulcan Materials",
  },
  {
    ticker: "VNO.N",
    name: "Vornado Realty Trust",
  },
  {
    ticker: "VOD.L",
    name: "Vodafone",
  },
  {
    ticker: "VRSK.O",
    name: "Verisk Analytics",
  },
  {
    ticker: "VRSN.O",
    name: "Verisign",
  },
  {
    ticker: "VRTX.O",
    name: "Vertex Pharmaceuticals",
  },
  {
    ticker: "VTR.N",
    name: "Ventas",
  },
  {
    ticker: "VTRS.O",
    name: "Viatris",
  },
  {
    ticker: "VZ.N",
    name: "Verizon Communications",
  },
  {
    ticker: "WAB.N",
    name: "Westinghouse Air Brake Technologies",
  },
  {
    ticker: "WAT.N",
    name: "Waters",
  },
  {
    ticker: "WBA.O",
    name: "Walgreens Boots Alliance",
  },
  {
    ticker: "WBD.O",
    name: "Warner Bros.",
  },
  {
    ticker: "WDAY.O",
    name: "Workday",
  },
  {
    ticker: "WDC.O",
    name: "Western Digital",
  },
  {
    ticker: "WEC.N",
    name: "Wec Energy Group",
  },
  {
    ticker: "WELL.N",
    name: "Welltower",
  },
  {
    ticker: "WFC.N",
    name: "Wells Fargo",
  },
  {
    ticker: "WHR.N",
    name: "Whirlpool",
  },
  {
    ticker: "WM.N",
    name: "Waste Management",
  },
  {
    ticker: "WMB.N",
    name: "Williams Companies",
  },
  {
    ticker: "WMT.N",
    name: "Walmart",
  },
  {
    ticker: "WPP.L",
    name: "WPP",
  },
  {
    ticker: "WRB.N",
    name: "W.R. Berkley",
  },
  {
    ticker: "WRK.N",
    name: "Westrock",
  },
  {
    ticker: "WST.N",
    name: "West Pharmaceutical Services",
  },
  {
    ticker: "WTB.L",
    name: "Whitbread",
  },
  {
    ticker: "WTW.O",
    name: "Willis Towers",
  },
  {
    ticker: "WY.N",
    name: "Weyerhaeuser",
  },
  {
    ticker: "WYNN.O",
    name: "Wynn Resorts",
  },
  {
    ticker: "XEL.O",
    name: "Xcel Energy",
  },
  {
    ticker: "XOM.N",
    name: "Exxon Mobil",
  },
  {
    ticker: "XRAY.O",
    name: "DENTSPLY SIRONA",
  },
  {
    ticker: "XYL.N",
    name: "Xylem",
  },
  {
    ticker: "YUM.N",
    name: "Yum! Brands",
  },
  {
    ticker: "ZAR.MKT",
    name: "South African rand",
  },
  {
    ticker: "ZAR=",
    name: "USD/ZAR",
  },
  {
    ticker: "ZBH.N",
    name: "Zimmer Biomet Holdings",
  },
  {
    ticker: "ZBRA.O",
    name: "Zebra Technologies",
  },
  {
    ticker: "ZION.O",
    name: "Zions Ban",
  },
  {
    ticker: "ZM.O",
    name: "Zoom Communications",
  },
  {
    ticker: "ZS.O",
    name: "ZS",
  },
  {
    ticker: "ZTS.N",
    name: "Zoetis",
  },
];

export default securities;
