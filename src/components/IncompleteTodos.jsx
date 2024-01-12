export const IncompleteTodos = (props) => {
    const { todos, onClickComplete, onClickDelete } = props;
    return (
        <section className="incomplete-area">
            <p className="section-title">未完了のTODO</p>
            <ul>
                {todos.map((todo, index) => (
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
    );
};
