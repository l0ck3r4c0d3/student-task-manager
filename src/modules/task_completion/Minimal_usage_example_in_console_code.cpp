#include <iostream>
#include <vector>
#include "src/modules/task_completion/MarkTaskCompletedCommand.h"

int main() {
    std::vector<Task> tasks = {
        {1, "Math homework", "Todo", "2026-05-10", "High"},
        {2, "Read chapter", "In Progress", "2026-05-12", "Medium"}
    };

    int index;
    std::cout << "Enter task index to mark as completed: ";
    std::cin >> index;

    MarkTaskCompletedCommand command(tasks, index);
    TaskCompletionResult result = command.execute();

    tasks = result.updatedTasks;

    std::cout << result.message << '\n';

    return 0;
}
