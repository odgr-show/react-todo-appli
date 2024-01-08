import './stylesheet/style.css';

// ネームドエクスポート
export const Todo = () => {
    return (
        <>
            <div className="input-area">
                <input className="add-text" placeholder="TODOを入力"></input>
                <button>追加</button>
            </div>
            <section className="incomplete-area">
                <p className="section-title">未完了のTODO</p>
                <ul className="incomplete-list">
                    <li className="list-row">
                        <p>TODOです</p>
                        <div>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                    <li className="list-row">
                        <p>TODOです</p>
                        <div>
                            <button>完了</button>
                            <button>削除</button>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="complete-area">
                <p className="section-title">完了のTODO</p>
                <ul className="complete-list">
                    <li className="list-row">
                        <p>TODOでした</p>
                        <button>戻す</button>
                    </li>
                    <li className="list-row">
                        <p>TODOでした</p>
                        <button>戻す</button>
                    </li>
                </ul>
            </section>
        </>
    );
};
