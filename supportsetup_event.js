{
  "name": "Support Setup",
  "temp": "",
  "event-type": "0",
  "_id": "jaxBY",
  "actions": [
    {
      "info": "1",
      "find": "Support Team",
      "storage": "2",
      "varName": "supportTeamRole",
      "name": "Find Role"
    },
    {
      "info": "1",
      "find": "ticket-logs",
      "storage": "2",
      "varName": "ticketLogsChannel",
      "name": "Find Channel"
    },
    {
      "storage": "2",
      "varName": "supportTeamRole",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "1",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "roleName": "Support Team",
      "hoist": "true",
      "mentionable": "true",
      "color": "",
      "position": "",
      "storage": "2",
      "varName": "supportTeamRole",
      "name": "Create Role"
    },
    {
      "storage": "2",
      "varName": "ticketLogs",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "channelName": "Tickets",
      "position": "",
      "storage": "2",
      "varName": "ticketsCategory",
      "name": "Create Category Channel"
    },
    {
      "channel": "4",
      "varName": "ticketsCategory",
      "info": "1",
      "storage": "2",
      "varName2": "ticketsCategoryID",
      "name": "Store Channel Info"
    },
    {
      "channelName": "ticket-logs",
      "topic": "",
      "position": "",
      "storage": "2",
      "varName": "ticketLogsChannel",
      "name": "Create Text Channel"
    },
    {
      "storage": "4",
      "varName": "ticketLogsChannel",
      "toChange": "parent",
      "newState": "${serverVars(\"ticketsCategoryID\")}",
      "name": "Edit Channel"
    },
    {
      "storage": "4",
      "varName": "ticketLogsChannel",
      "permission": "SEND_MESSAGES",
      "state": "1",
      "name": "Set Channel Permissions"
    }
  ]
}
