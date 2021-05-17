const operation1 = { operationName: "/", serviceName: "app-frontend", type: 'jaegerService' };
const operation2 = { operationName: "/", serviceName: "app-api", type: 'jaegerService' };
// const operation3 = { operationName: "requestTo: GET: /services/get-account-plan?-start=zwrtxqvawmi3uhxjwm&a.appendChild=zwrtxqvaju94n22zwm&k.a.OfficeSharedData=zwrtxqvaze1p83p5wm&e.substring=zwrtxqvauic1fp0hwm&signInSmartListHandler=zwrtxqvans1jno9lwm&9944477=zwrtxqvamzq8k36dwm&arrIndexOf=zwrtxqvavaa08inkwm&AAehyQC=zwrtxqvao0og1bxrwm&AAehyQD=zwrtxqvauwa2cmcgwm&WeatherSummary_noSpotlight=zwrtxqvanyrrjay9wm&e.uniqueId=zwrtxqvalhyqw87twm&gt.a=zwrtxqvauwlpsi0swm&i.Immediately=zwrtxqvaglgrtacpwm&e.trim=zwrtxqvav0ygo79pwm&gt.d=zwrtxqvao0ejh7l2wm&9.13384=zwrtxqvai2g7yvcfwm&this.isReadyToMakeSAMAjaxCall=zwrtxqvag3728szzwm&3YuR=zwrtxqvavhbd5t5owm&Dt.getHeaderHeight=zwrtxqvao412w34hwm&moreOptionsClickTelemetryObject=zwrtxqvaik6fe0drwm&pe.a.Above=zwrtxqvaizke6kntwm&this.removeCmsPathFromRelativeUr=zwrtxqvauqllum3vwm&getStripeName=zwrtxqvat3r4hta9wm&Z.Suspended=zwrtxqvaxy3o8y4swm&delay-red-dark=zwrtxqvatj1y4uxawm&li.call=zwrtxqvaqg81o5akwm&6.59115=zwrtxqvanopfut5nwm&6.50781=zwrtxqvareqk5gb2wm&PHCloudyV2.svg=zwrtxqvamoi1ivdgwm&sportsMatchupCard=zwrtxqvaxb2e6l4kwm&9944460=zwrtxqvaq802tcx5wm&wheelDeltaX=zwrtxqvah0gf1pymwm&traffic_settings_specify=zwrtxqvausiu8tchwm&wheelDeltaY=zwrtxqvaowt0wtkgwm&this.props.managedClasses.resize=zwrtxqvat23qfg2dwm&r.query=zwrtxqvax6vwc9gcwm&e.direction=zwrtxqvalxla6rtewm&t.isDate=zwrtxqvajk50b248wm&7958C14=zwrtxqvawlgnj7y7wm&politics=zwrtxqvailvicm4bwm&a.a.log=zwrtxqvanp8ww3u1wm&r.ProgressType=zwrtxqvai86d0b5rwm&r.b.PHEllipsis=zwrtxqvaiv9hkklowm&headerPageElement=zwrtxqvayimy0jpvwm&t.partyName=zwrtxqvavvb6k8kmwm&7.875H8ZM8.48147=zwrtxqvavbkowts4wm&d.contract.overrideDestinationUr=zwrtxqvasxxdxh3rwm&s.a.cloneElement=zwrtxqvaou0ew2olwm&e.responseType=zwrtxqvaonrcqa6ywm&nifw7=1&Stars.svg=zwrtxqvapqc30e4fwm&e.BOOLEAN=zwrtxqvaurkhwu9wwm&ENGB=zwrtxqvagpu7li13wm&e.current.firstChild=zwrtxqvanjxlv1pdwm&9944447=zwrtxqvan9cc50exwm&this.requestContext.data.locatio=zwrtxqvajspyqqxwwm&r.formattingRuleId=zwrtxqvap6vkkp7pwm&exitL2LTR=zwrtxqvaqbmuit7uwm&grid=zwrtxqvatxtnr8f8wm&2344C11=zwrtxqvaomgpiri8wm&2344C12=zwrtxqvatinbu2hdwm&this.props.bingShoppingTrackPric=zwrtxqvaq5f9olemwm&NHAF=zwrtxqvaonwgfr9awm&getCurrentPageLayout=zwrtxqvat6jz3uo2wm&getHttp=zwrtxqvakk9rv5prwm", serviceName: "test", type: 'jaegerService' };
// const operation4 = { operationName: "requestTo: GET: /services/get-account-plan?.1c=zwrtxqvaypwyhftkuj&.iso=zwrtxqvawdkx2u40uj&xhr=zwrtxqvap76857y5uj&zahlungsarten=zwrtxqvatxw2pq6iuj&treatments=zwrtxqvahxsednwuuj&.300=zwrtxqvayeskozj6uj&vic=zwrtxqvayvws9pqfuj&user_controls=zwrtxqvay15ibtekuj&un=zwrtxqvapdkl185wuj&vin=zwrtxqvaxzn57zq3uj&.826=zwrtxqvaz33kgcrruj&userrss=zwrtxqvaolduxj5yuj&val=zwrtxqvagq6ftxwnuj&zadmin=zwrtxqvahjynbk18uj&ovimxvx5=1&xyiznwsk=zwrtxqvao23lm2tnuj&viewtropic=zwrtxqvaxif1xuo2uj&vitrine=zwrtxqvapa0wqze3uj&upload2=zwrtxqvanleif1lyuj&.112=zwrtxqvamvfc80b2uj&topnews=zwrtxqvapblwp0veuj&viewprivacy=zwrtxqvajbuaxp39uj&xmlexport=zwrtxqvaw7g5x0wauj&.07=zwrtxqvaludxbf6tuj&.790=zwrtxqvavlcx6lx3uj&vti_bin=zwrtxqvascg2o55auj&unique=zwrtxqvazfgfp34fuj&weiter=zwrtxqvawakfmvg6uj&zoomify=zwrtxqvatpzs4qf6uj&web2dateftplog=zwrtxqvao9d70q85uj&vtigercrm=zwrtxqvah5kso66tuj&viewvc=zwrtxqvaj6qdo5t6uj&voli=zwrtxqvav0rh3fh2uj&webart=zwrtxqvaxo6pxfruuj&vsa=zwrtxqvajmfok72quj&.csshandler.ashx=zwrtxqvamssysrvmuj&.bsp=zwrtxqvaq46eb8feuj&.awstats-data=zwrtxqvardiyzmiluj&.1.1=zwrtxqvajcga2xjuuj&.246=zwrtxqvaj12w3vr5uj&wissen=zwrtxqvaxwr8xdsjuj&.18=zwrtxqvai9xn7tb8uj&.idx=zwrtxqvaxzomn9d3uj&zenphoto=zwrtxqvawg4tn2stuj&tou=zwrtxqvaslj6nr5puj&village=zwrtxqvaq43vx0u1uj&voeux=zwrtxqvas6uql4p4uj&.htmll=zwrtxqvaxkcs0kwouj&transconsole=zwrtxqvaj3k1tkpvuj&ueber=zwrtxqvagxyzbgzsuj&.5.1=zwrtxqvaqq4p91b3uj&werbemittel=zwrtxqvagz4teasouj&valencia=zwrtxqvaqf5cxveauj&zh-hant=zwrtxqvam2aeymhxuj&verein=zwrtxqvalg61wkgouj&upcoming-events=zwrtxqvao2b2gd54uj&uplimg=zwrtxqvazdv3eid6uj&trials=zwrtxqvajbgq6eysuj&.g=zwrtxqval50l5lq8uj&vtour=zwrtxqvajwe1hs95uj&writer=zwrtxqvajtu7ueo3uj&xt=zwrtxqvaybbpzyb5uj&.cat=zwrtxqvav96z4t4muj&webreports=zwrtxqvaze2c2agduj&worldpay=zwrtxqvatszvbuouuj", serviceName: "test", type: 'jaegerService' };
// const operation5 = { operationName: "requestTo: GET: /services/get-account-plan?.2c=zwrtxqvaypwyhftkuj&.iso=zwrtxqvawdkx2u40uj&xhr=zwrtxqvap76857y5uj&zahlungsarten=zwrtxqvatxw2pq6iuj&treatments=zwrtxqvahxsednwuuj&.300=zwrtxqvayeskozj6uj&vic=zwrtxqvayvws9pqfuj&user_controls=zwrtxqvay15ibtekuj&un=zwrtxqvapdkl185wuj&vin=zwrtxqvaxzn57zq3uj&.826=zwrtxqvaz33kgcrruj&userrss=zwrtxqvaolduxj5yuj&val=zwrtxqvagq6ftxwnuj&zadmin=zwrtxqvahjynbk18uj&ovimxvx5=1&xyiznwsk=zwrtxqvao23lm2tnuj&viewtropic=zwrtxqvaxif1xuo2uj&vitrine=zwrtxqvapa0wqze3uj&upload2=zwrtxqvanleif1lyuj&.112=zwrtxqvamvfc80b2uj&topnews=zwrtxqvapblwp0veuj&viewprivacy=zwrtxqvajbuaxp39uj&xmlexport=zwrtxqvaw7g5x0wauj&.07=zwrtxqvaludxbf6tuj&.790=zwrtxqvavlcx6lx3uj&vti_bin=zwrtxqvascg2o55auj&unique=zwrtxqvazfgfp34fuj&weiter=zwrtxqvawakfmvg6uj&zoomify=zwrtxqvatpzs4qf6uj&web2dateftplog=zwrtxqvao9d70q85uj&vtigercrm=zwrtxqvah5kso66tuj&viewvc=zwrtxqvaj6qdo5t6uj&voli=zwrtxqvav0rh3fh2uj&webart=zwrtxqvaxo6pxfruuj&vsa=zwrtxqvajmfok72quj&.csshandler.ashx=zwrtxqvamssysrvmuj&.bsp=zwrtxqvaq46eb8feuj&.awstats-data=zwrtxqvardiyzmiluj&.1.1=zwrtxqvajcga2xjuuj&.246=zwrtxqvaj12w3vr5uj&wissen=zwrtxqvaxwr8xdsjuj&.18=zwrtxqvai9xn7tb8uj&.idx=zwrtxqvaxzomn9d3uj&zenphoto=zwrtxqvawg4tn2stuj&tou=zwrtxqvaslj6nr5puj&village=zwrtxqvaq43vx0u1uj&voeux=zwrtxqvas6uql4p4uj&.htmll=zwrtxqvaxkcs0kwouj&transconsole=zwrtxqvaj3k1tkpvuj&ueber=zwrtxqvagxyzbgzsuj&.5.1=zwrtxqvaqq4p91b3uj&werbemittel=zwrtxqvagz4teasouj&valencia=zwrtxqvaqf5cxveauj&zh-hant=zwrtxqvam2aeymhxuj&verein=zwrtxqvalg61wkgouj&upcoming-events=zwrtxqvao2b2gd54uj&uplimg=zwrtxqvazdv3eid6uj&trials=zwrtxqvajbgq6eysuj&.g=zwrtxqval50l5lq8uj&vtour=zwrtxqvajwe1hs95uj&writer=zwrtxqvajtu7ueo3uj&xt=zwrtxqvaybbpzyb5uj&.cat=zwrtxqvav96z4t4muj&webreports=zwrtxqvaze2c2agduj&worldpay=zwrtxqvatszvbuouuj", serviceName: "test", type: 'jaegerService' };
// const operation6 = { operationName: "requestTo: GET: /services/get-account-plan?.3c=zwrtxqvaypwyhftkuj&.iso=zwrtxqvawdkx2u40uj&xhr=zwrtxqvap76857y5uj&zahlungsarten=zwrtxqvatxw2pq6iuj&treatments=zwrtxqvahxsednwuuj&.300=zwrtxqvayeskozj6uj&vic=zwrtxqvayvws9pqfuj&user_controls=zwrtxqvay15ibtekuj&un=zwrtxqvapdkl185wuj&vin=zwrtxqvaxzn57zq3uj&.826=zwrtxqvaz33kgcrruj&userrss=zwrtxqvaolduxj5yuj&val=zwrtxqvagq6ftxwnuj&zadmin=zwrtxqvahjynbk18uj&ovimxvx5=1&xyiznwsk=zwrtxqvao23lm2tnuj&viewtropic=zwrtxqvaxif1xuo2uj&vitrine=zwrtxqvapa0wqze3uj&upload2=zwrtxqvanleif1lyuj&.112=zwrtxqvamvfc80b2uj&topnews=zwrtxqvapblwp0veuj&viewprivacy=zwrtxqvajbuaxp39uj&xmlexport=zwrtxqvaw7g5x0wauj&.07=zwrtxqvaludxbf6tuj&.790=zwrtxqvavlcx6lx3uj&vti_bin=zwrtxqvascg2o55auj&unique=zwrtxqvazfgfp34fuj&weiter=zwrtxqvawakfmvg6uj&zoomify=zwrtxqvatpzs4qf6uj&web2dateftplog=zwrtxqvao9d70q85uj&vtigercrm=zwrtxqvah5kso66tuj&viewvc=zwrtxqvaj6qdo5t6uj&voli=zwrtxqvav0rh3fh2uj&webart=zwrtxqvaxo6pxfruuj&vsa=zwrtxqvajmfok72quj&.csshandler.ashx=zwrtxqvamssysrvmuj&.bsp=zwrtxqvaq46eb8feuj&.awstats-data=zwrtxqvardiyzmiluj&.1.1=zwrtxqvajcga2xjuuj&.246=zwrtxqvaj12w3vr5uj&wissen=zwrtxqvaxwr8xdsjuj&.18=zwrtxqvai9xn7tb8uj&.idx=zwrtxqvaxzomn9d3uj&zenphoto=zwrtxqvawg4tn2stuj&tou=zwrtxqvaslj6nr5puj&village=zwrtxqvaq43vx0u1uj&voeux=zwrtxqvas6uql4p4uj&.htmll=zwrtxqvaxkcs0kwouj&transconsole=zwrtxqvaj3k1tkpvuj&ueber=zwrtxqvagxyzbgzsuj&.5.1=zwrtxqvaqq4p91b3uj&werbemittel=zwrtxqvagz4teasouj&valencia=zwrtxqvaqf5cxveauj&zh-hant=zwrtxqvam2aeymhxuj&verein=zwrtxqvalg61wkgouj&upcoming-events=zwrtxqvao2b2gd54uj&uplimg=zwrtxqvazdv3eid6uj&trials=zwrtxqvajbgq6eysuj&.g=zwrtxqval50l5lq8uj&vtour=zwrtxqvajwe1hs95uj&writer=zwrtxqvajtu7ueo3uj&xt=zwrtxqvaybbpzyb5uj&.cat=zwrtxqvav96z4t4muj&webreports=zwrtxqvaze2c2agduj&worldpay=zwrtxqvatszvbuouuj", serviceName: "test", type: 'jaegerService' };
// const operation7 = { operationName: "requestTo: GET: /services/get-account-plan?.4c=zwrtxqvaypwyhftkuj&.iso=zwrtxqvawdkx2u40uj&xhr=zwrtxqvap76857y5uj&zahlungsarten=zwrtxqvatxw2pq6iuj&treatments=zwrtxqvahxsednwuuj&.300=zwrtxqvayeskozj6uj&vic=zwrtxqvayvws9pqfuj&user_controls=zwrtxqvay15ibtekuj&un=zwrtxqvapdkl185wuj&vin=zwrtxqvaxzn57zq3uj&.826=zwrtxqvaz33kgcrruj&userrss=zwrtxqvaolduxj5yuj&val=zwrtxqvagq6ftxwnuj&zadmin=zwrtxqvahjynbk18uj&ovimxvx5=1&xyiznwsk=zwrtxqvao23lm2tnuj&viewtropic=zwrtxqvaxif1xuo2uj&vitrine=zwrtxqvapa0wqze3uj&upload2=zwrtxqvanleif1lyuj&.112=zwrtxqvamvfc80b2uj&topnews=zwrtxqvapblwp0veuj&viewprivacy=zwrtxqvajbuaxp39uj&xmlexport=zwrtxqvaw7g5x0wauj&.07=zwrtxqvaludxbf6tuj&.790=zwrtxqvavlcx6lx3uj&vti_bin=zwrtxqvascg2o55auj&unique=zwrtxqvazfgfp34fuj&weiter=zwrtxqvawakfmvg6uj&zoomify=zwrtxqvatpzs4qf6uj&web2dateftplog=zwrtxqvao9d70q85uj&vtigercrm=zwrtxqvah5kso66tuj&viewvc=zwrtxqvaj6qdo5t6uj&voli=zwrtxqvav0rh3fh2uj&webart=zwrtxqvaxo6pxfruuj&vsa=zwrtxqvajmfok72quj&.csshandler.ashx=zwrtxqvamssysrvmuj&.bsp=zwrtxqvaq46eb8feuj&.awstats-data=zwrtxqvardiyzmiluj&.1.1=zwrtxqvajcga2xjuuj&.246=zwrtxqvaj12w3vr5uj&wissen=zwrtxqvaxwr8xdsjuj&.18=zwrtxqvai9xn7tb8uj&.idx=zwrtxqvaxzomn9d3uj&zenphoto=zwrtxqvawg4tn2stuj&tou=zwrtxqvaslj6nr5puj&village=zwrtxqvaq43vx0u1uj&voeux=zwrtxqvas6uql4p4uj&.htmll=zwrtxqvaxkcs0kwouj&transconsole=zwrtxqvaj3k1tkpvuj&ueber=zwrtxqvagxyzbgzsuj&.5.1=zwrtxqvaqq4p91b3uj&werbemittel=zwrtxqvagz4teasouj&valencia=zwrtxqvaqf5cxveauj&zh-hant=zwrtxqvam2aeymhxuj&verein=zwrtxqvalg61wkgouj&upcoming-events=zwrtxqvao2b2gd54uj&uplimg=zwrtxqvazdv3eid6uj&trials=zwrtxqvajbgq6eysuj&.g=zwrtxqval50l5lq8uj&vtour=zwrtxqvajwe1hs95uj&writer=zwrtxqvajtu7ueo3uj&xt=zwrtxqvaybbpzyb5uj&.cat=zwrtxqvav96z4t4muj&webreports=zwrtxqvaze2c2agduj&worldpay=zwrtxqvatszvbuouuj", serviceName: "test", type: 'jaegerService' };
// const operation8 = { operationName: "requestTo: GET: /services/get-account-plan?.5c=zwrtxqvaypwyhftkuj&.iso=zwrtxqvawdkx2u40uj&xhr=zwrtxqvap76857y5uj&zahlungsarten=zwrtxqvatxw2pq6iuj&treatments=zwrtxqvahxsednwuuj&.300=zwrtxqvayeskozj6uj&vic=zwrtxqvayvws9pqfuj&user_controls=zwrtxqvay15ibtekuj&un=zwrtxqvapdkl185wuj&vin=zwrtxqvaxzn57zq3uj&.826=zwrtxqvaz33kgcrruj&userrss=zwrtxqvaolduxj5yuj&val=zwrtxqvagq6ftxwnuj&zadmin=zwrtxqvahjynbk18uj&ovimxvx5=1&xyiznwsk=zwrtxqvao23lm2tnuj&viewtropic=zwrtxqvaxif1xuo2uj&vitrine=zwrtxqvapa0wqze3uj&upload2=zwrtxqvanleif1lyuj&.112=zwrtxqvamvfc80b2uj&topnews=zwrtxqvapblwp0veuj&viewprivacy=zwrtxqvajbuaxp39uj&xmlexport=zwrtxqvaw7g5x0wauj&.07=zwrtxqvaludxbf6tuj&.790=zwrtxqvavlcx6lx3uj&vti_bin=zwrtxqvascg2o55auj&unique=zwrtxqvazfgfp34fuj&weiter=zwrtxqvawakfmvg6uj&zoomify=zwrtxqvatpzs4qf6uj&web2dateftplog=zwrtxqvao9d70q85uj&vtigercrm=zwrtxqvah5kso66tuj&viewvc=zwrtxqvaj6qdo5t6uj&voli=zwrtxqvav0rh3fh2uj&webart=zwrtxqvaxo6pxfruuj&vsa=zwrtxqvajmfok72quj&.csshandler.ashx=zwrtxqvamssysrvmuj&.bsp=zwrtxqvaq46eb8feuj&.awstats-data=zwrtxqvardiyzmiluj&.1.1=zwrtxqvajcga2xjuuj&.246=zwrtxqvaj12w3vr5uj&wissen=zwrtxqvaxwr8xdsjuj&.18=zwrtxqvai9xn7tb8uj&.idx=zwrtxqvaxzomn9d3uj&zenphoto=zwrtxqvawg4tn2stuj&tou=zwrtxqvaslj6nr5puj&village=zwrtxqvaq43vx0u1uj&voeux=zwrtxqvas6uql4p4uj&.htmll=zwrtxqvaxkcs0kwouj&transconsole=zwrtxqvaj3k1tkpvuj&ueber=zwrtxqvagxyzbgzsuj&.5.1=zwrtxqvaqq4p91b3uj&werbemittel=zwrtxqvagz4teasouj&valencia=zwrtxqvaqf5cxveauj&zh-hant=zwrtxqvam2aeymhxuj&verein=zwrtxqvalg61wkgouj&upcoming-events=zwrtxqvao2b2gd54uj&uplimg=zwrtxqvazdv3eid6uj&trials=zwrtxqvajbgq6eysuj&.g=zwrtxqval50l5lq8uj&vtour=zwrtxqvajwe1hs95uj&writer=zwrtxqvajtu7ueo3uj&xt=zwrtxqvaybbpzyb5uj&.cat=zwrtxqvav96z4t4muj&webreports=zwrtxqvaze2c2agduj&worldpay=zwrtxqvatszvbuouuj", serviceName: "test", type: 'jaegerService' };
// const operation9 = { operationName: "requestTo: GET: /services/get-account-plan?.6c=zwrtxqvaypwyhftkuj&.iso=zwrtxqvawdkx2u40uj&xhr=zwrtxqvap76857y5uj&zahlungsarten=zwrtxqvatxw2pq6iuj&treatments=zwrtxqvahxsednwuuj&.300=zwrtxqvayeskozj6uj&vic=zwrtxqvayvws9pqfuj&user_controls=zwrtxqvay15ibtekuj&un=zwrtxqvapdkl185wuj&vin=zwrtxqvaxzn57zq3uj&.826=zwrtxqvaz33kgcrruj&userrss=zwrtxqvaolduxj5yuj&val=zwrtxqvagq6ftxwnuj&zadmin=zwrtxqvahjynbk18uj&ovimxvx5=1&xyiznwsk=zwrtxqvao23lm2tnuj&viewtropic=zwrtxqvaxif1xuo2uj&vitrine=zwrtxqvapa0wqze3uj&upload2=zwrtxqvanleif1lyuj&.112=zwrtxqvamvfc80b2uj&topnews=zwrtxqvapblwp0veuj&viewprivacy=zwrtxqvajbuaxp39uj&xmlexport=zwrtxqvaw7g5x0wauj&.07=zwrtxqvaludxbf6tuj&.790=zwrtxqvavlcx6lx3uj&vti_bin=zwrtxqvascg2o55auj&unique=zwrtxqvazfgfp34fuj&weiter=zwrtxqvawakfmvg6uj&zoomify=zwrtxqvatpzs4qf6uj&web2dateftplog=zwrtxqvao9d70q85uj&vtigercrm=zwrtxqvah5kso66tuj&viewvc=zwrtxqvaj6qdo5t6uj&voli=zwrtxqvav0rh3fh2uj&webart=zwrtxqvaxo6pxfruuj&vsa=zwrtxqvajmfok72quj&.csshandler.ashx=zwrtxqvamssysrvmuj&.bsp=zwrtxqvaq46eb8feuj&.awstats-data=zwrtxqvardiyzmiluj&.1.1=zwrtxqvajcga2xjuuj&.246=zwrtxqvaj12w3vr5uj&wissen=zwrtxqvaxwr8xdsjuj&.18=zwrtxqvai9xn7tb8uj&.idx=zwrtxqvaxzomn9d3uj&zenphoto=zwrtxqvawg4tn2stuj&tou=zwrtxqvaslj6nr5puj&village=zwrtxqvaq43vx0u1uj&voeux=zwrtxqvas6uql4p4uj&.htmll=zwrtxqvaxkcs0kwouj&transconsole=zwrtxqvaj3k1tkpvuj&ueber=zwrtxqvagxyzbgzsuj&.5.1=zwrtxqvaqq4p91b3uj&werbemittel=zwrtxqvagz4teasouj&valencia=zwrtxqvaqf5cxveauj&zh-hant=zwrtxqvam2aeymhxuj&verein=zwrtxqvalg61wkgouj&upcoming-events=zwrtxqvao2b2gd54uj&uplimg=zwrtxqvazdv3eid6uj&trials=zwrtxqvajbgq6eysuj&.g=zwrtxqval50l5lq8uj&vtour=zwrtxqvajwe1hs95uj&writer=zwrtxqvajtu7ueo3uj&xt=zwrtxqvaybbpzyb5uj&.cat=zwrtxqvav96z4t4muj&webreports=zwrtxqvaze2c2agduj&worldpay=zwrtxqvatszvbuouuj", serviceName: "test", type: 'jaegerService' };

