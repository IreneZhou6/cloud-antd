import './customCard.css';

export default function CustomCard({ children, customClass }) {
    return (
        <div className={`customCard ${customClass}`} style={{ backgroundColor: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,.12)', borderRadius: "12px", padding: '28px' }}>
            {children}
        </div>
    )
}