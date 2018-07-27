## **Command and Events**    
_The text prior to the data name is a clickable link._

- **[Help Module - Command](https://github.com/zachdoug24/dbm-projects/blob/help_cmd_module/help_cmd.js)** - `help_cmd.js`
- **[Help Module Overview - Event](https://github.com/zachdoug24/dbm-projects/blob/help_cmd_module/docsoverview_event.js)** - `docsoverview_event.js`   
- **[Help Module Page General - Event](https://github.com/zachdoug24/dbm-projects/blob/help_cmd_module/docspagegeneral_event.js)** - `docspagegeneral_event.js`
    
## **Syntax**
`help` - Get messaged the overview of the help document.  
`help <module>` - Displays information regarding that specfic module.    


## **Notes**    

1. This requires [DBM 1.8.8 Mods](https://github.com/Discord-Bot-Maker-Mods/DBM-Mods/tree/master) and [the Beta Client of DBM](https://discordapp.com/channels/374961173524643843/375701228111527937/461267260234006531).
2. This does NOT return a message/embed upon use of a non-existant module name, to show the Overview, at the very end of the command add a `Call Command/Event` action that shows calls `[help]DocsOverview`.
3. Be sure to edit `docsoverview_event.js` to show all of your Help Modules in `Line #3`. It will show `general` by default.
4. To create mode Help Modules, you need to copy and revise `docspagegeneral_event.js`.
    1. Change the new Event Name to `[help]DocsPageYOURMODULENAMEHERE` for ease of access.
    2. Right Click and `Edit Raw Data` of the new Module and change `"_id": "help_doc_pg_general",` to `"_id": "help_dog_pg_modulenamehere",`.
    3. Edit `Line #1` and change the title from `Help Documents > General Module` to `Help Documents > YOURMODULENAME Module`.
    4. Edit `Line #4` to show your command list.
5. `help_cmd.js` is the main help command, to add more modules to the command copy `Line #15` through `Line #20`.
    1. Edit the Comment to show the new module name for ease of access.
    2. Edit the Check Variable of the new module to `Equals Exactly`, if not already so, the the `Value to Compare to` should be `'modulename'`.
    3. Edit Call Command/Event to the Event of your new Module.

## **Disclaimer** 
If you have issues with the code, **_do not ping me right off the bat or DM me._** It's nothing but an annoyance. Just ask in [the Support Channel for the Raw Data Server](https://discordapp.com/channels/379372685182107669/388055603320324116/) and someone will assist you. You are also capable of leaving a comment here and I'll get back to you. You can also create an Issue with the Project `Help Module System`.
