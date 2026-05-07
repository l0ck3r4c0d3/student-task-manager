# EXP-2026-05-04 Pattern Implementation

## Selected Feature

Mark task as completed

## Selected Design Pattern

Command Pattern

## What specific prompt did you provide?

You are an AI software engineer working on a console-based Student Task Manager project in C++17.

Follow the project rules:
- Use only C++17 and the C++ standard library.
- Do not use external libraries.
- Keep code simple and readable.
- Use meaningful names.
- Avoid unnecessary complexity.
- Separate business logic from console input/output.
- Do not invent undocumented features.
- Keep changes small and understandable.

Project feature:
Mark task as completed.

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
Use the Command design pattern.

Implementation requirements:
1. Create a dedicated module folder:
   src/modules/task_completion/

2. Implement the feature using the Command pattern:
   - Create a command interface or base class with an execute() method.
   - Create MarkTaskCompletedCommand.
   - The command should receive a task list and selected index.
   - The command should return a result object containing:
     - success flag
     - message
     - updated task list

3. Keep the business logic separate from console input/output.
4. Do not print inside the command.
5. Do not read user input inside the command.
6. Do not use global variables.
7. Do not add file saving/loading.
8. Do not add features outside the MVP.

Expected files:
- Task.h
- TaskCompletionResult.h
- MarkTaskCompletedCommand.h
- MarkTaskCompletedCommand.cpp
- README.md for the module

Use simple beginner-friendly C++17 code.

## How accurately did the AI apply the pattern?

The AI applied the Command Pattern mostly correctly. This matched the expected structure of the Command Pattern.


## Did the pattern help clarify the code?

Yes, the Command Pattern helped clarify the code. The menu can now focus on user interaction, while the command handles only the selected action.

## Did it lead to unnecessary complexity?

For this small feature, the Command Pattern adds more files and structure than a simple function. However, the extra structure is justified because the goal of the assignment is to create an architectural harness for AI-generated code.


## Final Evaluation

The pattern implementation was successful.
