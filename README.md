# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# MVP - held locally

# Known Issues left to address

- Enter functionality instead of button
- Icons for InfoCard.

# Including:

- FrontEnd built to wireframe of designs.
- Display all questions
- functionally complete journey
- Local storage memory (realised unnnessary due to get /submissions determining a returning user)
- Show off use of hooks
- Show off Redux utilisation (Overkill for this application)
- Responsive design

# Excluding:

- Error handling/unhappy paths
- Mobile specific view
- Completed front end visuals

# Visuals

![Alt text](/ReadmeImages/onlod.png "Onload")

Landing Page displayed to a wireframe level. Made this decision mainly due to time and prioritised functionality.

![Alt text](/ReadmeImages/activequiz.png "ActiveQuiz")
Utilised hooks to manipulate state within this component while a quiz was 'started'. useState/useEffect.

Utilised redux for state management of the ActiveUser and ActiveQuestions/QuestionNumber. While this is a single page applciation with no security/authentication onLoad this is probably overkill.

Had I chosen not to utilise Redux I would have made my onload calls to the api and then passed down the props from App to my QuestionsContainer.

In hindsight, the application was simple enough that Context was probably fine for this applications state management. As there is no need for constantly refreshing data.

![Alt text](/ReadmeImages/intteset.png "basic api testing")

Utilised Jest to test/understand the api, creating random user string params to simulate new users.

### Testing React Components

Would have liked to address some testing for InfoCard but prioritised functionality. Wasn't utlising TDD, would have like to.

![Alt text](/ReadmeImages/styledflex.png "Styled components/flex")

Utilised flexbox for page layout.

Assuming there would be a shared component library for consistency across the website (or integration with blueprintjs), styled components seems like a good choice.

Utilised bootstrap to speed up development towards the end with loading indicators/progressbar.
