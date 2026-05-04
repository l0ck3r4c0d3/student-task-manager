# Pure Function Experiment: Mark Task as Completed

## Date

2026-05-04

## Feature

Mark Task as Completed

## AI Prompt Used

Create C++17 logic for the following Student Task Manager feature.

Requirements:

User Story:
As a student, I want to mark an academic task as completed, so that I can clearly track which tasks are already finished.

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

```mermaid
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
