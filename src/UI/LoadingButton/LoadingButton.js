export default function LoadingButton(props) {
    const className = props.className || 'btn-primary'

    return props.loading
        ? (<button className={`btn ${className}`} type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden></span>
            <span className="sr-only">Ładownie</span>
        </button>
        )
        : <button {...props} className={`btn ${className}`}>{props.children}</button>

}