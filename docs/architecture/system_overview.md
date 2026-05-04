# System Overview

The Student Task Manager is a console-based C++17 application.

## Task Structure

Each task must contain:

- id: integer
- title: string
- status: string
- deadline: string
- priority: string

## Allowed Status Values

- Todo
- In Progress
- Done

## Allowed Priority Values

- Low
- Medium
- High

## MVP Menu

The console menu must include:

1. Add task
2. View all tasks
3. Delete task
4. Mark task as completed
5. Exit

## Technical Constraints

- Use C++17
- Use only the C++ standard library
- Do not use external libraries
- Keep the program console-based
- Keep logic simple and readable
- Prefer pure functions for task logic
- Console input/output should be separated from business logic
