# Site dos Bixos 2022 🚼

This site was developed as a tool to the reception of the electrical engineering freshmen from 2022, at EESC-USP. It's objective is to display all relevant info regarding the university.

## Executing

1.  `git clone git@github.com:sa-sel/site-bixos-2022.git`
2.  `cd /path/to/site-bixos-2022/`
3.  `npm install`
4.  `ng serve`
5.  Visit [localhost:4200](http://localhost:4200) in a browser

## Contributing

### Directory structure

The code itself (the majority of it) lies inside of `/src/app/`. In there, there are the following directories:

- `shared/`: utility components that'll be used in multiple parts of the code, inside other components (e.g.: responsive image grid, button, etc)
- `core/`: main top-level components (e.g.: navbar, footer, "Kit Bixo" screen, etc)
- `models/`: enums and type objects
- `services/`: all Angular services
- `pipes/`: all Angular pipes

Each of those directories has a path alias setup (`@shared`, `@core`, `@models`, `@services` and `@pipes`), so you should import using these unless you're in the same directory, in which case you'll use the relative path (`./path/to/module`) in order to avoid circular dependencies.

Whenever you create a new module, you should "re-export" all of it's exports from their directory's `index.ts`.

### Formatting

We're using ESLint for linting and Prettier for autoformatting. Download and configure their extensions for your IDE - e.g.: for VSCode there is [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

Before commiting, remember to run `npm run format` and then `npm run lint` to see if there is any formatting problem with your code.

### Commit messages

Write commit messages following this [style guide](https://commit.style/) and be sure to make use of `git commit --amend` and `--no-edit` when necessary. Write commit message that actually describe (summarize) the changes you made - do not commit stuff like `Fix bug`, `Fix`, `Fix bug 3`, `Fix bug (again)`.

Aside from that, start all your commit messages with `#<ISSUE/TASK_NUMBER> - `. E.g., when working on a task `#7`, you commit the creation of a modal component: `#7 - Create modal component`.

### Workflow

1.  Clone the repository
2.  Choose a task you want to work [in the board](https://github.com/sa-sel/site-bixos-2022/projects/3)
    - The task must be in the 'To do' column and have no assignees
    - Prioritize tasks with higher priority: enhancement < moderate < important < critical
    - Check if the task has any dependencies and, if so, their dependencies were already closed
3.  Assign the task to yourself and move it to the 'In progress' column
4.  Create a new branch with the format `issue-<ISSUE/TASK_NUMBER>`
5.  Make all your changes in that branch
6.  Merge the `main` into your branch
    1. `git fetch --all`
    2. `git merge origin main`
    3. Resolve merge conflicts
    4. `git commit` (use default commit message)
7.  `git push --set-upstream origin issue-<ISSUE/TASK_NUMBER>`
8.  Make a PR
    - Follow the instructions in the PR template
    - Move the task to the 'In PR' column in the board
9.  Request @lucasvianav's review
10. Merge your PR only when:

    - It was approved (in code review)
    - All CI checks have succeeded
    - There are no merge conflicts
