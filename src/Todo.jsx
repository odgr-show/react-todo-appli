import React from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompleteTodos';
import './stylesheet/style.css';

// ネームドエクスポート
export const Todo = () => {
    const [todoText, setTodoText] = React.useState('');
    const [incompleteTodos, setIncompleteTodos] = React.useState(['Todoです1', 'Todoです2']);
    const [completeTodos, setCompleteTodos] = React.useState(['Todoでした']);

    // inputフォームに文字が打てるようにする処理
    const onChangeTodoText = (event) => setTodoText(event.target.value);

    // 追加ボタンを押すとliの要素が追加される処理
    const onClickAdd = () => {
        if (todoText === '') return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText('');
    };

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };

    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />

            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />

            <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    );
};
