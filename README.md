### Project Description
- A classy drinks app that allows users to search for cocktails and non-alcoholic beverages. Users receive recipes and ingredients with the ability to store favorites.
### Members
- Kyle Harris
- Adam Dawson
- Danish Mansoor
- Diego Sousa
- Dan Sinensky (Git Maintainer)
### Cooperation Plan
- Every person on your team is an asset. This is your chance to discover the hidden strengths and areas for growth for each team member.
## Personal Strengths
  - Adam - Backend/JS
  - Danish - Front End
  - Diego - Backend/deployment
  - Dan - Frontend logic
  - Kyle - Back End
##  Personal Challenges (Could Use More Exposure)
- Kyle - CSS, React
- Dan - CSS (working on it!)
- Danish - React, JS (Still learning)
- Diego - React(props drilling )/ CSS(grid/flex-box)
- Adam - CSS, debugging
- How can you best utilize these strengths in the execution of your project?
  - Each person takes an area of focus based on their strength
- In which professional competencies do you each want to develop greater strength?
- Knowing that every person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?
  - Morning meetings talking about what we did the previous day
  - Division of tasks
  - Implementing team leads
- Conflict Plan
- Your team should agree on a process for handling disagreements, should they arise. It is better to have a plan in place ahead of time so you can all refer back to it when necessary.
- Describe at least:
- What will be your group’s process to resolve conflict, when it arises?
  - Communicate
  - Checkin’s where everyone has a chance to say something
  - Creating a place where we can talk about conflict
  - If we can't agree on something, we will vote and take majority opinion, if tied we will flip a coin (<https://justflipacoin.com/>)
  - Division of tasks
  - Communicate with team members
- How will you approach each other and the challenges of the project knowing that it is impossible for all members to be at the exact same place in understanding and skill level?
  - Comunicate
  - Pair programming when working on key features
- How will you raise concerns to members who are not adequately contributing?
  - Communicate with understanding and curiosity
- How and when will you escalate the conflict if your resolution attempts are unsuccessful?
  - Escalate to Chris/Raul/Megan privately first
- Communication Plan
- Before beginning to tackle the project, determine how your group will communicate with each other. This is not an individual effort. Make sure everyone feels comfortable with the identified methods of speaking up.
- Describe at least:
- What hours will you be available to communicate?
  - Regular Class Hours
  - 9-5 PST
- What platforms will you use to communicate (ie. Slack, phone …)?
  - Slack
  - Zoom
- How often will you take breaks?
  - Every 2 hours
  - As needed
- What is your plan if you start to fall behind?
  - Address at stand up meeting the next day
  - Readjust tasks and timelines in project management
- How will you communicate after hours and on the weekend?
  - Slack
- What is your strategy for ensuring everyone’s voice is heard?
  - Everyone answers two questions during the stand up meeting
- How will you ensure that you are creating a safe environment where everyone feels comfortable speaking up?
  - Affirming everyone's contributions are valuable to the project
- Work Plan
- Explain your work plan to track whether everyone is contributing equally to all parts of the project, and that each person is working on “meaty” problems. This should prevent “lone wolf” efforts and “siloed” efforts.
- Describe at least:
- How you will identify tasks, assign tasks, know when they are complete, and manage work in general?
  - Project management software
- What project management tool will be used?
  - Trello
- Git Process
- Plan out what your team’s Git workflow looks like for coding tasks.
- Describe at least:
- What components of your project will live on GitHub?
  - Front end repo
  - Backend repo
- How will you share the repository with your teammates?
  - Make an organization
- What is your Git flow?
  - Work on individual branches (feature branch)
- Will you be using a PR review workflow? If so, consider:
  - How many people must review a PR?
    - One person
  - Who merges PRs?
    - Any Team member
  - How often will you merge?
    - Once we are done with a feature
  - How will you communicate that it’s time to merge?
    - Slack
    - Before 5pm PST
## GROUP PLANNING
### Team Goals & Values
- Functional Code
- Interactive, Attractive UI
- Thorough Communication Between Teammates
- Prompt, Respectful Conflict Resolution
### Team Communication Preferences
- Slack at any time; DND is on during sleep hours (10 PM - 7 AM)
- Respond within a reasonable time (~30 minutes during day)
- Morning meetings talking about what we did the previous day

### Schemas
```
const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name required"]},
  lastName: {
    type: String,
    required: [true, "Last Name required"]},
  userName: {
    type: String,
    required: [true, "Username required"]},
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function(v) {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
  dateOfBirth: {
    type: Date,
    required: [true, "Date of birth required"]
  },
drinkFavorites: [{favorite 1}{favorite 2}]
})

const drinkSchema = new Schema({
  drinkName: {
    type: String,
    required: [true, "Drink required"]
  },
  category: {
    type: String,
    required: [true, "Category required"]
  },
  glass: {
    type: String,
    required: [true, "Glass required"]
  },
  ingredients: [String]
  recipe: {
    type: String,
    required: [true, "Recipe required"]
  }
})
```