1. Install `yarn add react-beautiful-dnd @types/react-beautiful-dnd`.
---
2. Create a sample data.

```
const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Watch my favorite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1"]
};
```
---
3. Map through each column from columnOrder and render the tasks.
---
### <u>DnD setup</u>

4. React-beautiful-dnd is made up of three different components. The first is the **`DragDropContext`**. The `DragDropContext` is a component, that we use to wrap the part of our application, that we want to have drag and drop enable form.
   A **`droppable`** creates a region which can be dropped on to. They also contain **`draggables`**. A `draggable` is a component that can be dragged around and dropped into droppables. In order to enable drag and drop for our column, we're going to wrap it in a `DragDropContext` component.

   ![DnD visual.](https://user-images.githubusercontent.com/2182637/53607406-c8f3a780-3c12-11e9-979c-7f3b5bd1bfbd.gif)

   - `<DragDropContext />` - Wraps the part of your application you want to have drag and drop enabled for
   - `<Droppable />` - An area that can be dropped into. Contains <Draggable />s
   - `<Draggable />` - What can be dragged around
   - `resetServerContext()` - Utility for server side rendering (SSR)
---
5. Wrap column mapping inside the `DragDropContext`. `onDragEnd` responder is required. It is the responsibility of this responder to synchronously apply changes that has resulted from the drag.
---
6. Setup droppable area inside column.
---
7. Setup task as draggable.
---
8. <u>**To update the state**</u> based on the drag and drop, `result` parameter of the `onDragEnd` function. The `source, destination, draggableId` properties of the result object are used to update state.
---
9. <u>**To add the styling**</u> to the `droppable` and `draggable` components, **`snapshot`** state in `droppable` and `draggable` children function is used.
**`isDragging`** for `draggable` and **`isDraggingOver`** for `droppable` are provided to styled components as props which can be used for conditional styling.
---
10. `onDragStart` and `onDragUpdate` callbacks can also be used to trigger any changes on start and during the drag.
---

11. We can <u>**add custom drag handle**</u> like shown in the picture. To make it functional, add the `provided.dragHandleProps` props to the custom component. Wherever these props are provided that component can be used as drag handle.
---
