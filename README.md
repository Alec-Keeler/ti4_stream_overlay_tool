I'll write a readme here



------
Change-log
Update 1 (Mar 09, 2021):
    * Changed all fonts to 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif.
    * Now using shorthand faction names instead of full faction names.
    * Now using a shorter key and added two letter characters to the end of the key string.
    * Since the !gamedata command now defaults to 30 second updates, removed the '30' part of the TTS command string and associated instruction.
    * New Feature: Tech Overview component fully functional.

Update 2 (Mar 13, 2021):
    * Implemented a minor feature that crosses out used strategy cards on the scoreboard.
    * Fixed styling to prevent names/factions not being fully contained and visible on the scoreboard.
    * New Feature: Available Points component fully functional.
        Notes: To track Imperial Rider points, you MUST use the original action card to place owner token(s) on, return copies to the AC discard pile.
        Notes: If a law causes a secret to become a public objecive, it will still be tracked as a secret objective on the component, but will appear multiple times, once for each player who has scored it.
    
Update 3 (Mar 14, 2021)
    * Updated Available Points component to remove a point indicator if Political Censure is repealed.  It will also indicate that the law had been in play but was repealed.
    * The scoreboard now automatically updates names when players switch seats.
    * Added a new instruction to the front page instruction list indicating users should use Window Capture, not Browser sources on OBS.
    * Fixed Tech Overview component to display Unchosen instead of undefined before players choose factions.
    * New Feature: Resource Overview component fully functional.
        Notes: This component uses several abbreviations.
        A = Available
        T = Total
        TGs = Trade Goods
        Cmdts = Commodities
        SOs = Secret Objectives (this only counts unscored SOs in hand)
        ACs = Action Cards
        B = Blue (tech skip)
        G = Green (tech skip)
        R = Red (tech skip)
        Y = Yellow (tech skip)
        C = Cultural
        I = Industrial
        H = Hazardous
        L = Legendary

Update 4 (Mar 16, 2021)
    * Added additional styling and information to front page.
    * Added additional spacing between elements on the game display page.
    * Added images/icons to the Resource Overview component for slightly easier readability. 
    * New Feature: Law Overview component fully functional.
        Notes: Laws assigned to a specific player will be colored in with the player's color.

Update 5 (Mar 17, 2021)
    * Updated the Resource Overview component with cleaner icons and improved readability, and added a row for Alliances held by each player.
    


To-Dos:
Add image icons to resource overview component in place of letters
Look into browser capture
Add buttons to display images on front page with sample displays, maybe as modals???? Check IMERSE project for how I made JS modal there.