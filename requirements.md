<!--# Internet Project Guide — Functional Requirements

## What Is This App?

a multi-page puzzle website called bagrut puzzle app. its audience is mooly , the ministry of education and any student that is  interested and asks me to share it with them. the site’s main purpose is having a solution for people looking to tease their brain with free interesting puzzles, such as “finds the differences” and mazes.



---

## Technologies Used

| Technology | Role |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Visual styling and layout |
| JavaScript (vanilla) | Client-side interactivity and data fetching |
| C# with .NET Minimal API | Web server and API endpoints |

**No frameworks are used — on either the client or the server.** There is no React, Vue, Angular, Bootstrap, jQuery, or any other library. The C# backend is equally bare: no Entity Framework, no MVC, no Razor Pages — just a single file with route handlers.


- Writing HTML means writing actual HTML tags, not JSX or templates.
- Writing CSS means writing actual CSS rules, not utility classes or CSS-in-JS.
- Writing JavaScript means calling `fetch()`, manipulating the DOM, and handling events directly — not delegating to a framework.
- Writing a server means defining routes and returning responses explicitly — not relying on conventions hidden inside a framework.

When there is no framework to rely on, every mechanism is visible and traceable. Students can read from the browser request all the way through to the C# response in a straight line, with nothing hidden.

---

## Graphical Design Considerations

The visual design is fairly simple but matches the overall vibe of my website, and is meant to be visually appealing and gratifting


---

## Pages and What They Do

### Home (`index.html`)

The landing page. It orients the visitor and tells them how to use the site.

-has an enter name mechanic that implements a “post” element from the server.
-displays a panel that explains about the website’s purpose and gives the user a general idea about the website’s content.
-tells the user about each game and how to play it.
-explains what each page does and what you can find in it.
-has a list of tips for each game in the website

---

### About (`about.html`)

explains about the website itself and how and why was it created, and what purpose does it serve.

- Describes what purpose the website serves.
- Contains a table breaking down each part of the app (HTML, CSS, JavaScript, C#) and what role each plays.
- Explains why I picked this idea specifically - because of a different website that am fond of called inkwell games, which is quite similar to my website except the games are more complicated and change daily
- explains the javascript behind some of the games.  

---

### games (`games.html`)

a page containing the actual games in the website that are: find the differences, hidden object and a maze.

- the first game is find the differences, which contains two side by side pictures that are totally the same except for 5 features that are slightly different in each photo, and beneath the picture there will be six button in a row, the first five show a certain difference when clicked and the last button switches to the original image with no differences marked.
- the second game is a maze, that the user plays by using their mouse-pointer to go through the maze and try not to touch any of the walls.
below the maze there will be a button that when clicked will show a solved version of the maze and change the text on the button to say “hide solution” that when clicked will return to the original image.
- the last game is find the object, which is similar to "where's waldo” because your objective is to find the missing object presented above the main photo.
there will be a a single object but it will be fairly simple to spot.
under the image there will be a yellow button saying “reveal solution” and when pressed it will show a second photo with the difference marked, and when pressed again it willgo back to the original photo. under that button, a question will be presented that would say “bonus points: how many people are wearing a red shirt?” and under the question there will be a button that says “reveal answer” and when pressed it will  reveal the number 12.
that 12 value comes from a variable thats stored in the server and retrieved using a get command.
---


## Static content across the page

- An image of a “wheres waldo” page as one of the games.
- A list of tips for the games in the website for newcomers or people struggling with the difficulty of the games.
- A **summary table** explaining each technology's role on this page.
- A short section explaining why I picked this idea specifically.
- A panel that explains about the website’s purpose and gives the user a general idea about the website’s content.

---

## Behaviour That Applies to Every Page

### Shared navigation header

Every page displays the same header at the top, containing:
- The site title and a one-line description.
- A navigation bar with three links: Home, About, games.
- The header is **not duplicated** in each HTML file. It is stored in a single separate file and loaded dynamically by JavaScript on every page.

### Active navigation highlight

The navigation link corresponding to the **currently viewed page** is automatically highlighted (visually distinct background colour). This is set by JavaScript — not by hard-coding a class in each HTML file.

### Shared footer

Every page has an identical footer at the bottom crediting the technologies used.

### Responsive layout

All pages adjust gracefully on small screens:
- Navigation links stack vertically instead of sitting side by side.
- Content fills the available width rather than being constrained to a fixed column.
- Text size adjusts for readability.

---

## Data and State

- **a username insert box:** a little box that accepts the user’s chosen username.
- **num-of-objects:** a variable stored in the server-side containing the number of objects you were asked to find in the third game in the games page.

---

## User Interactions

| Interaction | Where | Result |
|---|---|---|
| Click a nav link | Any page | Navigates to that page; active link highlight updates |
| Type a name and click Send | home page | username is accepted into the server and the user is greeted|
| Resize browser window | Any page | Layout adapts to the new width |
| press the difference button | games page | a different version of the first game appears with a certain difference circled |
| press the maze button | games page | a solved version of the maze appears |
| press the object button | games page | an image of the last game with the difference circled will appear |


---

## What the App Does NOT Do

- No user accounts or login.
- No client-side routing or single-page app behaviour.
- No admin interface.
- No search.-->
