# Notes App. #

### A NodeJs Terminal Application to Add, Read, List and Remove notes. ###

#### Instalition ####

1. clone the repo.

2. run `npm install`

#### Commands ####

1. `add` adds a new note.

**properties**

a. `--title` or `-t`  for the note's title **Required**.

b. `--body` or `-b` for the note's body **Required**.

**ex.**

a. `node app.js add --title="note title" --body="note body"`

b. `node app.js add -t="note title" -b="note body"`

---

2. `read` reads a note.

**properties**

a. `--title` or `-t`  for the note's title **Required**.

**ex.**

a. `node app.js read --title="note title"`

b. `node app.js read -t="note title" `

---

3. `list` displays all saved notes.


**ex.**

`node app.js list`

---

4. `remove` removes a note.

**properties**

a. `--title` or `-t`  for the note's title **Required**.

**ex.**

a. `node app.js remove --title="note title"`

b. `node app.js remove -t="note title" `