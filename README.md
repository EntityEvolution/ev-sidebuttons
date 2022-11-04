# ev-sidebuttons
Simple creation of side buttons by the use of exports.

# License
This project does not contain a license, therefore you are not allowed to add one and claim it as yours. You are not allowed to sell this nor re-distribute it, if an issue arises, we will proceed to file a DMCA takedown request. You are not allowed to change/add a license unless given permission by Mauricio Rivera (Bombay). If you want to modify or make an agreement, you can contact Mauricio Rivera (Bombay). Pull requests are accepted as long as they do not contain breaking changes. You can read more about unlicensed repositories [here](https://opensource.stackexchange.com/questions/1720/what-can-i-assume-if-a-publicly-published-project-has-no-license) if questions remain.

## Usage
```lua
-- Has to be a string but can contain a number (e.g. "1" or "1.5")
exports['ev-sidebuttons']:AddButton('1', {
  key = 'F1',
  text = 'Test'
})

exports['ev-sidebuttons']:EditButton('1', {
  key = 'F2',
  text = 'Test 2'
}) -- Edits the button with the id "1" to have the key "F2" and the text "Test 2"

exports['ev-sidebuttons']:RemoveButton('1') -- Removes the button with the id "1"
```

## Preview
![Imgur](https://imgur.com/XLrvDzW.png)
