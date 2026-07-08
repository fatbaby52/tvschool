import json
NOW = "2026-07-03T22:45:00Z"
# Per-entry verified-date overrides (checked on a different date than the pipeline NOW).
VERIFIED_ON = {
  # 2026-07-08 daily run: 11 HD/Amazon SKUs re-verified by browser (JSON-LD), all prices unchanged & in stock
  "dewalt-dcf850b": "2026-07-08T15:45:00Z",
  "milwaukee-2953-20": "2026-07-08T15:45:00Z",
  "milwaukee-3697-22": "2026-07-08T15:45:00Z",
  "ryobi-psbdd02k2": "2026-07-08T15:45:00Z",
  "makita-xfd131": "2026-07-08T15:45:00Z",
  "milwaukee-2962-20": "2026-07-08T15:45:00Z",
  "ryobi-pbp005": "2026-07-08T15:45:00Z",
  "milwaukee-48-11-1850": "2026-07-08T15:45:00Z",
  "milwaukee-48-11-2450": "2026-07-08T15:45:00Z",
  "dewalt-dcb205": "2026-07-08T15:45:00Z",
  "makita-bl1850b": "2026-07-08T15:45:00Z",
  "bauer-3sp-iw": "2026-07-05T18:00:00Z",
  "bauer-ht-iw": "2026-07-05T18:00:00Z",
  "bauer-drill": "2026-07-05T18:00:00Z",
  "bauer-blower": "2026-07-05T18:00:00Z",
  "hercules-compact-iw": "2026-07-05T18:00:00Z",
  "hercules-ultra-iw": "2026-07-05T18:00:00Z",
  "hercules-impact-driver": "2026-07-05T18:00:00Z",
  "hercules-drill": "2026-07-05T18:00:00Z",
}
# Battery street VALUE table (v0: anchored on 7/3/2026 verified prices, promo-adjusted)
BV = {
 ("dewalt20v","5.0"): 119, ("dewalt20v","4.0c"): 99, ("dewalt20v","2.0"): 59,
 ("m18","5.0"): 109, ("m18","2.0"): 65, ("m12","5.0"): 89, ("m12","2.0"): 49,
 ("makita18v","5.0"): 119, ("makita18v","2.0"): 55,
 ("ryobi18v","4.0"): 69, ("ryobi18v","2.0"): 39,
 ("ridgid18v","4.0"): 79, ("ego56v","5.0"): 249, ("ego56v","2.5"): 149,
 ("metabohpt36v","4.0"): 99,
 ("bauer20v","5.0"): 45, ("bauer20v","2.0"): 18,
 ("hercules20v","5.0"): 70, ("hercules20v","2.0"): 35,
}
CHARGER = {"dewalt20v":30,"m18":30,"m12":25,"makita18v":30,"ryobi18v":20,"ridgid18v":25,"ego56v":60,"metabohpt36v":30,"bauer20v":10,"hercules20v":20}
PLATFORMS = {
 "dewalt20v":"DeWalt 20V MAX","m18":"Milwaukee M18","m12":"Milwaukee M12",
 "makita18v":"Makita 18V LXT","ryobi18v":"Ryobi 18V ONE+","ridgid18v":"Ridgid 18V",
 "ego56v":"EGO 56V","metabohpt36v":"Metabo HPT MultiVolt",
 "bauer20v":"Bauer 20V","hercules20v":"Hercules 20V"}
