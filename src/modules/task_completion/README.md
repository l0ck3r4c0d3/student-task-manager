# Task Completion Module

This module implements the **Mark Task as Completed** feature for the Student Task Manager project.

## Feature

Allows a student to mark an existing academic task as completed.

## Acceptance Criteria

- If the task status is `Todo` or `In Progress`, it is changed to `Done`.
- If the task status is already `Done`, it remains `Done`.
- If the selected task index does not exist, the task list remains unchanged and an error result is returned.

## Design Pattern

This module uses the **Command design pattern**.

## Files

- `Task.h`  
  Defines the `Task` structure.

- `TaskCompletionResult.h`  
  Defines the result returned by the command.

- `MarkTaskCompletedCommand.h`  
  Defines the command interface and the mark-completed command class.

- `MarkTaskCompletedCommand.cpp`  
  Implements the command logic.

## Notes

- The command does not print anything.
- The command does not read user input.
- The command does not use global variables.
- The command keeps business logic separate from console input/output.
- The original task list is not modified directly.
