{
  "name": "addticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "eufim",
  "actions": [
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "1",
      "varName": "ticketlogs",
      "name": "Find Channel"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "channelname",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "channelname",
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
      "message": "You're not in a tickets channel.",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "info": "1",
      "find": "${tempVars(\"channelname\")}",
      "storage": "1",
      "varName": "channelrole",
      "name": "Find Role"
    },
    {
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "mention",
      "name": "Store Command Params"
    },
    {
      "member": "0",
      "varName2": "mention",
      "role": "3",
      "varName": "channelrole",
      "name": "Add Member Role"
    },
    {
      "title": "User Added to the Ticket",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "A new user has been added to the ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Added",
      "message": "${mentionedUser}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Added By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "User Added to a Ticket",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "addembed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "message": "A new user has been added to a ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "fieldName": "Ticket ID",
      "message": "${tempVars(\"channelname\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "fieldName": "Added User",
      "message": "${mentionedUser}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "fieldName": "Added By",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "addembed",
      "channel": "5",
      "varName2": "ticketlogs",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "add"
  ]
}
