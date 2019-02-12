interface Todo {
    name: string;
    completed?: boolean;
}

interface ITodoService {
	add(todo: Todo): Todo;
	delete(todoId: number): void;
	getAll(): Todo[]; //returns array of todos
	getById(todoId: number): Todo; //returns single todo
}

var todo= <Todo>{
	name: "hello",
};