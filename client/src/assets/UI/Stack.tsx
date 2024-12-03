import {CSSProperties, PropsWithChildren} from "react";

type StackProps=PropsWithChildren<{
    orientation:"horizontal"|"vertical";
}>

function Stack({children,orientation="horizontal"}:StackProps) {
    //A Record<K, T> is an object type whose property keys are K and whose property values are T.
    //Storybook is needed to run this components in the isolation to see how these components behave
    const orientationStyles: Record<StackProps['orientation'], CSSProperties> = {
        horizontal: {
            display:"flex",
            flexDirection:"row",
            gap:"1rem",
        },
        vertical: {
            display:"flex",
            flexDirection:"column",
            gap:"1rem",
        },
    };


    return (
        <div style={{
            outline: "none",
            border: "none",
            cursor:"pointer",
            borderRadius:10,
            ...orientationStyles[orientation],
        }} >
            {children}
        </div>
    )
}

export default Stack