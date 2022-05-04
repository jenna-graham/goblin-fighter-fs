## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
## https://miro.com/app/board/uXjVO3_nm18=/
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
## input and button for adding new dragons, span for traking defeated dragons. span for tracking player hp and div for tracking dragon list.
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
## array of dragons/ name and health points. number of defeated dragons (derived from array of dragons, or just store as a variable), player hp. dragon objects will look like this. {name: 'Professor Goblin', hp:4}
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
## displayGoblins -- clear out the list, and render a goblin element for each goblin in your list of goblins
## renderGoblin(goblin) - create a goblin element for specific goblin object
## goblinClickHandler - takes care of the game logic when goblins are clicked

1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
## form event listener to add new dragon
## dynamic event listener on the dragon
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
