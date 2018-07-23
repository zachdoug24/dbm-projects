{
  "name": "ticket",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "zExCp",
  "actions": [
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "1",
      "varName": "ticketLogsChannel",
      "name": "Find Channel"
    },
    {
      "channel": "3",
      "varName": "ticketLogsChannel",
      "info": "3",
      "storage": "1",
      "varName2": "ticketLogsCategory",
      "name": "Store Channel Info Things"
    },
    {
      "channel": "3",
      "varName": "ticketLogsCategory",
      "info": "1",
      "storage": "1",
      "varName2": "ticketLogsCategoryID",
      "name": "Store Channel Info"
    },
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "text",
      "name": "Store Command Params"
    },
    {
      "info": "19",
      "storage": "1",
      "varName2": "prefix",
      "name": "Store Bot Client Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "authordisplay",
      "name": "Store Member Info"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "0",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "🚫 **No ticket reason.**\nSorry about that, but we can't make a ticket for you unless you specify a reason.\n\n`${tempVars(\"prefix\")}ticket <reason>`",
      "storage": "1",
      "varName2": "warning",
      "name": "Send Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "warning",
      "name": "Delete Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "input": "0",
      "wordLength": "6",
      "storage": "1",
      "varName": "ticketnumber",
      "name": "Randomize Letters"
    },
    {
      "channelName": "ticket-${tempVars(\"ticketnumber\")}",
      "topic": "",
      "position": "",
      "storage": "1",
      "varName": "newTicket",
      "name": "Create Text Channel"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "📃 **New Ticket**\nThanks for creating a new ticket! You can view the channel in ${tempVars(\"newTicket\")}.",
      "storage": "1",
      "varName2": "confirmation",
      "name": "Send Message"
    },
    {
      "info": "1",
      "find": "${tempVars(\"newTicket\")}",
      "storage": "1",
      "varName": "foundTicketChannel",
      "name": "Find Channel"
    },
    {
      "channel": "3",
      "varName": "newTicket",
      "info": "2",
      "storage": "1",
      "varName2": "ticketChannelName",
      "name": "Store Channel Info"
    },
    {
      "storage": "3",
      "varName": "newTicket",
      "toChange": "parent",
      "newState": "${tempVars(\"ticketLogsCategoryID\")}",
      "name": "Edit Channel"
    },
    {
      "storage": "3",
      "varName": "newTicket",
      "permission": "READ_MESSAGES",
      "state": "1",
      "name": "Set Channel Permissions"
    },
    {
      "roleName": "${tempVars(\"ticketChannelName\")}",
      "hoist": "false",
      "mentionable": "false",
      "color": "",
      "position": "",
      "storage": "1",
      "varName": "ticketChannelRole",
      "name": "Create Role"
    },
    {
      "info": "1",
      "find": "Support Team",
      "storage": "1",
      "varName": "supportTeamRole",
      "name": "Find Role"
    },
    {
      "channel": "3",
      "varName": "newTicket",
      "member": "2",
      "varName2": "ticketChannelRole",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "channel": "3",
      "varName": "newTicket",
      "member": "2",
      "varName2": "supportTeamRole",
      "permission": "READ_MESSAGES",
      "state": "0",
      "name": "Set Member Channel Perms"
    },
    {
      "member": "1",
      "varName2": "",
      "role": "3",
      "varName": "ticketChannelRole",
      "name": "Add Member Role"
    },
    {
      "title": "New Ticket",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticketEmbed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketEmbed",
      "message": "${member} has created a new ticket.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "ticketEmbed",
      "fieldName": "Subject",
      "message": "${tempVars(\"text\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticketEmbed",
      "channel": "5",
      "varName2": "newTicket",
      "name": "Send Embed Message"
    },
    {
      "title": "New Ticket Created",
      "author": "",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "message": "${member} has opened a new ticket ${tempVars(\"newTicket\")}.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "fieldName": "Ticket ID",
      "message": "ticket-${tempVars(\"ticketnumber\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "ticketEmbedAnnounce",
      "channel": "5",
      "varName2": "ticketLogsChannel",
      "name": "Send Embed Message"
    },
    {
      "time": "5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "1",
      "varName": "confirmation",
      "name": "Delete Message"
    }
  ],
  "comType": "0",
  "_aliases": [
    "new",
    "newticket"
  ]
}
