var lg
if ( window.location.pathname.search('/fr/') == 0) { lg = 'fr'} else { lg='en'}

var bigarr = [{
        "title": "3CX",
        "ico": "3cx.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Aruba Clearpath",
        "ico": "aruba.jpg",
        "en": {
            "subtitle": "Network solutions",
            "trig_label": "Network intrusion/anomaly detected, Critical network device disconnection",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    },{
        "title": "Aastra 400 series",
        "ico": "mitel.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Aastra 5000",
        "ico": "mitel.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Aastra ATAS",
        "ico": "mitel.png",
        "en": {
            "subtitle": "Paging",
            "trig_label": "",
            "act_label": "Send text notification to DECT / Wifi handset",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Aastra OML",
        "ico": "mitel.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Aastra OMM",
        "ico": "mitel.png",
        "en": {
            "subtitle": "Paging",
            "trig_label": "",
            "act_label": "Send text notification to DECT / Wifi handset",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Ackermann",
        "ico": "ackerman.png",
        "en": {
            "subtitle": "Nurse call, anti-wander",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit) | unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Agfa Orbis",
        "ico": "agfa.png",
        "en": {
            "subtitle": "Health Information System",
            "trig_label": "HL7 message sent to Surycat",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Agfa TVER",
        "ico": "agfa.png",
        "en": {
            "subtitle": "Health Information System",
            "trig_label": "HL7 message sent to Surycat",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Alcatel DECT 500",
        "ico": "dect500.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Alcatel DECT 8242",
        "ico": "dect8242.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    },  {
        "title": "Alcatel DECT 8262",
        "ico": "alu_8262.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Alcatel OXE",
        "ico": "alcatel-lucent.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Alcatel OXO",
        "ico": "alcatel-lucent.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Alcatel Paging interface",
        "ico": "alcatel-lucent.png",
        "en": {
            "subtitle": "Paging",
            "trig_label": "",
            "act_label": "Send text notification to DECT / Wifi handset",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Algo SIP Audio Alerter",
        "ico": "algo.png",
        "en": {
            "subtitle": "Public Address",
            "trig_label": "",
            "act_label": "Broadcast a voice message over public address",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Algo Strobe Light",
        "ico": "algostrobelights.png",
        "en": {
            "subtitle": "Beacons",
            "trig_label": "",
            "act_label": "Activate the beacon",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Ascom",
        "ico": "ascom.png",
        "en": {
            "subtitle": "Nurse call, anti-wander",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit) | unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "ARD",
        "ico": "ard.png",
        "en": {
            "subtitle": "Access Control",
            "trig_label": "Intrusion, default on access control",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    },{
        "title": "Ascom 9d24 & d62",
        "ico": "ascom.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Ascom i62",
        "ico": "i62-handset-91x225.jpg",
        "en": {
            "subtitle": "Lone worker (WiFi)",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Asterisk",
        "ico": "asterisk.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Avaya IP-Office",
        "ico": "avaya.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Beronet",
        "ico": "beronet.png",
        "en": {
            "subtitle": "QSIG / SIP gateway",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Blick",
        "ico": "blick.png",
        "en": {
            "subtitle": "Nurse call, anti-wander",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit) | unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Bosch",
        "ico": "bosch.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    },{
        "title": "Flic",
        "ico": "flic.png",
        "en": {
            "subtitle": "Flic.io connected button",
            "trig_label": "When the button is pressed (1x, 2x, hold)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Bosch",
        "ico": "bosch.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Bt.tn",
        "ico": "bt.tn.png",
        "en": {
            "subtitle": "IoT connected button",
            "trig_label": "button is pressed",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    },{
        "title": "Care One +",
        "ico": "lydiscareone.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Chainzone LED display",
        "ico": "chainzone.png",
        "en": {
            "subtitle": "Public Address",
            "trig_label": "",
            "act_label": "Broadcast a voice message over public address",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Chubb",
        "ico": "chubb.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Cisco Call Manager",
        "ico": "cisco.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Cisco CCM Notifier",
        "ico": "cisco.png",
        "en": {
            "subtitle": "Send SMS on WiFi handsets",
            "trig_label": "",
            "act_label": "Send text message to Wifi handsets",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Cisco UCM",
        "ico": "cisco.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "CRMS",
        "ico": "crms.png",
        "en": {
            "subtitle": "Nurse call, anti-wander",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit) | unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Altair",
        "ico": "def.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Cassiope",
        "ico": "def.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "ELA",
        "ico": "ela.png",
        "en": {
            "subtitle": "RFID I/O, temperature, access control",
            "trig_label": "RFID contact button on/off | RFID temperature out of bounds | RFID device default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Elastix",
        "ico": "elastix.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Eliocad",
        "ico": "legrand.png",
        "en": {
            "subtitle": "Nurse Call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Kieback & Peter",
        "ico": "kiebackpeter.jpg",
        "en": {
            "subtitle": "Automation",
            "trig_label": "Default on energy, air conditioning, building management",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Email",
        "ico": "email.png",
        "en": {
            "subtitle": "Email server (SMTP)",
            "trig_label": "",
            "act_label": "Send email to destination",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Email reception",
        "ico": "email.png",
        "en": {
            "subtitle": "Email server (POP, IMAP)",
            "trig_label": "email is received",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Esser",
        "ico": "esser.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Finsecur",
        "ico": "finsecur.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Funkwerk",
        "ico": "funkwerk.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Garideau",
        "ico": "nurse.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Generic Modbus/TCP",
        "ico": "modbus.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Generic serial streamline",
        "ico": "serial.png",
        "en": {
            "subtitle": "Nurse call, Fire system, BMS...",
            "trig_label": "Message is received and matches filter condition",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Gets",
        "ico": "gets.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "HL7",
        "ico": "hl7.png",
        "en": {
            "subtitle": "Health Information System",
            "trig_label": "HL7 message sent to Surycat",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "HONEYWELL ",
        "ico": "honeywell.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "i3s Solutions",
        "ico": "i3s-solutions.png",
        "en": {
            "subtitle": "anti-wander",
            "trig_label": "unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Incoming Call",
        "ico": "incoming-call.png",
        "en": {
            "subtitle": "Voice",
            "trig_label": "call to Surycat",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "emergency conference",
        "ico": "incall-conference.png",
        "en": {
            "subtitle": "Voice",
            "trig_label": "call to Surycat + emergency conference",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "vocal paging",
        "ico": "voice-paging.png",
        "en": {
            "subtitle": "Voice",
            "trig_label": "call to Surycat + voice message recorded",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "IFTTT Do button",
        "ico": "ifttt_do.png",
        "en": {
            "subtitle": "One click smartphone app",
            "trig_label": "Generate an event in one click from a smartphone application using IFTTT",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Intervox / Legrand",
        "ico": "intervox.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "JBT Corp",
        "ico": "jbt.png",
        "en": {
            "subtitle": "Automatic Guided Vehicle",
            "trig_label": "vehicle starts mission | vehicle default | vehicle arrived in station | vehicle leaves station ",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Johnson Control",
        "ico": "johnsoncontrol.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Legrand",
        "ico": "legrand.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Maesto SMS gateway",
        "ico": "maestro.png",
        "en": {
            "subtitle": "SMS modem",
            "trig_label": "SMS is received",
            "act_label": "Send SMS to mobile phone",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Microsoft Lync",
        "ico": "lync.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Mitel 3300",
        "ico": "mitel.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Moxa I/O E1210",
        "ico": "moxa.png",
        "en": {
            "subtitle": "Digital I/O",
            "trig_label": "a contact is closed/opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Moxa I/O E1214",
        "ico": "moxa.png",
        "en": {
            "subtitle": "Digital I/O",
            "trig_label": "a contact is closed/opened",
            "act_label": "Open/close a relay",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Moxa OnCell SMS Gateway",
        "ico": "moxa.png",
        "en": {
            "subtitle": "SMS modem",
            "trig_label": "SMS is received",
            "act_label": "Send SMS to mobile phone",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Moxa Modbus MGate",
        "ico": "moxa.png",
        "en": {
            "subtitle": "Modbus Serial to Modbus IP Gateway",
            "trig_label": "A modbus bit/word has changed",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "MU13",
        "ico": "mu13.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "NEC DMLS",
        "ico": "nec.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "NEC DMS",
        "ico": "nec.png",
        "en": {
            "subtitle": "Paging",
            "trig_label": "",
            "act_label": "Send text notification to DECT / Wifi handset",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "NEC SV8100",
        "ico": "nec.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "NEC SV8300",
        "ico": "nec.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Nugelec",
        "ico": "nugelec.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Nugelec",
        "ico": "nugelec.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Objenious",
        "ico": "objenious.png",
        "en": {
            "subtitle": "IoT devices",
            "trig_label": "An event is raised (button, movement, temperature, ...",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "OpenIP",
        "ico": "logo-openip.jpg",
        "en": {
            "subtitle": "Centrex SIP Trunk",
            "trig_label": "",
            "act_label": "Make call to fix and mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Openser Kamalio",
        "ico": "openser.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Opensips",
        "ico": "opensips.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "OVH",
        "ico": "ovh.png",
        "en": {
            "subtitle": "SMS API",
            "trig_label": "SMS is received",
            "act_label": "Send SMS to mobile phone",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Panasonic KX-NSxxx",
        "ico": "panasonic.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Patton",
        "ico": "patton.png",
        "en": {
            "subtitle": "QSIG / SIP gateway",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Pushbullet",
        "ico": "pushbullet.png",
        "en": {
            "subtitle": "Smartphone Notification app",
            "trig_label": "notification sent to Surycat",
            "act_label": "Send notification to smartphone app",
            "info": ""
        },
        "disabled": false
    },{
        "title": "Philips Hue",
        "ico": "philipshue.png",
        "en": {
            "subtitle": "Connected Lights",
            "trig_label": "",
            "act_label": "Switch on/off a light, set a color",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Sens'it",
        "ico": "sensit.png",
        "en": {
            "subtitle": "IoT devices",
            "trig_label": "An event is raised (button, movement, temperature, I/O, ...",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Schneider",
        "ico": "schneider.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Schneider (Merlin Gerin)",
        "ico": "MerlinGerin.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Shoretel",
        "ico": "shoretel.png",
        "en": {
            "subtitle": "Shoretel PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Sicli",
        "ico": "sicli.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Siemens",
        "ico": "siemens.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Siemens Cerberus",
        "ico": "siemens.png",
        "en": {
            "subtitle": "Fire system",
            "trig_label": "On fire event | on fire system default",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Siemens HiPath 3000",
        "ico": "siemens.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Spectralink KWS",
        "ico": "Spectralink.png",
        "en": {
            "subtitle": "PBX Mobility",
            "trig_label": "",
            "act_label": "Make call to DECT / WiFi handset & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Spectralink 6x40/7x40",
        "ico": "Spectralink.png",
        "en": {
            "subtitle": "Lone worker & Paging",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "Send text notification",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Spectralink 844x",
        "ico": "spectralink_8441.png",
        "en": {
            "subtitle": "Lone worker (WiFi) & Paging",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "Send text notification Wifi handset",
            "info": ""
        },
        "disabled": true
    },{
        "title": "Stentofon",
        "ico": "stentofon.png",
        "en": {
            "subtitle": "Nurse Call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Zenitel",
        "ico": "stentofon.png",
        "en": {
            "subtitle": "Stentofon Interphones",
            "trig_label": "",
            "act_label": "Broadcast a voice message to a set of interphones",
            "info": ""
        },
        "disabled": false
    },{
        "title": "Swissphone pagers",
        "ico": "swissphone.png",
        "en": {
            "subtitle": "Pager",
            "trig_label": "",
            "act_label": "Send text to pager",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Swyx",
        "ico": "swyx.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Televic",
        "ico": "televic.png",
        "en": {
            "subtitle": "Nurse call, anti-wander",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit) | unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "TheCallR",
        "ico": "thecallr.png",
        "en": {
            "subtitle": "SMS API",
            "trig_label": "SMS is received",
            "act_label": "Send SMS to mobile phone",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Twilio",
        "ico": "twilio.png",
        "en": {
            "subtitle": "Elastic SIP Trunk",
            "trig_label": "Call is received",
            "act_label": "Make call to fix & mobile phone",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Modbus automats",
        "ico": "modbus.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Tunstall",
        "ico": "tunstall.png",
        "en": {
            "subtitle": "Nurse call ",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "TWIG Protector",
        "ico": "twig.png",
        "en": {
            "subtitle": "Lone worker",
            "trig_label": "Lone worker event detected (who, what, where)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "VAC Fall Detection System",
        "ico": "vac-c2s.png",
        "en": {
            "subtitle": "Anti-fall detection",
            "trig_label": "Person fall detected (with location)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Hospi 2500",
        "ico": "tyco.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Unify",
        "ico": "Unify.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Vivago",
        "ico": "vivago.png",
        "en": {
            "subtitle": "Nurse call, anti-wander",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit) | unauthorized exit detection | exit door opened",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "WAGO",
        "ico": "wago.png",
        "en": {
            "subtitle": "Building Management System",
            "trig_label": "default detected from the Building Management System",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Wago 750-xxx",
        "ico": "wago.png",
        "en": {
            "subtitle": "Digital I/O",
            "trig_label": "",
            "act_label": "Open/close a relay",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "web display",
        "ico": "webnotif.png",
        "en": {
            "subtitle": "Web",
            "trig_label": "users starts a procedure from the web interface",
            "act_label": "Display notification on web dashboard (text & image)",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Xivo",
        "ico": "xivo.png",
        "en": {
            "subtitle": "Enterprise PBX",
            "trig_label": "",
            "act_label": "Make call to fix, DECT, WiFi, mobile phone & play message",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Zettler",
        "ico": "Zettler.png",
        "en": {
            "subtitle": "Nurse call",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": false
    }, {
        "title": "Bacnet",
        "ico": "bacnet.png",
        "en": {
            "subtitle": "Industrial supervision",
            "trig_label": "Industrial equipment default, captor value out of bounds",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Capsule Tech",
        "ico": "capsule.png",
        "en": {
            "subtitle": "Biomed monitoring",
            "trig_label": "Biomedical device raises an alarm / Biomed value out of bounds",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Contact ID",
        "ico": "dtmf.png",
        "en": {
            "subtitle": "Contact ID",
            "trig_label": "Call received with contact ID protocol",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Dash",
        "ico": "dash.png",
        "en": {
            "subtitle": "connected car",
            "trig_label": "car trip completed | car engine default | car starts| car stops",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Direct SNMP supervision",
        "ico": "snmp.png",
        "en": {
            "subtitle": "Network supervision",
            "trig_label": "Network supervision default / back to normal",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Dukane (Ascom)",
        "ico": "ascom.png",
        "en": {
            "subtitle": "Nurse call ",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "HPRIM",
        "ico": "hprim.png",
        "en": {
            "subtitle": "HL7 equivalent",
            "trig_label": "HPRIM equivalent message is received",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "iCall (Indigo Care)",
        "ico": "indigocare.png",
        "en": {
            "subtitle": "Nurse call ",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "KNX",
        "ico": "knx.png",
        "en": {
            "subtitle": "Automation",
            "trig_label": "Intrusion detected | door opened | lights switched on/off",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "LDAP",
        "ico": "ldap.png",
        "en": {
            "subtitle": "Directory",
            "trig_label": "",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Nagios",
        "ico": "Nagios.png",
        "en": {
            "subtitle": "Network supervision",
            "trig_label": "Network supervision default / back to normal",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Nexmo",
        "ico": "nexmo.png",
        "en": {
            "subtitle": "Voice  TTS & SMS API",
            "trig_label": "SMS is received",
            "act_label": "Send SMS to mobile phone / Play voice message as Text to Speech to any phone",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "OAP",
        "ico": "blank.png",
        "en": {
            "subtitle": "notif protocol",
            "trig_label": "",
            "act_label": "Send a text notification to a handset",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "OHL",
        "ico": "blank.png",
        "en": {
            "subtitle": "Hospitality / Healthcare link",
            "trig_label": "Guest check-in | guest room service | guest check out",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Rauland Borg",
        "ico": "raulandborg.png",
        "en": {
            "subtitle": "Nurse call ",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Sigfox",
        "ico": "sigfox.png",
        "en": {
            "subtitle": "IoT devices",
            "trig_label": "Data sent from IoT device",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Slack",
        "ico": "slack.png",
        "en": {
            "subtitle": "Communication",
            "trig_label": "Message is sent to Surycat",
            "act_label": "Send a private message to a slack user",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "OPC",
        "ico": "opc.png",
        "en": {
            "subtitle": "Production supervision",
            "trig_label": "default detected from the production supervision system",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Twitter",
        "ico": "twitter.png",
        "en": {
            "subtitle": "Communication",
            "trig_label": "Message is sent to Surycat",
            "act_label": "Tweet a message",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "Withings",
        "ico": "withings.png",
        "en": {
            "subtitle": "Quantified Self",
            "trig_label": "Quantified self device default detected | Quantified self measure out of bounds",
            "act_label": "",
            "info": "IoT"
        },
        "disabled": true
    }, {
        "title": "Zigbee",
        "ico": "Zigbee.png",
        "en": {
            "subtitle": "Connected objects",
            "trig_label": "connected object sends a message (measurement, data, default?)",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }, {
        "title": "SimplexGrinnell",
        "ico": "simplexgrinnell.png",
        "en": {
            "subtitle": "Nurse call ",
            "trig_label": "On Nurse call event (bed call, bathroom call, emergency, presence, nurse exit)",
            "act_label": "",
            "info": ""
        },
        "disabled": true
    }]

