export const Child = ({ onButtonClick }: { onButtonClick: () => void }) => {
  return (
    <div>
      <button type='button' onClick={onButtonClick}>
        Click Me!
      </button>
    </div>
  )
}
