#ifndef MARK_TASK_COMPLETED_COMMAND_H
#define MARK_TASK_COMPLETED_COMMAND_H

#include <vector>
#include "Task.h"
#include "TaskCompletionResult.h"

class TaskCommand {
public:
    virtual ~TaskCommand() = default;
    virtual TaskCompletionResult execute() const = 0;
};

class MarkTaskCompletedCommand : public TaskCommand {
private:
    std::vector<Task> tasks;
    int selectedIndex;

public:
    MarkTaskCompletedCommand(const std::vector<Task>& tasks, int selectedIndex);

    TaskCompletionResult execute() const override;
};

#endif
