{
  "name": "closeticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "neOUc",
  "actions": [
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channelName",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelName",
      "comparison": "5",
      "value": "'ticket-'",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You're not in a ticket channel.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "1",
      "varName": "ticketlogs",
      "name": "Find Channel"
    },
    {
      "info": "1",
      "find": "${tempVars(\"channelName\")}",
      "storage": "1",
      "varName": "channelRole",
      "name": "Find Role"
    },
    {
      "info": "1",
      "find": "Support Team",
      "storage": "1",
      "varName": "supportTeam",
      "name": "Find Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "3",
      "varName2": "channelRole",
      "iftrue": "3",
      "iftrueVal": "3",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "member": "1",
      "varName": "",
      "role": "3",
      "varName2": "supportTeam",
      "iftrue": "3",
      "iftrueVal": "17",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check If Member has Role"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "You don't have an appropriate role for this.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "Ticket Close Warning",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticketClose",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketClose",
      "message": "The ticket will be closing in 15 minutes if there is no further activity.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "ticketClose",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "filter": "content.length > 0",
      "max": "1",
      "time": "900000",
      "storage2": "0",
      "varName2": "",
      "iftrue": "0",
      "iftrueVal": "16",
      "iffalse": "3",
      "iffalseVal": "5",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "title": "Activity Alert",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticketNoClose",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketNoClose",
      "message": "The deal will no longer be closed due to activity.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "ticketNoClose",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "3",
      "varName": "channelRole",
      "name": "Delete Role"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Channel"
    },
    {
      "title": "Closed Ticket",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "closedTicket",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "closedTicket",
      "message": "A ticket has been closed by ${member}.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "closedTicket",
      "fieldName": "Ticket ID",
      "message": "${tempVars(\"channelName\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "closedTicket",
      "channel": "5",
      "varName2": "ticketlogs",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Channel"
    },
    {
      "storage": "3",
      "varName": "channelRole",
      "name": "Delete Role"
    },
    {
      "title": "Forceclosed Ticket",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "forceClosedTicket",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "forceClosedTicket",
      "message": "A ticket has been forcefully closed by the Support Member, ${member}.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "forceClosedTicket",
      "fieldName": "Ticket ID",
      "message": "${tempVars(\"channelName\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "forceClosedTicket",
      "channel": "5",
      "varName2": "ticketlogs",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "_aliases": [
    "close"
  ]
}
