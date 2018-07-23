{
  "name": "staffapp",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "cwAVW",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "applicationstatus",
      "comparison": "1",
      "value": "1",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Server Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Applications are currently closed! If you are the server owner, please use the command `staffappstatus open`. ",
      "storage": "0",
      "varName2": "originmsg",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "✉ Please check your DMs to continue the application.\n_Note: Once submitted, answers cannot be changed._",
      "storage": "1",
      "varName2": "originmsg",
      "name": "Send Message"
    },
    {
      "info": "1",
      "find": "staff-apps",
      "storage": "1",
      "varName": "appchannel",
      "name": "Find Channel"
    },
    {
      "member": "1",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "displayname",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "uid",
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
      "member": "1",
      "varName": "",
      "info": "7",
      "storage": "1",
      "varName2": "usertag",
      "name": "Store Member Things"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 1",
      "storage": "1",
      "varName2": "msg1",
      "name": "Send Message"
    },
    {
      "message": "1",
      "varName": "msg1",
      "info": "4",
      "storage": "1",
      "varName2": "dmchan",
      "name": "Store Message Info"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "storage": "1",
      "varName": "originmsg",
      "name": "Delete Message"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 2",
      "storage": "1",
      "varName2": "msg2",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply2",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 3",
      "storage": "1",
      "varName2": "msg3",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply3",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 4",
      "storage": "1",
      "varName2": "msg4",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply4",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 5",
      "storage": "1",
      "varName2": "msg5",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply5",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 6",
      "storage": "1",
      "varName2": "msg6",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply6",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 7",
      "storage": "1",
      "varName2": "msg7",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply7",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "0.5",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Question 8",
      "storage": "1",
      "varName2": "msg8",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "storage": "3",
      "varName": "dmchan",
      "filter": "content.length > 0",
      "max": "1",
      "time": "600000",
      "storage2": "1",
      "varName2": "reply8",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Await Response Call Action"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "3",
      "varName": "dmchan",
      "info": "4",
      "storage": "1",
      "varName2": "lastmsg8",
      "name": "Store Channel Info"
    },
    {
      "channel": "1",
      "varName": "",
      "message": "Thank you, your application has now been posted!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "title": "${tempVars(\"displayname\")} Submitted a New Staff Application",
      "author": "",
      "color": "#36393f",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar\")}",
      "storage": "1",
      "varName": "application",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "application",
      "message": "A new staff application has been created.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Applicant",
      "message": "${tempVars(\"usertag\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q1",
      "message": "${tempVars(\"reply1\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q2",
      "message": "${tempVars(\"reply2\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q3",
      "message": "${tempVars(\"reply3\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q4",
      "message": "${tempVars(\"reply4\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q5",
      "message": "${tempVars(\"reply5\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q6",
      "message": "${tempVars(\"reply6\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q7",
      "message": "${tempVars(\"reply7\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "fieldName": "Q8",
      "message": "${tempVars(\"reply8\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "application",
      "message": "UID: ${tempVars(\"uid\")}",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "application",
      "channel": "5",
      "varName2": "appchannel",
      "name": "Send Embed Message"
    },
    {
      "channel": "3",
      "varName": "appchannel",
      "info": "4",
      "storage": "1",
      "varName2": "lastmsg",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "lastmsg",
      "emoji": "4",
      "varName2": "👍",
      "varName3": "like",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "lastmsg",
      "emoji": "4",
      "varName2": "👎",
      "varName3": "dislike",
      "name": "Add Reaction"
    }
  ],
  "_aliases": []
}
