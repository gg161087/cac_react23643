import './BarButton.css';

export const BarButton = ({buttons, onButtonClick}) => {
    return (
        <>
            {buttons.map((button) => (
                <button className='bar_button' key={button.id} onClick={() => onButtonClick(button.id)}>
                    {button.text}
                </button>
            ))}
        </>
        
    )
}