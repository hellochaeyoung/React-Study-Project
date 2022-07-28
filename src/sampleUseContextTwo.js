import React from "react";
import First from "./first";
import TextProvider from "./textProvider";

export default function SampleUseContextTwo() {
    return (
        <div>
            <TextProvider>
                <First />
            </TextProvider>
            
        </div>
    )
}