# id, brand, model, name, platform, type, bare_value, batteries[(ah,qty)], charger, case, specs, usecases, price, retailPrice, onSale, verified, retailer, note
C = [
 # --- verified 7/3 ---
 ("dewalt-dcf850b","DeWalt","DCF850B","Atomic 20V Brushless 1/4in Impact Driver (Bare)","dewalt20v","impact_driver",140,[],0,0,
  {"torque":"1825 in-lbs","brushless":True,"weight":"2.0 lb"},{"diy":8.4,"remodel":9.0,"auto":7.0,"electrical":8.8,"yard":0,"pro":9.0},129.00,169.00,True,True,"homedepot",""),
 ("milwaukee-2953-20","Milwaukee","2953-20","M18 FUEL 1/4in Hex Impact Driver (Bare)","m18","impact_driver",155,[],0,0,
  {"torque":"2000 in-lbs","brushless":True,"weight":"2.4 lb"},{"diy":8.0,"remodel":9.2,"auto":7.4,"electrical":8.6,"yard":0,"pro":9.4},179.00,None,False,True,"homedepot",""),
 ("milwaukee-3697-22","Milwaukee","3697-22","M18 FUEL 2-Tool Combo: Hammer Drill + Impact Driver (2x5.0Ah)","m18","combo_kit",320,[("5.0",2)],30,20,
  {"torque":"1400 in-lbs / 2000 in-lbs","brushless":True},{"diy":8.6,"remodel":9.5,"auto":7.8,"electrical":8.4,"yard":0,"pro":9.6},349.00,399.00,True,True,"homedepot",""),
 ("ryobi-psbdd02k2","Ryobi","PSBDD02K2","ONE+ HP Compact Brushless 1/2in Drill Kit (2 Batteries)","ryobi18v","drill",95,[("2.0",2)],20,10,
  {"torque":"400 in-lbs","brushless":True,"weight":"2.4 lb"},{"diy":9.2,"remodel":7.2,"auto":6.0,"electrical":7.8,"yard":0,"pro":5.5},139.00,None,False,True,"homedepot",""),
 ("makita-xfd131","Makita","XFD131","18V LXT Brushless 1/2in Drill Kit (1x3.0Ah)","makita18v","drill",145,[("2.0",1)],30,15,
  {"torque":"440 in-lbs","brushless":True,"weight":"3.9 lb"},{"diy":8.2,"remodel":8.6,"auto":6.2,"electrical":7.6,"yard":0,"pro":8.6},179.00,None,False,True,"homedepot","3.0Ah battery valued at 2.0 tier +$15"),
 ("milwaukee-2962-20","Milwaukee","2962-20","M18 FUEL 1/2in Mid-Torque Impact Wrench (Bare)","m18","impact_wrench",250,[],0,0,
  {"torque":"650 ft-lbs","brushless":True,"weight":"5.1 lb"},{"diy":5.5,"remodel":6.0,"auto":9.6,"electrical":4.0,"yard":0,"pro":9.0},279.00,None,False,True,"homedepot",""),
 ("ego-lm2135sp","EGO","LM2135SP","POWER+ 21in Self-Propelled Mower Kit (7.5Ah)","ego56v","mower",280,[("5.0",1)],60,0,
  {"runtime":"60 min","selfPropelled":True},{"diy":8.8,"remodel":0,"auto":0,"electrical":0,"yard":9.4,"pro":6.5},599.00,None,False,True,"amazon","7.5Ah valued at 5.0 tier +$70"),
 ("ryobi-pbp005","Ryobi","PBP005","ONE+ 18V 4.0Ah Battery","ryobi18v","battery",0,[("4.0",1)],0,0,
  {},{"diy":7.0,"remodel":5.0,"auto":5.0,"electrical":5.0,"yard":6.0,"pro":4.0},99.00,None,False,True,"homedepot","single battery at list; street value $69"),
 ("dewalt-dcd800p1","DeWalt","DCD800P1","20V MAX XR Brushless 1/2in Drill Kit (1x5.0Ah)","dewalt20v","drill",160,[("5.0",1)],30,15,
  {"torque":"UWO 885","brushless":True},{"diy":8.4,"remodel":9.0,"auto":6.4,"electrical":7.8,"yard":0,"pro":9.0},243.03,None,False,False,"homedepot","OOS online 7/3; price recorded"),
 ("milwaukee-48-11-1850","Milwaukee","48-11-1850","M18 REDLITHIUM 5.0Ah Battery","m18","battery",0,[("5.0",1)],0,0,
  {},{"diy":6.0,"remodel":7.0,"auto":7.0,"electrical":6.0,"yard":0,"pro":8.0},99.00,169.00,True,True,"homedepot","41% off list — anchor for M18 battery value"),
 ("milwaukee-48-11-2450","Milwaukee","48-11-2450","M12 REDLITHIUM 5.0Ah Battery","m12","battery",0,[("5.0",1)],0,0,
  {},{"diy":6.0,"remodel":6.0,"auto":7.5,"electrical":7.5,"yard":0,"pro":7.0},99.00,129.00,True,True,"homedepot",""),
 ("dewalt-dcb205","DeWalt","DCB205","20V MAX 5.0Ah Battery","dewalt20v","battery",0,[("5.0",1)],0,0,
  {},{"diy":6.0,"remodel":7.0,"auto":6.0,"electrical":6.0,"yard":0,"pro":8.0},169.00,None,False,True,"homedepot","at list; wait for promo"),
 ("makita-bl1850b","Makita","BL1850B","18V LXT 5.0Ah Battery","makita18v","battery",0,[("5.0",1)],0,0,
  {},{"diy":6.0,"remodel":7.0,"auto":6.0,"electrical":6.0,"yard":0,"pro":8.0},169.00,None,False,True,"homedepot","at list"),
 ("ego-ba2800t","EGO","BA2800T","56V 5.0Ah Battery","ego56v","battery",0,[("5.0",1)],0,0,
  {},{"diy":5.0,"remodel":0,"auto":0,"electrical":0,"yard":8.0,"pro":6.0},299.00,None,False,True,"amazon","at list"),
 # --- unverified (hidden until browser-checked) ---
 ("milwaukee-2904-20","Milwaukee","2904-20","M18 FUEL 1/2in Hammer Drill (Bare)","m18","drill",165,[],0,0,
  {"torque":"1400 in-lbs","brushless":True},{"diy":7.8,"remodel":9.4,"auto":6.6,"electrical":8.0,"yard":0,"pro":9.5},199.00,None,False,False,"homedepot",""),
 ("dewalt-dcs573b","DeWalt","DCS573B","20V MAX 7-1/4in Circular Saw FLEXVOLT Adv (Bare)","dewalt20v","circular_saw",165,[],0,0,
  {"rpm":"5500","brushless":True},{"diy":7.6,"remodel":9.2,"auto":4.0,"electrical":5.5,"yard":0,"pro":9.0},199.00,None,False,False,"homedepot",""),
 ("milwaukee-2732-20","Milwaukee","2732-20","M18 FUEL 7-1/4in Circular Saw (Bare)","m18","circular_saw",180,[],0,0,
  {"rpm":"5800","brushless":True},{"diy":7.4,"remodel":9.3,"auto":4.0,"electrical":5.5,"yard":0,"pro":9.2},229.00,None,False,False,"homedepot",""),
 ("dewalt-dcf891b","DeWalt","DCF891B","20V MAX XR 1/2in Mid-Torque Impact Wrench (Bare)","dewalt20v","impact_wrench",230,[],0,0,
  {"torque":"600 ft-lbs","brushless":True},{"diy":5.5,"remodel":6.0,"auto":9.4,"electrical":4.0,"yard":0,"pro":8.8},249.00,None,False,False,"homedepot",""),
 ("milwaukee-2554-20","Milwaukee","2554-20","M12 FUEL 3/8in Stubby Impact Wrench (Bare)","m12","impact_wrench",155,[],0,0,
  {"torque":"250 ft-lbs","brushless":True,"length":"4.8 in"},{"diy":5.0,"remodel":5.5,"auto":9.7,"electrical":6.0,"yard":0,"pro":8.0},179.00,None,False,False,"homedepot",""),
 ("milwaukee-2447-20","Milwaukee","2447-20","M12 3/8in Crown Stapler (Bare)","m12","specialty",85,[],0,0,
  {},{"diy":6.5,"remodel":7.5,"auto":3.0,"electrical":6.0,"yard":0,"pro":6.0},99.00,None,False,False,"homedepot",""),
 ("makita-xgt-gph01d","Makita","GPH01D","40V XGT Brushless Hammer Drill Kit (2.5Ah)","makita18v","drill",230,[("2.0",1)],30,15,
  {"torque":"1250 in-lbs","brushless":True},{"diy":7.0,"remodel":9.0,"auto":6.0,"electrical":7.0,"yard":0,"pro":9.3},329.00,None,False,False,"homedepot","XGT valued on 18V table v0 — refine"),
 ("ryobi-p1819","Ryobi","P1819","ONE+ 18V 6-Tool Combo Kit","ryobi18v","combo_kit",280,[("4.0",1),("2.0",1)],20,20,
  {},{"diy":9.4,"remodel":7.0,"auto":5.5,"electrical":6.5,"yard":3.0,"pro":4.5},399.00,None,False,False,"homedepot",""),
 ("ridgid-r9208","Ridgid","R9208","18V 2-Tool Combo: Drill + Impact (2x2.0Ah)","ridgid18v","combo_kit",190,[("4.0",1)],25,15,
  {"brushless":True},{"diy":8.6,"remodel":8.0,"auto":6.0,"electrical":7.0,"yard":0,"pro":7.5},249.00,None,False,False,"homedepot","LSA warranty adds value not modeled in v0"),
 ("ego-st1511t","EGO","ST1511T","POWER+ 15in String Trimmer Kit (2.5Ah)","ego56v","trimmer",180,[("2.5",1)],60,0,
  {"runtime":"45 min"},{"diy":8.6,"remodel":0,"auto":0,"electrical":0,"yard":9.0,"pro":6.0},229.00,None,False,False,"amazon",""),
 ("ego-lb6151","EGO","LB6151","POWER+ 615 CFM Blower Kit (2.5Ah)","ego56v","blower",190,[("2.5",1)],60,0,
  {"cfm":"615"},{"diy":8.4,"remodel":0,"auto":0,"electrical":0,"yard":9.2,"pro":6.5},229.00,None,False,False,"amazon",""),
 ("metabohpt-wh36dbdl2","Metabo HPT","WH36DB","MultiVolt 36V Triple Hammer Impact Driver (Bare)","metabohpt36v","impact_driver",150,[],0,0,
  {"torque":"1832 in-lbs","brushless":True},{"diy":7.0,"remodel":8.8,"auto":6.5,"electrical":7.5,"yard":0,"pro":8.8},159.00,None,False,False,"amazon",""),
 ("dewalt-dcs367b","DeWalt","DCS367B","20V MAX XR Compact Recip Saw (Bare)","dewalt20v","recip_saw",150,[],0,0,
  {"brushless":True,"spm":"2900"},{"diy":7.2,"remodel":8.8,"auto":6.0,"electrical":7.8,"yard":5.0,"pro":8.6},179.00,None,False,False,"homedepot",""),
 ("milwaukee-2821-20","Milwaukee","2821-20","M18 FUEL SAWZALL Recip Saw (Bare)","m18","recip_saw",180,[],0,0,
  {"brushless":True,"spm":"3000"},{"diy":7.0,"remodel":9.0,"auto":6.2,"electrical":7.8,"yard":5.0,"pro":9.2},229.00,None,False,False,"homedepot",""),
 ("ryobi-p423","Ryobi","P423","ONE+ 18V Brushless 4-1/2in Angle Grinder (Bare)","ryobi18v","grinder",75,[],0,0,
  {"rpm":"10400","brushless":True},{"diy":8.0,"remodel":6.8,"auto":7.0,"electrical":5.0,"yard":0,"pro":5.0},89.00,None,False,False,"homedepot",""),
 ("makita-xag04z","Makita","XAG04Z","18V LXT Brushless 4-1/2in Grinder (Bare)","makita18v","grinder",130,[],0,0,
  {"rpm":"8500","brushless":True},{"diy":6.5,"remodel":7.5,"auto":7.5,"electrical":5.0,"yard":0,"pro":8.8},149.00,None,False,False,"homedepot",""),
 # --- Harbor Freight seed (Bauer + Hercules); names/prices browser-verified 2026-07-05; HF item#s + product URLs TBD ---
 ("bauer-3sp-iw","Bauer","58637","20V Brushless 1/2in 3-Speed Impact Wrench (Tool Only)","bauer20v","impact_wrench",50,[],0,0,
  {"torque":"450 ft-lbs","brushless":True},{"diy":5.5,"remodel":6.0,"auto":8.8,"electrical":4.0,"yard":0,"pro":6.5},49.99,None,False,True,"harborfreight","price verified 2026-07-05"),
 ("bauer-ht-iw","Bauer","73222","20V Brushless 1/2in High-Torque Impact Wrench Kit (5.0Ah)","bauer20v","impact_wrench",100,[("5.0",1)],10,0,
  {"torque":"1200 ft-lbs","brushless":True},{"diy":5.5,"remodel":6.0,"auto":9.0,"electrical":4.0,"yard":0,"pro":7.0},159.99,None,False,True,"harborfreight","kit w/ 5.0Ah+charger; verified 2026-07-05"),
 ("bauer-drill","Bauer","73216","20V Cordless 1/2in Drill/Driver Kit (2.0Ah)","bauer20v","drill",32,[("2.0",1)],10,0,
  {"brushless":False},{"diy":7.5,"remodel":6.0,"auto":4.0,"electrical":6.0,"yard":0,"pro":4.5},54.99,None,False,True,"harborfreight","non-brushless kit; verified 2026-07-05"),
 ("bauer-blower","Bauer","71379","20V Cordless 96 MPH Jet Fan Blower Kit (5.0Ah)","bauer20v","blower",45,[("5.0",1)],10,0,
  {"cfm":"338"},{"diy":7.0,"remodel":0,"auto":0,"electrical":0,"yard":8.5,"pro":5.0},99.99,None,False,True,"harborfreight","kit; verified 2026-07-05"),
 ("hercules-compact-iw","Hercules","59427","20V Brushless 1/2in Compact 4-Mode Impact Wrench (Tool Only)","hercules20v","impact_wrench",70,[],0,0,
  {"torque":"330 ft-lbs","brushless":True},{"diy":6.0,"remodel":6.5,"auto":9.0,"electrical":5.0,"yard":0,"pro":7.5},69.99,None,False,True,"harborfreight","price verified 2026-07-05"),
 ("hercules-ultra-iw","Hercules","70954","20V Brushless 1/2in Ultra-Torque Impact Wrench Kit (5.0Ah)","hercules20v","impact_wrench",150,[("5.0",1)],20,0,
  {"torque":"1100 ft-lbs","brushless":True},{"diy":5.5,"remodel":6.0,"auto":9.3,"electrical":4.0,"yard":0,"pro":8.5},249.99,None,False,True,"harborfreight","kit w/ 5.0Ah+charger; verified 2026-07-05"),
 ("hercules-impact-driver","Hercules","70068","20V Brushless 1/4in Compact 3-Speed Impact Driver Kit (2.0Ah)","hercules20v","impact_driver",52,[("2.0",1)],20,0,
  {"torque":"1900 in-lbs","brushless":True},{"diy":8.0,"remodel":8.5,"auto":7.0,"electrical":8.0,"yard":0,"pro":8.5},97.99,None,False,True,"harborfreight","kit w/ 2.0Ah+charger; verified 2026-07-05"),
 ("hercules-drill","Hercules","70067","20V Brushless 1/2in Drill/Driver Kit w/ Side Handle (2.0Ah)","hercules20v","drill",55,[("2.0",1)],20,0,
  {"torque":"600 in-lbs","brushless":True},{"diy":8.2,"remodel":8.4,"auto":6.0,"electrical":7.5,"yard":0,"pro":8.5},97.99,None,False,True,"harborfreight","kit w/ 2.0Ah+charger; verified 2026-07-05"),
]

