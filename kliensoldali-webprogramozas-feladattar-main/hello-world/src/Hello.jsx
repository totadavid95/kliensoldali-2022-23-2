import classNames from "classnames";

export function Hello() {
    const count = 4;
    const name = "React";

    return (
        <>
            {
                new Array(count).fill(null).map((_, i) => (
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
        </>
    );
}
