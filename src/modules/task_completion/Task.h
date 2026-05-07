#ifndef TASK_H
#define TASK_H

#include <string>

struct Task {
    int id;
    std::string title;
    std::string status;   // Todo | In Progress | Done
    std::string deadline;
    std::string priority; // Low | Medium | High
};

#endif
