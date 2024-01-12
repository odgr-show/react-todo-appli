export const CompleteTodos = (props) => {
    const { todos, onClickBack } = props;
    return (
        <section className="complete-area">
            <p className="section-title">完了のTODO</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        <div className="list-row">
                            <p>{todo}</p>
                            <button
                                onClick={() => {
                                    onClickBack(index);
                                }}
                            >
                                戻す
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
