import classNames from "classnames";

export function Hello({ name, count, children }) {
    // console.log(arg);
    // const { name, count } = arg;
    // console.log(name, count);
    // console.log(typeof count);
    
    const parsedCount = isNaN(parseInt(count)) ? 1 : parseInt(count);

    // const count = 4;
    // const name = "React";

    return (
        <>
            {
                new Array(parsedCount).fill(null).map((_, i) => (
                    <h1 
                        key={i}
                        className={classNames(
                            { 'orange': name === "React" }
                        )}
                    >
                        {
                        name.length === 0 
                            ? "Nincs kit üdvözölni" 
                            : `Hello ${name}`
                        }
                    </h1>
                ))
            }
            {
                children
            }
        </>
    );
}
