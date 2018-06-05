var chalk = require('chalk'),
    clear = require('clear'),
    inquire = require('inquirer'),
    figlet = require('figlet');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Book Store', { horizontalLayout: 'full' })
    )
);
var story = require("./stories")
// console.log(books)

const questions = [
    {
        type: 'list',
        name: 'story',
        message: 'Select A User Story:',
        choices: ['Story One', 'Story Two', 'Story Three'],
        default: ['Story One', 'Story Two', 'Story Three'],
    }
];
return inquire.prompt(questions).then((answers) => {
    switch (answers.story) {
        case 'Story One':
            return story.firststory()
            break;
        default:
            console.log(chalk.yellow("Default Choice Picked!"))
            break;
    }
});
