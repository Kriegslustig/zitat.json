# zitat.json
A simple WebApp done as an exercise for school.

# GERMAN - Lerndokumentation
Ich habe mich entschieden die Applikation in einem Node.js Stack umzusetzen. Mit dem Web-Applikation-Framework Meteor. Ich habe mich für die Technologie entschieden, weil ich in ihr in ihr extrem schnell Prototypen fertigstellen kann.

Es bietet mir eine in sich geschlossene Umgebung, die ich mit einem Kommando aufsetzen kann und die ich genau so einfach ausrollen kann. Meteor baut auf Node.js, MongoDB, Connect (vereinfachte Variante von Express) und WebSockets auf. Sie verwenden ein _Protokol_ namens DDP, es sendet einfach JSON über WebSockets.

Einen Prototyp hatte nach etwa 30 Minuten. Schwieriger war es für mich dann noch alle Anforderungen an das Schema zu erfüllen. Weder Meteor noch Mongo hat das eingebaut. Jedoch gibt es ein gutes Package dafür; "aldeed:simple-schema. Die Daten werden über JSON auf den Client Synchronosiert
