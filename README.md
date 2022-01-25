# Site dos Bixos 2022 🚼

This site was developed as a tool to receive the electrical engineering freshmen from 2022.

## How to execute the project

1.  `git clone git@github.com:sa-sel/site-bixos-2022.git`
2.  `cd /path/to/site-bixos-2022/`
3.  `npm install`
4.  `ng serve`
5.  Visit [localhost:4200](http://localhost:4200) in a browser

## How to contribute

### Workflow

1.  Clone the repository
2.  Choose a task you want to work on [in the board](https://github.com/sa-sel/site-bixos-2022/projects/3)
    - The task must be in the 'To do' column and have no assignees
    - Prioritize tasks with higher priority: enhancement < moderate < important < critical
    - Check if the task has any dependencies and, if so, their dependencies were already closed
3.  Assign the task to yourself and move it to the 'In progress' column
4.  Create a new branch with the format `issue-<ISSUE/TASK_NUMBER>`
5.  Make all your changes in that branch
6.  `git push --set-upstream origin issue-<ISSUE/TASK_NUMBER>`
7.  Make a PR
8.  Request @lucasvianav's review
9.  Merge your PR only when:
    - It was approved (in code review)
    - All CI checks have succeeded
    - There are no merge conflicts

### Formatting

We're using ESLint for linting and Prettier for autoformatting. Download and configure their extensions for your IDE - e.g.: for VSCode there is [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
