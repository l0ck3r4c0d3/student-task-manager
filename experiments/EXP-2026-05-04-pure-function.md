# EXP-2026-05-04 Pure Function Experiment

## What specific prompt did you provide?

You are an AI software engineer working on a Student Task Manager project. IMPORTANT: Follow all instructions strictly. Do not invent features that are not described.

Acceptance Criteria:

AC1:
Given a task exists with the status `Todo` or `In Progress`
When the student selects the option to mark the task as completed
Then the task status should be changed to `Done`

AC2:
Given a task already has the status `Done`
When the student selects the option to mark the task as completed
Then the task should remain `Done`

AC3:
Given the student provides a task index that does not exist
When the system tries to mark the task as completed
Then the task list should remain unchanged and an error result should be returned

Architecture:

flowchart TD
    A[Start] --> B[Receive task list and selected task index]
    B --> C{Does task index exist?}
    C -- No --> D[Return unchanged task list and error result]
    C -- Yes --> E{Is task already Done?}
    E -- Yes --> F[Return unchanged task list and success result]
    E -- No --> G[Change selected task status to Done]
    G --> H[Return updated task list and success result]
    D --> I[End]
    F --> I
    H --> I

Strict constraint:
Write the logic for this feature as a Pure Function. It must have no side effects, must be stateless, must not print to console, must not read user input, must not modify global variables, and must return a predictable output.

Use only C++17 and the C++ standard library.

---

## Did the AI succeed in writing a pure function on the first try?

Yes, the AI was able to generate a mostly correct pure function on the first attempt.

---

## Did you have to adjust your requirements (BDD) or diagram to get a correct result?

Nothing needed to be adjusted because the planned function by the AI was implemented perfectly, but it was necessary to add a file with the overall program structure in order to implement the planned function.
