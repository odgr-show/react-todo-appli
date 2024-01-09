import React from 'react';
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

    return (
        <>
            <div className="input-area">
                <input
                    className="add-text"
                    placeholder="TODOを入力"
                    value={todoText}
                    onChange={onChangeTodoText}
                />
                <button onClick={onClickAdd}>追加</button>
            </div>
            <section className="incomplete-area">
                <p className="section-title">未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo, index) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p>{todo}</p>
                                <button
                                    onClick={() => {
                                        onClickComplete(index);
                                    }}
                                >
                                    完了
                                </button>
                                <button
                                    onClick={() => {
                                        onClickDelete(index);
                                    }}
                                >
                                    削除
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="complete-area">
                <p className="section-title">完了のTODO</p>
                <ul>
                    {completeTodos.map((todo) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p>{todo}</p>
                                <button>戻す</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};
