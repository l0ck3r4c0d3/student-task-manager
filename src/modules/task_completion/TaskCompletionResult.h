#ifndef TASK_COMPLETION_RESULT_H
#define TASK_COMPLETION_RESULT_H

#include <string>
#include <vector>
#include "Task.h"

struct TaskCompletionResult {
    bool success;
    std::string message;
    std::vector<Task> updatedTasks;
};

#endif
