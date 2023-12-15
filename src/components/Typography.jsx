

export const Heading = ({className, children}) => {

    return (
        <p className={`text-[20px] font-[400px] ${className}`}>
            {children}
        </p>
    )
}