# Product page URLs + CDN images, browser-collected 2026-07-04 (overnight pass).
# Plain retailer URLs — the Sovrn site JS monetizes outbound clicks client-side.
MEDIA = {
 "dewalt-dcf850b": ("https://www.homedepot.com/p/DEWALT-ATOMIC-20V-MAX-Cordless-Brushless-Compact-1-4-in-Impact-Driver-Tool-Only-DCF850B/316627328",
   "https://images.thdstatic.com/productImages/3fbaa197-52a0-45f1-b4dc-8a3a8e814a23/svn/dewalt-impact-drivers-dcf850b-64_600.jpg"),
 "milwaukee-2953-20": ("https://www.homedepot.com/p/Milwaukee-M18-FUEL-18V-Lithium-Ion-Brushless-Cordless-1-4-in-Hex-Impact-Driver-Tool-Only-2953-20/320326875",
   "https://images.thdstatic.com/productImages/4b8d2df9-00a4-4068-b769-5d75368fd1cf/svn/milwaukee-impact-drivers-2953-20-64_600.jpg"),
 "milwaukee-3697-22": ("https://www.homedepot.com/p/Milwaukee-M18-FUEL-18V-Lithium-Ion-Brushless-Cordless-Hammer-Drill-and-Impact-Driver-Combo-Kit-2-Tool-with-2-Batteries-3697-22/320326787",
   "https://images.thdstatic.com/productImages/53650d0a-9387-4588-adff-25e704ce7c7c/svn/milwaukee-power-tool-combo-kits-3697-22-64_600.jpg"),
 "ryobi-psbdd02k2": ("https://www.homedepot.com/p/RYOBI-ONE-HP-18V-Brushless-Cordless-Compact-1-2in-Drill-Driver-Kit-with-2-Compact-Batteries-and-Charger-PSBDD02K2/327697338",
   "https://images.thdstatic.com/productImages/96d5c7bd-3d25-45b7-9ca3-7e93532548fa/svn/ryobi-power-drills-psbdd02k2-64_600.jpg"),
 "makita-xfd131": ("https://www.homedepot.com/p/Makita-18V-LXT-Lithium-Ion-Brushless-Cordless-1-2-in-Driver-Drill-Kit-3-0Ah-XFD131/305926995",
   "https://images.thdstatic.com/productImages/b6c06ffa-960a-4e93-b874-8a2d7985364d/svn/makita-power-drills-xfd131-64_600.jpg"),
 "milwaukee-2962-20": ("https://www.homedepot.com/p/Milwaukee-M18-FUEL-Gen-2-18V-Lithium-Ion-Brushless-Cordless-Mid-Torque-1-2-in-Impact-Wrench-w-Friction-Ring-Tool-Only-2962-20/313511878",
   "https://images.thdstatic.com/productImages/9c7469c9-6d06-4313-b8c6-dbf40e7ce75e/svn/milwaukee-impact-wrenches-2962-20-64_600.jpg"),
 "ego-lm2135sp": ("https://www.amazon.com/dp/B0857KWHHC?tag=tvschool-20",
   "https://m.media-amazon.com/images/I/71+DP8NYPeL._AC_SX679_.jpg"),
 "ryobi-pbp005": ("https://www.homedepot.com/p/RYOBI-ONE-18V-4-0-Ah-Lithium-Ion-Battery-PBP005/315039438",
   "https://images.thdstatic.com/productImages/b0b3568d-f440-45c3-b1ca-44c023241cb4/svn/ryobi-outdoor-power-batteries-chargers-pbp005-64_600.jpg"),
 "milwaukee-48-11-1850": ("https://www.homedepot.com/p/Milwaukee-M18-18-Volt-5-0-Ah-Lithium-Ion-XC-Extended-Capacity-Battery-Pack-48-11-1850/205620421",
   "https://images.thdstatic.com/productImages/6c9940dc-2c35-4a5d-b5bb-b47a87a09ab5/svn/milwaukee-power-tool-batteries-48-11-1850-64_600.jpg"),
 "milwaukee-48-11-2450": ("https://www.homedepot.com/p/Milwaukee-M12-12-Volt-Lithium-Ion-XC-High-Output-5-0-Ah-Battery-Pack-48-11-2450/320268545",
   "https://images.thdstatic.com/productImages/9dd6affe-c9bc-4a32-a203-25b3ffb0e391/svn/milwaukee-power-tool-batteries-48-11-2450-64_600.jpg"),
 "dewalt-dcb205": ("https://www.homedepot.com/p/DEWALT-20V-MAX-Premium-Lithium-Ion-5-0Ah-Battery-Pack-DCB205/205227130",
   "https://images.thdstatic.com/productImages/da6fe409-aea7-4eb1-9ebe-974686a61b35/svn/dewalt-power-tool-batteries-dcb205-64_600.jpg"),
 "makita-bl1850b": ("https://www.homedepot.com/p/Makita-18V-LXT-Lithium-Ion-High-Capacity-Battery-Pack-5-0Ah-with-Fuel-Gauge-BL1850B/206607848",
   "https://images.thdstatic.com/productImages/fcc08ee4-1397-4cc1-b22e-a03c84535db3/svn/makita-power-tool-batteries-bl1850b-64_600.jpg"),
 "ego-ba2800t": ("https://www.amazon.com/dp/B07YKY61RF?tag=tvschool-20",
   "https://m.media-amazon.com/images/I/61ApHxx7X2L._AC_SX679_.jpg"),
 "bauer-3sp-iw": ("https://www.harborfreight.com/20v-brushless-cordless-12-in-3-speed-impact-wrench-tool-only-58637.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/5/8/58637_W7.jpg"),
 "bauer-ht-iw": ("https://www.harborfreight.com/20v-brushless-cordless-12-in-high-torque-impact-wrench-kit-with-5-ah-battery-and-charger-73222.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/7/3/73222_W7.jpg"),
 "bauer-drill": ("https://www.harborfreight.com/20v-cordless-12-in-drilldriver-kit-with-2-ah-battery-and-charger-73216.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/7/3/73216_W7.jpg"),
 "bauer-blower": ("https://www.harborfreight.com/20v-cordless-96-mph338-cfm-jet-fan-blower-kit-71379.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/7/1/71379_W7.jpg"),
 "hercules-compact-iw": ("https://www.harborfreight.com/20v-brushless-cordless-12-in-compact-4-mode-impact-wrench-with-friction-ring-tool-only-59427.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/5/9/59427_W7.jpg"),
 "hercules-ultra-iw": ("https://www.harborfreight.com/20v-brushless-cordless-12-in-ultra-torque-impact-wrench-kit-with-5-ah-battery-and-charger-70954.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/7/0/70954_W7.jpg"),
 "hercules-impact-driver": ("https://www.harborfreight.com/20v-brushless-cordless-14-in-compact-3-speed-impact-driver-kit-with-2-ah-battery-and-charger-70068.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/7/0/70068_W7.jpg"),
 "hercules-drill": ("https://www.harborfreight.com/20v-brushless-cordless-12-in-drilldriver-kit-with-side-handle-2-ah-battery-and-charger-70067.html",
   "https://www.harborfreight.com/media/catalog/product/cache/c7f358f04aec81e7c5e0be4c56edf041/7/0/70067_W6.jpg"),
}

