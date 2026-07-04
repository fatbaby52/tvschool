import json
NOW = "2026-07-03T22:45:00Z"
# Battery street VALUE table (v0: anchored on 7/3/2026 verified prices, promo-adjusted)
BV = {
 ("dewalt20v","5.0"): 119, ("dewalt20v","4.0c"): 99, ("dewalt20v","2.0"): 59,
 ("m18","5.0"): 109, ("m18","2.0"): 65, ("m12","5.0"): 89, ("m12","2.0"): 49,
 ("makita18v","5.0"): 119, ("makita18v","2.0"): 55,
 ("ryobi18v","4.0"): 69, ("ryobi18v","2.0"): 39,
 ("ridgid18v","4.0"): 79, ("ego56v","5.0"): 249, ("ego56v","2.5"): 149,
 ("metabohpt36v","4.0"): 99,
}
CHARGER = {"dewalt20v":30,"m18":30,"m12":25,"makita18v":30,"ryobi18v":20,"ridgid18v":25,"ego56v":60,"metabohpt36v":30}
PLATFORMS = {
 "dewalt20v":"DeWalt 20V MAX","m18":"Milwaukee M18","m12":"Milwaukee M12",
 "makita18v":"Makita 18V LXT","ryobi18v":"Ryobi 18V ONE+","ridgid18v":"Ridgid 18V",
 "ego56v":"EGO 56V","metabohpt36v":"Metabo HPT MultiVolt"}
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
]
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
      "prices":[{"retailerId":retailer,"currentPrice":price,"retailPrice":rp,"onSale":sale,
                 "inStock":verified,"staleHidden":(not verified),
                 "lastChecked":NOW if verified else "","url":"","originalUrl":""}],
      "priceHistory":[{"date":"2026-07-03","price":price}] if verified else []
    }
    tools.append(entry)
data={"lastUpdated":NOW,
 "retailers":{"homedepot":{"name":"The Home Depot"},"amazon":{"name":"Amazon"},"acmetools":{"name":"Acme Tools"},"lowes":{"name":"Lowe's"}},
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
