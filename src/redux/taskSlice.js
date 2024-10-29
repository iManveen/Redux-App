import { createSlice ,nanoid} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      console.log(nanoid())
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask:(state,action)=>{
        return state.filter((item)=>item.id !== action.payload.id)
    }
  },
});

// Export the action for adding a task
export const { addTask,deleteTask } = taskSlice.actions;

// Export the reducer
export default taskSlice.reducer;
