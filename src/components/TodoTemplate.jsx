import './TodoTemplate.scss';

export function TodoTemplate({children}){
    return (
      <div className="TodoTemplate">
        <div className="app-title">
          🦖 뽀짝뽀짝 해은이의 오늘 할 일 🦖
        </div>
        <div className="content">{children}</div>
      </div>
    );
}