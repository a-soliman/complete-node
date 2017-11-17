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

a. `node app.js add --title="notes title" --body="notes body"`

b. `node app.js add -t="notes title" -b="notes body"`

---

2. `read` reads a note.

**properties**

a. `--title` or `-t`  for the note's title **Required**.

**ex.**

a. `node app.js read --title="notes title"`

b. `node app.js read -t="notes title" `

---

3. `list` displays all saved notes.


**ex.**

`node app.js list`

---

4. `remove` removes a note.

**properties**

a. `--title` or `-t`  for the note's title **Required**.

**ex.**

a. `node app.js remove --title="notes title"`

b. `node app.js remove -t="notes title" `