{
  "name": "userinfo",
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
      "info": "2",
      "infoIndex": "1",
      "storage": "1",
      "varName": "mention",
      "name": "Store Command Params"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "0",
      "iftrue": "2",
      "iftrueVal": "34",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "15",
      "storage": "1",
      "varName2": "status",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "14",
      "storage": "1",
      "varName2": "game",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "17",
      "storage": "1",
      "varName2": "roles",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "member": "1",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "join",
      "name": "Store Member Things"
    },
    {
      "comment": "Author Embed",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "User Information",
      "author": "",
      "color": "#66BB6A",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "Here's your information.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User",
      "message": "${member}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Tag",
      "message": "${tempVars(\"tag\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User ID",
      "message": "`${tempVars(\"id\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "game",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Status",
      "message": "${tempVars(\"status\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Status",
      "message": "${tempVars(\"status\")} in ${tempVars(\"game\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Join Date",
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
      "storage": "1",
      "varName2": "roleslength",
      "name": "Get List Length"
    },
    {
      "list": "7",
      "varName": "roles",
      "start": "",
      "middle": ", ",
      "end": "",
      "storage": "1",
      "varName2": "roleslist",
      "name": "Convert List to Text"
    },
    {
      "storage": "1",
      "varName": "roleslength",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Roles",
      "message": "${tempVars(\"roleslist\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "User Roles",
      "message": "No Roles",
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
    },
    {
      "name": "End Action Sequence"
    },
    {
      "comment": "Mention Embed",
      "color": "#80ff80",
      "name": "Comment"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "avatar2",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "id2",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "15",
      "storage": "1",
      "varName2": "status2",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "14",
      "storage": "1",
      "varName2": "game2",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "17",
      "storage": "1",
      "varName2": "roles2",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "tag2",
      "name": "Store Member Things"
    },
    {
      "member": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "join2",
      "name": "Store Member Things"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "title": "User Information",
      "author": "",
      "color": "#66BB6A",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar2\")}",
      "storage": "1",
      "varName": "embed2",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "message": "Here's some information about the user you mentioned.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "User",
      "message": "${mentionedUser}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "User Tag",
      "message": "${tempVars(\"tag2\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "User ID",
      "message": "`${tempVars(\"id2\")}`",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "game2",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Status",
      "message": "${tempVars(\"status2\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Status",
      "message": "${tempVars(\"status2\")} in ${tempVars(\"game2\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "Join Date",
      "message": "${tempVars(\"join2\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "roles2",
      "removeType": "1",
      "position": "",
      "storage2": "0",
      "varName2": "",
      "name": "Remove Item from List"
    },
    {
      "list": "7",
      "varName": "roles2",
      "storage": "1",
      "varName2": "roles2length",
      "name": "Get List Length"
    },
    {
      "list": "7",
      "varName": "roles2",
      "start": "",
      "middle": ", ",
      "end": "",
      "storage": "1",
      "varName2": "roles2list",
      "name": "Convert List to Text"
    },
    {
      "storage": "1",
      "varName": "roles2length",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "2",
      "iffalse": "3",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "User Roles",
      "message": "${tempVars(\"roles2list\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "count": "1",
      "name": "Skip Actions"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "fieldName": "User Roles",
      "message": "No Roles",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "message": "${tempVars(\"display\")}",
      "footerIcon": "${tempVars(\"avatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "embed2",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "_aliases": [
    "uinfo"
  ]
}
