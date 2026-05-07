# Flow: Mark Task as Completed Using Command Pattern

```mermaid
flowchart TD
    A[Console Menu] --> B[User selects Mark Task as Completed]
    B --> C[Main application sends task list and task id]
    C --> D[MarkTaskCompletedCommand]
    D --> E{Does task id exist?}
    E -- No --> F[Return unchanged task list and error result]
    E -- Yes --> G{Is task already Done?}
    G -- Yes --> H[Return unchanged task list and success result]
    G -- No --> I[Create updated task list]
    I --> J[Set selected task status to Done]
    J --> K[Return updated task list and success result]
    F --> L[Console displays result message]
    H --> L
    K --> L
