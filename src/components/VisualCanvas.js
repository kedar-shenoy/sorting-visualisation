import React from "react";
import p5 from "p5";
import InsertionSketch from "../sketches/insertion";
import QuickSortSketch from "../sketches/quicksort";

export class InsertionCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(InsertionSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

export class QuickCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.myP5 = new p5(QuickSortSketch, this.myRef.current);
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}