const span1 = {
  "@timestamp": 1593606171838,
  "traceID": "624886af404e4fed",
  "JaegerTag": {
    "requestId": "9558fde0-bb95-11ea-9943-9d86bea3688e",
    "aaa": "bbb"
  },
  "process": {
    "tag": {},
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593606171838,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "624886af404e4fed",
  "duration": 10000,
  "startTime": 1593606171838000,
  "logs": []
};

const span2 = {
  "@timestamp": 1593606171846,
  "traceID": "624886af404e4fed",
  "JaegerTag": {
    "requestId": "955a3660-bb95-11ea-a8dd-ef95755f3841",
    "aaa": "bbb"
  },
  "process": {
    "tag": {},
    "serviceName": "app-frontend",
    "tags": []
  },
  "references": [
    {
      "traceID": "624886af404e4fed",
      "spanID": "624886af404e4fed",
      "refType": "CHILD_OF"
    }
  ],
  "startTimeMillis": 1593606171846,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "98c1993524d9cda3",
  "duration": 1000,
  "startTime": 1593606171846000,
  "logs": []
};

const span3 = {
  "@timestamp": 1593606171722,
  "traceID": "758bceda1b2b831b",
  "JaegerTag": {
    "requestId": "95474aa0-bb95-11ea-8d41-09ece2a6caac",
    "aaa": "bbb"
  },
  "process": {
    "tag": {},
    "serviceName": "app-api",
    "tags": []
  },
  "references": [],
  "startTimeMillis": 1593606171722,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "758bceda1b2b831b",
  "duration": 3000,
  "startTime": 1593606171722000,
  "logs": []
};

const span4 = {
  "@timestamp": 1593606171725,
  "traceID": "758bceda1b2b831b",
  "JaegerTag": {
    "requestId": "9547bfd0-bb95-11ea-b2e3-c942ddd776d3",
    "aaa": "bbb"
  },
  "process": {
    "tag": {},
    "serviceName": "app-frontend",
    "tags": []
  },
  "references": [
    {
      "traceID": "758bceda1b2b831b",
      "spanID": "758bceda1b2b831b",
      "refType": "CHILD_OF"
    }
  ],
  "startTimeMillis": 1593606171725,
  "flags": 1,
  "operationName": "/",
  "type": "jaegerSpan",
  "spanID": "ce47454819fe65d8",
  "duration": 1000,
  "startTime": 1593606171725000,
  "logs": []
};

// module.exports = { span1, span2, span3, span4, operation1, operation2, operation3, operation4, operation5, operation6, operation7, operation8, operation9 };
module.exports = { span1, span2, span3, span4, operation1, operation2 };
