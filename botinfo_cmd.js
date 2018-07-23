{
  "name": "botinfo",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "PvtBo",
  "actions": [
    {
      "comment": "Store User and Bot Information",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "info": "23",
      "storage": "1",
      "varName2": "day",
      "name": "Store Bot Client Info"
    },
    {
      "info": "24",
      "storage": "1",
      "varName2": "hour",
      "name": "Store Bot Client Info"
    },
    {
      "info": "25",
      "storage": "1",
      "varName2": "min",
      "name": "Store Bot Client Info"
    },
    {
      "info": "27",
      "storage": "1",
      "varName2": "ram",
      "name": "Store Bot Client Info"
    },
    {
      "info": "29",
      "storage": "1",
      "varName2": "cpu",
      "name": "Store Bot Client Info"
    },
    {
      "info": "3",
      "storage": "1",
      "varName2": "guilds",
      "name": "Store Bot Client Info"
    },
    {
      "info": "4",
      "storage": "1",
      "varName2": "users",
      "name": "Store Bot Client Info"
    },
    {
      "info": "19",
      "storage": "1",
      "varName2": "prefix",
      "name": "Store Bot Client Info"
    },
    {
      "info": "5",
      "storage": "1",
      "varName2": "ping",
      "name": "Store Bot Client Info"
    },
    {
      "server": "0",
      "varName": "",
      "storage": "1",
      "varName2": "dragon",
      "name": "Get Bot as Member"
    },
    {
      "member": "2",
      "varName": "dragon",
      "info": "3",
      "storage": "1",
      "varName2": "ddisplay",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "dragon",
      "info": "16",
      "storage": "1",
      "varName2": "davatar",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "dragon",
      "info": "0",
      "storage": "1",
      "varName2": "djoin",
      "name": "Store Member Things"
    },
    {
      "member": "2",
      "varName": "dragon",
      "info": "0",
      "storage": "1",
      "varName2": "djoin",
      "name": "Store Member Things"
    },
    {
      "member": "2",
      "varName": "dragon",
      "info": "7",
      "storage": "1",
      "varName2": "dtag",
      "name": "Store Member Things"
    },
    {
      "info": "0",
      "find": "YOURIDHERE",
      "storage": "1",
      "varName": "botowner",
      "name": "Find Member"
    },
    {
      "member": "2",
      "varName": "botowner",
      "info": "0",
      "storage": "1",
      "varName2": "bowner",
      "name": "Store Member Info"
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
      "title": "Bot Information",
      "author": "",
      "color": "#F48FB1",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"davatar\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "Want to know more about the bot? Well here's the information!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Name",
      "message": "${tempVars(\"ddisplay\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Tag",
      "message": "${tempVars(\"dtag\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Bot Prefix",
      "message": "`${tempVars(\"prefix\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Bot Owner",
      "message": "${tempVars(\"bowner\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "RAM Usage",
      "message": "${tempVars(\"ram\")} Mb",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "CPU Usage",
      "message": "${tempVars(\"cpu\")} Mb",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Rounded Ping",
      "message": "${tempVars(\"ping\")}ms",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Bot Uptime",
      "message": "${tempVars(\"day\")}D, ${tempVars(\"hour\")}H, ${tempVars(\"min\")}M",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Guild Count",
      "message": "${tempVars(\"guilds\")} Guilds",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Count",
      "message": "${tempVars(\"users\")} Users",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Join Date",
      "message": "${tempVars(\"djoin\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Invite Me",
      "message": "[YOUR TEXT HERE](BOT INVITE LINK HERE)",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Support Server",
      "message": "[YOUR TEXT HERE](SERVER INVITE LINK HERE)",
      "inline": "0",
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
    "binfo"
  ]
}
