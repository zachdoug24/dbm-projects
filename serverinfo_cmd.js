{
  "name": "serverinfo",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "PvtBo",
  "actions": [
    {
      "comment": "Store User and Server",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "server": "0",
      "varName": "",
      "name": "Change Server"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "display",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "4",
      "storage": "1",
      "varName2": "region",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "5",
      "storage": "1",
      "varName2": "icon",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "11",
      "storage": "1",
      "varName2": "owner",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "14",
      "storage": "1",
      "varName2": "roles",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "17",
      "storage": "1",
      "varName2": "members",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "join",
      "name": "Store Server Things"
    },
    {
      "server": "0",
      "varName": "",
      "info": "17",
      "storage": "1",
      "varName2": "humans",
      "name": "Store Server Things"
    },
    {
      "server": "0",
      "varName": "",
      "info": "8",
      "storage": "1",
      "varName2": "dnd",
      "name": "Store Server Things"
    },
    {
      "server": "0",
      "varName": "",
      "info": "9",
      "storage": "1",
      "varName2": "on",
      "name": "Store Server Things"
    },
    {
      "server": "0",
      "varName": "",
      "info": "10",
      "storage": "1",
      "varName2": "off",
      "name": "Store Server Things"
    },
    {
      "server": "0",
      "varName": "",
      "info": "20",
      "storage": "1",
      "varName2": "channels",
      "name": "Store Server Things"
    },
    {
      "server": "0",
      "varName": "",
      "info": "21",
      "storage": "1",
      "varName2": "vchannels",
      "name": "Store Server Things"
    },
    {
      "comment": "Delete the Command Message and Show the Embed",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "icon",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "title": "Server Information",
      "author": "",
      "color": "#5C6BC0",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "https://i.imgur.com/ufFFbQo.png",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "title": "Server Information",
      "author": "",
      "color": "#5C6BC0",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"icon\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "What's going on with the server? Here are some stats!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Server Name",
      "message": "${tempVars(\"name\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Server ID",
      "message": "`${tempVars(\"id\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Region",
      "message": "`${tempVars(\"region\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Server Owner",
      "message": "${tempVars(\"owner\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Member Count",
      "message": "${tempVars(\"members\")} Members (${tempVars(\"humans\")} Humans)",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Online/Offline/DnD",
      "message": "`${tempVars(\"on\")}`/`${tempVars(\"off\")}`/`${tempVars(\"dnd\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Text-Channel Count",
      "message": "${tempVars(\"channels\")} Text-Channels",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Voice Channel Count",
      "message": "${tempVars(\"vchannels\")} Voice Channels",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Server Creation Date",
      "message": "${tempVars(\"join\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "roles",
      "removeType": "1",
      "position": "",
      "storage2": "0",
      "varName2": "",
      "name": "Remove Item from List"
    },
    {
      "list": "7",
      "varName": "roles",
      "start": "",
      "middle": ", ",
      "end": "",
      "storage": "1",
      "varName2": "rolelist",
      "name": "Convert List to Text"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Role List",
      "message": "${tempVars(\"rolelist\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "${tempVars(\"display\")}",
      "footerIcon": "${tempVars(\"avatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "sinfo"
  ]
}