def battery_value(platform, ah):
    return BV.get((platform, ah), 0)
tools=[]
for (tid,brand,model,name,plat,ttype,bare,bats,chg,case,specs,uc,price,rp,sale,verified,retailer,note) in C:
    fv = bare + sum(battery_value(plat,ah)*q for ah,q in bats) + chg + case
    # battery-only listings: fv is battery street value
    if ttype=="battery": fv = sum(battery_value(plat,ah)*q for ah,q in bats)
    entry = {
      "id":tid,"brand":brand,"model":model,"fullName":f"{brand} {name}","platform":plat,
      "platformName":PLATFORMS[plat],"toolType":ttype,
      "config":{"bareToolValue":bare,"batteries":[{"ah":ah,"qty":q,"unitValue":battery_value(plat,ah)} for ah,q in bats],
                "chargerValue":chg,"caseValue":case},
      "fairValue":round(fv,2),"specs":specs,"useCaseScores":uc,
      "modelNote":note,"valueModel":"v0-decomposition-2026-07-03",
      "image": MEDIA.get(tid, ("", ""))[1],
      "prices":[{"retailerId":retailer,"currentPrice":price,"retailPrice":rp,"onSale":sale,
                 "inStock":verified,"staleHidden":(not verified),
                 "lastChecked":(VERIFIED_ON.get(tid,NOW) if verified else ""),
                 "url":MEDIA.get(tid, ("", ""))[0],"originalUrl":MEDIA.get(tid, ("", ""))[0]}],
      "priceHistory":[{"date":VERIFIED_ON.get(tid,NOW)[:10],"price":price}] if verified else []
    }
    tools.append(entry)
data={"lastUpdated":NOW,
 "retailers":{"homedepot":{"name":"The Home Depot"},"amazon":{"name":"Amazon"},"acmetools":{"name":"Acme Tools"},"lowes":{"name":"Lowe's"},"harborfreight":{"name":"Harbor Freight"}},
 "platforms":PLATFORMS,
 "batteryValueTable":{f"{k[0]}|{k[1]}":v for k,v in BV.items()},
 "tools":tools}
open("data.js","w").write("""/**
 * Tool Deal Finder - Data Model (v0)
 * fairValue = kit decomposition: bare tool + batteries (street value table) + charger + case.
 * Prices verified by browser on lastChecked date; staleHidden entries are NOT displayed.
 * Generated by gen_data.py — edit the catalog there, not here.
 */
const TOOL_DATA = """+json.dumps(data,indent=2)+";\n")
print("tools:",len(tools),"verified:",sum(1 for t in tools if t["prices"][0]["inStock"]))
for t in tools[:6]:
    p=t["prices"][0]; fv=t["fairValue"]
    ds=(fv-p["currentPrice"])/fv if fv else 0
    print(f'{t["id"]:28s} fv={fv:8.2f} price={p["currentPrice"]:8.2f} ds={ds:+.2%}')
