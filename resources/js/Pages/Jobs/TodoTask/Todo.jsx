import { ModalContext, ModalContextProvider } from "../../../ModalContext";
import DashboardLayout from "../../Layout/DashboardLayout";
import ListTodo from "./ListTodo";
import { Toaster } from "react-hot-toast";
const Todo = () => {
    return (
        <>
            <ModalContextProvider>
                <Toaster />
                <div className="bg-teal-500 text-white">
                    <div className="flex justify-center text-bolder text-xl">
                        <div>
                            <div>
                                Todo List
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ListTodo />
                </div>
            </ModalContextProvider>
        </>
    )
}
Todo.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);


export default Todo
