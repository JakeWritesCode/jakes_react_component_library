//Tests for the SimpleButton1 component.

import SimpleButton1 from "./simpleButton1";
import {render, screen} from "@testing-library/react";
import React from "react";

describe("The simpleButton component", () => {
    test("appends the button bg-type to the class", () => {
        render(<SimpleButton1 buttonColour={"primary"} rounded={true} text={"Hey"}/>)
        screen.debug()
        expect(screen.getByRole("button").className).toContain( "bg-primary")
    })

    test("displays the button text from props.", () => {
        render(<SimpleButton1 buttonColour={"primary"} rounded={true} text={"Hey"}/>)
        expect(screen.getByText("Hey")).toBeInTheDocument()
    })
})