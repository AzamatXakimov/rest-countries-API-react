import "./Borders.css";

export const Borders = (props) => {
    return <>
        <li className="borders-box">
            <p className="bordes-text mb-0">
                {
                    props.children
                }
            </p>
        </li>
    </>
}