import './TodoTemplate.scss';

export function TodoTemplate({children}){
    return (
      <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
      </div>
    );
}