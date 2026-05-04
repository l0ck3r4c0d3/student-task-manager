# Feature: Mark Task as Completed

## User Story

As a student, I want to mark an academic task as completed, so that I can clearly track which tasks are already finished.

## Acceptance Criteria

### AC1: Mark an existing task as completed

Given a task exists with the status `Todo` or `In Progress`  
When the student selects the option to mark the task as completed  
Then the task status should be changed to `Done`

### AC2: Do not change an already completed task

Given a task already has the status `Done`  
When the student selects the option to mark the task as completed  
Then the task should remain `Done`

### AC3: Handle an invalid task selection

Given the student provides a task index that does not exist  
When the system tries to mark the task as completed  
Then the task list should remain unchanged and an error result should be returned
