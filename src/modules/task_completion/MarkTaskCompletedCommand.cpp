#include "MarkTaskCompletedCommand.h"

MarkTaskCompletedCommand::MarkTaskCompletedCommand(
    const std::vector<Task>& tasks,
    int selectedIndex
)
    : tasks(tasks), selectedIndex(selectedIndex) {
}

TaskCompletionResult MarkTaskCompletedCommand::execute() const {
    if (selectedIndex < 0 || selectedIndex >= static_cast<int>(tasks.size())) {
        return {
            false,
            "Error: Invalid task index.",
            tasks
        };
    }

    std::vector<Task> updatedTasks = tasks;

    if (updatedTasks[selectedIndex].status == "Done") {
        return {
            true,
            "Task is already completed.",
            updatedTasks
        };
    }

    updatedTasks[selectedIndex].status = "Done";

    return {
        true,
        "Task marked as completed.",
        updatedTasks
    };
}
