{
  "name": "staffappstatus",
  "permissions": "ADMINISTRATOR",
  "restriction": "0",
  "_id": "McVjo",
  "actions": [
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "appstatus",
      "name": "Store Command Params"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "status",
      "defaultVal": "0",
      "storage": "2",
      "varName2": "applicationstatus",
      "name": "Store Server Data"
    },
    {
      "storage": "1",
      "varName": "appstatus",
      "comparison": "1",
      "value": "closed",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "applicationstatus",
      "changeType": "0",
      "value": "0",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Applications are now closed!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "storage": "1",
      "varName": "appstatus",
      "comparison": "1",
      "value": "open",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Variable"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "applicationstatus",
      "changeType": "0",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Applications are now open!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "Current Application Status",
      "author": "",
      "color": "#36393f",
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
      "message": "To close or open the applications, please use `staffappstatus open` or `staffappstatus closed`.",
      "name": "Set Embed Description"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "applicationstatus",
      "comparison": "1",
      "value": "0",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "3",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Application Status",
      "message": "🔐 Closed",
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
      "name": "End Action Sequence"
    },
    {
      "server": "0",
      "varName": "applicationstatus",
      "dataName": "applicationstatus",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "3",
      "name": "Check Server Data"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Application Status",
      "message": "🔓 Open",
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
      "name": "End Action Sequence"
    }
  ]
}
