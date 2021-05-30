export function EditorNav({ mode, onChangeMode }) {
    return (
        <div className="text-center flex space-between editor-nav-container">
            <div
                onClick={() => onChangeMode('addElement')}
                className={"pointer" + (mode === 'addElement' ? ' active' : '')}>
                <span className="fas create-el-icn"></span>
                Create
            </div>

            <div
                onClick={() => onChangeMode('editElement')}
                className={"pointer" + (mode === 'editElement' ? ' active' : '')}>
                <span className="fas edit-el-icn"></span>
                Edit
            </div>
        </div>
    );
}