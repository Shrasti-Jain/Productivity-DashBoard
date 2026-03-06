import {configureStore} from '@reduxjs/toolkit'
import goalReducer from '../Features/DailyGoalSlice'
import plannerReducer from '../Features/PlannerSlice'
import alluserReducer from '../Features/RegisteredUsersSlice'
import singleUserReducer from '../Features/SingleUserSlice'
import todoReducer from '../Features/TodoTaskSlice'
export let store=configureStore({
    reducer:{
        goal:goalReducer,
        planner:plannerReducer,
        alluser:alluserReducer,
        singleUser:singleUserReducer,
        todo:todoReducer
    }
})