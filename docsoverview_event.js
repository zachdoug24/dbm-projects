
{
  "name": "[help]DocsOverview",
  "temp": "",
  "event-type": "0",
  "_id": "help_doc_overview",
  "actions": [
    {
      "title": "Help Documents Overview",
      "author": "",
      "color": "407CDD",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "helpdocs",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "message": "The help documents use a module based system, meaning you have a general overview with the default help command, and must use `help <module>` to view all commands in that set.",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "fieldName": "Module Names",
      "message": "`general`, `fun`, `moderation`, `other`",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "message": "${tempVars(\"authorname\")} asked in #${tempVars(\"channel\")} on ${tempVars(\"server\")}",
      "footerIcon": "${tempVars(\"authoravatar\")}",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "helpdocs",
      "channel": "5",
      "varName2": "author",
      "name": "Send Embed Message"
    }
  ]
}
